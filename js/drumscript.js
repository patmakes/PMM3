// prevent default touch behaviour

let body = document.querySelector("body");

let drumMachine = document.getElementById("drumMachine")

let mainElement = document.querySelector("main");


function touchFix(event) {
  event.preventDefault()
}

body.addEventListener("touchstart", touchFix)

body.addEventListener("touchend", touchFix)

body.addEventListener("touchmove", touchFix)

body.addEventListener("touchcancel", touchFix)

drumMachine.addEventListener("touchstart", touchFix)

drumMachine.addEventListener("touchend", touchFix)

drumMachine.addEventListener("touchmove", touchFix)

drumMachine.addEventListener("touchcancel", touchFix)

mainElement.addEventListener("touchstart", touchFix)

mainElement.addEventListener("touchend", touchFix)

mainElement.addEventListener("touchmove", touchFix)

mainElement.addEventListener("touchcancel", touchFix)

main();

let audio = document.querySelectorAll("audio");

function main() {
  const drumSounds = getDrumSounds();
}

// loop that gets drum sounds and turns them into elements in the drum machine

function getDrumSounds() {
  var sound = [];
  let index = 0;
//index <= 2
while (index < 16) {
  console.log(sound[index]);
  index++;
}
  for (let i = 0; i < 16; i++) {
    sound.push(`http://www.patmakesmusic.com/sounds/drum/drumpad${i}.mp3`);

    let link = sound[i];

    console.log(sound[i]);

    var drumPad = document.createElement("button");

    drumPad.classList.add("drumpad");

    var drumSound = document.createElement("audio");

    drumSound.id = "sound" + [i];
    drumPad.id = "drumpad" + [i];
    drumSound.src = link;
    document.getElementById("drumMachine").appendChild(drumPad);
    
    document.getElementById("drumMachine").appendChild(drumSound);
    
    
    
  }
  // return sound;
}

// pad 0 trigger logic

let pad0 = document.getElementById("drumpad0");

function playAudio0(event) { 
  
  event.preventDefault();
  
 var sound0 = document.getElementById("sound0");
  
  sound0.play(); 
  sound0.volume=1;
  console.log(event);
} 

function pauseAudio0(event) {
  
  event.preventDefault();
  
  sound0.volume=0;
  sound0.pause();
  sound0.currentTime=0;
  console.log(event);
 
  
}

pad0.addEventListener("mousedown", playAudio0);

pad0.addEventListener("mouseup", pauseAudio0);

pad0.addEventListener("touchstart", playAudio0);

pad0.addEventListener("touchend", pauseAudio0);

pad0.addEventListener("touchmove", touchFix);

pad0.addEventListener("touchcancel", pauseAudio0);

// pad 1 trigger logic

let pad1 = document.getElementById("drumpad1");

function playAudio1(event) { 
  
  event.preventDefault();
  
 var sound1 = document.getElementById("sound1");
  
  sound1.play(); 
  sound1.volume=1;
  console.log(event);
} 

function pauseAudio1(event) {
  
  event.preventDefault();
  
  sound1.volume=0;
  sound1.pause();
  sound1.currentTime=0;
  console.log(event);
 
  
}

pad1.addEventListener("mousedown", playAudio1);

pad1.addEventListener("mouseup", pauseAudio1);

pad1.addEventListener("touchstart", playAudio1);

pad1.addEventListener("touchend", pauseAudio1);

pad1.addEventListener("touchmove", touchFix);

pad1.addEventListener("touchcancel", pauseAudio1);

// pad 2 trigger logic

let pad2 = document.getElementById("drumpad2");

function playAudio2(event) { 
  
  event.preventDefault();
  
 var sound2 = document.getElementById("sound2");
  
  sound2.play(); 
  sound2.volume=1;
  console.log(event);
} 

function pauseAudio2(event) {
  
  event.preventDefault();
  
  sound2.volume=0;
  sound2.pause();
  sound2.currentTime=0;
  console.log(event);
 
  
}

pad2.addEventListener("mousedown", playAudio2);

pad2.addEventListener("mouseup", pauseAudio2);

pad2.addEventListener("touchstart", playAudio2);

pad2.addEventListener("touchend", pauseAudio2);

pad2.addEventListener("touchmove", touchFix);

pad2.addEventListener("touchcancel", pauseAudio2);

// pad 3 trigger logic

let pad3 = document.getElementById("drumpad3");

function playAudio3(event) { 
  
  event.preventDefault();
  
 var sound3 = document.getElementById("sound3");
  
  sound3.play(); 
  sound3.volume=1;
  console.log(event);
} 

function pauseAudio3(event) {
  
  event.preventDefault();
  
  sound3.volume=0;
  sound3.pause();
  sound3.currentTime=0;
  console.log(event);
 
  
}

pad3.addEventListener("mousedown", playAudio3);

pad3.addEventListener("mouseup", pauseAudio3);

pad3.addEventListener("touchstart", playAudio3);

pad3.addEventListener("touchend", pauseAudio3);

pad3.addEventListener("touchmove", touchFix);

pad3.addEventListener("touchcancel", pauseAudio3);

// pad 4 trigger logic

let pad4 = document.getElementById("drumpad4");

function playAudio4(event) { 
  
  event.preventDefault();
  
 var sound4 = document.getElementById("sound4");
  
  sound4.play(); 
  sound4.volume=1;
  console.log(event);
} 

function pauseAudio4(event) {
  
  event.preventDefault();
  
  sound4.volume=0;
  sound4.pause();
  sound4.currentTime=0;
  console.log(event);
 
  
}

pad4.addEventListener("mousedown", playAudio4);

pad4.addEventListener("mouseup", pauseAudio4);

pad4.addEventListener("touchstart", playAudio4);

pad4.addEventListener("touchend", pauseAudio4);

pad4.addEventListener("touchmove", touchFix);

pad4.addEventListener("touchcancel", pauseAudio4);

// pad 5 trigger logic

let pad5 = document.getElementById("drumpad5");

function playAudio5(event) { 
  
  event.preventDefault();
  
 var sound5 = document.getElementById("sound5");
  
  sound5.play(); 
  sound5.volume=1;
  console.log(event);
} 

function pauseAudio5(event) {
  
  event.preventDefault();
  
  sound5.volume=0;
  sound5.pause();
  sound5.currentTime=0;
  console.log(event);
 
  
}

pad5.addEventListener("mousedown", playAudio5);

pad5.addEventListener("mouseup", pauseAudio5);

pad5.addEventListener("touchstart", playAudio5);

pad5.addEventListener("touchend", pauseAudio5);

pad5.addEventListener("touchmove", touchFix);

pad5.addEventListener("touchcancel", pauseAudio5);

// pad 6 trigger logic

let pad6 = document.getElementById("drumpad6");

function playAudio6(event) { 
  
  event.preventDefault();
  
 var sound6 = document.getElementById("sound6");
  
  sound6.play(); 
  sound6.volume=1;
  console.log(event);
} 

function pauseAudio6(event) {
  
  event.preventDefault();
  
  sound6.volume=0;
  sound6.pause();
  sound6.currentTime=0;
  console.log(event);
 
  
}

pad6.addEventListener("mousedown", playAudio6);

pad6.addEventListener("mouseup", pauseAudio6);

pad6.addEventListener("touchstart", playAudio6);

pad6.addEventListener("touchend", pauseAudio6);

pad6.addEventListener("touchmove", touchFix);

pad6.addEventListener("touchcancel", pauseAudio6);

// pad 7 trigger logic

let pad7 = document.getElementById("drumpad7");

function playAudio7(event) { 
  
  event.preventDefault();
  
 var sound7 = document.getElementById("sound7");
  
  sound7.play(); 
  sound7.volume=1;
  console.log(event);
} 

function pauseAudio7(event) {
  
  event.preventDefault();
  
  sound7.volume=0;
  sound7.pause();
  sound7.currentTime=0;
  console.log(event);
 
  
}

pad7.addEventListener("mousedown", playAudio7);

pad7.addEventListener("mouseup", pauseAudio7);

pad7.addEventListener("touchstart", playAudio7);

pad7.addEventListener("touchend", pauseAudio3);

pad7.addEventListener("touchmove", touchFix);

pad7.addEventListener("touchcancel", pauseAudio7);

// pad 8 trigger logic

let pad8 = document.getElementById("drumpad8");

function playAudio8(event) { 
  
  event.preventDefault();
  
 var sound8 = document.getElementById("sound8");
  
  sound8.play(); 
  sound8.volume=1;
  console.log(event);
} 

function pauseAudio8(event) {
  
  event.preventDefault();
  
  sound8.volume=0;
  sound8.pause();
  sound8.currentTime=0;
  console.log(event);
 
  
}

pad8.addEventListener("mousedown", playAudio8);

pad8.addEventListener("mouseup", pauseAudio8);

pad8.addEventListener("touchstart", playAudio8);

pad8.addEventListener("touchend", pauseAudio8);

pad8.addEventListener("touchmove", touchFix);

pad8.addEventListener("touchcancel", pauseAudio8);

// pad 9 trigger logic

let pad9 = document.getElementById("drumpad9");

function playAudio9(event) { 
  
  event.preventDefault();
  
 var sound9 = document.getElementById("sound9");
  
  sound9.play(); 
  sound9.volume=1;
  console.log(event);
} 

function pauseAudio9(event) {
  
  event.preventDefault();
  
  sound9.volume=0;
  sound9.pause();
  sound9.currentTime=0;
  console.log(event);
 
  
}

pad9.addEventListener("mousedown", playAudio9);

pad9.addEventListener("mouseup", pauseAudio9);

pad9.addEventListener("touchstart", playAudio9);

pad9.addEventListener("touchend", pauseAudio9);

pad9.addEventListener("touchmove", touchFix);

pad9.addEventListener("touchcancel", pauseAudio9);

// pad 10 trigger logic

let pad10 = document.getElementById("drumpad10");

function playAudio10(event) { 
  
  event.preventDefault();
  
 var sound10 = document.getElementById("sound10");
  
  sound10.play(); 
  sound10.volume=1;
  console.log(event);
} 

function pauseAudio10(event) {
  
  event.preventDefault();
  
  sound10.volume=0;
  sound10.pause();
  sound10.currentTime=0;
  console.log(event);
 
  
}

pad10.addEventListener("mousedown", playAudio10);

pad10.addEventListener("mouseup", pauseAudio10);

pad10.addEventListener("touchstart", playAudio10);

pad10.addEventListener("touchend", pauseAudio10);

pad10.addEventListener("touchmove", touchFix);

pad10.addEventListener("touchcancel", pauseAudio10);

// pad 11 trigger logic

let pad11 = document.getElementById("drumpad11");

function playAudio11(event) { 
  
  event.preventDefault();
  
 var sound11 = document.getElementById("sound11");
  
  sound11.play(); 
  sound11.volume=1;
  console.log(event);
} 

function pauseAudio11(event) {
  
  event.preventDefault();
  
  sound11.volume=0;
  sound11.pause();
  sound11.currentTime=0;
  console.log(event);
 
  
}

pad11.addEventListener("mousedown", playAudio11);

pad11.addEventListener("mouseup", pauseAudio11);

pad11.addEventListener("touchstart", playAudio11);

pad11.addEventListener("touchend", pauseAudio11);

pad11.addEventListener("touchmove", touchFix);

pad11.addEventListener("touchcancel", pauseAudio11);

// pad 12 trigger logic

let pad12 = document.getElementById("drumpad12");

function playAudio12(event) { 
  
  event.preventDefault();
  
 var sound12 = document.getElementById("sound12");
  
  sound12.play(); 
  sound12.volume=1;
  console.log(event);
} 

function pauseAudio12(event) {
  
  event.preventDefault();
  
  sound12.volume=0;
  sound12.pause();
  sound12.currentTime=0;
  console.log(event);
 
  
}

pad12.addEventListener("mousedown", playAudio12);

pad12.addEventListener("mouseup", pauseAudio12);

pad12.addEventListener("touchstart", playAudio12);

pad12.addEventListener("touchend", pauseAudio12);

pad12.addEventListener("touchmove", touchFix);

pad12.addEventListener("touchcancel", pauseAudio12);

// pad 13 trigger logic

let pad13 = document.getElementById("drumpad13");

function playAudio13(event) { 
  
  event.preventDefault();
  
 var sound13 = document.getElementById("sound13");
  
  sound13.play(); 
  sound13.volume=1;
  console.log(event);
} 

function pauseAudio13(event) {
  
  event.preventDefault();
  
  sound13.volume=0;
  sound13.pause();
  sound13.currentTime=0;
  console.log(event);
 
  
}

pad13.addEventListener("mousedown", playAudio13);

pad13.addEventListener("mouseup", pauseAudio13);

pad13.addEventListener("touchstart", playAudio13);

pad13.addEventListener("touchend", pauseAudio13);

pad13.addEventListener("touchmove", touchFix);

pad13.addEventListener("touchcancel", pauseAudio13);

// pad 14 trigger logic

let pad14 = document.getElementById("drumpad14");

function playAudio14(event) { 
  
  event.preventDefault();
  
 var sound14 = document.getElementById("sound14");
  
  sound14.play(); 
  sound14.volume=1;
  console.log(event);
} 

function pauseAudio14(event) {
  
  event.preventDefault();
  
  sound14.volume=0;
  sound14.pause();
  sound14.currentTime=0;
  console.log(event);
 
  
}

pad14.addEventListener("mousedown", playAudio14);

pad14.addEventListener("mouseup", pauseAudio14);

pad14.addEventListener("touchstart", playAudio14);

pad14.addEventListener("touchend", pauseAudio14);

pad14.addEventListener("touchmove", touchFix);

pad14.addEventListener("touchcancel", pauseAudio14);

// pad 15 trigger logic

let pad15 = document.getElementById("drumpad15");

function playAudio15(event) { 
  
  event.preventDefault();
  
 var sound15 = document.getElementById("sound15");
  
  sound15.play(); 
  sound15.volume=1;
  console.log(event);
} 

function pauseAudio15(event) {
  
  event.preventDefault();
  
  sound15.volume=0;
  sound15.pause();
  sound15.currentTime=0;
  console.log(event);
 
  
}

pad15.addEventListener("mousedown", playAudio15);

pad15.addEventListener("mouseup", pauseAudio15);

pad15.addEventListener("touchstart", playAudio15);

pad15.addEventListener("touchend", pauseAudio15);

pad15.addEventListener("touchmove", touchFix);

pad15.addEventListener("touchcancel", pauseAudio15);
