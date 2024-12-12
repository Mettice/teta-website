// src/components/RegistrationForm.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, AlertCircle } from 'lucide-react'
import PhoneInput from './PhoneInput'


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    parentName: '',
    parentPhone: '',
    expectations: ''
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: null,
    success: false
  })

  const [step, setStep] = useState(1)

  const [formErrors, setFormErrors] = useState({
    phone: null,
    parentPhone: null,
    // ... other form errors if needed
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (name === 'phone' || name === 'parentPhone') {
      validatePhone(value)
    }
  }

  const validateStep = (currentStep) => {
    switch(currentStep) {
      case 1:
        return formData.fullName && formData.email && formData.phone
      case 2:
        return formData.age && formData.parentName && formData.parentPhone
      default:
        return true
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus({ submitted: true, error: null, success: false })

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Send confirmation email or SMS (mock)
      console.log('Registration submitted:', formData)

      setFormStatus({
        submitted: false,
        error: null,
        success: true
      })

      // Reset form after successful submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        age: '',
        parentName: '',
        parentPhone: '',
        expectations: ''
      })
      setStep(1)
    } catch (error) {
      setFormStatus({
        submitted: false,
        error: 'Registration failed. Please try again.',
        success: false
      })
    }
  }

  const validatePhone = (phoneNumber) => {
    const isValid = /^\+?[\d\s-]{10,}$/.test(phoneNumber)
    setFormErrors(prev => ({
      ...prev,
      phone: isValid ? null : 'Please enter a valid phone number'
    }))
    return isValid
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {formStatus.success ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-8"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h3>
          <p className="text-gray-600">
            Thank you for registering. We will contact you shortly with further details.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            {[1, 2].map((stepNumber) => (
              <div
                key={stepNumber}
                className={`flex-1 h-2 rounded-full mx-2 ${
                  step >= stepNumber ? 'bg-blue-500' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>

          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded border focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded border focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <PhoneInput
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  error={formErrors.phone}
                />
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded border focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Parent/Guardian Name
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded border focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Parent/Guardian Phone
                </label>
                <input
                  type="tel"
                  name="parentPhone"
                  value={formData.parentPhone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded border focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expectations from the Program
                </label>
                <textarea
                  name="expectations"
                  value={formData.expectations}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded border focus:ring-2 focus:ring-blue-500"
                  rows="4"
                />
              </div>
            </motion.div>
          )}

          {/* Error Message */}
          {formStatus.error && (
            <div className="bg-red-50 text-red-500 p-4 rounded-lg flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              <span>{formStatus.error}</span>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between gap-4">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(prev => prev - 1)}
                className="px-6 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition"
              >
                Previous
              </button>
            )}
            
            {step < 2 ? (
              <button
                type="button"
                onClick={() => validateStep(step) && setStep(prev => prev + 1)}
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition ml-auto"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={formStatus.submitted}
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition ml-auto disabled:bg-blue-300"
              >
                {formStatus.submitted ? 'Submitting...' : 'Submit Registration'}
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  )
}

export default RegistrationForm