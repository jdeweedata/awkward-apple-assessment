# 🧪 Automated Testing with Playwright

## Overview

This project includes comprehensive end-to-end tests using Playwright to verify the complete assessment submission flow.

## Test Coverage

The automated tests cover:

✅ **Landing Page**
- Header and branding display
- Welcome section with instructions
- Three challenge cards (Design, Development, AI)
- Assessment criteria section
- Proceed button state management

✅ **Challenge Selection**
- Card selection interaction
- Visual feedback (border, icon color)
- Button enable/disable logic

✅ **Submission Form**
- Form navigation
- All form fields present
- Field validation (required, email, URL)
- Character limit enforcement (300 chars)
- Character counter display

✅ **Form Submission**
- Loading state during submission
- Success screen display
- Error handling

✅ **Navigation**
- Back to challenge selection
- Form to success flow

✅ **Responsive Design**
- Mobile viewport testing
- Element visibility on small screens

## Running Tests

### Prerequisites

Ensure the development server can start:
```bash
npm run dev
```

### Run All Tests (Headless)

```bash
npm test
```

This will:
- Start the Next.js dev server automatically
- Run all tests in headless Chrome
- Generate a report

### Run Tests with UI (Interactive)

```bash
npm run test:ui
```

Opens Playwright's interactive UI where you can:
- See tests running in real-time
- Debug failures
- Inspect DOM
- View network requests

### Run Tests with Browser Visible

```bash
npm run test:headed
```

Runs tests with the browser window visible (useful for debugging).

### View Test Report

After running tests:
```bash
npm run test:report
```

Opens an HTML report with:
- Test results
- Screenshots of failures
- Execution traces
- Performance metrics

## Test Structure

```
tests/
└── assessment-flow.spec.ts    # Main test suite
```

### Test Cases

1. **Landing Page Display** - Verifies all elements render correctly
2. **Challenge Selection** - Tests card selection and button state
3. **Form Navigation** - Ensures smooth navigation to submission form
4. **Field Validation** - Tests HTML5 validation
5. **Successful Submission** - Complete happy path test
6. **Loading State** - Verifies loading indicators
7. **Back Navigation** - Tests navigation flow
8. **Character Limit** - Enforces 300 character limit
9. **Character Counter** - Displays count correctly
10. **Mobile Responsive** - Tests on mobile viewport

## Mock Test Data

The tests use this mock data:

```javascript
{
  name: 'John Smith',
  email: 'john.smith@example.com',
  challenge: 'Development Challenge',
  projectLink: 'https://github.com/johnsmith/test-project',
  description: 'Built a responsive dashboard using React and Next.js...',
  timeSpent: '3 hours'
}
```

## Configuration

Test configuration is in `playwright.config.ts`:

- **Base URL**: http://localhost:3000
- **Browser**: Chromium (Desktop Chrome)
- **Timeout**: 30 seconds per test
- **Retries**: 2 retries in CI, 0 locally
- **Screenshots**: On failure only
- **Traces**: On first retry

## Continuous Integration

The tests are CI-ready and will:
- Run in headless mode
- Retry failed tests twice
- Generate HTML reports
- Capture screenshots and traces on failure

## Debugging Failed Tests

### 1. Run with UI
```bash
npm run test:ui
```

### 2. Run with Browser Visible
```bash
npm run test:headed
```

### 3. View Last Report
```bash
npm run test:report
```

### 4. Check Screenshots
Failed tests save screenshots to:
```
test-results/
└── [test-name]/
    └── test-failed-1.png
```

### 5. View Traces
Traces are saved on retry and can be viewed in the report.

## Adding New Tests

To add new tests, edit `tests/assessment-flow.spec.ts`:

```typescript
test('should do something', async ({ page }) => {
  await page.goto('/');
  
  // Your test code here
  await expect(page.getByText('Something')).toBeVisible();
});
```

## Best Practices

1. **Use Semantic Selectors**: Prefer `getByRole`, `getByLabel`, `getByText` over CSS selectors
2. **Wait for Elements**: Use `toBeVisible()` instead of `waitForTimeout()` when possible
3. **Isolate Tests**: Each test should be independent
4. **Use Page Objects**: For complex pages, consider page object pattern
5. **Keep Tests Fast**: Avoid unnecessary waits

## Common Issues

### Port Already in Use

If port 3000 is busy:
```bash
# Kill the process using port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Then run tests
npm test
```

### Tests Timeout

Increase timeout in `playwright.config.ts`:
```typescript
use: {
  timeout: 60000, // 60 seconds
}
```

### Browser Not Installed

If browsers aren't installed:
```bash
npx playwright install
```

## Performance

Tests typically complete in:
- **All tests**: ~30-45 seconds
- **Single test**: ~3-5 seconds

## CI/CD Integration

### GitHub Actions Example

```yaml
- name: Install dependencies
  run: npm ci

- name: Install Playwright Browsers
  run: npx playwright install --with-deps

- name: Run Playwright tests
  run: npm test

- name: Upload test results
  if: always()
  uses: actions/upload-artifact@v3
  with:
    name: playwright-report
    path: playwright-report/
```

## Resources

- [Playwright Documentation](https://playwright.dev)
- [Best Practices](https://playwright.dev/docs/best-practices)
- [API Reference](https://playwright.dev/docs/api/class-playwright)

---

**Happy Testing!** 🎭
