input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.South)
    wuKong.setAllMotor(-10, -10)
})
input.onButtonPressed(Button.AB, function () {
    wuKong.stopAllMotor()
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.North)
    wuKong.setAllMotor(10, 10)
})
basic.forever(function () {
	
})
