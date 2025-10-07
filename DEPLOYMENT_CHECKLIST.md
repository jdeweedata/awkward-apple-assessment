# Deployment Checklist

## Pre-Deployment

- [ ] **Install Dependencies**
  ```bash
  npm install
  ```

- [ ] **Configure Environment Variables**
  - [ ] Update `ASSESSOR_EMAIL` in `.env` file
  - [ ] Verify Supabase credentials are correct
  - [ ] Verify Resend API key is valid

- [ ] **Set Up Supabase Database**
  - [ ] Log in to Supabase Dashboard
  - [ ] Navigate to SQL Editor
  - [ ] Run `supabase-schema.sql` script
  - [ ] Verify `submissions` table is created
  - [ ] Test database connection

- [ ] **Configure Resend Email**
  - [ ] Verify API key works
  - [ ] (Optional) Add custom domain in Resend
  - [ ] Update `from` email in `lib/email.ts` if using custom domain

- [ ] **Test Locally**
  ```bash
  npm run dev
  ```
  - [ ] Visit http://localhost:3000
  - [ ] Select a challenge
  - [ ] Fill out submission form
  - [ ] Submit and verify emails are sent
  - [ ] Check Supabase for stored submission

## Netlify Deployment

### Option 1: Git-Based Deployment (Recommended)

- [ ] **Push to Git Repository**
  ```bash
  git init
  git add .
  git commit -m "Initial commit: Skills assessment platform"
  git branch -M main
  git remote add origin <your-repo-url>
  git push -u origin main
  ```

- [ ] **Connect to Netlify**
  - [ ] Go to [Netlify Dashboard](https://app.netlify.com)
  - [ ] Click "Add new site" → "Import an existing project"
  - [ ] Select your Git provider (GitHub/GitLab/Bitbucket)
  - [ ] Choose the repository

- [ ] **Configure Build Settings**
  - Build command: `npm run build`
  - Publish directory: `.next`
  - Node version: `20`

- [ ] **Add Environment Variables**
  Go to Site settings → Environment variables and add:
  - [ ] `NEXT_PUBLIC_SUPABASE_URL`
  - [ ] `SUPABASE_SERVICE_ROLE_KEY`
  - [ ] `RESEND_API_KEY`
  - [ ] `ASSESSOR_EMAIL`

- [ ] **Deploy Site**
  - [ ] Click "Deploy site"
  - [ ] Wait for build to complete
  - [ ] Check deployment logs for errors

### Option 2: CLI Deployment

- [ ] **Install Netlify CLI**
  ```bash
  npm install -g netlify-cli
  ```

- [ ] **Login to Netlify**
  ```bash
  netlify login
  ```

- [ ] **Initialize Site**
  ```bash
  netlify init
  ```

- [ ] **Set Environment Variables**
  ```bash
  netlify env:set NEXT_PUBLIC_SUPABASE_URL "your-value"
  netlify env:set NEXT_PUBLIC_SUPABASE_ANON_KEY "your-value"
  netlify env:set RESEND_API_KEY "your-value"
  netlify env:set ASSESSOR_EMAIL "your-value"
  ```

- [ ] **Deploy**
  ```bash
  netlify deploy --prod
  ```

## Post-Deployment

- [ ] **Verify Deployment**
  - [ ] Visit deployed URL
  - [ ] Test all three challenge options
  - [ ] Submit a test assessment
  - [ ] Verify confirmation email is received
  - [ ] Verify assessor notification is received
  - [ ] Check Supabase for test submission

- [ ] **Performance Check**
  - [ ] Run Lighthouse audit
  - [ ] Verify page load time < 2s (Performance Priority)
  - [ ] Test on mobile devices
  - [ ] Test on low-bandwidth connection

- [ ] **Accessibility Check**
  - [ ] Run WAVE accessibility checker
  - [ ] Verify WCAG 2.1 AA compliance
  - [ ] Test keyboard navigation
  - [ ] Test with screen reader

- [ ] **Security Check**
  - [ ] Verify environment variables are not exposed
  - [ ] Test RLS policies in Supabase
  - [ ] Check HTTPS is enabled
  - [ ] Verify API routes are secure

## Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Environment Variables Not Working
- Ensure variables are set in Netlify dashboard
- Redeploy after adding variables
- Check variable names match exactly

### Database Connection Error
- Verify Supabase URL and key
- Check RLS policies allow inserts
- Test connection in Supabase dashboard

### Email Not Sending
- Verify Resend API key
- Check email domain is verified
- Review Resend logs for errors

## Maintenance

- [ ] **Monitor Submissions**
  - Check Supabase dashboard regularly
  - Review email delivery logs in Resend

- [ ] **Update Dependencies**
  ```bash
  npm outdated
  npm update
  ```

- [ ] **Backup Data**
  - Export submissions from Supabase periodically
  - Keep backup of environment variables

## Success Criteria

✅ Application loads in < 2 seconds  
✅ All three challenges are selectable  
✅ Submission form validates correctly  
✅ Data is stored in Supabase  
✅ Confirmation email sent to candidate  
✅ Notification email sent to assessor  
✅ Mobile responsive design works  
✅ Accessibility standards met  
✅ No console errors  

---

**Deployment Date**: _____________  
**Deployed URL**: _____________  
**Deployed By**: _____________
