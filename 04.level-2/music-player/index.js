var arr = [
    {
        songName: "NEFFEX Failure",
        url: "/04.level-2/music-player/music/failure.mp3",
        image: "/04.level-2/music-player/images/failuer.webp",
        duration: "07:51",
    },
    {
        songName: "NEFFEX Porpose",
        url: "/04.level-2/music-player/music/purpose.mp3",
        image: "/04.level-2/music-player/images/pourpose.jpg",
        duration: "03:55",
    },
    {
        songName: "NEFFEX Take It",
        url: "/04.level-2/music-player/music/take-it.mp3",
        image: "/04.level-2/music-player/images/take-it.jpg",
        duration: "03:17",
    },
    {
        songName: "NEFFEX It's Only Worth It If You Work For It",
        url: "/04.level-2/music-player/music/its-only-woth-it.mp3",
        image: "/04.level-2/music-player/images/its-only-woth-it.jpg",
        duration: "03:13",
    },
]

var selectedSongImage = document.querySelector('#left')
var allSongs = document.querySelector('#all-songs')
var backward = document.querySelector('#backward')
var play = document.querySelector('#play')
var forward = document.querySelector('#forward')

var audio = new Audio()
var selectedSong = 0

function songToHTML(){
    var clutter = ''
    arr.forEach(function(element, index){
        clutter += `<div id="${index}" class="song-card flex items-center justify-between py-4 px-4 rounded-2xl hover:bg-gray-600 ">
                        <div class="part1 flex items-center pointer-events-none">
                            <img class="w-20 h-20 mr-5 rounded-xl" src="${element.image}" alt="">
                            <h3 class="text-xl">${element.songName}</h3>
                        </div>
                        <h6 class="text-xl">${element.duration}</h6>
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
    play.innerHTML = `<i class="ri-pause-fill"></i>`
    flag = 1
})

var flag = 0
play.addEventListener('click', function(){
    if(flag == 0){
        play.innerHTML = `<i class="ri-pause-fill"></i>`
        songToHTML()
        audio.play()
        flag = 1
    } else{
        play.innerHTML = `<i class="ri-play-fill"></i>`
        songToHTML()
        audio.pause()
        flag = 0
    }
})