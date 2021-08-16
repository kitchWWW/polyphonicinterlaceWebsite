const playing_text = "Pause Audio"
const not_started_text = "Play Audio"
const resume_text = "Resume Audio"


// document.getElementById("myPlaybackDiv").style.display = "none";

var whichToUse = Math.floor(Math.random() * 2);
var audioPath = './res/Phone_A_new.mp3';
if (Math.random() < .5) {
  audioPath = './res/Phone_B_new.mp3';
}
console.log("using: " + audioPath)
var audio = new Audio(audioPath);

function timestampUpdate() {
  // Display the current position of the video in a <p> element with id="demo"
  var res = new Date((audio.currentTime + 1) * 1000).toISOString().substr(14, 5)

  document.getElementById("timestamp").innerHTML = res;
}

audio.ontimeupdate = function() {
  timestampUpdate()
};

audio.addEventListener("ended", function() {
  playingAtAll = false
  document.getElementById('centerIcon').src = './res/icon_play.svg';
});

var playingAtAll = false



function buttonPressed() {
  if (playingAtAll) {
    return;
  }
  playingAtAll = true
  audio.play();
  document.getElementById('centerIcon').src = './res/icon_pause.svg';
}

function centerButton() {
  if (playingAtAll) {
    console.log("pause!")
    // if it is playing, pause it
    playingAtAll = false
    audio.pause()
    document.getElementById('centerIcon').src = './res/icon_play.svg';
  } else {
    console.log("play!")
    // if it is NOT playing, resume it
    playingAtAll = true
    audio.play()
    document.getElementById('centerIcon').src = './res/icon_pause.svg';
  }
}

function rewind() {
  console.log("rr")
  var newTime = (audio.currentTime - 30) + "";
  console.log(newTime)
  audio.currentTime = newTime
}


function fastforward() {
  console.log("ff")
  var newTime = (audio.currentTime + 30) + "";
  console.log(newTime)
  audio.currentTime = newTime
  console.log(audio.currentTime)
}


// var howToParticipateHeadder = document.getElementById("howToParticipateHeadder")
// var howToParticipateContent = document.getElementById("howToParticipateContent")
// var learnMoreHeader = document.getElementById("learnMoreHeader")
// var learnMoreContent = document.getElementById("learnMoreContent")
// var theTeamHeader = document.getElementById("theTeamHeader")
// var theTeamContent = document.getElementById("theTeamContent")
// var locationHeader = document.getElementById("locationHeader")
// var locationContent = document.getElementById("locationContent")

// var whatIsOpen = {}
// whatIsOpen['howToParticipateContent'] = false
// whatIsOpen['learnMoreContent'] = false
// whatIsOpen['theTeamContent'] = false
// whatIsOpen['locationContent'] = false

// howToParticipateHeadder.addEventListener("click", function() {
//   if (whatIsOpen['howToParticipateContent']) {
//     whatIsOpen['howToParticipateContent'] = false
//     howToParticipateContent.style.display = 'none'
//   } else {
//     whatIsOpen['howToParticipateContent'] = true
//     howToParticipateContent.style.display = 'block'
//   }
// })

// learnMoreHeader.addEventListener("click", function() {
//   if (whatIsOpen['learnMoreContent']) {
//     whatIsOpen['learnMoreContent'] = false
//     learnMoreContent.style.display = 'none'
//   } else {
//     whatIsOpen['learnMoreContent'] = true
//     learnMoreContent.style.display = 'block'
//   }
// })

// theTeamHeader.addEventListener("click", function() {
//   if (whatIsOpen['theTeamContent']) {
//     whatIsOpen['theTeamContent'] = false
//     theTeamContent.style.display = 'none'
//   } else {
//     whatIsOpen['theTeamContent'] = true
//     theTeamContent.style.display = 'block'
//   }
// })

// locationHeader.addEventListener("click", function() {
//   if (whatIsOpen['locationContent']) {
//     whatIsOpen['locationContent'] = false
//     locationContent.style.display = 'none'
//   } else {
//     whatIsOpen['locationContent'] = true
//     locationContent.style.display = 'block'
//   }
// })

console.log("it is going")
