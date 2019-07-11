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
        super({ key: 'Game' });
    }

    preload() {

        console.log("bomb1", bomb1);
        /** 在 preload 中預載圖片 */
        this.load.image('sky', sky);
        // this.load.image('dude', dude);
        // this.textures.addBase64('dude', dude);
        this.load.image('star', star);
        this.load.image('bomb', bomb);
        this.load.image('img_platform', platform);
        this.load.spritesheet('dude', dude, { frameWidth: 32, frameHeight: 48 });
    }

    create() {

        // 可以使用 setOrigin 設置原點來改變原點的起始位置。
        this.add.image(0, 0, 'sky').setOrigin(0, 0);

        // 創建一組靜態物理平台
        this.platforms = this.physics.add.staticGroup();
        // 加入好幾個平台圖片
        this.platforms.create(400, 568, 'img_platform').setScale(2, 2).refreshBody(); // 物理静态组变换尺寸后需要刷新物理Body，即通知物理系统
        this.platforms.create(600, 400, 'img_platform');
        this.platforms.create(50, 250, 'img_platform');
        this.platforms.create(750, 220, 'img_platform');


        // 創建一個玩家
        this.player = this.physics.add.sprite(100, 450, 'dude');

        // 撞到物件時要不要彈跳
        this.player.setBounce(0.2);

        // 設置遊戲世界的邊緣，以防玩家掉出遊戲
        this.player.setCollideWorldBounds(true);

        // 設定這兩個物件可以發生碰撞
        this.physics.add.collider(this.player, this.platforms);

        // this.player.body.setGravityY(900)
        this.anims.create({
            key: 'left',
            // 使用 0-3 幀
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            // 每秒 10 幀
            frameRate: 10,
            // repeat -1 告诉动画要循环播放
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });


        // 使用鍵盤管理器創建游標（cursor）对象。
        this.cursors = this.input.keyboard.createCursorKeys();

    }

    update() {
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);

            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);

            this.player.anims.play('right', true);
        }
        else {
            this.player.setVelocityX(0);

            this.player.anims.play('turn');
        }

        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-310);
        }
    }
}