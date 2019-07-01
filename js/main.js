function allowDrop(ev){
  ev.preventDefault();
}

function drag(ev){
  ev.dataTransfer.setData("icon",ev.target.id);
}

function drop(ev){
  ev.preventDefault();
  var data = ev.dataTransfer.getData("icon");
  ev.target.appendChild(document.getElementById(data));
}
