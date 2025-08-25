# Restaurant Reservation System

This project is a restaurant reservation system that allows users to make reservations at various restaurants. It includes both frontend and backend components, providing a complete solution for managing restaurant reservations.

## Features

- **User Registration**: Users can register using their name, email, phone number, and select a restaurant for reservation.
- **Reservation Form**: Includes fields for entering personal details, reservation date and time, and selecting a restaurant from a dropdown list.
- **Validation**: Frontend and backend validation to ensure all required fields are filled and data is in the correct format.
- **Error Handling**: Comprehensive error handling to provide meaningful feedback to users in case of issues.
- **Responsive Design**: Responsive UI to ensure a seamless experience across different devices.

## Future Aspects

- **Payment Integration**: Implement payment gateways to allow users to prepay or pay at the restaurant upon reservation.
- **Order Placement**: Extend functionality to enable users to place orders in advance along with their reservation.
- **Admin Dashboard**: Create an admin interface to manage reservations, view analytics, and update restaurant information.
- **Email Notifications**: Send email confirmations upon successful reservation and reminders closer to the reservation date.
- **User Profiles**: Allow users to create profiles to manage their reservations and preferences easily.

## Technologies Used

- **Frontend**: React.js, Axios, React Router, React Select, Toastify, Vite
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Others**: CORS, Dotenv, Validator

## ScreenShots
>A graphical overview of some components of the web application,

1. **Landing Page**


![image](https://github.com/Adarsh370/Restaurant-Reservation/assets/100296448/253032f9-dfe0-4ef4-bc1c-3114cf057afd)


2. **Service**

![image](https://github.com/Adarsh370/Restaurant-Reservation/assets/100296448/2fa6182e-0589-48cc-a163-c6434f5815f8)


3. **Reservation Page**
   
![image](https://github.com/Adarsh370/Restaurant-Reservation/assets/100296448/7e56d080-1add-4828-9a89-b1f78f25c36e)


## Setup Instructions

### Prerequisites

- Node.js (v14.x or later)
- MongoDB (Atlas or local instance)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd restaurant-main
   ```

2. **Install dependencies**

   ```bash
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Configure environment variables**

   The backend configuration is already set up in `backend/config/config.env` with:
   - MongoDB Atlas connection string
   - Port: 4000
   - Frontend URL: http://localhost:5173

### Running the Application

#### Option 1: Using the provided script (Recommended)

```bash
# From the project root directory
./start-servers.sh
```

This will start both backend and frontend servers automatically.

#### Option 2: Manual startup

1. **Start the backend server**

   ```bash
   cd backend
   npm start
   ```
   > Starts the backend server (runs on http://localhost:4000 by default).

2. **Start the frontend development server**

   ```bash
   cd frontend
   npm run dev
   ```
   > Starts the frontend server (runs on http://localhost:5173 by default).

### Accessing the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:4000

## API Endpoints

- **POST** `/api/v1/reservation/send` - Create a new reservation

### Request Body:
```json
{
  "firstName": "John",
  "lastName": "Doe", 
  "email": "john@example.com",
  "phone": "1234567890",
  "date": "2024-01-15",
  "time": "18:00",
  "restaurantName": "Urvashi Restaurant"
}
```

## Project Structure

```
restaurant-main/
├── backend/
│   ├── config/
│   │   └── config.env
│   ├── controller/
│   │   └── reservation.js
│   ├── database/
│   │   └── dbConnection.js
│   ├── middlewares/
│   │   └── error.js
│   ├── models/
│   │   └── reservation.js
│   ├── routes/
│   │   └── reservationRoute.js
│   ├── app.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── Pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── start-servers.sh
```

## Current Status

✅ **Project is fully functional and ready to use!**

- Backend server running on port 4000
- Frontend server running on port 5173
- MongoDB Atlas connection established
- Reservation system working correctly
- All dependencies installed and configured

## Troubleshooting

1. **Port already in use**: If you get a port conflict, make sure no other applications are using ports 4000 or 5173
2. **MongoDB connection issues**: Check your internet connection and ensure the MongoDB Atlas cluster is accessible
3. **Dependencies issues**: Run `npm install` in both backend and frontend directories

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.


