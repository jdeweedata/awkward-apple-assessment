# 🎯 START HERE - Skills Assessment Platform

Welcome! This is a complete, production-ready assessment platform for TK Manenzhe.

## ⚡ Quick Start (Choose One)

### Option A: I Want to Test Locally First (Recommended)

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev
```

Then open http://localhost:3000

**Before testing submissions:**
- Run the database schema (see Database Setup below)
- Update `ASSESSOR_EMAIL` in `.env` file

### Option B: I Want to Deploy Immediately

1. Run database schema (see Database Setup below)
2. Update `ASSESSOR_EMAIL` in `.env` file
3. Push to GitHub
4. Deploy to Netlify (see Deployment below)

## 🗄️ Database Setup (Required - 2 minutes)

**You must do this before the app will work:**

1. Go to https://app.supabase.com
2. Open project: `agyjovdugmtopasyvlng`
3. Click **SQL Editor** in the sidebar
4. Open the file `supabase-schema.sql` from this project
5. Copy all the SQL code
6. Paste into the SQL Editor
7. Click **Run**

✅ Done! The database is now ready.

## 📧 Email Setup (Already Configured)

The Resend API is already configured in your `.env` file. Emails will work immediately.

**Optional:** To use your own email domain instead of `onboarding@resend.dev`:

1. Add your domain at https://resend.com/domains
2. Verify DNS records
3. Update `lib/email.ts` lines 91 and 141 with your domain email

## 🌐 Deployment to Netlify

### Method 1: Via Dashboard (Easiest)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Assessment platform"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Netlify:**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Build settings are auto-detected
   - Add environment variables (see below)
   - Click "Deploy site"

3. **Environment Variables to Add:**
   ```
   NEXT_PUBLIC_SUPABASE_URL = https://agyjovdugmtopasyvlng.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY = sb_publishable_jKBISiYlrRyJEfyYGcjJZw_AQJ8Udc7
   RESEND_API_KEY = [copy from your .env file]
   ASSESSOR_EMAIL = jeffrey.de.wee@circletel.co.za,hrmanager@newgenmc.co.za
   ```

### Method 2: Via CLI (Faster)

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

## 📁 Project Files

```
awkward-apple-assessment/
├── START_HERE.md              ← You are here
├── GETTING_STARTED.md         ← Detailed quick start guide
├── README.md                  ← Complete documentation
├── SETUP_GUIDE.md             ← Step-by-step setup
├── DEPLOYMENT_CHECKLIST.md    ← Deployment checklist
├── PROJECT_SUMMARY.md         ← Project overview
├── supabase-schema.sql        ← Database schema (run this!)
├── .env                       ← Environment variables (update ASSESSOR_EMAIL)
├── .env.example               ← Template for environment variables
└── [other project files]
```

## ✅ Pre-Launch Checklist

- [ ] Dependencies installed (`npm install`)
- [ ] Database schema executed in Supabase
- [ ] `ASSESSOR_EMAIL` updated in `.env`
- [ ] Tested locally (`npm run dev`)
- [ ] Test submission completed successfully
- [ ] Received confirmation email
- [ ] Received assessor notification email
- [ ] Ready to deploy!

## 🎨 What This Platform Does

### For TK Manenzhe (The Candidate)

1. **Chooses a Challenge:**
   - Design Challenge (landing page mockup)
   - Development Challenge (mini-application)
   - AI Integration Challenge (AI-powered tool)

2. **Submits Work:**
   - Provides project link (GitHub, Figma, etc.)
   - Explains approach (max 300 words)
   - Records time spent

3. **Gets Confirmation:**
   - Instant email confirmation
   - Clear next steps
   - Expected timeline (3-5 business days)

### For You (The Assessor)

1. **Receives Notifications:**
   - Email for each submission
   - Candidate details
   - Direct link to work
   - Approach explanation

2. **Reviews Work:**
   - Technical Execution (40%)
   - Creative Problem-Solving (30%)
   - Code Quality (20%)
   - Attention to Detail (10%)

3. **Accesses Data:**
   - All submissions stored in Supabase
   - Searchable and exportable

## 🚨 Troubleshooting

### "Cannot connect to database"
- Did you run `supabase-schema.sql`? (See Database Setup above)
- Check Supabase credentials in `.env`

### "Email not sending"
- Check Resend API key in `.env`
- Look in spam folder
- Check Resend dashboard for logs

### "Build failed"
```bash
rm -rf .next node_modules
npm install
npm run build
```

## 📚 Need More Help?

- **Quick Start:** Read `GETTING_STARTED.md`
- **Full Documentation:** Read `README.md`
- **Setup Details:** Read `SETUP_GUIDE.md`
- **Deployment Steps:** Read `DEPLOYMENT_CHECKLIST.md`
- **Project Overview:** Read `PROJECT_SUMMARY.md`

## 🎯 Next Steps

1. ✅ Run database schema (2 minutes)
2. ✅ Update assessor email in `.env`
3. ✅ Test locally with `npm run dev`
4. ✅ Deploy to Netlify
5. ✅ Share URL with TK Manenzhe

---

**Everything is ready to go!** Just complete the database setup and you're live. 🚀

Questions? Check the documentation files listed above.
