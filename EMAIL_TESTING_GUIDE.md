# 📧 Email Notification Testing Guide

## Overview

This guide covers testing the email notification system that sends emails to:
1. **Candidate** - Confirmation email
2. **Assessor 1** - jeffrey.de.wee@circletel.co.za
3. **Assessor 2** - hrmanager@newgenmc.co.za

---

## Quick Start

### 1. Check Email Configuration

```bash
npm run check:emails
```

This displays:
- Current email configuration
- Assessor email addresses
- Verification steps

### 2. Run Email Tests

```bash
npm run test:emails
```

This will:
- Start the dev server automatically
- Run 6 email-specific tests
- Show browser during testing
- Verify email functionality

---

## Email Test Coverage

### Test 1: Basic Email Sending
**What it tests:**
- Submission triggers emails
- All 3 recipients receive emails
- API returns success

**Expected Result:**
- ✅ 3 emails sent per submission
- ✅ Candidate confirmation
- ✅ Both assessors notified

### Test 2: Direct API Testing
**What it tests:**
- API endpoint email functionality
- Correct data passed to email service

**Expected Result:**
- ✅ API call succeeds
- ✅ Email data logged to console

### Test 3: Multiple Submissions
**What it tests:**
- Each submission sends separate emails
- No email mixing between submissions

**Expected Result:**
- ✅ 6 emails total (2 submissions × 3 recipients)
- ✅ Each email has correct data

### Test 4: Email Content Verification
**What it tests:**
- All required information included
- Correct formatting

**Expected Result:**
- ✅ Logs expected email content
- ✅ All fields present

### Test 5: Error Resilience
**What it tests:**
- Submission succeeds even if email fails
- Data still saved to database

**Expected Result:**
- ✅ Submission completes
- ✅ Success screen shows
- ✅ Data in Supabase

---

## Manual Email Verification

### Step 1: Run a Test Submission

**Use your real email to receive confirmation:**

```bash
# Start dev server
npm run dev

# In browser, go to: http://localhost:3000
# Fill form with:
Name: Your Name
Email: your-real-email@example.com  ← Use your real email!
Challenge: Development Challenge
Project Link: https://github.com/test/project
Description: Test submission to verify emails
Time Spent: 1 hour
```

### Step 2: Check Resend Dashboard

1. Go to: **https://resend.com/emails**
2. Login with your account
3. Look for recent emails (last few minutes)
4. You should see **3 emails**:

**Email 1: To Candidate**
- To: your-real-email@example.com
- Subject: "Assessment Submission Confirmed - Development Challenge"
- Status: ✅ Delivered

**Email 2: To Assessor 1**
- To: jeffrey.de.wee@circletel.co.za
- Subject: "New Submission: Your Name - Development Challenge"
- Status: ✅ Delivered

**Email 3: To Assessor 2**
- To: hrmanager@newgenmc.co.za
- Subject: "New Submission: Your Name - Development Challenge"
- Status: ✅ Delivered

### Step 3: Check Email Inboxes

**Your Inbox:**
- Check for confirmation email
- Should arrive within 1-2 seconds
- Check spam/junk if not in inbox

**Assessor Inboxes:**
- jeffrey.de.wee@circletel.co.za should receive notification
- hrmanager@newgenmc.co.za should receive notification
- Both emails identical except recipient

---

## Email Content Verification

### Candidate Confirmation Email

**Subject:** Assessment Submission Confirmed - [Challenge Name]

**Content Should Include:**
- ✅ Orange gradient header
- ✅ "✅ Assessment Submission Received" heading
- ✅ Personalized greeting with candidate name
- ✅ Submission details box:
  - Challenge name
  - Time spent
  - Project link (clickable)
- ✅ "What's Next?" section
- ✅ Assessment criteria list (40%, 30%, 20%, 10%)
- ✅ Timeline: "3-5 business days"
- ✅ Professional footer

### Assessor Notification Email

**Subject:** New Submission: [Candidate Name] - [Challenge Name]

**Content Should Include:**
- ✅ Dark gradient header
- ✅ "🎯 New Assessment Submission" heading
- ✅ Candidate information box:
  - Full name
  - Email (clickable mailto link)
  - Challenge type
  - Time spent
- ✅ Submission details box:
  - Project link with orange "View Submission" button
- ✅ Yellow box with candidate's approach explanation
- ✅ Assessment criteria list
- ✅ Submission timestamp

---

## Troubleshooting

### Emails Not Sending

**Check 1: Environment Variables**
```bash
npm run check:emails
```
Verify:
- ✅ RESEND_API_KEY is set
- ✅ ASSESSOR_EMAIL contains both addresses

**Check 2: Resend API Key**
1. Go to https://resend.com/api-keys
2. Verify key is active
3. Check usage limits not exceeded

**Check 3: Application Logs**
Look in terminal for errors:
```
Error sending confirmation email: ...
Error sending assessor notification: ...
```

**Check 4: Spam Folders**
- Check spam/junk folders
- Add sender to contacts
- Check email filters

### Emails Delayed

**Normal Delay:** 1-2 seconds
**If longer:**
- Check Resend dashboard for queue status
- Verify internet connection
- Check Resend service status

### Wrong Recipients

**Verify Configuration:**
```bash
# Check .env file
ASSESSOR_EMAIL=jeffrey.de.wee@circletel.co.za,hrmanager@newgenmc.co.za
```

**No spaces around commas!**
- ✅ Correct: `email1@example.com,email2@example.com`
- ❌ Wrong: `email1@example.com, email2@example.com` (space after comma)

### Email Content Issues

**Check Email Templates:**
- File: `lib/email.ts`
- Lines 23-79: Candidate email template
- Lines 98-158: Assessor email template

---

## Test Scenarios

### Scenario 1: Single Submission Test

```bash
# Run email tests
npm run test:emails

# Expected: 3 emails sent
# Check Resend dashboard
```

### Scenario 2: Multiple Submissions Test

```bash
# Run full test suite
npm test

# Expected: Multiple sets of 3 emails
# Each submission = 3 emails
```

### Scenario 3: Production Test

```bash
# Test on deployed site
# Go to: https://your-site.netlify.app
# Submit real test
# Verify emails arrive
```

---

## Verification Checklist

After running tests:

- [ ] Check Resend dashboard shows sent emails
- [ ] Candidate receives confirmation email
- [ ] Assessor 1 (jeffrey.de.wee@circletel.co.za) receives notification
- [ ] Assessor 2 (hrmanager@newgenmc.co.za) receives notification
- [ ] All emails have correct subject lines
- [ ] Email content includes all required information
- [ ] Links in emails are clickable
- [ ] Emails have professional formatting
- [ ] No errors in application logs
- [ ] Submission data saved to Supabase

---

## Email Metrics

**Expected Performance:**
- Send time: < 2 seconds
- Delivery rate: 99%+
- Open rate: Track in Resend dashboard

**Monitor in Resend:**
- Total emails sent
- Delivery status
- Bounce rate
- Click rate (for links)

---

## Production Monitoring

### Daily Checks

1. **Resend Dashboard**
   - Check delivery rates
   - Monitor bounces
   - Review any errors

2. **Supabase**
   - Verify submissions have corresponding emails
   - Check for any orphaned submissions

3. **Assessor Feedback**
   - Confirm assessors receiving notifications
   - Verify email content is clear

### Weekly Review

- Email delivery statistics
- Any spam reports
- Assessor satisfaction
- Candidate feedback

---

## Quick Commands

```bash
# Check email configuration
npm run check:emails

# Run email tests with browser
npm run test:emails

# Run all tests
npm test

# View test report
npm run test:report

# Check Supabase connection
npm run test:supabase
```

---

## Support Resources

- **Resend Dashboard**: https://resend.com/emails
- **Resend Docs**: https://resend.com/docs
- **Supabase Dashboard**: https://app.supabase.com
- **Test Logs**: Check terminal output

---

## Success Criteria

✅ All tests pass  
✅ 3 emails sent per submission  
✅ Candidate receives confirmation within 2 seconds  
✅ Both assessors receive notifications  
✅ Email content is complete and formatted  
✅ Links are clickable  
✅ No errors in logs  
✅ Resend dashboard shows successful delivery  

---

**Email testing complete!** 📧✨
