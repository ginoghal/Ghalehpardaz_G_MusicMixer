(() =>{

console.log('fired!');

 icon_holder = document.querySelectorAll('.icon_holder'),
 draggablePieces = document.querySelectorAll('.icon_holder img'),
 dropZones = document.querySelectorAll('.drag_Box');

 function allowDrop(ev){
   ev.preventDefault();
 }

 function drag(ev){
   ev.dataTransfer.setData("img",ev.target.id);
 }


 document.addEventListener("dragover", function(ev) {
  ev.preventDefault();
});

 function drop(ev){
   ev.preventDefault();
   ev.target.appendChild(document.getElementById(data));
 }


draggablePieces.forEach(piece => {
  piece.addEventListener("dragstart", function(ev) {
    console.log('draggin...');
    ev.dataTransfer.setData("img", this.id);
  })
});



 dropZones.forEach(zone => {
 zone.addEventListener("dragover", function(ev){
 ev.preventDefault();
 });
 zone.addEventListener("drop", function(ev) {


 ev.preventDefault(); // dont do your default behaviour instead do the following (console log)
 console.log('you dropped something over me');

 if (this.childElementCount > 0) {
   console.log('one child family, go away!');
   return;
}

//debugger;

console.log(ev.dataTransfer.getData('img'));

let targetAudio = document.querySelector(`#${ev.dataTransfer.getData('img')}`).dataset.audio;

console.log(targetAudio);

  //debugger;

  myAudio = document.createElement('audio');
  myAudio.src = targetAudio;

  myAudio.loop = "true";

  document.body.appendChild(myAudio);

 myAudio.loop = "true"; document.body.appendChild(myAudio);
 myAudio.play();
 let data = ev.dataTransfer.getData("img");


 ev.target.appendChild(document.querySelector(`#${data}`));
 })

});

})();




//debugger
