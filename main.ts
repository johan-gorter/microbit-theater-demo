radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        while (true) {
            basic.showLeds(`
                . . . . .
                # . . . .
                # # . . #
                # # # # #
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                # # . . .
                # # # . .
                # # # # #
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                . # # . .
                # # # # .
                # # # # #
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                . . # # .
                . # # # #
                # # # # #
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                . . . # #
                . . # # #
                # # # # #
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                . . . . #
                # . . # #
                # # # # #
                # # # # #
                `)
        }
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (receivedNumber == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
radio.setGroup(105)
basic.showLeds(`
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
	
})
