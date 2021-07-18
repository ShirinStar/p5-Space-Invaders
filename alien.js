class Alien {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.r = 20
    this.xdir = 1
    this.removeShip = false
  }

  show = () => {
    //drawing alien face
    fill(0, 255, 0)
    noStroke()
    ellipse(this.x, this.y, this.r * 2, this.r * 2.5)
    fill(0)
    ellipse(this.x - 10, this.y - 5, 6, 6)
    ellipse(this.x + 10, this.y - 5, 6, 6)
    stroke(0)
    line(this.x - 10, this.y + 10, this.x + 10, this.y + 10)
  }

  move = () => {
    this.x += this.xdir
  }

  shiftDown = () => {
    this.xdir *= -1
    this.y += this.r * 2
  }

  //checking if alien touch ship
  firstTouch = () => {
    let distanceAlienShip = dist(this.x, this.y, ship.x, ship.y)
    if (distanceAlienShip < this.r + ship.h + 10) {
      this.removeShip = true
    }
  }

  //game over
  gameOver = () => {
    if (this.removeShip) {
      textSize(88)
      noStroke()
      fill(255, 0, 0)
      textAlign(CENTER)
      text('Game Over', width / 2, height / 2)

      this.r = width * height
    }
  }

  stopMoving = () => {
    this.xdir = 0
  }
}