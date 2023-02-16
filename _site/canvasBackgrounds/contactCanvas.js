const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const wave = {
    y: canvas.height / 2,
    length: 0.001,
    amplitude: 5000, 
    frequency: 0.01
}

let increment = wave.frequency
function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'rgba(255, 255, 255, 0.01)'
    c.fillRect(0, 0, canvas.width, canvas.height)

    c.beginPath()

    c.moveTo(-2, canvas.height / 2)

    for (let i = -1; i < canvas.width; i++) {
        c.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.amplitude 
        * Math.sin(increment))
    }
    c.strokeStyle = '#99CCFF'
    c.stroke()
    increment += wave.frequency 
}

animate()