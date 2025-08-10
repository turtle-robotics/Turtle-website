import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const formspreeId = import.meta.env.VITE_FORMSPREE_ID

      if (formspreeId) {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
          })
        })

        if (!response.ok) throw new Error('Form submit failed')
        const data = await response.json()
        if (data?.ok === true || data?.status === 'success') {
          setSubmitStatus('success')
          setFormData({ name: '', email: '', subject: '', message: '' })
        } else {
          setSubmitStatus('error')
        }
      } else {
        // Fallback: open mail client if Formspree is not configured
        window.location.href = `mailto:turtlerobotics@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} <${formData.email}>`)}`
        setSubmitStatus('success')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-light text-gray-700 dark:text-gray-300 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
              placeholder="Your full name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-light text-gray-700 dark:text-gray-300 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
              placeholder="your.email@example.com"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-light text-gray-700 dark:text-gray-300 mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
            placeholder="What is this regarding?"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-light text-gray-700 dark:text-gray-300 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 resize-none"
            placeholder="Tell us more about your inquiry..."
          />
        </div>
        
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-turtle text-white px-8 py-4 rounded-xl font-light tracking-wide hover:scale-105 transition-all duration-300 shadow-premium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Or email us directly at{' '}
            <a 
              href="mailto:turtlerobotics@gmail.com" 
              className="text-accent hover:text-accent/80 transition-colors duration-200"
            >
              turtlerobotics@gmail.com
            </a>
          </div>
        </div>
        
        {submitStatus && (
          <div className={`p-4 rounded-xl ${
            submitStatus === 'success' 
              ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200' 
              : 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200'
          }`}>
            {submitStatus === 'success' 
              ? 'Message sent successfully! We\'ll get back to you soon.' 
              : 'Failed to send message. Please try again or email us directly.'
            }
          </div>
        )}
      </form>
    </div>
  )
}

export default ContactForm 