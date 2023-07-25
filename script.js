
class USS {
    constructor(name, hull, firepower, accuracy) {
      this.name = name
      this.hull = hull || 20
      this.firepower = firepower || 5
      this.accuracy = accuracy || .7
    }
    attackEnemy(enemy) {
      if (this.hull >= 1) {
        console.log(`Attacking ${enemy}`)
      } else {
        console.log(`Dead... ${enemy} is winning.`)
      }
    }
    retreat(){
        console.log('reteating ...')
    }
  
}
  
class Alienship {
    constructor(name) {
        this.name = name
        this.hull = Math.floor(Math.random() * 5) + 3
        this.firepower = Math.floor(Math.random() * 3) + 2
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
    }

    attack(uss) {
        if (this.hull >= 3) {
            console.log(`Start shooting human, ${uss} ship.`)
        } else {
            console.log(`Dead... ${uss} won the battle`)
        }
    }
    retreat(){
        console.log('reteating ...')
    }
}

const firstAlien = new Alienship('firstAl')
const secondAlien = new Alienship('secondAl')
const thirdAlien = new Alienship('thirdAl')
const fourthAlien = new Alienship('fourthAl')
const fifthAlien = new Alienship('fifthAl')
const sixthAlien = new Alienship('sixthAl')