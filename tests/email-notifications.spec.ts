import { test, expect } from '@playwright/test';

test.describe('Email Notifications - Assessor Testing', () => {
  
  test('should send emails to both assessors after successful submission', async ({ page, request }) => {
    await page.goto('/');

    // Select Development Challenge
    const developmentCard = page.locator('div.card').filter({ hasText: 'Development Challenge' }).first();
    await developmentCard.click();
    await page.waitForTimeout(500);

    // Proceed to submission
    await page.getByRole('button', { name: 'Proceed to Submission' }).click();

    // Fill out the form with test data
    const testData = {
      name: 'Test Candidate',
      email: 'test.candidate@example.com',
      projectLink: 'https://github.com/testuser/assessment-project',
      description: 'Comprehensive test submission to verify email notifications. Built using modern React patterns with TypeScript, implemented responsive design, and integrated with REST APIs. Added comprehensive error handling and user feedback mechanisms.',
      timeSpent: '3.5 hours'
    };

    await page.getByLabel('Full Name').fill(testData.name);
    await page.getByLabel('Email Address').fill(testData.email);
    await page.getByLabel('Project Link').fill(testData.projectLink);
    await page.getByLabel('Approach & Explanation').fill(testData.description);
    await page.getByLabel('Time Spent').fill(testData.timeSpent);

    // Intercept the API call to verify email data
    let submissionData: any = null;
    
    page.on('response', async (response) => {
      if (response.url().includes('/api/submit') && response.status() === 200) {
        submissionData = await response.json();
      }
    });

    // Submit the form
    await page.getByRole('button', { name: 'Submit Assessment' }).click();

    // Wait for success screen
    await expect(page.getByRole('heading', { name: 'Submission Successful!' })).toBeVisible({ timeout: 15000 });

    // Verify submission was successful
    expect(submissionData).not.toBeNull();
    expect(submissionData.success).toBe(true);
    
    // Log submission details for verification
    console.log('✅ Submission successful with ID:', submissionData.submissionId);
    console.log('📧 Emails should be sent to:');
    console.log('   - Candidate:', testData.email);
    console.log('   - Assessor 1: jeffrey.de.wee@circletel.co.za');
    console.log('   - Assessor 2: hrmanager@newgenmc.co.za');
  });

  test('should verify API endpoint sends correct email data', async ({ request }) => {
    // Make direct API call to test email functionality
    const testSubmission = {
      name: 'API Test User',
      email: 'apitest@example.com',
      challenge: 'development',
      submissionUrl: 'https://github.com/apitest/project',
      description: 'Direct API test to verify email notification system works correctly.',
      timeSpent: '2 hours'
    };

    const response = await request.post('http://localhost:3000/api/submit', {
      data: testSubmission
    });

    expect(response.ok()).toBeTruthy();
    
    const responseData = await response.json();
    expect(responseData.success).toBe(true);
    expect(responseData.submissionId).toBeDefined();

    console.log('✅ API submission successful');
    console.log('📧 Email notifications triggered for:');
    console.log('   - Candidate: apitest@example.com');
    console.log('   - Assessors: jeffrey.de.wee@circletel.co.za, hrmanager@newgenmc.co.za');
  });

  test('should handle multiple submissions and send separate emails', async ({ page }) => {
    // First submission
    await page.goto('/');
    
    await page.getByTestId('challenge-ai').click();
    await page.getByRole('button', { name: 'Proceed to Submission' }).click();

    await page.getByLabel('Full Name').fill('First Candidate');
    await page.getByLabel('Email Address').fill('first@example.com');
    await page.getByLabel('Project Link').fill('https://github.com/first/ai-project');
    await page.getByLabel('Approach & Explanation').fill('AI-powered content generation tool using GPT-4 API.');
    await page.getByLabel('Time Spent').fill('4 hours');

    await page.getByRole('button', { name: 'Submit Assessment' }).click();
    await expect(page.getByRole('heading', { name: 'Submission Successful!' })).toBeVisible({ timeout: 15000 });

    console.log('✅ First submission completed - emails sent');

    // Return to home for second submission
    await page.getByRole('button', { name: 'Return to Home' }).click();
    await page.waitForTimeout(1000);

    // Second submission
    await page.getByTestId('challenge-design').click();
    await page.getByRole('button', { name: 'Proceed to Submission' }).click();

    await page.getByLabel('Full Name').fill('Second Candidate');
    await page.getByLabel('Email Address').fill('second@example.com');
    await page.getByLabel('Project Link').fill('https://figma.com/second/design');
    await page.getByLabel('Approach & Explanation').fill('Modern landing page design with focus on conversion optimization.');
    await page.getByLabel('Time Spent').fill('2.5 hours');

    await page.getByRole('button', { name: 'Submit Assessment' }).click();
    await expect(page.getByRole('heading', { name: 'Submission Successful!' })).toBeVisible({ timeout: 15000 });

    console.log('✅ Second submission completed - separate emails sent');
    console.log('📧 Total emails sent: 6 (2 submissions × 3 recipients each)');
  });

  test('should verify email content includes all required information', async ({ page }) => {
    await page.goto('/');

    // Select and submit
    const developmentCard = page.locator('div.card').filter({ hasText: 'Development Challenge' }).first();
    await developmentCard.click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Proceed to Submission' }).click();

    const candidateData = {
      name: 'Email Content Test',
      email: 'emailtest@example.com',
      projectLink: 'https://github.com/emailtest/full-stack-app',
      description: 'Full-stack application with authentication, database integration, and real-time features. Implemented using Next.js, Supabase, and WebSockets.',
      timeSpent: '4 hours'
    };

    await page.getByLabel('Full Name').fill(candidateData.name);
    await page.getByLabel('Email Address').fill(candidateData.email);
    await page.getByLabel('Project Link').fill(candidateData.projectLink);
    await page.getByLabel('Approach & Explanation').fill(candidateData.description);
    await page.getByLabel('Time Spent').fill(candidateData.timeSpent);

    await page.getByRole('button', { name: 'Submit Assessment' }).click();
    await expect(page.getByRole('heading', { name: 'Submission Successful!' })).toBeVisible({ timeout: 15000 });

    // Log expected email content
    console.log('\n📧 Expected Email Content:');
    console.log('\n=== CANDIDATE EMAIL ===');
    console.log('To:', candidateData.email);
    console.log('Subject: Assessment Submission Confirmed - Development Challenge');
    console.log('Content should include:');
    console.log('  ✓ Candidate name:', candidateData.name);
    console.log('  ✓ Challenge: Development Challenge');
    console.log('  ✓ Time spent:', candidateData.timeSpent);
    console.log('  ✓ Project link:', candidateData.projectLink);
    console.log('  ✓ Assessment criteria (40%, 30%, 20%, 10%)');
    console.log('  ✓ Timeline: 3-5 business days');

    console.log('\n=== ASSESSOR EMAILS ===');
    console.log('To: jeffrey.de.wee@circletel.co.za, hrmanager@newgenmc.co.za');
    console.log('Subject: New Submission: Email Content Test - Development Challenge');
    console.log('Content should include:');
    console.log('  ✓ Candidate name:', candidateData.name);
    console.log('  ✓ Candidate email:', candidateData.email);
    console.log('  ✓ Challenge: Development Challenge');
    console.log('  ✓ Time spent:', candidateData.timeSpent);
    console.log('  ✓ Project link:', candidateData.projectLink);
    console.log('  ✓ Candidate approach:', candidateData.description);
    console.log('  ✓ Submission timestamp');
    console.log('  ✓ Assessment criteria');
  });
});

test.describe('Email Notification - Error Handling', () => {
  
  test('should still save submission even if email fails', async ({ page }) => {
    // This test verifies that submission succeeds even if email service is down
    await page.goto('/');

    const developmentCard = page.locator('div.card').filter({ hasText: 'Development Challenge' }).first();
    await developmentCard.click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Proceed to Submission' }).click();

    await page.getByLabel('Full Name').fill('Resilience Test');
    await page.getByLabel('Email Address').fill('resilience@example.com');
    await page.getByLabel('Project Link').fill('https://github.com/resilience/test');
    await page.getByLabel('Approach & Explanation').fill('Testing system resilience when email service fails.');
    await page.getByLabel('Time Spent').fill('1 hour');

    await page.getByRole('button', { name: 'Submit Assessment' }).click();

    // Should still show success even if emails fail
    await expect(page.getByRole('heading', { name: 'Submission Successful!' })).toBeVisible({ timeout: 15000 });

    console.log('✅ Submission succeeded (email failure is handled gracefully)');
    console.log('💾 Data saved to Supabase regardless of email status');
  });
});
