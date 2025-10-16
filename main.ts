input.onButtonPressed(Button.A, function () {
    radio.sendString("OI, SOMOS O GRUPO 2")
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(4)
})
radio.setGroup(1)
