String.prototype.csvToArray = function (o) {
  var od = {
      'fSep': ',',
      'rSep': '\r\n',
      'quot': '"',
      'head': false,
      'trim': false
  }
  if (o) {
      for (var i in od) {
          if (!o[i]) o[i] = od[i];
      }
  } else {
      o = od;
  }
  var a = [
      ['']
  ];
  for (var r = f = p = q = 0; p < this.length; p++) {
      switch (c = this.charAt(p)) {
      case o.quot:
          if (q && this.charAt(p + 1) == o.quot) {
              a[r][f] += o.quot;
              ++p;
          } else {
              q ^= 1;
          }
          break;
      case o.fSep:
          if (!q) {
              if (o.trim) {
                  a[r][f] = a[r][f].replace(/^\s\s*/, '').replace(/\s\s*$/, '');
              }
              a[r][++f] = '';
          } else {
              a[r][f] += c;
          }
          break;
      case o.rSep.charAt(0):
          if (!q && (!o.rSep.charAt(1) || (o.rSep.charAt(1) && o.rSep.charAt(1) == this.charAt(p + 1)))) {
              if (o.trim) {
                  a[r][f] = a[r][f].replace(/^\s\s*/, '').replace(/\s\s*$/, '');
              }
              a[++r] = [''];
              a[r][f = 0] = '';
              if (o.rSep.charAt(1)) {
                  ++p;
              }
          } else {
              a[r][f] += c;
          }
          break;
      default:
          a[r][f] += c;
      }
  }
  if (o.head) {
      a.shift()
  }
  if (a[a.length - 1].length < a[0].length) {
      a.pop()
  }
  return a;
}

const readUploadedFileAsText = () => {
  var reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = function(e) {
      var finalData = []
      var lines = this.result.split('\n')
      lines.shift()
      lines.forEach(line => {
        var linedata = line.csvToArray()[0]
        var finalDataRow = {}
        linedata.forEach((dataCell, index) => {
          finalDataRow[Parameters.fields[index]] = dataCell
        })
        finalData.push(finalDataRow)
      })
      resolve(finalData)
    }
    reader.readAsText(Parameters.csv)
  })
}

const fileData = await readUploadedFileAsText()
aptugo.app.addDBRow('development', Parameters.unique_id, fileData)

return Application