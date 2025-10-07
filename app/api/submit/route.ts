import { NextRequest, NextResponse } from 'next/server'
import { supabase, type Submission } from '@/lib/supabase'
import { sendConfirmationEmail, sendAssessorNotification } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, challenge, submissionUrl, description, timeSpent } = body

    // Validate required fields
    if (!name || !email || !challenge || !submissionUrl || !description || !timeSpent) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate URL format
    try {
      new URL(submissionUrl)
    } catch {
      return NextResponse.json(
        { error: 'Invalid URL format' },
        { status: 400 }
      )
    }

    // Store submission in Supabase
    const submission: Submission = {
      name,
      email,
      challenge,
      submission_url: submissionUrl,
      description,
      time_spent: timeSpent,
      submitted_at: new Date().toISOString(),
    }

    const { data, error } = await supabase
      .from('submissions')
      .insert([submission])
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to store submission' },
        { status: 500 }
      )
    }

    // Send emails
    try {
      await Promise.all([
        sendConfirmationEmail({
          name,
          email,
          challenge,
          submissionUrl,
          description,
          timeSpent,
        }),
        sendAssessorNotification({
          name,
          email,
          challenge,
          submissionUrl,
          description,
          timeSpent,
        }),
      ])
    } catch (emailError) {
      console.error('Email error:', emailError)
      // Don't fail the request if emails fail
      // The submission is already stored
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Submission received successfully',
        submissionId: data.id 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
