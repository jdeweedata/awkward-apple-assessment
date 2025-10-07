# 🚀 Deploy to Netlify - Quick Guide

## Option 1: Deploy via Netlify Dashboard (Recommended - 5 minutes)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Skills Assessment Platform"
```

Then create a new repository on GitHub and push:

```bash
git remote add origin https://github.com/YOUR_USERNAME/awkward-apple-assessment.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Netlify

1. Go to https://app.netlify.com
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** and authorize Netlify
4. Select your repository: `awkward-apple-assessment`
5. Build settings (should auto-detect):
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Node version:** 20

### Step 3: Add Environment Variables

In Netlify, go to **Site settings** → **Environment variables** → **Add a variable**

Add these 4 variables:

| Variable Name | Value |
|--------------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://agyjovdugmtopasyvlng.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `sb_publishable_jKBISiYlrRyJEfyYGcjJZw_AQJ8Udc7` |
| `RESEND_API_KEY` | `re_QhMu7F2n_JycLfeqNt8RNA692iWYcT6tM` |
| `ASSESSOR_EMAIL` | `jeffrey.de.wee@circletel.co.za,hrmanager@newgenmc.co.za` |

### Step 4: Deploy

Click **"Deploy site"** and wait 2-3 minutes for the build to complete.

---

## Option 2: Deploy via Netlify CLI (Faster - 2 minutes)

### Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Login to Netlify

```bash
netlify login
```

This will open a browser window to authorize.

### Deploy

```bash
netlify deploy --prod
```

Follow the prompts:
- **Create & configure a new site:** Yes
- **Team:** Select your team
- **Site name:** awkward-apple-assessment (or your preferred name)
- **Publish directory:** .next

### Set Environment Variables

```bash
netlify env:set NEXT_PUBLIC_SUPABASE_URL "https://agyjovdugmtopasyvlng.supabase.co"
netlify env:set NEXT_PUBLIC_SUPABASE_ANON_KEY "sb_publishable_jKBISiYlrRyJEfyYGcjJZw_AQJ8Udc7"
netlify env:set RESEND_API_KEY "re_QhMu7F2n_JycLfeqNt8RNA692iWYcT6tM"
netlify env:set ASSESSOR_EMAIL "jeffrey.de.wee@circletel.co.za,hrmanager@newgenmc.co.za"
```

### Redeploy with Environment Variables

```bash
netlify deploy --prod
```

---

## ✅ Post-Deployment Checklist

After deployment:

- [ ] Visit your deployed URL
- [ ] Test challenge selection
- [ ] Submit a test assessment
- [ ] Verify confirmation email received
- [ ] Verify both assessors received notification
- [ ] Check Supabase for test submission
- [ ] Test on mobile device
- [ ] Share URL with TK Manenzhe

---

## 🎯 Your Deployed Site

Once deployed, you'll get a URL like:
- `https://awkward-apple-assessment.netlify.app`
- Or your custom domain

**Share this URL with TK Manenzhe to begin the assessment!**

---

## 🔧 Troubleshooting

### Build fails
- Check that all environment variables are set
- Verify Node version is 20.x
- Check build logs in Netlify dashboard

### Emails not sending
- Verify Resend API key is correct
- Check Resend dashboard for logs
- Ensure assessor emails are correct

### Database errors
- Verify Supabase URL and anon key
- Check that submissions table exists
- Verify RLS policies are enabled

---

## 📞 Need Help?

Check the full deployment guide in `DEPLOYMENT_CHECKLIST.md`
