# Eye Tracker, Mouse Tracker & Code Editor Demo

This demo project demonstrates how to use **Mantine UI**, **Vite**, **WebGazer**, and **CodeMirror** to build an interactive web application for eye and mouse tracking alongside a functional code editor. The project serves as part of a study to evaluate the integration and usage of these technologies for developing my thesis.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
- [Development Notes](#development-notes)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used
This project utilizes the following technologies:
- **Mantine UI**: A modern React component library for building user interfaces.
- **Vite**: A next-generation, fast, and lightweight development build tool.
- **WebGazer**: A library for real-time eye tracking using the webcam.
- **CodeMirror**: A versatile text editor used for displaying and editing code.

## Features
- **Eye Tracking**: Real-time eye tracking using WebGazer.
- **Mouse Tracking**: Tracks mouse movements on the screen.
- **Code Editor**: A fully functional code editor using CodeMirror with syntax highlighting.
- **UI**: Built with Mantine UI to provide a responsive and user-friendly interface.

## Setup Instructions

To get started with the demo app, follow these steps:

### Prerequisites
- **Node.js**: Ensure you have Node.js installed. If not, download and install it from [nodejs.org](https://nodejs.org/).
- **Git**: You'll need Git to clone this repository.

### Step 1: Clone the Repository
Clone this repository to your local machine using Git.

```
git clone https://github.com/jhndrncrz/<this_repo>.git
cd eye-mouse-tracker-code-editor
```

### Step 2: Install Dependencies
Install all required dependencies using `npm` (or `yarn` if you prefer):

```
npm install
```

This will install the necessary packages, including Vite, Mantine UI, WebGazer, and CodeMirror.

### Step 3: Configure WebGazer (Optional)
WebGazer uses the webcam for eye tracking. For the best experience, ensure you have a webcam enabled in your browser. You may need to adjust browser permissions to allow webcam access.

### Step 4: Environment Configuration (Optional)
If you need to use a custom configuration, such as environment variables (e.g., API keys or analytics), create a `.env` file in the root directory and add your custom configuration there.

Example `.env` file:
```
VITE_API_KEY=your-api-key
```

## Running the Application

Once you have completed the setup instructions, you can run the app locally.

### Step 1: Start the Development Server
Run the following command to start the Vite development server:

```
npm run dev
```

Vite will start the development server, and you can access the app in your browser at [http://localhost:5173](http://localhost:5173).

### Step 2: Open the App in Your Browser
Once the server is running, open your browser and navigate to the local URL (usually `http://localhost:5173`) to interact with the demo app.

The app should automatically detect your webcam and start tracking your eye movements using WebGazer. You can also track your mouse movements on the screen. The integrated code editor (CodeMirror) allows you to edit code in real-time.

## Development Notes
- **Mantine UI**: The UI components are designed for simplicity and accessibility. You can extend the UI with more components as needed.
- **Vite**: Vite is used for fast development builds and hot module reloading (HMR), making development quick and efficient.
- **WebGazer**: WebGazer provides the core functionality for real-time eye tracking. Keep in mind that performance may vary depending on the quality of your webcam.
- **CodeMirror**: The CodeMirror editor is configured for syntax highlighting and basic code editing functionality. You can extend it with more features like linting, autocompletion, etc.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Contributions are welcome!

### Steps for Contributing:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with a meaningful message.
4. Push your changes and open a pull request.

### Code Style:
- Use Prettier for code formatting.
- Follow the existing code structure and naming conventions.

---

**Note:** This project is for demonstration and research purposes and may not be suitable for production environments without further optimizations and testing.

---

Thank you for checking out this demo! I hope this study helps to understand the potential of combining eye tracking, mouse tracking, and code editing for improved user experience and interaction design.
