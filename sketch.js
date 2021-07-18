let ship;
let aliens = [];

function setup() {
  createCanvas(600, 400)

  ship = new Ship()

  for (i = 0; i < 10; i++) {
    aliens[i] = new Alien(i * 50 + 10, 40)
  }
}

function draw() {
  background(51)

  ship.show()
  ship.move()

  let edge = false

  for (i = 0; i < aliens.length; i++) {
    aliens[i].show()
    aliens[i].move()

    //checking if aliens reach canvas edge
    if (aliens[i].x > width || aliens[i].x < 0) {
      edge = true
    }

    //cheking if aliens touch player
    aliens[i].firstTouch(ship)
    aliens[i].gameOver()

    if (aliens[i].removeShip) {
      ship.destroy()
      for (i = 0; i < aliens.length; i++) {
        aliens[i].stopMoving()
      }
    }
  }

  if (edge) {
    for (i = 0; i < aliens.length; i++) {
      aliens[i].shiftDown()
    }
    if (aliens.length < 50) {
      for (let i = 0; i < 10; i++) {
        aliens.push(new Alien(i * 50 + 10, 40))
      }
    }
  }

}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    ship.constantMove(1)
  } else if (keyCode === LEFT_ARROW) {
    ship.constantMove(-1)
  }
}

function keyReleased() {
  ship.constantMove(0)
}
