# 🚀 Deploy to Netlify - Step by Step

## ✅ Step 1: GitHub Push (In Progress)

Your code is being pushed to:
**https://github.com/jdeweedata/awkward-apple-assessment**

---

## 📦 Step 2: Deploy on Netlify

### 2.1 Go to Netlify

Open: **https://app.netlify.com**

### 2.2 Create New Site

1. Click **"Add new site"** button (top right)
2. Select **"Import an existing project"**

### 2.3 Connect GitHub

1. Click **"Deploy with GitHub"**
2. Authorize Netlify (if not already authorized)
3. Search for: **awkward-apple-assessment**
4. Click on the repository

### 2.4 Configure Build Settings

Netlify should auto-detect these settings:

- **Branch to deploy:** `main`
- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Node version:** 20

If not auto-detected, enter them manually.

### 2.5 Add Environment Variables

**IMPORTANT:** Before clicking "Deploy site", add these environment variables:

Click **"Add environment variables"** or **"Show advanced"** → **"New variable"**

Add these 4 variables:

| Variable Name | Value |
|---------------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://agyjovdugmtopasyvlng.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `sb_publishable_jKBISiYlrRyJEfyYGcjJZw_AQJ8Udc7` |
| `RESEND_API_KEY` | `re_QhMu7F2n_JycLfeqNt8RNA692iWYcT6tM` |
| `ASSESSOR_EMAIL` | `jeffrey.de.wee@circletel.co.za,hrmanager@newgenmc.co.za` |

### 2.6 Deploy!

Click **"Deploy awkward-apple-assessment"** button

---

## ⏱️ Step 3: Wait for Build (2-3 minutes)

Netlify will:
1. Clone your repository
2. Install dependencies
3. Build the Next.js application
4. Deploy to CDN

You can watch the build logs in real-time.

---

## ✅ Step 4: Get Your Live URL

Once deployed, you'll get a URL like:

**https://awkward-apple-assessment.netlify.app**

Or you can set a custom domain in Netlify settings.

---

## 🧪 Step 5: Test Your Deployment

1. **Visit your deployed URL**
2. **Test challenge selection** - Click on each challenge
3. **Submit a test assessment:**
   - Fill in test data
   - Use a real email address
   - Submit the form
4. **Verify emails:**
   - Check confirmation email in your inbox
   - Verify both assessors received notifications:
     - jeffrey.de.wee@circletel.co.za
     - hrmanager@newgenmc.co.za
5. **Check Supabase:**
   - Go to https://app.supabase.com
   - Open project: agyjovdugmtopasyvlng
   - Check Table Editor → submissions
   - Verify test submission appears

---

## 🎯 Step 6: Share with TK Manenzhe

Once testing is complete, share the URL with TK Manenzhe:

**Subject:** Skills Assessment - Ready for Submission

**Message:**
```
Hi TK,

Your skills assessment is ready! Please visit the link below to complete the assessment:

[Your Netlify URL]

Instructions:
1. Choose one of the three challenges that best showcases your expertise
2. Complete the challenge (estimated 2-4 hours)
3. Submit your work through the form

You'll receive a confirmation email once submitted.

Timeline: We'll review your submission within 3-5 business days.

Best regards,
[Your Name]
```

---

## 🔧 Troubleshooting

### Build Fails

**Check:**
- All 4 environment variables are set correctly
- No typos in variable names or values
- Build logs for specific errors

**Solution:**
- Go to Site settings → Environment variables
- Verify all variables
- Trigger a new deploy

### Emails Not Sending

**Check:**
- Resend API key is correct
- Assessor emails are correct (no typos)
- Resend dashboard for logs: https://resend.com/emails

**Solution:**
- Verify `RESEND_API_KEY` in Netlify
- Check spam folders
- Review Resend logs

### Database Errors

**Check:**
- Supabase URL and anon key are correct
- Submissions table exists
- RLS policies are enabled

**Solution:**
- Verify Supabase environment variables
- Re-run supabase-schema.sql if needed
- Check Supabase logs

---

## 📊 Monitoring

After deployment, monitor:

1. **Netlify Dashboard:**
   - Build status
   - Deploy logs
   - Analytics

2. **Supabase Dashboard:**
   - Submissions table
   - Database logs
   - API usage

3. **Resend Dashboard:**
   - Email delivery status
   - Bounce rates
   - Email logs

---

## 🎉 Success Criteria

Your deployment is successful when:

- ✅ Build completes without errors
- ✅ Site loads at Netlify URL
- ✅ All three challenges are selectable
- ✅ Submission form works
- ✅ Confirmation email received
- ✅ Both assessors receive notifications
- ✅ Submission appears in Supabase
- ✅ Mobile responsive design works
- ✅ No console errors

---

## 📞 Support

If you encounter issues:

1. Check build logs in Netlify
2. Review environment variables
3. Test Supabase connection
4. Check Resend email logs
5. Review documentation in README.md

---

**Repository:** https://github.com/jdeweedata/awkward-apple-assessment
**Netlify:** https://app.netlify.com
**Supabase:** https://app.supabase.com
**Resend:** https://resend.com

Good luck with the deployment! 🚀
