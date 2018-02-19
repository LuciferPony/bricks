import Phaser from 'phaser'

class Ball extends Phaser.Sprite {
    constructor (game, x, y) {
        super(game, x, y, 'ball')

        this.game.physics.arcade.enableBody(this)
        this.checkWorldBounds = true

        this.body.collideWorldBounds = true
        this.body.bounce.set(1)
    }

    update() {
        if(this.body.velocity.x < 0) {
            this.angle -= 1
        }
        if (this.body.x > 0) {
            this.angle += 1
        }
        }
    }


export default Ball