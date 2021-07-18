class Ship {
  constructor() {
    this.x = width / 2
    this.y = height
    this.xdir = 0
    this.h = 40
  }

  show = () => {
    fill(150, 120, 100)
    noStroke()
    rectMode(CENTER)
    rect(this.x, this.y - 15, 15, this.h * 2)
    rect(this.x, this.y, 80, 60)
  }

  move = () => {
    this.x += this.xdir
  }

  constantMove = (dir) => {
    this.xdir = dir * 5
  }

  destroy = () => {
    this.x = width * 2
  }
}