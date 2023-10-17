// Get references to the audio player and audio source elements
const audioPlayer = document.getElementById('audio-player');
const audioSource = document.getElementById('audio-source');

// Get references to the buttons
const buttons = document.querySelectorAll('.song-list button');

// Add a click event listener to each button
buttons.forEach((button) => {
  button.addEventListener('click', function () {
    // Get the data-song attribute of the clicked button
    const songUrl = button.getAttribute('data-song');

    // Set the audio source to the selected song
    audioSource.src = songUrl;
    albumCover.src = songs[index].imageURL;

    // Load and play the audio
    audioPlayer.load();
    audioPlayer.play();
  });
});

// Define album cover image URLs for each song
const albumCovers = {
    "MoneyTrees.mp3": "moneytreesalbum.jpg",
    "oakwood.mp3": "oakwoodalbum.jpg",
    "run.mp3": "runalbum.jpg",
    "down.mp3": "downalbum.jpg",
    "overandover.mp3": "overnover.jpg",
};

// Get references to HTML elements
const albumCoverElement = document.getElementById("album-cover");
const audioPlayerElement = document.getElementById("audio-player");
const audioSourceElement = document.getElementById("audio-source");

// Add a click event listener to each song button
document.querySelectorAll(".song-list button").forEach(button => {
    button.addEventListener("click", function () {
        // Get the song URL from the button's data-song attribute
        const songURL = button.getAttribute("data-song");
        
        // Set the src attribute of the album cover image
        albumCoverElement.src = albumCovers[songURL];
        
        // Set the src attribute of the audio source
        audioSourceElement.src = songURL;
        
        // Load and play the selected song
        audioPlayerElement.load();
        audioPlayerElement.play();
    });
});

// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the audio element by its ID
    var audio = document.getElementById('background-audio');

    // Play the audio
    audio.play();
});