const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d'); // returns a drawing context on the canvas, Check https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = "assets/image/shadow_dog.png"

function animate() {   //Cordinate from (0,0) to (Canvas_WIDTH, CANVAS_HEIGHT)
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT) // Declare what area on canvas we want to clear.
    ctx.fillRect(100,50,100,100);
    ctx.drawImage(playerImage, 50, 50, CANVAS_WIDTH, CANVAS_HEIGHT); // Stretch the image to match the Canvas area
    requestAnimationFrame(animate); // Creates animation loop
}
animate();