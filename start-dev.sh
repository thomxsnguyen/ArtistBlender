#!/bin/bash

# ArtistBlender Development Startup Script

echo "🎵 Starting ArtistBlender Development Environment..."

# Check if Python virtual environment exists
if [ ! -d ".venv" ]; then
    echo "❌ Python virtual environment not found. Please run 'python -m venv .venv' first."
    exit 1
fi

# Start Flask backend in the background
echo "🐍 Starting Flask backend..."
source .venv/bin/activate

# Load environment variables from .env
if [ -f ".env" ]; then
    export $(cat .env | xargs)
else
    echo "❌ .env file not found. Please create one from .env.example"
    exit 1
fi

python app.py &
FLASK_PID=$!

# Give Flask time to start
sleep 3

# Start React frontend in the background
echo "⚛️  Starting React frontend..."
cd artistblender-react

# Check if node_modules exists, if not install dependencies
if [ ! -d "node_modules" ]; then
    echo "📦 Installing React dependencies..."
    npm install
fi

npm run dev &
REACT_PID=$!
cd ..

echo "🚀 Both servers are starting up!"
echo "📱 React app: http://localhost:5173"
echo "🌐 Flask API: http://localhost:5000"
echo ""
echo "Press Ctrl+C to stop both servers"

# Function to clean up background processes
cleanup() {
    echo ""
    echo "🛑 Stopping servers..."
    kill $FLASK_PID 2>/dev/null
    kill $REACT_PID 2>/dev/null
    echo "✅ Servers stopped"
    exit 0
}

# Set up trap to catch Ctrl+C
trap cleanup INT

# Wait for background processes
wait 