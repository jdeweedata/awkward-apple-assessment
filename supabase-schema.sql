-- Create submissions table
CREATE TABLE IF NOT EXISTS submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  challenge VARCHAR(50) NOT NULL,
  submission_url TEXT NOT NULL,
  description TEXT NOT NULL,
  time_spent VARCHAR(100) NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_submissions_email ON submissions(email);

-- Create index on challenge for filtering
CREATE INDEX IF NOT EXISTS idx_submissions_challenge ON submissions(challenge);

-- Create index on submitted_at for sorting
CREATE INDEX IF NOT EXISTS idx_submissions_submitted_at ON submissions(submitted_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for the submission form)
CREATE POLICY "Allow public inserts" ON submissions
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow reads only for authenticated users (assessors)
CREATE POLICY "Allow authenticated reads" ON submissions
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Add comment to table
COMMENT ON TABLE submissions IS 'Stores assessment submissions from candidates';
