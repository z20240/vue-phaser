// https://phaser.io/tutorials/making-your-first-phaser-3-game-chinese
// https://github.com/Sun0fABeach/vue-phaser3/tree/master/src/game

import Phaser from 'phaser'
import Game from './Game';
import Game2 from './Game2';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: "game-area",
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    /** default 預載第一個，之後每一個請用 scene.start() */
    scene: [ Game, Game2 ]
};

function launch() {
    new Phaser.Game(config)
}

export default launch
export { launch }