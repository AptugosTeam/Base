/*
path: gmail.service.js
type: file
unique_id: PNnWiHgb
icon: ico-field
*/
import { GetAppOutlined } from "@material-ui/icons"

class AptugoGmail {
  listLabels() {
    return new Promise((solve,reject) => {
      gapi.client.gmail.users.labels.list({
        'userId': 'me'
      }).then(function(response) {
        solve(response.result)
      })
    })
  }

  listThreads() {
    return new Promise((solve, reject) => {
      gapi.client.gmail.users.threads.list({
        'userId': 'me'
      }).then(function(response) {
        solve(response.result)
      })
    })
  }

  getThread(id) {
    return new Promise((solve, reject) => {
      gapi.client.gmail.users.threads.get({
        'userId': 'me',
        'id': id,
        'format': 'full'
      }).then(function(response) {
        solve(response.result)
      })
    })
  }

  listMessages(q = '', page = null) {
    console.log(q, page)
    return new Promise((solve, reject) => {
      gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'q': q,
        'pageToken': page
      }).then(function(response) {
        solve(response.result)
      })
    })
  }

  getMessage(id) {
    return new Promise((solve, reject) => {
      gapi.client.gmail.users.messages.get({
        'userId': 'me',
        'id': id,
        'format': 'full'
      }).then(function(response) {
        solve(response.result)
      })
    })
  }

  getAttachment(messageId, attachmentId) {
    return new Promise((solve, reject) => {
      gapi.client.gmail.users.messages.attachments.get({
        'userId': 'me',
        'messageId': messageId,
        'id': attachmentId,
      }).then(function(response) {
        solve(response.result)
      })
    })
  }

  modifyMessage(id, newBody) {
    return new Promise((solve, reject) => {
      gapi.client.gmail.users.messages.modify({
        'userId': 'me',
        'id': id
      }, newBody).then(function(response) {
        solve(response)
      })
    })
  }
  
  decodeBase64(data) {
    var b64u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"   // base64url dictionary
    var b64pad = '='
    function base64_charIndex(c) {
      if (c == "+") return 62
      if (c == "/") return 63
      return b64u.indexOf(c)
    }

    var dst = ""
    var i, a, b, c, d, z

    for (i = 0; i < data.length - 3; i += 4) {
        a = base64_charIndex(data.charAt(i+0))
        b = base64_charIndex(data.charAt(i+1))
        c = base64_charIndex(data.charAt(i+2))
        d = base64_charIndex(data.charAt(i+3))

        dst += String.fromCharCode((a << 2) | (b >>> 4))
        if (data.charAt(i+2) != b64pad)
            dst += String.fromCharCode(((b << 4) & 0xF0) | ((c >>> 2) & 0x0F))
        if (data.charAt(i+3) != b64pad)
            dst += String.fromCharCode(((c << 6) & 0xC0) | d)
    }

    dst = decodeURIComponent(escape(dst))
    return dst
  }

  parseIcal(input) {
    let toReturn
    const iCalArray = this.decodeBase64(input).split('\r\n')
    iCalArray.forEach(calLine => {
      const [calKey, calValue] = calLine.split(':')
      if (calKey === 'DTSTART') toReturn = { date: new Date(calValue), string: calValue }
    })
    return toReturn
  }

  // Internal 
  loadGoogleScript() {
    const id = 'google-js'
    const src = 'https://apis.google.com/js/platform.js'
      
    const firstJs = document.getElementsByTagName('script')[0]
    if (document.getElementById(id)) { return }
    const js = document.createElement('script')
    js.id = id
    js.src = src
    js.onload = this.handleClientLoad.bind(this)
    firstJs.parentNode.insertBefore(js, firstJs)
  }

  initClient() {
    const that = this
    gapi.client.init({
      "clientId": "185605994716-utet8l1cj4inlpe30iso2j6nug3b4m4h.apps.googleusercontent.com",
      "apiKey": "stWlxJHTVWFmv4AEB4cTDzet",
      "scope": "https://mail.google.com/ https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.readonly",
      "discoveryDocs": ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"]
    }).then(function () {
      gapi.auth2.getAuthInstance().isSignedIn.listen(that.updateSigninStatus)
      that.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get())
      
    }, function(error) {
      console.error(error)
    })
  }

  handleClientLoad() {
    gapi.load('client:auth2', this.initClient.bind(this))
  }

  updateSigninStatus(isSignedIn) {
    this.isSignedIn = isSignedIn
  }

  constructor() {
    this.isSignedIn = false
    this.self = this
    this.loadGoogleScript()
  }
}

export default new AptugoGmail()
