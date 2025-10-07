'use client'

import { useState } from 'react'
import { ArrowLeft, Send, CheckCircle, AlertCircle } from 'lucide-react'

interface SubmissionFormProps {
  selectedChallenge: string
  onBack: () => void
}

export default function SubmissionForm({ selectedChallenge, onBack }: SubmissionFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    submissionUrl: '',
    description: '',
    timeSpent: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const challengeTitles: Record<string, string> = {
    design: 'Design Challenge',
    development: 'Development Challenge',
    ai: 'AI Integration Challenge'
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          challenge: selectedChallenge
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Submission failed')
      }

      setSubmitStatus('success')
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred during submission')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="card max-w-2xl mx-auto text-center">
        <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Submission Successful!</h2>
        <p className="text-gray-700 mb-6">
          Thank you for completing the assessment. We've received your submission and sent confirmation emails 
          to both you and the assessor.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-blue-800">
            <strong>Next Steps:</strong> The assessment team will review your submission and get back to you 
            within 3-5 business days.
          </p>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="btn-secondary"
        >
          Return to Home
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Challenge Selection
      </button>

      <div className="card">
        <h2 className="text-2xl font-bold mb-2">Submit Your Work</h2>
        <p className="text-gray-600 mb-6">
          Challenge: <span className="font-semibold text-primary">{challengeTitles[selectedChallenge]}</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="label">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="TK Manenzhe"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="label">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="tk@example.com"
            />
          </div>

          {/* Submission URL */}
          <div>
            <label htmlFor="submissionUrl" className="label">
              Project Link <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              id="submissionUrl"
              name="submissionUrl"
              value={formData.submissionUrl}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="https://github.com/username/project or https://figma.com/..."
            />
            <p className="text-sm text-gray-500 mt-2">
              Provide a link to your GitHub repository, Figma file, or live demo
            </p>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="label">
              Approach & Explanation <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={6}
              maxLength={300}
              className="input-field resize-none"
              placeholder="Briefly explain your approach, key decisions, and any challenges you faced (max 300 words)..."
            />
            <p className="text-sm text-gray-500 mt-2">
              {formData.description.length}/300 characters
            </p>
          </div>

          {/* Time Spent */}
          <div>
            <label htmlFor="timeSpent" className="label">
              Time Spent <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="timeSpent"
              name="timeSpent"
              value={formData.timeSpent}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="e.g., 3 hours"
            />
          </div>

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-900">Submission Failed</p>
                <p className="text-sm text-red-700">{errorMessage}</p>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={onBack}
              className="btn-secondary flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary flex-1 flex items-center justify-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Assessment
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
