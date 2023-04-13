var one= document.getElementById('radius');
var two=document.getElementById('volume');
function volume_sphere()
 {
  var volume;
  var radius =one.value;
  radius = Math.abs(radius);
  volume = (4/3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  two.value = volume;
  return false;
 } 
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;