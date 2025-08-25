#!/bin/bash

echo "🚀 Starting Restaurant Reservation System..."

# Function to cleanup background processes on exit
cleanup() {
    echo "🛑 Stopping servers..."
    pkill -f "node server.js"
    pkill -f "vite"
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Start backend server
echo "📡 Starting backend server on port 4000..."
cd backend
npm start &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 3

# Start frontend server
echo "🌐 Starting frontend server on port 5173..."
cd ../frontend
npm run dev &
FRONTEND_PID=$!

echo "✅ Both servers are starting..."
echo "📱 Frontend: http://localhost:5173"
echo "🔧 Backend: http://localhost:4000"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID
