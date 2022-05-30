const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d'); // returns a drawing context on the canvas, Check https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = "assets/image/shadow_dog.png"
const spriteWidth = 575; // 6876 / 12
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 5; // slowing game frame 5 times
const spriteAnimations = [];
const animationStates =  [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    }
]
                        // each state is each {}
animationStates.forEach((state, index) => { // Using any spritesheet with different sized blocks
let frames = {
    loc: [],
}
    for(let j = 0; j < state.frames; j++) { // Keep moving X index until the end of "Sprite Row"
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY}) // if animation 'idle' push all of its animation row on to array. 
    }
    spriteAnimations[state.name] = frames; 
})
console.log(animationStates);


function animate() {   //Cordinate from (0,0) to (Canvas_WIDTH, CANVAS_HEIGHT)
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT) // Declare what area on canvas we want to clear.
    let position = Math.floor(gameFrame/staggerFrames) % 6;
    frameX = spriteWidth * position;

    ctx.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight); // Stretch the image to match the Canvas area
  

    gameFrame++;
    requestAnimationFrame(animate); // Creates animation loop
}
animate();