# Celertus Technologies - Official Website Frontend



Welcome to the official source code repository for the **Celertus Technologies** company website. This project is a modern, responsive frontend application built with React, serving as our primary digital presence and powered by dynamic data from the Google Sheets API.

---

## ✨ About The Project

Celertus Technologies is a software solutions consultancy dedicated to delivering high-velocity, scalable, and sophisticated digital products. Our name, derived from "Celerity" (swiftness of movement), reflects our commitment to agile development and efficient delivery.

This website serves as our digital storefront, showcasing our services, portfolio, and company vision. It is designed to be performant, accessible, and provide a seamless user experience. The site dynamically fetches data for sections like portfolios or testimonials directly from a Google Sheet, allowing for easy content updates without code changes.

### 🚀 Live Demo

**[View the live website](https://celertus.germanysoon.com)**

### 📸 Screenshot


*(**Action Required:** Add a screenshot of your website's homepage here.)*

---

## 🛠️ Tech Stack

This project is built using a modern frontend technology stack and is deployed on a robust infrastructure.

-   **Framework:** ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
-   **API Integration:** ![Google Sheets API](https://img.shields.io/badge/Google%20Sheets%20API-34A853?style=for-the-badge&logo=google-sheets&logoColor=white)
-   **Routing:** [React Router](https://reactrouter.com/) for client-side navigation.
-   **Styling:** *(**Action Required:** Choose the one you used, e.g., Tailwind CSS, Material-UI, Styled Components, etc.)*
-   **Deployment:** ![Hostinger](https://img.shields.io/badge/Hostinger-673DE6?style=for-the-badge&logo=hostinger&logoColor=white) VPS served by ![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)

---

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm (or yarn) installed on your machine.
-   **Node.js** (v18.x or later recommended)
-   **npm** or **yarn**

### Local Setup & Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    ```
    *(**Action Required:** Replace the URL with your repository's clone URL.)*

2.  **Navigate to the project directory:**
    ```sh
    cd your-repo-name
    ```

3.  **Install dependencies:**
    ```sh
    npm install
    ```
    or if you use yarn:
    ```sh
    yarn install
    ```

4.  **Set up Environment Variables:**
    This project connects to the Google Sheets API to fetch data. You will need to create a local environment file with the necessary credentials.

    Create a file named `.env` in the root of the project directory. Copy the contents of `.env.example` (if you have one) or use the template below:

    ```env
    # .env file
    # --- Google Sheets API Credentials ---
    REACT_APP_GOOGLE_API_KEY=your_api_key_here
    REACT_APP_GOOGLE_SHEETS_CLIENT_ID=your_client_id_here
    REACT_APP_SPREADSHEET_ID=your_google_sheet_id_here
    ```
    *(**Important Action Required:** Replace the variable names and values with the actual credentials from your Google Cloud Platform project. You can get these credentials by setting up a project in the [Google Cloud Console](https://console.cloud.google.com/).)*

5.  **Run the development server:**
    The application will start on `http://localhost:3000`.
    ```sh
    npm start
    ```
    or
    ```sh
    yarn start
    ```

### Building for Production

To create a production-ready build of the application, run:
```sh
npm run build