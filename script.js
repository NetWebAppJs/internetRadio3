let video_player = document.getElementById("audio");
let links = video_player.getElementsByTagName('a');
for(var i=0; i<links.length; i++){
  links[i].onclick = handler;
}

function handler(e){
  
  e.preventDefault();
  
let videotarget = this.getAttribute("href");
let filename = videotarget.substr(0,videotarget.lastIndexOf('.'))||videotarget;
let video = document.querySelector("#audio audio");
  
audio.removeAttribute('poster');
audio.load();
audio.play();


let source = document.querySelectorAll("#audio audio source");
   source[0].src = filename + ".mp3";
  /* source[1].src = filename + ".mp4";*/
   
   
  
 /* video.buffer();*/
}
handler();