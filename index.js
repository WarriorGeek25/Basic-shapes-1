// Import stylesheets
import './style.css';

// Write Javascript code!
var canvas = document.getElementById('Dash');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
ctx.moveTo(110, 75);
ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
ctx.moveTo(65, 65);
ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
ctx.moveTo(95, 65);
ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
ctx.stroke();




// triangle
ctx.beginPath();
ctx.moveTo(125, 150);
ctx.lineTo(200, 25);
ctx.lineTo(200, 205);
ctx.fillStyle = 'lightgreen'
ctx.fill();