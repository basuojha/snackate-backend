const { OAuth2Client } = require('google-auth-library')
const User = require('../models/userModel')

const verifyLoginToken = async (req, res) => {
  const client = new OAuth2Client(process.env.GOOGLE_CLIENT_URL)
  const { token } = req.body
  console.log({ token, rc: process.env.GOOGLE_CLIENT_URL })
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_URL
    })
    console.log({ ticket })
    const payload = ticket.getPayload()
    const { sub: googleId, email, name, picture } = payload
    console.log({ googleId, email, name, picture })
    let user = await User.findOne({ googleId })
    if (!user) {
      user = new User({
        googleId,
        email,
        name,
        picture
      })
      await user.save()
    }
    res.status(200).json({ message: 'Login verified', user: payload })
  } catch (error) {
    res.status(400).json({ message: 'Invalid token', error })
  }
}

module.exports = { verifyLoginToken }
