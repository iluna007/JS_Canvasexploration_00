let canvas = document.getElementById('canvas'); 
let context = canvas.getContext('2d');

context.fillStyle = 'blue';
//context.fillRect(100, 100, 400, 400);

context.lineWidth = 3;
context.beginPath();
context.rect(100, 100, 400, 400);
context.stroke();

context.beginPath();
context.arc(300, 300, 100, 0, 2 * Math.PI);
context.stroke();