import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface EmailData {
  name: string
  email: string
  challenge: string
  submissionUrl: string
  description: string
  timeSpent: string
}

const challengeTitles: Record<string, string> = {
  design: 'Design Challenge',
  development: 'Development Challenge',
  ai: 'AI Integration Challenge'
}

export async function sendConfirmationEmail(data: EmailData) {
  const { name, email, challenge, submissionUrl, description, timeSpent } = data

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #F5831F 0%, #D66F0D 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
          .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; }
          .footer { text-align: center; margin-top: 20px; padding: 20px; color: #6b7280; font-size: 14px; }
          .button { display: inline-block; background: #F5831F; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
          .info-box { background: #f3f4f6; padding: 15px; border-radius: 6px; margin: 15px 0; }
          h1 { margin: 0; font-size: 24px; }
          h2 { color: #F5831F; font-size: 20px; margin-top: 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✅ Assessment Submission Received</h1>
          </div>
          <div class="content">
            <p>Hi ${name},</p>
            
            <p>Thank you for completing the <strong>${challengeTitles[challenge]}</strong>! We've successfully received your submission.</p>
            
            <div class="info-box">
              <h2>Submission Details</h2>
              <p><strong>Challenge:</strong> ${challengeTitles[challenge]}</p>
              <p><strong>Time Spent:</strong> ${timeSpent}</p>
              <p><strong>Project Link:</strong> <a href="${submissionUrl}" style="color: #F5831F;">${submissionUrl}</a></p>
            </div>
            
            <h2>What's Next?</h2>
            <p>Our assessment team will carefully review your work based on the following criteria:</p>
            <ul>
              <li><strong>Technical Execution (40%)</strong> - Quality of implementation</li>
              <li><strong>Creative Problem-Solving (30%)</strong> - Innovation and approach</li>
              <li><strong>Code Quality & Best Practices (20%)</strong> - Clean code and documentation</li>
              <li><strong>Attention to Detail & Polish (10%)</strong> - Professional finish</li>
            </ul>
            
            <p>You can expect to hear back from us within <strong>3-5 business days</strong>.</p>
            
            <p>If you have any questions in the meantime, feel free to reply to this email.</p>
            
            <p>Best regards,<br>The Assessment Team</p>
          </div>
          <div class="footer">
            <p>This is an automated confirmation email. Please do not reply directly to this message.</p>
          </div>
        </div>
      </body>
    </html>
  `

  try {
    await resend.emails.send({
      from: 'Assessment Platform <onboarding@resend.dev>',
      to: email,
      subject: `Assessment Submission Confirmed - ${challengeTitles[challenge]}`,
      html,
    })
  } catch (error) {
    console.error('Error sending confirmation email:', error)
    throw error
  }
}

export async function sendAssessorNotification(data: EmailData) {
  const { name, email, challenge, submissionUrl, description, timeSpent } = data
  
  // Support multiple assessor emails (comma-separated)
  const assessorEmailsEnv = process.env.ASSESSOR_EMAIL || 'assessor@example.com'
  const assessorEmails = assessorEmailsEnv.split(',').map((email: string) => email.trim())

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #1f2937 0%, #111827 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
          .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; }
          .info-box { background: #f3f4f6; padding: 15px; border-radius: 6px; margin: 15px 0; border-left: 4px solid #F5831F; }
          .description-box { background: #fef3c7; padding: 15px; border-radius: 6px; margin: 15px 0; }
          h1 { margin: 0; font-size: 24px; }
          h2 { color: #F5831F; font-size: 18px; margin-top: 0; }
          .button { display: inline-block; background: #F5831F; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎯 New Assessment Submission</h1>
          </div>
          <div class="content">
            <p>A new assessment has been submitted for review.</p>
            
            <div class="info-box">
              <h2>Candidate Information</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Challenge:</strong> ${challengeTitles[challenge]}</p>
              <p><strong>Time Spent:</strong> ${timeSpent}</p>
            </div>
            
            <div class="info-box">
              <h2>Submission Details</h2>
              <p><strong>Project Link:</strong><br>
              <a href="${submissionUrl}" class="button" style="color: white;">View Submission</a></p>
            </div>
            
            <div class="description-box">
              <h2>Candidate's Approach</h2>
              <p>${description}</p>
            </div>
            
            <h2>Assessment Criteria</h2>
            <ul>
              <li><strong>Technical Execution (40%)</strong></li>
              <li><strong>Creative Problem-Solving (30%)</strong></li>
              <li><strong>Code Quality & Best Practices (20%)</strong></li>
              <li><strong>Attention to Detail & Polish (10%)</strong></li>
            </ul>
            
            <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <small>Submitted at: ${new Date().toLocaleString()}</small>
            </p>
          </div>
        </div>
      </body>
    </html>
  `

  try {
    // Send email to all assessors
    await resend.emails.send({
      from: 'Assessment Platform <onboarding@resend.dev>',
      to: assessorEmails,
      subject: `New Submission: ${name} - ${challengeTitles[challenge]}`,
      html,
    })
  } catch (error) {
    console.error('Error sending assessor notification:', error)
    throw error
  }
}
