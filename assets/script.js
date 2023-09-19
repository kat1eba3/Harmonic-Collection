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