import nodemailer from 'nodemailer'

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST, // e.g., 'smtp.gmail.com'
  port: process.env.EMAIL_PORT, // e.g., 587
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // your email address
    pass: process.env.EMAIL_PASSWORD // your email password or app-specific password
  }
})

export const sendRegistrationEmails = async (registrationData) => {
  // Email to admin
  const adminEmail = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL, // Your admin email address
    subject: 'New TETA Academy Registration',
    html: `
      <h2>New Student Registration</h2>
      <p><strong>Student Name:</strong> ${registrationData.fullName}</p>
      <p><strong>Email:</strong> ${registrationData.email}</p>
      <p><strong>Phone:</strong> ${registrationData.phone}</p>
      <p><strong>Age:</strong> ${registrationData.age}</p>
      <p><strong>Parent Name:</strong> ${registrationData.parentName}</p>
      <p><strong>Parent Phone:</strong> ${registrationData.parentPhone}</p>
      <p><strong>Expectations:</strong> ${registrationData.expectations}</p>
    `
  }

  // Email to student
  const studentEmail = {
    from: process.env.EMAIL_USER,
    to: registrationData.email,
    subject: 'Welcome to TETA Academy',
    html: `
      <h2>Welcome to TETA Academy!</h2>
      <p>Dear ${registrationData.fullName},</p>
      <p>Thank you for registering with TETA Academy. We're excited to have you join our program!</p>
      <p>Here's what happens next:</p>
      <ul>
        <li>You'll receive a call from our team within 24-48 hours</li>
        <li>We'll discuss program details and answer any questions</li>
        <li>You'll get access to our orientation materials</li>
      </ul>
      <p>If you have any immediate questions, please don't hesitate to contact us.</p>
      <p>Best regards,<br>TETA Academy Team</p>
    `
  }

  try {
    // Send both emails
    await Promise.all([
      transporter.sendMail(adminEmail),
      transporter.sendMail(studentEmail)
    ])
    return { success: true }
  } catch (error) {
    console.error('Email sending error:', error)
    throw error
  }
}