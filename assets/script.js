document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".song-list button");
    const audioPlayer = document.querySelector("#audio-player");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const songSrc = button.getAttribute("data-song");
            audioPlayer.src = songSrc;
            audioPlayer.load();
            audioPlayer.play();
        });
    });
});
  const songs = [
    {
        title: "Nice For What",
        artist: "Artist 1",
        audioUrl: "https://drive.google.com/file/d/1gzIkXoztYyJnLhieaw4Q5bdXkkjMdCvf/view?usp=sharing"
    },
    {
        title: "Song 2",
        artist: "Artist 2",
        audioUrl: "song2.mp3"
    },
  
];

<script>
function setPlaylistImages() {
        var playlistItems = document.querySelectorAll('.playlist-item');
        var imageFolder = 'pics/'; // Replace with your folder path

        // List of filenames
        var imageFilenames = [
            'DWG.jpg',
            'supercut.jpg',
            'smile.jpg',
            'artemas.jpg',
            'oakwood.jpg',
            'sadmovies.jpg'
            'busart.png'
            'businessman.jpg'
            'busturning.gif'
            'joker.jpg'
            'loudkid.jpg'
            'meme.jpg'
            'meme2.jpg'
            'people.jpg'

            // Add more filenames as needed
        ];

        // Loop through playlist items and set image src
        playlistItems.forEach(function(item, index) {
            var img = item.querySelector('.playlist-item-image');
            var filename = imageFilenames[index];
            img.src = imageFolder + filename;
        });
    }

    // Call the function to set image source URLs
    setPlaylistImages();
</script>
