# Getting Started - Skills Assessment Platform

## 🚀 Quick Start (5 Minutes)

### 1. Install Dependencies (1 min)

```bash
npm install
```

### 2. Update Assessor Email (30 sec)

Open `.env` file and update this line:

```env
ASSESSOR_EMAIL=your-email@example.com
```

Replace with the email that should receive submission notifications.

### 3. Set Up Database (2 min)

1. Go to https://app.supabase.com
2. Open project: `agyjovdugmtopasyvlng`
3. Click **SQL Editor** in sidebar
4. Open `supabase-schema.sql` from this project
5. Copy all contents and paste into SQL Editor
6. Click **Run** button

✅ Database is now ready!

### 4. Test Locally (1 min)

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### 5. Test Submission (Optional)

1. Select a challenge
2. Click "Proceed to Submission"
3. Fill out the form with test data
4. Submit
5. Check your email for confirmation
6. Check assessor email for notification
7. Check Supabase dashboard for stored data

## 📦 What's Included

- ✅ Complete Next.js application
- ✅ Supabase integration (already configured)
- ✅ Resend email service (already configured)
- ✅ Three challenge options
- ✅ Submission form with validation
- ✅ Email notifications
- ✅ Netlify deployment config
- ✅ Comprehensive documentation

## 🌐 Deploy to Netlify

### Option 1: Via Dashboard (Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to https://app.netlify.com
   - Click "Add new site"
   - Import from Git
   - Select your repository

3. **Configure**
   - Build command: `npm run build` (auto-detected)
   - Publish directory: `.next` (auto-detected)

4. **Add Environment Variables**
   
   Go to Site settings → Environment variables:
   
   ```
   NEXT_PUBLIC_SUPABASE_URL = https://agyjovdugmtopasyvlng.supabase.co
   SUPABASE_SERVICE_ROLE_KEY = [copy from .env]
   RESEND_API_KEY = [copy from .env]
   ASSESSOR_EMAIL = [your email]
   ```

5. **Deploy!**

### Option 2: Via CLI (Faster)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

Follow the prompts and add environment variables when asked.

## 📧 Email Configuration

The platform uses Resend for emails. Current setup:

- ✅ API key is configured
- ✅ Uses default `onboarding@resend.dev` sender
- ⚠️ For production, add your own domain:

1. Go to https://resend.com/domains
2. Add your domain
3. Verify DNS records
4. Update `lib/email.ts`:
   - Line 91: Change sender email
   - Line 141: Change sender email

## 🗄️ Database

The Supabase database is already configured with:

- ✅ Project URL: `https://agyjovdugmtopasyvlng.supabase.co`
- ✅ Service role key in `.env`
- ⚠️ Needs schema setup (see step 3 above)

After running the schema:
- `submissions` table will be created
- Security policies will be enabled
- Indexes will be optimized

## 📱 Features

### For Candidates (TK Manenzhe)

1. **Choose Challenge**
   - Design Challenge (2-3 hours)
   - Development Challenge (3-4 hours)
   - AI Integration Challenge (3-4 hours)

2. **Submit Work**
   - Enter name and email
   - Provide project link (GitHub/Figma/etc)
   - Explain approach (max 300 words)
   - Record time spent

3. **Receive Confirmation**
   - Instant email confirmation
   - Submission details recap
   - Next steps and timeline

### For Assessors

1. **Receive Notifications**
   - Email for each submission
   - Candidate details
   - Direct link to work
   - Approach explanation

2. **Review Criteria**
   - Technical Execution (40%)
   - Creative Problem-Solving (30%)
   - Code Quality (20%)
   - Attention to Detail (10%)

3. **Access Data**
   - All submissions in Supabase
   - Searchable and filterable
   - Export capabilities

## 🔧 Troubleshooting

### "Module not found" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Database connection fails
- Verify Supabase URL in `.env`
- Check service role key is correct
- Ensure schema was run successfully

### Emails not sending
- Verify Resend API key
- Check spam folder
- Review Resend dashboard logs

### Build fails
```bash
rm -rf .next
npm run build
```

## 📚 Documentation

- **README.md** - Complete project documentation
- **SETUP_GUIDE.md** - Detailed setup instructions
- **DEPLOYMENT_CHECKLIST.md** - Step-by-step deployment
- **PROJECT_SUMMARY.md** - Project overview and features
- **GETTING_STARTED.md** - This file (quick start)

## ✅ Verification Checklist

Before deploying to production:

- [ ] Dependencies installed (`npm install`)
- [ ] Assessor email updated in `.env`
- [ ] Database schema run in Supabase
- [ ] Local test successful (`npm run dev`)
- [ ] Test submission completed
- [ ] Emails received (candidate + assessor)
- [ ] Data visible in Supabase
- [ ] Environment variables ready for Netlify
- [ ] Code pushed to Git repository

## 🎯 Next Steps

1. ✅ Complete setup (steps 1-3 above)
2. ✅ Test locally (step 4)
3. ✅ Deploy to Netlify
4. ✅ Share URL with TK Manenzhe
5. ✅ Monitor submissions in Supabase

## 💡 Tips

- **Test thoroughly** before sharing with candidate
- **Check spam folders** for test emails
- **Monitor Supabase** dashboard during assessment
- **Keep Resend logs** open during testing
- **Use Netlify preview** deployments for testing

## 🆘 Need Help?

1. Check the troubleshooting section above
2. Review `README.md` for detailed docs
3. Check Supabase logs for database errors
4. Check Resend logs for email errors
5. Check Netlify build logs for deployment errors

---

**Ready to launch!** 🚀

Follow the 5-minute quick start above and you'll be live in no time.
