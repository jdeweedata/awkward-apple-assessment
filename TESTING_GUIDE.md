# 🧪 Complete Testing Guide - Assessment Platform

## Test Data for Submission

Use this mock data for testing:

```
Name: John Smith
Email: john.smith@example.com (or your real email to receive confirmation)
Challenge: Development Challenge
Project Link: https://github.com/johnsmith/test-project
Description: Built a responsive dashboard using React and Next.js. Implemented user authentication, data visualization with charts, and real-time updates. Focused on clean code architecture and mobile-first design principles. Added comprehensive error handling and loading states.
Time Spent: 3 hours
```

---

## Step-by-Step Testing Flow

### Step 1: Access the Application

**Local Testing:**
```bash
npm run dev
```
Then open: http://localhost:3000

**OR Production Testing:**
Open your Netlify URL (e.g., https://awkward-apple-assessment.netlify.app)

---

### Step 2: Landing Page Verification

**Check these elements:**

✅ **Header Section:**
- "Skills Assessment Platform" title
- "For TK Manenzhe - Digital Designer & Multimedia Expert" subtitle

✅ **Welcome Section:**
- Target icon with orange background
- "Welcome to Your Assessment" heading
- Assessment overview text
- Blue info box with clock icon showing "Estimated Time: 2-4 hours"

✅ **Three Challenge Cards:**

**Card 1: Design Challenge**
- Palette icon (orange when selected)
- "Create a landing page mockup for a fictional brand launch campaign"
- 4 checkmarks with details
- Deliverables section
- "2-3 hours" time estimate

**Card 2: Development Challenge**
- Code icon (orange when selected)
- "Build a functional mini-application using modern web technologies"
- 4 checkmarks with details
- Deliverables section
- "3-4 hours" time estimate

**Card 3: AI Integration Challenge**
- Sparkles icon (orange when selected)
- "Develop a small AI-powered tool for digital marketing or content creation"
- 4 checkmarks with details
- Deliverables section
- "3-4 hours" time estimate

✅ **Assessment Criteria Section:**
- Award icon
- 4 criteria boxes showing percentages (40%, 30%, 20%, 10%)

✅ **Bottom Button:**
- "Proceed to Submission" button (disabled until challenge selected)
- Gray text: "Please select a challenge to continue"

---

### Step 3: Select a Challenge

**Action:** Click on the **Development Challenge** card (middle card)

**Expected Result:**
- Card gets a blue/primary ring border
- Icon background changes to orange (#F5831F)
- Card appears "selected"
- "Proceed to Submission" button becomes enabled (orange)
- Helper text disappears

---

### Step 4: Proceed to Submission

**Action:** Click the **"Proceed to Submission"** button

**Expected Result:**
- Page transitions to submission form
- "Back to Challenge Selection" link appears at top
- Form title: "Submit Your Work"
- Shows selected challenge: "Challenge: Development Challenge" (in orange)

---

### Step 5: Fill Out the Submission Form

**Form Fields to Fill:**

1. **Full Name** (required)
   - Enter: `John Smith`
   - Field should have red asterisk

2. **Email Address** (required)
   - Enter: `john.smith@example.com` (or your real email)
   - Should validate email format

3. **Project Link** (required)
   - Enter: `https://github.com/johnsmith/test-project`
   - Should validate URL format
   - Helper text: "Provide a link to your GitHub repository, Figma file, or live demo"

4. **Approach & Explanation** (required, max 300 characters)
   - Enter: `Built a responsive dashboard using React and Next.js. Implemented user authentication, data visualization with charts, and real-time updates. Focused on clean code architecture and mobile-first design principles. Added comprehensive error handling and loading states.`
   - Character counter should show: "300/300 characters"

5. **Time Spent** (required)
   - Enter: `3 hours`

**Form Appearance:**
- All fields have clean borders
- Focus state shows orange ring
- Required fields marked with red asterisk
- Helper text in gray below fields

---

### Step 6: Submit the Form

**Action:** Click the **"Submit Assessment"** button (orange)

**Expected Behavior:**

1. **Loading State:**
   - Button shows spinning loader
   - Text changes to "Submitting..."
   - Button becomes disabled

2. **Success State (after 2-3 seconds):**
   - Form disappears
   - Success screen appears with:
     - Green circle with checkmark icon
     - "Submission Successful!" heading
     - Thank you message
     - Blue info box with next steps
     - "Return to Home" button

---

### Step 7: Verify Success Screen

**Check these elements:**

✅ **Success Icon:**
- Large green circle background
- White checkmark icon

✅ **Success Message:**
- "Submission Successful!" in large bold text
- Thank you message
- Mentions confirmation emails sent

✅ **Next Steps Box:**
- Blue background
- "Next Steps:" heading
- Timeline: "3-5 business days"

✅ **Return Button:**
- "Return to Home" button
- Clicking reloads the page

---

### Step 8: Verify Email Notifications

**Check 3 Email Inboxes:**

**1. Candidate Email (john.smith@example.com or your email):**

Subject: `Assessment Submission Confirmed - Development Challenge`

Content should include:
- Orange gradient header
- "✅ Assessment Submission Received"
- Personalized greeting: "Hi John Smith,"
- Submission details box (gray background):
  - Challenge: Development Challenge
  - Time Spent: 3 hours
  - Project Link (clickable)
- "What's Next?" section
- Assessment criteria list
- Timeline: 3-5 business days
- Professional footer

**2. Assessor 1 Email (jeffrey.de.wee@circletel.co.za):**

Subject: `New Submission: John Smith - Development Challenge`

Content should include:
- Dark gradient header
- "🎯 New Assessment Submission"
- Candidate information box:
  - Name: John Smith
  - Email: john.smith@example.com (clickable)
  - Challenge: Development Challenge
  - Time Spent: 3 hours
- Submission details box with orange "View Submission" button
- Yellow box with candidate's approach explanation
- Assessment criteria list
- Submission timestamp

**3. Assessor 2 Email (hrmanager@newgenmc.co.za):**
- Same content as Assessor 1

---

### Step 9: Verify Database Entry

**Go to Supabase:**
1. Visit: https://app.supabase.com
2. Open project: `agyjovdugmtopasyvlng`
3. Click **Table Editor** in sidebar
4. Select **submissions** table

**Verify Entry:**
- ✅ New row appears
- ✅ `name`: John Smith
- ✅ `email`: john.smith@example.com
- ✅ `challenge`: development
- ✅ `submission_url`: https://github.com/johnsmith/test-project
- ✅ `description`: Your entered text
- ✅ `time_spent`: 3 hours
- ✅ `submitted_at`: Current timestamp
- ✅ `id`: Auto-generated UUID

---

## Error Testing

### Test 1: Empty Form Submission

**Action:** Click "Submit Assessment" without filling any fields

**Expected:** Browser validation prevents submission (HTML5 required fields)

### Test 2: Invalid Email

**Action:** Enter `notanemail` in email field and submit

**Expected:** Browser shows "Please include an '@' in the email address"

### Test 3: Invalid URL

**Action:** Enter `not-a-url` in Project Link field and submit

**Expected:** Browser shows "Please enter a URL"

### Test 4: Character Limit

**Action:** Try to type more than 300 characters in description

**Expected:** Field stops accepting input at 300 characters

---

## Mobile Testing

**Test on mobile device or browser dev tools (F12 → Toggle device toolbar):**

✅ **Responsive Design:**
- Challenge cards stack vertically on mobile
- Forms are full-width and easy to fill
- Buttons are touch-friendly
- Text is readable without zooming

✅ **Touch Interactions:**
- Cards respond to tap
- Form fields focus properly
- Submit button works on tap

---

## Performance Testing

**Check in Browser Dev Tools (F12):**

✅ **Console Tab:**
- No errors in red
- No warnings (or only minor ones)

✅ **Network Tab:**
- Page loads in < 2 seconds
- API call to `/api/submit` succeeds (Status: 200)
- Response shows `{"success": true, ...}`

✅ **Lighthouse Audit:**
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90

---

## Troubleshooting

### Issue: Emails Not Received

**Check:**
1. Spam/Junk folders
2. Resend dashboard: https://resend.com/emails
3. Environment variables in Netlify
4. Console for email errors

### Issue: Submission Fails

**Check:**
1. Browser console for errors
2. Network tab for failed API calls
3. Supabase connection
4. Environment variables

### Issue: Database Not Updating

**Check:**
1. Supabase dashboard for errors
2. RLS policies are enabled
3. Anon key is correct
4. Table exists

---

## Success Criteria

✅ All visual elements render correctly  
✅ Challenge selection works  
✅ Form validation works  
✅ Submission succeeds  
✅ Success screen appears  
✅ Candidate receives confirmation email  
✅ Both assessors receive notification emails  
✅ Entry appears in Supabase  
✅ No console errors  
✅ Mobile responsive  

---

## Quick Test Checklist

- [ ] Open application URL
- [ ] Verify landing page loads
- [ ] Click Development Challenge card
- [ ] Card shows selected state
- [ ] Click "Proceed to Submission"
- [ ] Fill form with test data
- [ ] Click "Submit Assessment"
- [ ] See loading state
- [ ] See success screen
- [ ] Check candidate email inbox
- [ ] Check assessor 1 email inbox
- [ ] Check assessor 2 email inbox
- [ ] Verify Supabase entry
- [ ] No console errors

---

**Testing Complete!** 🎉

If all checks pass, your platform is ready for TK Manenzhe!
