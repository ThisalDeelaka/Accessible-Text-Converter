# Accessible Text Converter

This project is an **Accessible Text Converter** built for a Ballerina hackathon. It demonstrates a modern web application that integrates a **Ballerina** backend with a **React Vite** frontend using **Tailwind CSS** for styling and **Framer Motion** for animations.

## Features
- Convert text to **uppercase** or **lowercase**.
- Save text to a file.
- Modern **dark-themed** UI with animated transitions.
- Built with **Ballerina** for the backend and **React Vite** for the frontend.

## Project Structure

- **Backend (Ballerina)**: Manages the text conversion logic.
- **Frontend (React Vite)**: A sleek and modern interface for users to interact with the application.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (for running the React frontend)
- [Ballerina](https://ballerina.io/) (for running the backend)
- [Git](https://git-scm.com/) (for cloning the repository)

### Installation Instructions

Follow these steps to set up the project:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/accessible-text-converter.git
cd accessible-text-converter
2. Backend (Ballerina) Setup
Navigate to the backend folder:

bash
Copy code
cd accessible-text-converter/backend
Run the Ballerina Service: Ensure you have Ballerina installed. Then, run the following command:

bash
Copy code
bal run
The backend will start on http://localhost:8080.

3. Frontend (React Vite) Setup
Navigate to the frontend folder:

bash
Copy code
cd accessible-text-converter/frontend
Install Node.js dependencies:

bash
Copy code
npm install
Install Framer Motion for animations:

bash
Copy code
npm install framer-motion
Install React Icons for icons:

bash
Copy code
npm install react-icons
Run the React Vite frontend:

bash
Copy code
npm run dev
The frontend will start on http://localhost:5173.

Usage
Open your browser and go to http://localhost:5173.
Enter text into the input field.
Choose a conversion option (Uppercase, Lowercase, or Save to File).
