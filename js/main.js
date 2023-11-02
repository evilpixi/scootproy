class g {}

g.width = 480
g.height = 270
// --------------------- DEBUG TOOLS --------------------- 
g.debugMode = 1

// --------------------- GAME CONFIG --------------------- 
g.gameConfig = {
    type: Phaser.WEBGL,
    scale: {
        parent: 'gameContainer',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: g.width,
        height: g.height,
        min: { width: g.width, height: g.height }
    },
    autoStart: false,
    physics: {
        default: 'arcade',
        arcade: {
            debug: g.debugMode,
            gravity: {y: 1}
        }
    },
    render: {
        antialias: false
    },
    callbacks: {
        postBoot: (game)=> {
            game.scale.displaySize.setSnap(g.width/3, g.height/3)
            game.scale.refresh()
        }
    }
}

// --------------------- SCENES ---------------------

g.game = new Phaser.Game(g.gameConfig)
g.game.scene.add("BootScene", BootScene)
g.game.scene.add("PlayerCreationScene", PlayerCreationScene)
g.game.scene.add("GameplayScene", GameplayScene)

g.game.scene.start("BootScene")