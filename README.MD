
# Instagram Password Reset

This is a Node.js script designed to simulate a password reset request to Instagram using the Instagram API. The script allows the user to input either an email address or a username and then attempts to send a password reset request. **Please note**: This script is intended for educational purposes only.

## Features
- Takes either a username or email address as input.
- Generates random data to simulate a password reset request.
- Sends a POST request to Instagram’s API to initiate the password reset process.
- Outputs response from Instagram's API.

## Requirements
Before running the script, ensure that the following dependencies are installed:

- **Node.js**: This script requires Node.js to run. If you don't have Node.js installed, you can download it from [here](https://nodejs.org/).
- **Required npm packages**:
  - `node-fetch`: Used for making HTTP requests.
  - `chalk`: Used for colored terminal output.
  - `crypto`: Built-in Node.js library to generate random UUIDs and strings.
  - `readline`: Built-in Node.js library to handle user input.

To install the required dependencies, run:

```bash
npm install node-fetch chalk
```

## Usage

### 1. Clone the repository:
Clone this repository to your local machine:

```bash
git clone https://github.com/infalibless/instagram-password-reset.git
cd instagram-password-reset-simulation
```

### 2. Run the script:
Run the script using Node.js:

```bash
node reset.js
```

### 3. Input:
When prompted, input either an email address or a username:

```bash
[ + ]  email / username: [your input here]
```

The script will then generate random values and send a simulated password reset request to Instagram.

### 4. Output:
The script will print the result of the password reset attempt to the console. If the request is successful or contains relevant information, it will be displayed.

## Important Notes
- **Educational Purposes Only**: This code is for educational purposes and should not be used to attempt unauthorized access to Instagram accounts or any other services.
- **Ethical Considerations**: Ensure you have permission to use this script, especially if testing on live accounts. Do not use this for malicious purposes.

## Important Notes
- **Educational Purposes Only**: This code is for educational purposes and should not be used to attempt unauthorized access to Instagram accounts or any other services.
- **Ethical Considerations**: Ensure you have permission to use this script, especially if testing on live accounts. Do not use this for malicious purposes.
