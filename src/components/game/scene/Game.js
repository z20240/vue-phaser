import Phaser from 'phaser';
import sky from './assets/sky.png';
import platform from './assets/platform.png';

import bomb1 from './assets/bomb_1.png'; // base64

/**
 * The addBase64 is used internally by Phaser to add the images you see when there is a missing image.
 * https://supernapie.com/blog/loading-assets-as-data-uri-in-phaser-3/
 */
import star from './assets/star.png'; // base64
import bomb from './assets/bomb.png'; // base64
import dude from './assets/dude.png'; // base64

export default class Game extends Phaser.Scene {

    constructor() {
        super({key: 'Game'});
    }

    preload() {

        console.log("bomb1", bomb1);
        /** 在 preload 中預載圖片 */
        this.load.image('sky', sky);
        // this.load.image('dude', dude);
        // this.textures.addBase64('dude', dude);
        this.load.spritesheet('dude', dude, { frameWidth: 32, frameHeight: 48 });
        this.load.image('star', star);
        this.load.image('bomb', bomb);
        this.load.image('platform', platform);
    }

    create () {
        console.log("[Create] Game");
        // 可以使用 setOrigin 設置原點來改變原點的起始位置。
        this.add.image(0, 0, 'sky').setOrigin(0, 0);
        this.add.image(100, 300, 'platform');
        this.add.image(50, 50, 'dude');
        this.add.image(500, 500, 'star');
        this.add.image(200, 300, 'bomb');
    }
}