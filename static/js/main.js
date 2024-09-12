let selectedArtists = [];
let isPlaying = false;

function initializePlayState() {
  fetch("/current_track")
    .then((response) => response.json())
    .then((data) => {
      if (data.error || !data.track_name) {
        isPlaying = false;
        updatePauseButtonState();
      } else {
        isPlaying = data.is_playing;
        updatePauseButtonState();
        updateAlbumCover(data.album_image_url);
      }
    })
    .catch((error) => {
      console.error("Error initializing play state:", error);
    });
}

function shuffle() {
  const shuffleButton = document.getElementById("shuffleButton");

  if (selectedArtists.length === 0) {
    showPopup();
    return;
  }

  shuffleButton.textContent = "Shuffling selected artists...";
  shuffleButton.classList.add("loading");
  shuffleButton.disabled = true;

  fetch("/shuffle", {
    method: "POST",
    body: new URLSearchParams(new FormData(document.querySelector("form"))),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Handle success
      } else {
        alert(data.error || "Error shuffling tracks.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An unexpected error occurred.");
    })
    .finally(() => {
      shuffleButton.textContent = "Shuffle";
      shuffleButton.classList.remove("loading");
      shuffleButton.disabled = false;
    });
}

document.querySelector("form").onsubmit = function (event) {
  event.preventDefault();
  shuffle();
};

function updatePauseButtonState() {
  const pauseButtonIcon = document.querySelector("#playPauseButton i");
  if (pauseButtonIcon) {
    pauseButtonIcon.className = isPlaying ? "fas fa-pause" : "fas fa-play";
  }
}

function updateAlbumCover(albumImageUrl) {
  const albumCover = document.getElementById("album-cover");
  const playbackControls = document.querySelector(".playback-controls");
  const topArtists = document.getElementById("topArtists");

  if (albumCover && playbackControls) {
    if (albumImageUrl) {
      albumCover.src = albumImageUrl;
      albumCover.style.display = "block";
      playbackControls.style.display = "flex";
      topArtists.style.display = "none"; // Hide top artists
    } else {
      albumCover.style.display = "none";
      playbackControls.style.display = "none";
      topArtists.style.display = "flex"; // Show top artists
    }
  }
}

function searchArtists() {
  const query = document.getElementById("searchBar").value.trim();
  const artistList = document.getElementById("artistList");
  const topArtists = document.getElementById("topArtists");

  if (query === "") {
    artistList.innerHTML = "";
    artistList.style.display = "none";
    topArtists.style.display = "flex";
    return;
  }

  fetch(`/search_artists?query=${encodeURIComponent(query)}`)
    .then((response) => response.json())
    .then((data) => {
      artistList.innerHTML = "";

      if (data.error) {
        alert(data.error);
        return;
      }

      artistList.style.display = "block";
      topArtists.style.display = "none";

      data.artists.forEach((artist) => {
        const isSelected = selectedArtists.some((a) => a.id === artist.id);
        const artistDiv = document.createElement("div");
        artistDiv.className = "artist-result";
        artistDiv.textContent = artist.name;

        artistDiv.onclick = function () {
          toggleArtist(artist.id, artist.name, !isSelected);
        };

        artistList.appendChild(artistDiv);
      });
    })
    .catch((error) => {
      console.error("Error searching artists:", error);
    });
}
function toggleArtist(id, name, isChecked) {
  if (isChecked) {
    if (!selectedArtists.some((artist) => artist.id === id)) {
      selectedArtists.push({ id, name });
    }
    // Hide top artists when an artist is selected
    document.getElementById("topArtists").style.display = "none";
  } else {
    selectedArtists = selectedArtists.filter((artist) => artist.id !== id);
    // Show top artists if no artists are selected
    if (selectedArtists.length === 0) {
      document.getElementById("topArtists").style.display = "flex";
    }
  }

  updateHiddenInputs();
  updateSelectedArtistsList();
  document.getElementById("artistList").innerHTML = "";
  document.getElementById("artistList").style.display = "none";

  // Show or hide the shuffle button based on the number of selected artists
  const shuffleButton = document.getElementById("shuffleButton");
  if (selectedArtists.length > 0) {
    shuffleButton.classList.add("visible");
  } else {
    shuffleButton.classList.remove("visible");
  }
}

function updateHiddenInputs() {
  const hiddenInputs = document.getElementById("hiddenInputs");
  hiddenInputs.innerHTML = "";

  selectedArtists.forEach((artist) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "artists";
    input.value = artist.id;
    hiddenInputs.appendChild(input);
  });
}

function updateSelectedArtistsList() {
  const searchBar = document.querySelector(".search-bar");
  searchBar.innerHTML = "";

  selectedArtists.forEach((artist) => {
    const artistPill = document.createElement("div");
    artistPill.className = "artist-pill";
    artistPill.textContent = artist.name;

    const removePill = document.createElement("span");
    removePill.className = "remove-pill";
    removePill.textContent = "×";
    removePill.onclick = function () {
      toggleArtist(artist.id, artist.name, false);
    };

    artistPill.appendChild(removePill);
    searchBar.appendChild(artistPill);
  });

  const searchBarInput = document.createElement("input");
  searchBarInput.id = "searchBar";
  searchBarInput.placeholder = "Search for artists...";
  searchBarInput.onkeyup = searchArtists;
  searchBarInput.autocomplete = "off"; // Add this line
  searchBar.appendChild(searchBarInput);
}

function validateSelection() {
  if (selectedArtists.length === 0) {
    showPopup();
    return false;
  }
  return true;
}

function showPopup() {
  const popup = document.getElementById("errorPopup");
  popup.style.display = "block";
}

function closePopup() {
  const popup = document.getElementById("errorPopup");
  popup.style.display = "none";
}

function previousTrack() {
  fetch("/previous")
    .then((response) => {
      if (!response.ok) {
        console.error("Failed to skip to previous track");
      } else {
        fetchCurrentTrack();
      }
    })
    .catch((error) => {
      console.error("Error skipping to previous track:", error);
    });
}

function nextTrack() {
  fetch("/next")
    .then((response) => {
      if (!response.ok) {
        console.error("Failed to skip to next track");
      } else {
        fetchCurrentTrack();
      }
    })
    .catch((error) => {
      console.error("Error skipping to next track:", error);
    });
}

function togglePause() {
  const playPauseButton = document.getElementById("playPauseButton");

  if (isPlaying) {
    fetch("/pause")
      .then((response) => {
        if (response.ok) {
          isPlaying = false;
          playPauseButton.setAttribute("data-state", "play");
          playPauseButton.classList.remove("pause");
          playPauseButton.classList.add("play");
          updatePauseButtonState();
        } else {
          console.error("Failed to pause the track");
        }
      })
      .catch((error) => {
        console.error("Error pausing track:", error);
      });
  } else {
    fetch("/play")
      .then((response) => {
        if (response.ok) {
          isPlaying = true;
          playPauseButton.setAttribute("data-state", "pause");
          playPauseButton.classList.remove("play");
          playPauseButton.classList.add("pause");
          updatePauseButtonState();
        } else {
          console.error("Failed to play the track");
        }
      })
      .catch((error) => {
        console.error("Error playing track:", error);
      });
  }
}

function changePlayButtonToPlaying() {
  document.getElementById("playPauseButton").src =
    "{{ url_for('static', filename='images/pause.png') }}";
}

function fetchCurrentTrack() {
  fetch("/current_track")
    .then((response) => response.json())
    .then((data) => {
      const albumCover = document.getElementById("album-cover");
      const trackInfo = document.getElementById("footer-track-info");
      const topArtists = document.getElementById("topArtists");

      if (data.error || !data.track_name) {
        trackInfo.innerHTML = "Please open spotify on one of your devices.";
        isPlaying = false;
        topArtists.classList.remove("hidden");
      } else {
        isPlaying = data.is_playing;
        updateAlbumCover(data.album_image_url);
        trackInfo.innerHTML = `Playing: <a href="${data.track_url}" target="_blank">${data.track_name} by ${data.artist_name}</a>`;
        updatePauseButtonState();
        topArtists.classList.add("hidden");
      }
    })
    .catch((error) => {
      console.error("Error fetching current track:", error);
      document.getElementById("footer-track-info").innerHTML =
        "Error fetching current track";
      isPlaying = false;
    });
}

function displayTopArtists() {
  fetch("/top_artists")
    .then((response) => response.json())
    .then((artists) => {
      const topArtistsContainer = document.getElementById("topArtists");
      artists.forEach((artist) => {
        const img = document.createElement("img");
        img.src = artist.image;
        img.alt = artist.name;
        img.className = "top-artist-image";
        img.title = artist.name;
        topArtistsContainer.appendChild(img);
      });
    })
    .catch((error) => console.error("Error fetching top artists:", error));
}

// Call this function when the page loads
window.addEventListener("load", displayTopArtists);

function changePlayButtonToPause() {
  document.getElementById("playPauseButton").className = "pause";
  document
    .getElementById("playPauseButton")
    .setAttribute("data-state", "pause");
  document.getElementById("playPauseButton").src =
    "{{ url_for('static', filename='images/pause.png') }}";
}

function changePlayButtonToPlay() {
  document.getElementById("playPauseButton").className = "play";
  document.getElementById("playPauseButton").setAttribute("data-state", "play");
  document.getElementById("playPauseButton").src =
    "{{ url_for('static', filename='images/play.png') }}";
}

setInterval(fetchCurrentTrack, 2000);
fetchCurrentTrack();

initializePlayState();

document
  .getElementById("previousButton")
  .addEventListener("click", previousTrack);
document
  .getElementById("playPauseButton")
  .addEventListener("click", togglePause);
document.getElementById("nextButton").addEventListener("click", nextTrack);

const colorThief = new ColorThief();
const albumCover = document.getElementById("album-cover");
const albumOverlay = document.querySelector(".album-overlay");

albumCover.addEventListener("load", function () {
  const dominantColor = colorThief.getColor(albumCover);
  albumOverlay.style.backgroundColor = `rgba(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]}, 0.7)`;
});
