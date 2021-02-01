var present = document.querySelector('.present');
var total = document.querySelector('.total');
var title = document.querySelector('.title');
var artist = document.querySelector('.artist');
var prew = document.querySelector('#prew');
var playPause = document.querySelector('#playPause');
var next = document.querySelector('#next')
var duration = document.querySelector('#duration');
var volumeShow = document.querySelector('#volume-show');
var volumeIcon = document.querySelector('#volume_icon');
var volume = document.querySelector('#volume');
var autoPlay = document.querySelector('#auto');

var list1 = document.querySelector('.list1');
var list2 = document.querySelector('.list2');
var list3 = document.querySelector('.list3');
var list4 = document.querySelector('.list4');
var list5 = document.querySelector('.list5');
var burgerIcon = document.querySelector('.img');
var section2 = document.querySelector('.section2')

burgerIcon.addEventListener('click', function(){
    section2.classList.toggle('active')
})


var time;
var auto_play = 0;

var indexNumber = 0;
var playSong = false;

var track = document.querySelector('.audio');


var All_song = [
    {
      name: "Enrique Iglesias - Ring My Bells",
      path: "./music/001 Enrique Iglesias - Ring My Bells.mp3",
      img: "img/img1.jpg",
      singer: "1",
    },
    {
      name: "Jay Sean - Ride It",
      path: "./music/004 Jay Sean - Ride It.mp3",
      img: "img/img2.jpg",
      singer: "2"
    },
    {
      name: "Gde_ti,_gde_ya_(feat._egor_krid)",
      path: "./music/02._gde_ti,_gde_ya_(feat._egor_krid).mp3",
      img: "img/img3.jpg",
      singer: "3"
    },
    {
      name: "Morandi - Keep you safe",
      path: "./music/085. Morandi - Keep you safe (Bestmedia.Uz).mp3",
      img: "img/img4.jpg",
      singer: "4"
    },
    {
      name: "50 Cent – 13-Disco Inferno",
      path: "./music/50 Cent – 13-Disco Inferno.mp3",
      img: "img/img5.jpg",
      singer: "5"
    }
 ];

 list1.addEventListener('click', function(){
    track.src = All_song[indexNumber = 0].path;
    loadTrack(indexNumber = 0);
    playSongs();
});

 list2.addEventListener('click', function(){
    track.src = All_song[indexNumber = 1].path;
    loadTrack(indexNumber = 1);
    playSongs();
});

 list3.addEventListener('click', function(){
    track.src = All_song[indexNumber = 2].path;
    loadTrack(indexNumber = 2);
    playSongs();
});

 list4.addEventListener('click', function(){
    track.src = All_song[indexNumber = 3].path;
    loadTrack(indexNumber = 3);
    playSongs();
});

 list5.addEventListener('click', function(){
    track.src = All_song[indexNumber = 4].path;
    loadTrack(indexNumber = 4);
    playSongs();
});


list1.innerHTML = All_song[indexNumber = 0].name
list2.innerHTML = All_song[indexNumber = 1].name
list3.innerHTML = All_song[indexNumber = 2].name
list4.innerHTML = All_song[indexNumber = 3].name
list5.innerHTML = All_song[indexNumber = 4].name


 prew.addEventListener('click', function(){
    prewSong();
 })

 playPause.addEventListener('click', function(){
    justplay();
})

next.addEventListener('click', function(){
    nextSong();
})

duration.addEventListener('change', function(){
    changeDuration();
})

autoPlay.addEventListener('click', function(){
    autoPlaySwitch();
})

volume.addEventListener('change', function(){
    volumeChange();
})

volumeIcon.addEventListener('click', function(){
    muteSound();
})

 function loadTrack(indexNumber){
     clearInterval(time);
     resetSlider();

     track.src = All_song[indexNumber].path;
     title.innerHTML = All_song[indexNumber].name;
     artist.innerHTML = All_song[indexNumber].singer
     track.load();

     time = setInterval(rangeSlider, 1000);
     total.innerHTML = All_song.length;
     present.innerHTML = indexNumber + 1;
 }

 loadTrack(indexNumber);

 function muteSound(){
     track.volume = 0;
     volume.value = 0;
     volumeShow.innerHTML = 0;
 }

 

 function justplay(){
     if(playSong == false){
         playSongs();
     }else{
         pauseSongs();
     }
 }

 function resetSlider(){
     duration.value = 0;
 }

 function playSongs(){
     track.play();
     playSong = true;
     playPause.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
 }

 function pauseSongs(){
     track.pause();
     playSong = false;
     playPause.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
 }

 function nextSong(){
     if(indexNumber < All_song.length - 1){
         indexNumber += 1;
        loadTrack(indexNumber);
        playSongs();
     }else{
         indexNumber = 0;
         loadTrack(indexNumber);
         playSongs();
     }
 }

 function prewSong(){
     if(indexNumber > 0){
         indexNumber -= 1;
         loadTrack(indexNumber);
         playSongs();
     }else{
         indexNumber = All_song.length;
         loadTrack(indexNumber);
         playSongs();
     }
 }

 function volumeChange(){
     volumeShow.innerHTML = volume.value;
     track.volume = volume.value / 100;
 }

 function changeDuration(){
     sliderPosition = track.duration * (duration.value / 100);
     track.currentTime = sliderPosition
 }

 function autoPlaySwitch(){
     if (auto_play == 1){
        auto_play = 0;
         autoPlay.style.background = 'rgba(255, 255, 255, 0.2)';
     }else{
        auto_play = 1;
         autoPlay.style.backgroundColor = '#FF8A65';
     }
 }

 function rangeSlider(){
     var position = 0;
     if(!isNaN(track.duration)){
         position = track.currentTime * (100/track.duration);
         duration.value = position;
     }
     
     if(track.ended){
        playPause.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
         if(auto_play == 1){
             indexNumber += 1;
             loadTrack(indexNumber);
             playSongs();
         }
     }
 }
