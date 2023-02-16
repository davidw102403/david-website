function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Event Listeners
addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

// Objects
class Star {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = {
            x: randomIntFromRange(-5, 5),
            y: 3
        }
        this.friction = 0.8
        this.gravity = 1
    }

    draw() {
        c.save()
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.shadowColor = `#E3EAEF`
        c.shadowBlur = 50
        c.fill()
        c.closePath()
        c.restore()
    }

    shatter() {
        this.radius -= 3
        for (let i = 0; i < 10; i++) {
            miniStars.push(new MiniStar(this.x, this.y, 2))
        }
    }

    update() {
        this.draw()
        // when ball hits bottom of screen
        if (this.y + this.radius + this.velocity.y> canvas.height) {
            this.velocity.y = -this.velocity.y * this.friction
            this.shatter()
        } else {
            this.velocity.y += this.gravity
        }

        // when ball hits side of screen
        if (this.x + this.radius + this.velocity.x > canvas.width) {
            this.velocity.x = -this.velocity.x * this.friction
            this.shatter()
        }
         
        if (this.x - this.radius + this.velocity.x < 0) {
            this.velocity.x = -this.velocity.x * this.friction
            this.shatter()
        }

        this.x += this.velocity.x
        this.y += this.velocity.y
    }
}

class MiniStar {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = {
            x: randomIntFromRange(-5, 5),
            y: randomIntFromRange(-15, 15),
        }
        this.friction = 0.8
        this.gravity = 0.1 
        this.timeToLive = 100
        this.opacity = 1
    }

    draw() {
        c.save()
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = `rgba(29, 161, 242, ${this.opacity})`
        c.shadowColor = `#E3EAEF`
        c.shadowBlur = 20
        c.fill()
        c.closePath()
        c.restore()
    }

    update() {
        this.draw()

        // when miniStar hits bottom of screen
        if (this.y + this.radius + this.velocity.y > canvas.height) {
            this.velocity.y = -this.velocity.y * this.friction
        } else {
            this.velocity.y += this.gravity
        }
        this.x += this.velocity.x
        this.y += this.velocity.y
        this.timeToLive -= 1
        this.opacity -= this.timeToLive * .00001
    }
}



// Implementation 
const backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height) 
backgroundGradient.addColorStop(0, 'white')
backgroundGradient.addColorStop(1, 'white')
let stars
let miniStars
let backgroundStars
let ticker = 0
let randomSpawnRate = 75
function init() {
    stars = []
    miniStars = []
    backgroundStars = []

    for (let i = 0; i < 150; i ++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height - 285
        const radius = Math.random() * 3
        backgroundStars.push(new Star(x, y, radius, 'white'))
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)

    // create background gradient
    c.fillStyle = backgroundGradient
    c.fillRect(0, 0, canvas.width, canvas.height) 

    // draw background stars
    backgroundStars.forEach(backgroundStar => {
        backgroundStar.draw()
    })


    // animate stars
    stars.forEach((star, index) => {
        star.update()
        if (star.radius == 0) {
            stars.splice(index, 1)
        }
    })

    // animate mini stars
    miniStars.forEach((miniStar, index) => {
        miniStar.update()
        if (miniStar.timeToLive == 0) {
            miniStars.splice(index, 1)
        }
    })

    ticker++

    if (ticker % randomSpawnRate == 0) {
        const radius = 12
        const x = Math.max(12, Math.random() * canvas.width - radius)
        stars.push(new Star(x, -100, 12, '#1DA1F2'))
        randomSpawnRate = randomIntFromRange(75, 250)
    }
}

init()
animate()