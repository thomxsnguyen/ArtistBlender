# ArtistBlender 🎵

When using Spotify, shuffling songs is essential for variety and avoiding repetition. There's a feature to shuffle all songs by a single artist, which helps discover new tracks. However, I recently encountered an inconvenience: the inability to shuffle songs from multiple artists simultaneously. Although creating a playlist with all their songs and shuffling is a workaround, it's time consuming and too much of a hassle. My goal for this project is to develop a plugin that allows user to seamless shuffle songs from multiple artists without needing to simple playlist.

## Prerequisites

- Python 3.x
- Node.js and npm
- Spotify Developer Account (for API credentials)

## Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd ArtistBlender
   ```

2. **Create a Python virtual environment:**

   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   ```

3. **Install Python dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Configure Spotify API credentials:**
   - Create a Spotify App at https://developer.spotify.com/dashboard
   - Update `config.py` with your Client ID and Client Secret

## How to Run

### Quick Start (Recommended)

Run both the backend and frontend with a single command:

```bash
./start-dev.sh
```

This will:

- Start the Flask backend on `http://localhost:5000`
- Automatically install React dependencies if needed
- Start the React frontend on `http://localhost:5173`

**To stop:** Press `Ctrl+C`

If you get a permission error, make the script executable first:

```bash
chmod +x start-dev.sh
./start-dev.sh
```

### Manual Start

If you prefer to run the servers separately:

**Terminal 1 - Flask Backend:**

```bash
source .venv/bin/activate
python app.py
```

**Terminal 2 - React Frontend:**

```bash
cd artistblender-react
npm install  # First time only
npm run dev
```

## Usage

1. Open your browser to `http://localhost:5173`
2. Search for and select multiple artists
3. Click "Blend & Play" to start shuffling songs from all selected artists
4. Enjoy your blended playlist!
