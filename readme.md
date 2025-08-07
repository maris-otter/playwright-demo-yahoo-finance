# PLAYWRIGHT DEMO - YAHOO FINANCE

Testing the Yahoo Finance Application

## Setup

- For login tests ensure a secrets.env file is created locally with username and password set

## Running tests

npx playwright test <test_path>
ex: npx playwright test tests/home-page-tests.spec.ts
- tests are located in tests/ directory

## Test Data

Test data is stored in /test-data folder

## Test Cases

* Opening a Stock and viewing its data

1. Navigate to home page
2. Enter a stock name
3. Check that the open value and print it

* Home page smoke test

1. Navigate to home page
2. Ensure at least 1 news article
3. Ensure at least 1 stock ticker
4. Ensure sign in button appears
5. Ensure search bar appears

* Login page test (currently disabled due to capcha on yahoo login page)

1. Navigate to home page
2. Click sign in button
3. Login with username and password (stored in secrets.env file)
4. Verify account menu items

## Platform scope

- Chrome, Firefox, Webkit (Safari)