const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const Users = require('../models/users.model.js')

module.exports = {
  authenticate,
  cryptPassword,
  jwtVerify,
  recoverPassword,
  checkNonce,
}

async function recoverPassword(req) {
  const { name, email, message, subject } = req.body
  return new Promise(function (resolve, reject) {
    if (!email) reject({ message: 'Wrong parameters sent' })
    const query = Users.findOne({ Email: email })
    const promise = query.exec()

    promise.then((user) => {
      if (!user) {
        reject({ message: 'Email not found' })
      }
      const { Password, ...userWithoutPassword } = user._doc
      const nonce = Buffer.from(bcrypt.hashSync(JSON.stringify(userWithoutPassword), Password)).toString('base64')
      let parsedmessage = message.replace('**nonce**', nonce)
      parsedmessage = parsedmessage.replace('**email**', Buffer.from(userWithoutPassword.Email).toString('base64'))
      console.log(nonce, parsedmessage)
      req.app.get('sendEmail')({ name, email, message: parsedmessage, subject })
      resolve(user)
    })
  })
}

async function checkNonce(req) {
  return new Promise(function (resolve, reject) {
    const { nonce, email } = req.body
    const asciiEMail = Buffer.from(email, 'base64').toString('ascii')
    const ascii = Buffer.from(nonce, 'base64').toString('ascii')

    const query = Users.findOne({ Email: asciiEMail })
    const promise = query.exec()

    promise.then((user) => {
      const { Password, ...userWithoutPassword } = user._doc
      bcrypt.compare(JSON.stringify(userWithoutPassword), ascii).then((isMatch) => {
        if (isMatch) {
          const token = jwt.sign(userWithoutPassword, 'thisisthesecretandshouldbeconfigurable', { expiresIn: '7d' })
          resolve({ accessToken: token, data: userWithoutPassword })
        } else {
          reject({ message: 'Bad bad nonce' })
        }
      })
    })
  })
}

async function authenticate({ email, password }) {
  return new Promise(function (resolve, reject) {
    if (!email || !password) reject({ message: 'Wrong parameters sent' })

    const query = Users.findOne({ Email: email })
    const promise = query.exec()

    promise.then((user) => {
      if (!user) {
        reject({ message: 'Email not found' })
      }

      bcrypt.compare(password, user.Password).then((isMatch) => {
        if (isMatch) {
          console.log(user)
          const { Password, ...userWithoutPassword } = user._doc
          const token = jwt.sign(userWithoutPassword, 'thisisthesecretandshouldbeconfigurable', { expiresIn: '7d' })
          resolve({ accessToken: token, data: userWithoutPassword })
        } else {
          reject({ message: 'Password incorrect' })
        }
      })
    })
  })
}

function cryptPassword(password) {
  const hash = bcrypt.hashSync(password, 10)
  return hash
}

function jwtVerify(token) {
  if (token) {
    const justTheToken = token.substr(token.indexOf(' ') + 1)
    try {
      const decoded = jwt.verify(justTheToken, 'thisisthesecretandshouldbeconfigurable')
      return decoded
    } catch (e) {
      return { error: e.message }
    }
  } else {
    return { error: 'Unauthorized' }
  }
}
