// Script to verify email notifications were sent
// This helps verify emails after running tests

require('dotenv').config();

console.log('\n📧 Email Notification Verification Guide\n');
console.log('=' .repeat(60));

console.log('\n✅ EXPECTED EMAIL RECIPIENTS:\n');
console.log('1. Candidate Confirmation Email:');
console.log('   → Sent to: [candidate email from form]');
console.log('   → Subject: "Assessment Submission Confirmed - [Challenge Name]"');
console.log('   → Content: Submission details, timeline, next steps\n');

console.log('2. Assessor Notification Emails:');
console.log('   → Sent to: jeffrey.de.wee@circletel.co.za');
console.log('   → Sent to: hrmanager@newgenmc.co.za');
console.log('   → Subject: "New Submission: [Name] - [Challenge]"');
console.log('   → Content: Candidate details, project link, approach\n');

console.log('=' .repeat(60));

console.log('\n🔍 HOW TO VERIFY EMAILS WERE SENT:\n');

console.log('Method 1: Check Resend Dashboard');
console.log('  1. Go to: https://resend.com/emails');
console.log('  2. Login with your account');
console.log('  3. View recent emails sent');
console.log('  4. Verify 3 emails per submission:\n');
console.log('     - 1 to candidate');
console.log('     - 1 to jeffrey.de.wee@circletel.co.za');
console.log('     - 1 to hrmanager@newgenmc.co.za\n');

console.log('Method 2: Check Email Inboxes');
console.log('  1. Check candidate email inbox (if you used real email)');
console.log('  2. Check jeffrey.de.wee@circletel.co.za inbox');
console.log('  3. Check hrmanager@newgenmc.co.za inbox');
console.log('  4. Look in spam/junk folders if not in inbox\n');

console.log('Method 3: Check Application Logs');
console.log('  1. Look at terminal where dev server is running');
console.log('  2. Check for "Email sent" or error messages');
console.log('  3. Any email errors will be logged\n');

console.log('=' .repeat(60));

console.log('\n📊 CURRENT CONFIGURATION:\n');
console.log('Resend API Key:', process.env.RESEND_API_KEY ? '✅ Configured' : '❌ Missing');
console.log('Assessor Emails:', process.env.ASSESSOR_EMAIL || '❌ Not configured');

if (process.env.ASSESSOR_EMAIL) {
  const emails = process.env.ASSESSOR_EMAIL.split(',').map(e => e.trim());
  console.log('\nConfigured Assessors:');
  emails.forEach((email, index) => {
    console.log(`  ${index + 1}. ${email}`);
  });
}

console.log('\n=' .repeat(60));

console.log('\n💡 TESTING TIPS:\n');
console.log('1. Use your real email as candidate to receive confirmation');
console.log('2. Check Resend dashboard immediately after test submission');
console.log('3. Emails typically arrive within 1-2 seconds');
console.log('4. If emails don\'t arrive, check:');
console.log('   - Resend API key is valid');
console.log('   - Assessor emails are correct');
console.log('   - No errors in application logs');
console.log('   - Spam/junk folders\n');

console.log('=' .repeat(60));

console.log('\n🧪 RUN EMAIL TESTS:\n');
console.log('npm test tests/email-notifications.spec.ts\n');

console.log('=' .repeat(60));

console.log('\n✨ After running tests, check Resend dashboard:');
console.log('   https://resend.com/emails\n');
