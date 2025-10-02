##Key Features

-   **Live API Integration: Fetches real-time restaurant and menu data from Swiggy's API, providing a dynamic and realistic user experience.
-   **Dynamic Infinite Scroll: Effortlessly browse through a vast list of restaurants 
-   **Seamless Navigation: Built with React Router for a swift, single-page application experience, allowing users to navigate between the homepage, restaurant menus, and checkout with ease.
-   **Advanced Cart Management: Powered by Redux Toolkit, the application features a centralized state management system for a snappy and reliable shopping cart.
-   **Clean UI: crafted with Tailwind CSS.
-   **Shimmer UI Loading States:Elegant loading skeletons improve perceived performance while data is being fetched in the background.
-   **Robust Data Fetching:A custom React hook handles all API interactions, featuring resilient error handling and clear loading state management.

## Tech Stack

-   **React.js**: A JavaScript library for building user interfaces.
-   **Redux Toolkit**: The official, opinionated, batteries-included toolset for efficient Redux development.
-   **React Router v6**: The standard library for routing in React.
-   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
-   **Parcel**: A blazing-fast, zero-configuration web application bundler.

## How to Run Locally

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js (v16 or higher) and npm installed on your machine.

### Installation & Setup

1.  **Activate the CORS Proxy**
    -   This project uses a CORS proxy to fetch data from Swiggy's live API. Before starting, you **must** activate the demo server.
    -   Visit **[https://cors-anywhere.herokuapp.com/corsdemo](https://cors-anywhere.herokuapp.com/corsdemo)** and click the **"Request temporary access to the demo server"** button. This is required once per browsing session to enable the API calls.

2.  **Clone the repository**
    
    git clone [https://github.com/your-username/swiggy-clone.git](https://github.com/your-username/swiggy-clone.git)
    

3.  **Navigate to the project directory**
    
    cd swiggy-clone
    

4.  **Install NPM packages**
    
    npm install
  

5.  **Run the development server**
   
    npm start
   
    The application will be available at `http://localhost:1234`.

---

 A Note on CORS

Web browsers have a security feature called Cross-Origin Resource Sharing (CORS) that prevents a web page from making requests to a different domain than the one that served the page. Since this project runs on `localhost` but fetches data from `swiggy.com`, we need a proxy to bypass this restriction for development purposes.

This project is configured to use `cors-anywhere.herokuapp.com`, a public proxy. Activating it as described in the setup instructions is essential for the application to fetch data and function correctly.

