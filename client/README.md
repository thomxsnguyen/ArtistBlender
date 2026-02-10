# ArtistBlender React App

A modern React TypeScript application for blending and shuffling music from your favorite Spotify artists.

## Features

- 🎵 Search and select multiple artists
- 🔀 Shuffle songs from selected artists
- 🎮 Playback controls (play, pause, previous, next)
- 📱 Responsive design with Tailwind CSS
- 🎨 Modern UI with Spotify-inspired design
- ⚡ Fast development with Vite

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A running Flask backend (see original Flask app)

## Installation

1. **Clone and navigate to the project:**

   ```bash
   cd artistblender-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Development

1. **Start the Flask backend first:**

   ```bash
   # In the parent directory
   python app.py
   ```

   The Flask backend should be running on `http://localhost:5000`

2. **Start the React development server:**
   ```bash
   npm run dev
   ```
   The React app will be available at `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Architecture

### Components

- **App.tsx** - Main application component
- **Header.tsx** - Navigation header with user profile
- **SearchContainer.tsx** - Artist search and selection interface
- **AlbumCover.tsx** - Current track album art display
- **PlaybackControls.tsx** - Music playback controls
- **Footer.tsx** - Current track information display
- **ErrorPopup.tsx** - Error message modal
- **LoadingMessage.tsx** - Loading state indicator

### Key Technologies

- **React 18** - Frontend framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Axios** - HTTP client
- **Lucide React** - Icons

### API Integration

The React app communicates with the Flask backend through:

- Artist search endpoints
- Playback control endpoints
- Current track information
- Spotify OAuth authentication

## Configuration

### Environment Variables

Create a `.env` file in the root directory if you need to override default settings:

```env
VITE_API_BASE_URL=http://localhost:5000
```

### Tailwind Theme

Custom Spotify colors are defined in `tailwind.config.js`:

- `spotify-green`: #1db954
- `spotify-black`: #0e0e0e
- `spotify-dark`: #1a1a1a
- `spotify-gray`: #444

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Authentication Flow

1. User accesses the React app
2. If not authenticated, redirect to Flask `/` endpoint
3. Flask handles Spotify OAuth flow
4. After successful authentication, user returns to React app
5. React app uses session cookies to authenticate API requests

## Deployment

### Frontend (React)

1. Build the React app: `npm run build`
2. Serve the `dist` directory using any static file server
3. Configure the server to proxy API requests to your Flask backend

### Backend (Flask)

Keep your existing Flask deployment setup. The React app will communicate with it via API calls.

## Troubleshooting

### CORS Issues

If you encounter CORS issues:

1. Ensure the Flask backend is running on port 5000
2. Check that the Vite proxy configuration is working
3. Verify that the Flask app has proper CORS configuration

### Authentication Issues

- Ensure cookies are enabled in the browser
- Check that the Flask session configuration is correct
- Verify that the Spotify OAuth credentials are properly configured

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.
