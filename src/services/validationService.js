// src/services/validationService.js

export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
  
  export const validatePhone = (phone) => {
    // More permissive international phone validation
    // Allows for:
    // - Optional + prefix
    // - Optional country code
    // - Minimum 8 digits, maximum 15 digits (excluding + and spaces)
    // - Allows spaces and hyphens for formatting
    const cleanPhone = phone.replace(/[\s-]/g, '')
    const phoneRegex = /^\+?[1-9]\d{7,14}$/
    return phoneRegex.test(cleanPhone)
  }
  
  export const validateAge = (age) => {
    const ageNum = parseInt(age)
    return ageNum >= 13 && ageNum <= 19 // Assuming this is for teenagers
  }
  
  export const validateName = (name) => {
    // More inclusive name validation that allows for:
    // - International characters
    // - Apostrophes and hyphens
    // - Multiple word names
    // - Minimum 2 characters
    return name.length >= 2 && /^[\p{L}\p{M}'\s-]+$/u.test(name)
  }
  
  export const validateForm = (formData, step) => {
    const errors = {}
  
    if (step === 1) {
      if (!formData.fullName) {
        errors.fullName = 'Full name is required'
      } else if (!validateName(formData.fullName)) {
        errors.fullName = 'Please enter a valid name'
      }
  
      if (!formData.email) {
        errors.email = 'Email is required'
      } else if (!validateEmail(formData.email)) {
        errors.email = 'Please enter a valid email address'
      }
  
      if (!formData.phone) {
        errors.phone = 'Phone number is required'
      } else if (!validatePhone(formData.phone)) {
        errors.phone = 'Please enter a valid international phone number (e.g., +1234567890)'
      }
    }
  
    if (step === 2) {
      if (!formData.age) {
        errors.age = 'Age is required'
      } else if (!validateAge(formData.age)) {
        errors.age = 'Age must be between 13 and 19'
      }
  
      if (!formData.parentName) {
        errors.parentName = 'Parent/Guardian name is required'
      } else if (!validateName(formData.parentName)) {
        errors.parentName = 'Please enter a valid name'
      }
  
      if (!formData.parentPhone) {
        errors.parentPhone = 'Parent/Guardian phone is required'
      } else if (!validatePhone(formData.parentPhone)) {
        errors.parentPhone = 'Please enter a valid international phone number (e.g., +1234567890)'
      }
  
      // Optional validation for expectations
      if (formData.expectations && formData.expectations.length > 1000) {
        errors.expectations = 'Expectations should not exceed 1000 characters'
      }
    }
  
    return errors
  }
  
  // Helper function to format phone numbers
  export const formatPhoneNumber = (phone) => {
    // Remove all non-digit characters except +
    const cleaned = phone.replace(/[^\d+]/g, '')
    
    // If it starts with +, keep it; otherwise, format normally
    if (cleaned.startsWith('+')) {
      // Format international number: +XX XXX XXX XXXX
      return cleaned.replace(/(\+\d{1,3})(\d{3})(\d{3})(\d{4})/, '$1 $2 $3 $4')
    }
    
    // Format local number: XXX XXX XXXX
    return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')
  }