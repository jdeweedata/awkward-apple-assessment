// Quick API test script
// Run with: node test-api.js

const testSubmission = async () => {
  console.log('🧪 Testing API endpoint...\n');

  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    challenge: 'development',
    submissionUrl: 'https://github.com/test/repo',
    description: 'Test submission to verify API is working correctly.',
    timeSpent: '1 hour'
  };

  try {
    console.log('📤 Sending POST request to http://localhost:3000/api/submit');
    console.log('📦 Data:', testData);
    console.log('');

    const response = await fetch('http://localhost:3000/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    console.log('📥 Response status:', response.status);
    
    const data = await response.json();
    console.log('📥 Response data:', data);
    console.log('');

    if (response.ok) {
      console.log('✅ API is working correctly!');
      console.log('✅ Submission ID:', data.submissionId);
    } else {
      console.log('❌ API returned an error');
      console.log('Error:', data.error);
    }
  } catch (error) {
    console.log('❌ Failed to connect to API');
    console.log('Error:', error.message);
    console.log('');
    console.log('Make sure dev server is running:');
    console.log('  npm run dev');
  }
};

testSubmission();
