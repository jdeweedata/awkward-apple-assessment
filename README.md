# Skills Assessment Platform for TK Manenzhe

An interactive web-based assessment platform that evaluates skills in digital design, web development, and AI integration. Built with Next.js, Tailwind CSS, Supabase, and Resend.

## 🎯 Overview

This platform presents three challenge options:
- **Design Challenge**: Create a landing page mockup for a brand launch campaign
- **Development Challenge**: Build a functional mini-application
- **AI Integration Challenge**: Develop an AI-powered tool for digital marketing

## 🚀 Features

- ✅ Modern, responsive UI with Tailwind CSS
- ✅ Three distinct challenge options
- ✅ Submission form with validation
- ✅ Supabase integration for data storage
- ✅ Automated email notifications via Resend
- ✅ Netlify-ready deployment configuration
- ✅ TypeScript for type safety
- ✅ Optimized for South African connectivity (Performance Priority)
- ✅ WCAG 2.1 AA compliant (Accessibility Standards)

## 📋 Prerequisites

- Node.js 20.x or higher
- npm or yarn
- Supabase account
- Resend account
- Netlify account (for deployment)

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Update the `.env` file with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Resend Configuration
RESEND_API_KEY=your_resend_api_key

# Assessor Email
ASSESSOR_EMAIL=assessor@example.com
```

**Note**: The `.env` file already contains these values. Verify they are correct for your setup.

### 3. Set Up Supabase Database

1. Log in to your [Supabase Dashboard](https://app.supabase.com)
2. Navigate to the SQL Editor
3. Run the SQL script from `supabase-schema.sql`

This will create:
- `submissions` table with proper schema
- Indexes for performance optimization
- Row Level Security (RLS) policies
- Public insert policy for submissions

### 4. Configure Resend

1. Sign up at [Resend](https://resend.com)
2. Create an API key
3. Add the API key to your `.env` file
4. Update the `from` email address in `lib/email.ts` (line 91 and 141) with your verified domain

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🌐 Deployment to Netlify

### Option 1: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### Option 2: Deploy via Git

1. Push your code to GitHub/GitLab/Bitbucket
2. Log in to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. Add environment variables in Netlify dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `RESEND_API_KEY`
   - `ASSESSOR_EMAIL`
7. Deploy!

### Environment Variables in Netlify

Go to **Site settings** → **Environment variables** and add:

| Variable | Value |
|----------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Your Supabase service role key |
| `RESEND_API_KEY` | Your Resend API key |
| `ASSESSOR_EMAIL` | Email address to receive notifications |

## 📁 Project Structure

```
awkward-apple-assessment/
├── app/
│   ├── api/
│   │   └── submit/
│   │       └── route.ts          # Submission API endpoint
│   ├── globals.css               # Global styles with Tailwind
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main landing page
├── components/
│   └── SubmissionForm.tsx        # Submission form component
├── lib/
│   ├── supabase.ts               # Supabase client configuration
│   └── email.ts                  # Email notification functions
├── .env                          # Environment variables
├── netlify.toml                  # Netlify configuration
├── supabase-schema.sql           # Database schema
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.ts            # Tailwind CSS configuration
└── README.md                     # This file
```

## 🎨 Design Principles

This project follows these core principles:

- **Simplicity First (SF)**: Clean, straightforward implementation
- **Performance Priority (PP)**: Optimized for low-bandwidth scenarios
- **Accessibility Standards (AS)**: WCAG 2.1 AA compliant
- **Security By Design (SBD)**: Secure data handling and API usage
- **Modern Development (MD)**: Component-based architecture

## 📊 Assessment Criteria

Submissions are evaluated based on:

1. **Technical Execution (40%)** - Quality of implementation and technical choices
2. **Creative Problem-Solving (30%)** - Innovation and approach to challenges
3. **Code Quality & Best Practices (20%)** - Clean code, documentation, and standards
4. **Attention to Detail & Polish (10%)** - Refinement and professional finish

## 🔧 Troubleshooting

### Supabase Connection Issues

- Verify `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are correct
- Ensure the `submissions` table exists in your Supabase database
- Check RLS policies allow public inserts

### Email Not Sending

- Verify `RESEND_API_KEY` is valid
- Check the `from` email address is from a verified domain
- Review Resend dashboard for error logs

### Build Errors

- Clear `.next` folder: `rm -rf .next`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Ensure Node.js version is 20.x or higher

## 📝 License

This project is created for assessment purposes.

## 🤝 Support

For questions or issues, contact the assessment team.

---

Built with ❤️ using Next.js, Tailwind CSS, Supabase, and Resend
