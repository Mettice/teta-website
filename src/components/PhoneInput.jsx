import { useState } from 'react'
import { formatPhoneNumber } from '../services/validationService'

const PhoneInput = ({ name, value, onChange, error }) => {
  const [focused, setFocused] = useState(false)

  const handleChange = (e) => {
    let newValue = e.target.value
    // Allow only numbers, spaces, hyphens, and + at the start
    newValue = newValue.replace(/[^\d\s-+]/g, '')
    
    // Format the number as user types
    if (!focused) {
      newValue = formatPhoneNumber(newValue)
    }
    
    onChange({
      target: {
        name,
        value: newValue
      }
    })
  }

  return (
    <div>
      <div className="relative">
        <input
          type="tel"
          name={name}
          value={value}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(false)
            // Format on blur
            onChange({
              target: {
                name,
                value: formatPhoneNumber(value)
              }
            })
          }}
          placeholder="+1 234 567 8900"
          className={`w-full px-4 py-2 rounded border focus:ring-2 focus:ring-blue-500 
                     ${error ? 'border-red-500' : 'border-gray-300'}`}
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      <p className="text-gray-500 text-xs mt-1">
        Include country code for international numbers (e.g., +1 for US, +44 for UK)
      </p>
    </div>
  )
}

export default PhoneInput