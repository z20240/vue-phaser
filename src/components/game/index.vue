<template>
  <div>
    Game
    <div id="game-area"></div>
  </div>
</template>

<script>
import Phaser from "phaser";
// https://phaser.io/tutorials/making-your-first-phaser-3-game-chinese

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
    scene: [  ]
};

export default {
    name: "app",
    data() {
        return {
            game: null,
        };
    },
    mounted() {
        this.game = new Phaser.Game(config);
    }
};
</script>

<style lang="scss">
</style>
