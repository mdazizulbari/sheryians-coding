var arr = [
    {
        songName: "NEFFEX Failure",
        url: "/04.level-2/music-player/music/failure.mp3",
        image: "/04.level-2/music-player/images/failuer.webp",
    },
    {
        songName: "NEFFEX Porpose",
        url: "/04.level-2/music-player/music/purpose.mp3",
        image: "/04.level-2/music-player/images/pourpose.jpg",
    },
    {
        songName: "NEFFEX Take It",
        url: "/04.level-2/music-player/music/take-it.mp3",
        image: "/04.level-2/music-player/images/take-it.jpg",
    },
    {
        songName: "NEFFEX It's Only Worth It If You Work For It",
        url: "/04.level-2/music-player/music/its-only-woth-it.mp3",
        image: "/04.level-2/music-player/images/its-only-woth-it.jpg",
    },
]

var allSongs = document.querySelector('#all-songs')
var selectedSongImage = document.querySelector('#left')
var audio = new Audio()
var selectedSong = 0

function songToHTML(){
    var clutter = ''
    arr.forEach(function(element, index){
        clutter += `<div id="${index}" class="song-card flex border-b-2 border-gray-600 items-center justify-between py-4 px-4 rounded-xl hover:bg-gray-600 ">
                        <div class="part1 flex items-center pointer-events-none">
                            <img class="w-20 h-20 mr-5 rounded-xl" src="${element.image}" alt="">
                            <h3 class="text-xl">${element.songName}</h3>
                        </div>
                        <h6 class="text-xl">3:45</h6>
                    </div>`
    })
    allSongs.innerHTML = clutter
    audio.src = arr[selectedSong].url
    selectedSongImage.style.backgroundImage = `url(${arr[selectedSong].image})`
}

songToHTML()
allSongs.addEventListener('click', function(details){
    selectedSong = details.target.id
    songToHTML()
    audio.play()
})