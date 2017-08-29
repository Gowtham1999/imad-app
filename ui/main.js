console.log('Loaded!');
var img = document.getElementById('madi');
var margin = 0;
function moveright(){
    margin = margin + 10;
    img.style.marginLeft=margin + "px";
}
img.onclick = function(){
  var interval = setInterval(moveright,100);
};
