Project Name: Aura Dining
A modern web application for a global fusion restaurant where users can explore a diverse menu of signature dishes. The project focuses on a high-end visual experience and smooth navigation.
live url: 

Setup and Installation
Follow these steps to set up the project locally:

Clone the repository: 

Install dependencies: npm install

Environment Variables: Create a .env.local file in the root folder and add your backend URL: NEXT_PUBLIC_API_URL=http://localhost:5000

Run the development server: npm run dev

The application will be available at http://localhost:3000.

Route Summary
/ : Home page with hero section and gallery.

/foods : Menu page showing the full list of food items.

/foods/:id : Detailed view of a single food item.

/login : User login page (Mock login implementation).

Implemented Features
Detailed Food View: A side-by-side layout for large screens showing food images and information together.

Responsive Design: The layout switches to a column view on mobile devices for better readability.

Dynamic Data: Food details are fetched from the database based on the unique ID in the URL.

Skeleton Loading: Custom loading states to prevent layout shifts while fetching data.

Glassmorphism UI: Semi-transparent backgrounds and blurred effects for a modern look.

Mock Authentication: Includes a login form and mock login functionality for user access.

Brief Explanation of Features
Food Details Layout
The details page is designed to balance the image and the text description. On laptops, the image and info sections are side-by-side so the user can see everything at once. On smaller screens, it automatically stacks vertically.

Mock Login System
The project includes a login route with a dedicated form. This allows for a mock authentication flow where users can interact with login inputs before accessing certain parts of the site.

Data Management
Data is pulled dynamically from a MongoDB backend. The application handles the specific ID segments to ensure that clicking on any food card opens the correct details for that specific dish.

Styling and Theme
The project uses Tailwind CSS for styling. It features a dark theme with amber accents and subtle background glows to maintain a premium aesthetic across all pages.