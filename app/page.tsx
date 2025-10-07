'use client'

import { useState } from 'react'
import { Palette, Code, Sparkles, Clock, Target, Award, CheckCircle2 } from 'lucide-react'
import SubmissionForm from '@/components/SubmissionForm'

export default function Home() {
  const [selectedChallenge, setSelectedChallenge] = useState<string | null>(null)
  const [showSubmission, setShowSubmission] = useState(false)

  const challenges = [
    {
      id: 'design',
      title: 'Design Challenge',
      icon: Palette,
      description: 'Create a landing page mockup for a fictional brand launch campaign',
      details: [
        'Demonstrate UI/UX design skills',
        'Showcase brand storytelling abilities',
        'Optimize for conversion',
        'Deliver Figma/Adobe XD files'
      ],
      deliverables: 'Figma/Adobe XD file with mockup, brief design rationale (max 300 words)',
      estimatedTime: '2-3 hours'
    },
    {
      id: 'development',
      title: 'Development Challenge',
      icon: Code,
      description: 'Build a functional mini-application using modern web technologies',
      details: [
        'Choose: Content dashboard, email template generator, or social media scheduler',
        'Use React/Next.js with Tailwind CSS',
        'Implement responsive design',
        'Follow best practices and clean code principles'
      ],
      deliverables: 'GitHub repository with live demo link, setup instructions in README',
      estimatedTime: '3-4 hours'
    },
    {
      id: 'ai',
      title: 'AI Integration Challenge',
      icon: Sparkles,
      description: 'Develop a small AI-powered tool for digital marketing or content creation',
      details: [
        'Integrate AI API (OpenAI, Anthropic, or similar)',
        'Focus on practical marketing/content use case',
        'Build intuitive user interface',
        'Demonstrate API integration skills'
      ],
      deliverables: 'GitHub repository with working application, API integration documentation',
      estimatedTime: '3-4 hours'
    }
  ]

  const criteria = [
    { name: 'Technical Execution', weight: '40%', description: 'Quality of implementation and technical choices' },
    { name: 'Creative Problem-Solving', weight: '30%', description: 'Innovation and approach to challenges' },
    { name: 'Code Quality & Best Practices', weight: '20%', description: 'Clean code, documentation, and standards' },
    { name: 'Attention to Detail & Polish', weight: '10%', description: 'Refinement and professional finish' }
  ]

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Skills Assessment Platform</h1>
          <p className="text-gray-600 mt-2">For TK Manenzhe - Digital Designer & Multimedia Expert</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {!showSubmission ? (
          <>
            {/* Introduction */}
            <section className="card mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3">Welcome to Your Assessment</h2>
                  <p className="text-gray-700 mb-4">
                    This practical assessment evaluates your skills in digital design, web development, and AI integration 
                    based on your 10 years of experience as a Digital Designer and Multimedia Expert.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-blue-900">Estimated Time: 2-4 hours</span>
                    </div>
                    <p className="text-sm text-blue-800">
                      Choose one challenge that best showcases your expertise. Take your time to deliver quality work.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Challenge Options */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Choose Your Challenge</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {challenges.map((challenge) => {
                  const Icon = challenge.icon
                  const isSelected = selectedChallenge === challenge.id
                  
                  return (
                    <div
                      key={challenge.id}
                      data-testid={`challenge-${challenge.id}`}
                      role="button"
                      tabIndex={0}
                      aria-label={`Select ${challenge.title}`}
                      className={`card cursor-pointer transition-all duration-200 ${
                        isSelected 
                          ? 'ring-2 ring-primary border-primary' 
                          : 'hover:shadow-md hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedChallenge(challenge.id)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setSelectedChallenge(challenge.id)
                        }
                      }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2 rounded-lg ${isSelected ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold">{challenge.title}</h3>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{challenge.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        {challenge.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{detail}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-xs text-gray-500 mb-1">Deliverables:</p>
                        <p className="text-sm text-gray-700 mb-3">{challenge.deliverables}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>{challenge.estimatedTime}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* Assessment Criteria */}
            <section className="card mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Assessment Criteria</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {criteria.map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{item.weight}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Submit Button */}
            <div className="text-center">
              <button
                onClick={() => setShowSubmission(true)}
                disabled={!selectedChallenge}
                className="btn-primary text-lg px-12"
              >
                Proceed to Submission
              </button>
              {!selectedChallenge && (
                <p className="text-sm text-gray-500 mt-3">Please select a challenge to continue</p>
              )}
            </div>
          </>
        ) : (
          <SubmissionForm 
            selectedChallenge={selectedChallenge!} 
            onBack={() => setShowSubmission(false)}
          />
        )}
      </div>
    </main>
  )
}
