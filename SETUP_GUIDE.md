# Quick Setup Guide

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Configure Environment Variables

The `.env` file is already configured with Supabase and Resend credentials. You only need to update:

```env
ASSESSOR_EMAIL=your-email@example.com
```

Replace `your-email@example.com` with the email address that should receive submission notifications.

## Step 3: Set Up Supabase Database

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Open your project: `agyjovdugmtopasyvlng`
3. Navigate to **SQL Editor**
4. Copy and paste the contents of `supabase-schema.sql`
5. Click **Run** to execute the SQL

This creates the `submissions` table with proper security policies.

## Step 4: Verify Resend Configuration

The Resend API key is already configured. To use a custom domain for emails:

1. Go to [Resend Dashboard](https://resend.com/domains)
2. Add and verify your domain
3. Update the `from` email in `lib/email.ts`:
   - Line 91: Change `'Assessment Platform <onboarding@resend.dev>'`
   - Line 141: Change `'Assessment Platform <onboarding@resend.dev>'`
   - Replace with your verified domain email

## Step 5: Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Step 6: Deploy to Netlify

### Via Netlify Dashboard:

1. Push code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click **Add new site** → **Import an existing project**
4. Connect your repository
5. Build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `RESEND_API_KEY`
   - `ASSESSOR_EMAIL`
7. Click **Deploy site**

### Via Netlify CLI:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

## Testing the Application

1. **Select a Challenge**: Choose from Design, Development, or AI Integration
2. **Fill Submission Form**: Enter name, email, project link, description, and time spent
3. **Submit**: Click "Submit Assessment"
4. **Verify Emails**: 
   - Candidate receives confirmation email
   - Assessor receives notification with submission details

## Troubleshooting

### Database Connection Error
- Verify Supabase credentials in `.env`
- Ensure `submissions` table exists (run `supabase-schema.sql`)

### Email Not Sending
- Check Resend API key is valid
- Verify `from` email domain is verified in Resend

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

## Support

For issues, check the main `README.md` or contact the development team.
