radio.onReceivedNumber(function (receivedNumber) {
    scene = receivedNumber
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.stopAllSounds()
})
let scene = 0
radio.setGroup(105)
scene = 0
basic.showLeds(`
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    if (scene == 1) {
        basic.showLeds(`
            . . . . .
            # . . . .
            # # . . #
            # # # # #
            # # # # #
            `)
    }
    if (scene == 1) {
        basic.showLeds(`
            . . . . .
            # # . . .
            # # # . .
            # # # # #
            # # # # #
            `)
    }
    if (scene == 1) {
        basic.showLeds(`
            . . . . .
            . # # . .
            # # # # .
            # # # # #
            # # # # #
            `)
    }
    if (scene == 1) {
        basic.showLeds(`
            . . . . .
            . . # # .
            . # # # #
            # # # # #
            # # # # #
            `)
    }
    if (scene == 1) {
        basic.showLeds(`
            . . . . .
            . . . # #
            . . # # #
            # # # # #
            # # # # #
            `)
    }
    if (scene == 1) {
        basic.showLeds(`
            . . . . .
            . . . . #
            # . . # #
            # # # # #
            # # # # #
            `)
    }
    if (scene == 2) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    while (scene == 3) {
        basic.showLeds(`
            . . . . .
            . # . # .
            # # # # #
            # . # . #
            # # # # #
            `)
        basic.pause(50)
        basic.showLeds(`
            . . . . .
            # . # . #
            # # # # #
            . # . # .
            # # # # #
            `)
        basic.pause(50)
    }
    basic.pause(100)
})
basic.forever(function () {
    if (scene == 1) {
        for (let index = 0; index <= 5; index++) {
            music.setVolume(0 + 20 * index)
            music.ringTone(131)
            basic.pause(50)
            music.ringTone(165)
            basic.pause(50)
        }
    }
    if (scene == 1) {
        for (let index = 0; index <= 5; index++) {
            music.setVolume(100 + 20 * index)
            music.ringTone(131)
            basic.pause(50)
            music.ringTone(165)
            basic.pause(50)
        }
    }
    if (scene == 1) {
        for (let index = 0; index <= 5; index++) {
            music.ringTone(131)
            basic.pause(50)
            music.ringTone(165)
            basic.pause(50)
        }
    }
    if (scene == 1) {
        for (let index = 0; index <= 5; index++) {
            music.setVolume(200 - 20 * index)
            music.ringTone(147)
            basic.pause(50)
            music.ringTone(185)
            basic.pause(50)
        }
    }
    if (scene == 1) {
        for (let index = 0; index <= 5; index++) {
            music.setVolume(100 - 20 * index)
            music.ringTone(147)
            basic.pause(50)
            music.ringTone(185)
            basic.pause(50)
        }
    }
    if (scene == 3) {
        music.setVolume(100)
        music.ringTone(randint(100, 400))
        basic.pause(20)
    }
    music.stopAllSounds()
    basic.pause(100)
})
