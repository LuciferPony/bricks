import Phaser from 'phaser'
import {clone} from 'lodash'
import globals from './globals/index'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.game.load.audio('gameover',['assets/media/gameover.mp3'])
  }

  create () {
    let gameover = this.game.add.audio('gameover')
    gameover.play()

    let text = this.add.text(
      this.game.width * 0.5, this.game.height * 0.5,
      'Game over lalka',
      {
        font: '78px lest',
        fill: '#700210',
        align: 'center'
      }

      )
      text.anchor.set(0.5)

      this.input.onDown.add(this.restartGame, this)
  }

  resetGlobalVariables() {
    this.game.global = clone(globals)
  }

  restartGame() {
    this.game.state.start('Game')
    this.resetGlobalVariables()
  }
}
