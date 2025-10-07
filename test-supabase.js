// Test Supabase Connection
// Run with: node test-supabase.js

require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

console.log('🔍 Testing Supabase Configuration...\n');

// Check environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log('Environment Variables:');
console.log('✓ NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? '✅ Set' : '❌ Missing');
console.log('✓ NEXT_PUBLIC_SUPABASE_ANON_KEY:', supabaseAnonKey ? '✅ Set' : '❌ Missing');
console.log('');

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing required environment variables!');
  console.log('\nPlease add to your .env file:');
  console.log('NEXT_PUBLIC_SUPABASE_URL=https://agyjovdugmtopasyvlng.supabase.co');
  console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_jKBISiYlrRyJEfyYGcjJZw_AQJ8Udc7');
  process.exit(1);
}

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

console.log('🔌 Attempting to connect to Supabase...\n');

// Test connection by checking if submissions table exists
async function testConnection() {
  try {
    // Try to query the submissions table (should exist after running schema)
    const { data, error, count } = await supabase
      .from('submissions')
      .select('*', { count: 'exact', head: true });

    if (error) {
      if (error.message.includes('relation "public.submissions" does not exist')) {
        console.log('⚠️  Connection successful, but submissions table not found!');
        console.log('');
        console.log('📋 Next step: Run the database schema');
        console.log('   1. Go to https://app.supabase.com');
        console.log('   2. Open project: agyjovdugmtopasyvlng');
        console.log('   3. Click SQL Editor');
        console.log('   4. Run the contents of supabase-schema.sql');
        console.log('');
        return false;
      }
      
      console.error('❌ Supabase Error:', error.message);
      console.log('');
      console.log('Possible issues:');
      console.log('  - Check if the anon key is correct');
      console.log('  - Verify the Supabase URL is correct');
      console.log('  - Check if RLS policies are configured');
      return false;
    }

    console.log('✅ Successfully connected to Supabase!');
    console.log('✅ Submissions table exists');
    console.log(`📊 Current submissions count: ${count || 0}`);
    console.log('');
    console.log('🎉 Everything is working correctly!');
    console.log('');
    console.log('Next steps:');
    console.log('  1. Run: npm run dev');
    console.log('  2. Open: http://localhost:3000');
    console.log('  3. Test a submission');
    console.log('');
    return true;

  } catch (err) {
    console.error('❌ Unexpected error:', err.message);
    return false;
  }
}

// Run the test
testConnection().then(success => {
  process.exit(success ? 0 : 1);
});
