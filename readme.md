# Intern cypress proj

This repository contains Cypress test cases for testing the Home Page and API of Conqt.

## Running the Tests

### UI Tests

To run the UI tests, use the following command:

```sh
npx cypress open
```

or run in headless mode:

```sh
npx cypress run
```

### API Tests

To run the API tests:

```sh
npx cypress run --spec cypress/integration/api_tests.js
```

## Test Cases

### Home Page Tests

1. **Page Load Test**
   - Ensures the homepage loads without errors.
   - Verifies that the URL contains `conqt.com`.
   - Checks if the main heading (`h1`) is visible.

2. **Navigation Links Test**
   - Clicks on each menu button.
   - Ensures that clicking a menu button navigates away from the homepage.
   - Returns to the homepage after each navigation.

3. **Hero Banner Test**
   - Checks if the hero banner image is visible.

### API Tests

1. **Product List API Test**
   - Sends a GET request to `https://dev-api.conqt.com/api/product/Get-All-Products`.
   - Ensures the response status is `200`.
   - Validates that the response body contains a `products` property.

## Folder Structure

```
project-root/
├── cypress/
│   ├── integration/
│   │   ├── index.js
├── package.json
├── README.md
```