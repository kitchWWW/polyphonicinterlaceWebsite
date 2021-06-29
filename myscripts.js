const playing_text = "Pause Audio"
const not_started_text = "Play Audio"
const resume_text = "Resume Audio"


document.getElementById("playbutton").innerHTML=not_started_text;


var whichToUse = Math.floor(Math.random() * 3);

var audio = new Audio('res/websiteTrack'+(whichToUse+1)+'.mp3');

function buttonPressed()  {
	var status = document.getElementById("playbutton").innerHTML
	if(status === not_started_text){
		audio.play();
		document.getElementById("playbutton").innerHTML = playing_text;
	}else if (status ===playing_text){
		audio.pause();
		document.getElementById("playbutton").innerHTML = resume_text;
	}else if(status === resume_text){
		audio.play()
		document.getElementById("playbutton").innerHTML = playing_text;
	}


}

