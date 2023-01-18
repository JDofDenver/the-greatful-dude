
const action = document.getElementById("slimerPic");
const unAction = document.getElementById("appear");
function unMagic(){
    action.style.visibility ="visible";
}
function magic(){
    action.style.visibility = "hidden";
}
action.addEventListener("click", magic);
unAction.addEventListener("click", unMagic);

