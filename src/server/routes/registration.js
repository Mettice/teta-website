import express from 'express'
import { sendRegistrationEmails } from '../emailService'

const router = express.Router()

router.post('/register', async (req, res) => {
  try {
    const registrationData = req.body

    // Save to database (implement your database logic here)
    // const savedRegistration = await Registration.create(registrationData)

    // Send notification emails
    await sendRegistrationEmails(registrationData)

    res.status(200).json({
      success: true,
      message: 'Registration successful'
    })
  } catch (error) {
    console.error('Registration error:', error)
    res.status(500).json({
      success: false,
      message: 'Registration failed. Please try again.'
    })
  }
})

export default router