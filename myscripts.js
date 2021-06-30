const playing_text = "Pause Audio"
const not_started_text = "Play Audio"
const resume_text = "Resume Audio"


document.getElementById("myPlaybackDiv").style.display = "none";

var whichToUse = Math.floor(Math.random() * 3);
var audioPath = 'res/websiteTrack'+(whichToUse+1)+'.mp3';

var playingAtAll = false

function buttonPressed()  {
	if(playingAtAll){
		return;
	}
	playingAtAll = true
	document.getElementById("myAudio").setAttribute('src', audioPath);
	document.getElementById("myPlaybackDiv").style.display = "block";
	document.getElementById("myAudio").play()
	console.log("playing!");
}

console.log("it is going");