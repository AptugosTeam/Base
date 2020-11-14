const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs")
const Users = require("../models/users.model.js")

module.exports = {
  authenticate,
  cryptPassword,
  jwtVerify
}

async function authenticate({ email, password }) {
  return new Promise( function(resolve) {
    if (!email || !password) resolve({ malformed: "Wrong parameters sent" })

    const query = Users.findOne({ Email: email })
    const promise = query.exec()
  
    promise.then(user => {
      if (!user) {
        resolve({ emailnotfound: "Email not found" })
      }
  
      bcrypt.compare(password, user.Password).then(isMatch => {
        if (isMatch) {
          const { Password, ...userWithoutPassword } = user._doc
          const token = jwt.sign(userWithoutPassword, 'thisisthesecretandshouldbeconfigurable', { expiresIn: '7d' })
          resolve({ accessToken: token, data: userWithoutPassword })
        } else {
          resolve({ passwordincorrect: "Password incorrect" })
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
    const justTheToken = token.substr(token.indexOf(" ") + 1)
    try {
      const decoded = jwt.verify(justTheToken, 'thisisthesecretandshouldbeconfigurable')
      return decoded
    } catch(e) {
      return { error: e.message }
    }
  } else {
    return { error: 'Unauthorized' }
  }
}