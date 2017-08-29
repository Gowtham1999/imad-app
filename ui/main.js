console.log('Loaded!');
var img = document.getElementById('madi');
var margin = 0;
function moveright(){
    margin = margin + 1;
    img.style.marginLeft=margin + "px";
}
img.onclick = function(){
  var interval = setInterval(moveright,0.000000000000000001);
};
