# 🔧 Troubleshooting Guide

## Test Failures Analysis

### Issue: 2 Tests Failed (Form Submission)

**Failed Tests:**
1. ❌ Should fill form and submit successfully
2. ❌ Should show loading state during submission

**Error:** `Test timeout of 30000ms exceeded` - Success screen not appearing

---

## Root Cause Analysis

The tests are timing out because the submission isn't completing. Possible causes:

### 1. Dev Server Not Running
**Symptom:** Tests can't connect to http://localhost:3000  
**Solution:**
```bash
# Ensure dev server is running
npm run dev

# In another terminal, run tests
npm test
```

### 2. Environment Variables Missing
**Symptom:** API returns 500 error  
**Check:**
```bash
npm run check:emails
npm run test:supabase
```

**Fix:** Ensure `.env` has:
```env
NEXT_PUBLIC_SUPABASE_URL=https://agyjovdugmtopasyvlng.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_jKBISiYlrRyJEfyYGcjJZw_AQJ8Udc7
RESEND_API_KEY=re_QhMu7F2n_JycLfeqNt8RNA692iWYcT6tM
ASSESSOR_EMAIL=jeffrey.de.wee@circletel.co.za,hrmanager@newgenmc.co.za
```

### 3. Supabase Connection Issue
**Symptom:** "Failed to store submission" error  
**Check:**
```bash
npm run test:supabase
```

**Fix:**
- Verify Supabase credentials
- Ensure `submissions` table exists
- Check RLS policies allow inserts

### 4. Email Service Issue
**Symptom:** Submission hangs on email sending  
**Note:** Emails are non-fatal, shouldn't block submission

**Check Logs:**
- Look for "⚠️ Email error (non-fatal)" in console
- Verify Resend API key is valid

---

## Quick Fixes

### Fix 1: Restart Everything

```bash
# Kill all node processes
taskkill /F /IM node.exe

# Reinstall dependencies
npm install

# Start fresh
npm run dev

# In new terminal
npm test
```

### Fix 2: Test Manually First

```bash
# Start dev server
npm run dev

# Open browser
# Go to: http://localhost:3000
# Manually test submission
# Check console for errors
```

### Fix 3: Run Tests with Logging

```bash
# Run with headed mode to see what's happening
npm run test:headed

# Check terminal for API logs:
# 📝 Submission API called
# 📦 Request body: ...
# 💾 Saving to Supabase...
# ✅ Saved to Supabase: [id]
# 📧 Sending emails...
# ✅ Emails sent successfully
# 🎉 Submission complete!
```

---

## Debugging Steps

### Step 1: Check Dev Server

```bash
# Terminal 1: Start dev server
npm run dev

# Wait for: "✓ Ready in Xms"
# Should show: http://localhost:3000
```

### Step 2: Test API Directly

```bash
# Use curl or Postman
curl -X POST http://localhost:3000/api/submit \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "challenge": "development",
    "submissionUrl": "https://github.com/test/repo",
    "description": "Test description",
    "timeSpent": "1 hour"
  }'

# Should return:
# {"success":true,"message":"Submission received successfully","submissionId":"..."}
```

### Step 3: Check Logs

**Look for these in terminal:**
- ✅ `📝 Submission API called` - API received request
- ✅ `💾 Saving to Supabase...` - Attempting database save
- ✅ `✅ Saved to Supabase: [id]` - Database save successful
- ✅ `📧 Sending emails...` - Attempting email send
- ✅ `✅ Emails sent successfully` - Emails sent
- ✅ `🎉 Submission complete!` - Full success

**Error Indicators:**
- ❌ `❌ Validation failed` - Missing required fields
- ❌ `❌ Supabase error` - Database connection issue
- ⚠️ `⚠️ Email error (non-fatal)` - Email failed (OK, submission still succeeds)

### Step 4: Check Test Screenshots

Failed tests save screenshots:
```
test-results/
└── assessment-flow-Skills-Ass-278f3-orm-and-submit-successfully-chromium/
    └── test-failed-1.png
```

**Look for:**
- Is the form filled correctly?
- Is there an error message on screen?
- Did the page navigate?

---

## Common Issues & Solutions

### Issue: "Element not found"

**Cause:** Page didn't load or navigate correctly  
**Fix:**
1. Check dev server is running
2. Increase timeout in test
3. Add wait for navigation

### Issue: "Timeout exceeded"

**Cause:** API taking too long or hanging  
**Fix:**
1. Check API logs for where it's stuck
2. Test API endpoint directly
3. Verify database connection
4. Check email service

### Issue: "Connection refused"

**Cause:** Dev server not running  
**Fix:**
```bash
npm run dev
```

### Issue: "Database error"

**Cause:** Supabase not configured  
**Fix:**
```bash
# Test connection
npm run test:supabase

# If fails, run schema
# Go to Supabase dashboard
# Run supabase-schema.sql
```

---

## Test Configuration

### Increase Timeouts

Edit `playwright.config.ts`:
```typescript
use: {
  timeout: 60000, // Increase to 60 seconds
}
```

### Run Single Test

```bash
# Run only submission test
npx playwright test -g "should fill form and submit successfully"
```

### Debug Mode

```bash
# Run with inspector
npx playwright test --debug

# Pause on failure
npx playwright test --headed --pause-on-failure
```

---

## Verification Checklist

Before running tests:

- [ ] Dev server running (`npm run dev`)
- [ ] Port 3000 accessible
- [ ] Environment variables set
- [ ] Supabase connection working (`npm run test:supabase`)
- [ ] Email configuration valid (`npm run check:emails`)
- [ ] Database schema deployed
- [ ] No other process using port 3000

---

## Success Indicators

When tests pass, you should see:

```
✓ should display landing page with all elements (17.8s)
✓ should select a challenge and enable proceed button (23.8s)
✓ should navigate to submission form after selecting challenge (48.8s)
✓ should validate required fields (27.6s)
✓ should fill form and submit successfully (56.9s)
✓ should show loading state during submission (28.3s)
✓ should allow navigation back to challenge selection (14.5s)
✓ should enforce 300 character limit on description (14.6s)
✓ should display character counter (23.1s)
✓ should be mobile responsive (12.2s)

10 passed (1.8m)
```

---

## Getting Help

### Check Logs

1. **Terminal Output** - API logs with emojis
2. **Browser Console** - Client-side errors
3. **Test Screenshots** - Visual state when failed
4. **Playwright Report** - Detailed test results

### Run Diagnostics

```bash
# Check all systems
npm run test:supabase  # Database
npm run check:emails   # Email config
npm run dev           # Dev server
npm test              # Full test suite
```

### Manual Testing

If automated tests fail, test manually:
1. Open http://localhost:3000
2. Select a challenge
3. Fill and submit form
4. Check console for errors
5. Verify success screen appears

---

## Next Steps After Fixing

1. **Commit fixes:**
```bash
git add .
git commit -m "Fix test failures"
git push
```

2. **Redeploy to Netlify:**
- Automatic deployment from GitHub
- Or trigger manual deploy in Netlify dashboard

3. **Verify production:**
- Test on live site
- Check email notifications
- Verify database entries

---

**Need more help?** Check the detailed logs in terminal and test screenshots!
