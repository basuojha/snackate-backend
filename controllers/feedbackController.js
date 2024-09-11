const Feedback = require('../models/feedbackModel')

const saveFeedback = async (req, res) => {
  const data = req.body
  try {
    const feedback = new Feedback({ ...data })
    const savedFeedback = await feedback.save()
    res.status(201).json(savedFeedback)
  } catch (error) {
    console.error(`Error while saving feedback: ${error.message}`)
    res.status(400).json({ message: error.message })
  }
}

module.exports = {
  saveFeedback
}
