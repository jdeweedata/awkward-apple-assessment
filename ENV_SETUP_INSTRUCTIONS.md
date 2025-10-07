# Environment Variables Setup

## ✅ What You Need to Add to Your `.env` File

Since the `.env` file already contains Supabase and Resend credentials, you only need to add the assessor emails.

### Add This Line to Your `.env` File

Add this at the end of your `.env` file (after line 22):

```env
# Assessor Emails (receives submission notifications)
# For multiple assessors, separate emails with commas
ASSESSOR_EMAIL=jeffrey.de.wee@circletel.co.za,hrmanager@newgenmc.co.za
```

### Complete `.env` File Structure

Your `.env` file should look like this:

```env
# Google Maps Configuration
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyC-kOFKZqhhmLXgEjXV7upYs_l1s_h3VzU
GOOGLE_CLIENT_ID=686548425863-enjs9uf5tstcs04o5o5lhbdlo7kvdi9l.app
GOOGLE_CLIENT_SECRET=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

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://agyjovdugmtopasyvlng.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_jKBISiYlrRyJEfyYGcjJZw_AQJ8Udc7

# Netcash Configuration (local testing)
NEXT_PUBLIC_NETCASH_PCI_VAULT_KEY=3143ee79-0c96-4909-968e-5a716fd19a65
NEXT_PUBLIC_NETCASH_SERVICE_KEY=7928c6de-219f-4b75-9408-ea0e53be8c87

# Zoho MCP Configuration
ZOHO_MCP_URL=https://circletel-zoho-900485550.zohomcp.com/mcp/message
ZOHO_MCP_KEY=e2f4039d67d5fb236177fbce811a0ff0

# Resend Configuration (for email sending)
RESEND_API_KEY=re_QhMu7F2n_JycLfeqNt8RNA692iWYcT6tM

# Optional: If you need organization ID for direct API fallback
ZOHO_ORGANIZATION_ID=882144792

# Assessor Emails (receives submission notifications)
# For multiple assessors, separate emails with commas
ASSESSOR_EMAIL=jeffrey.de.wee@circletel.co.za,hrmanager@newgenmc.co.za
```

## 📧 How Multiple Assessor Emails Work

When a candidate submits their assessment:

1. **Candidate receives**: Confirmation email at their submitted email address
2. **Both assessors receive**: Notification email with:
   - Candidate's name and email
   - Selected challenge
   - Link to submission
   - Candidate's approach explanation
   - Time spent

The system automatically sends to all emails listed in `ASSESSOR_EMAIL` (comma-separated).

## ✅ Quick Verification

After adding the assessor emails:

1. Save the `.env` file
2. Run `npm run dev`
3. Test a submission
4. Check that both assessors receive the notification email

## 🚀 For Netlify Deployment

When deploying to Netlify, add this environment variable:

**Variable Name**: `ASSESSOR_EMAIL`  
**Value**: `jeffrey.de.wee@circletel.co.za,hrmanager@newgenmc.co.za`

Both assessors will receive notifications for all submissions.
