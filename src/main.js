let x = 0
input.onButtonPressed(Button.A, () => {
    basic.showString(input.temperature().toString() + "C", 300)
basic.showIcon(IconNames.Heart)
    basic.pause(10)
    basic.showIcon(IconNames.Giraffe)
    basic.pause(10)
    basic.showIcon(IconNames.Heart)
    basic.pause(10)
    basic.showIcon(IconNames.Giraffe)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, () => {
    for (let index = 0; index <= 40; index++) {
        x = input.compassHeading()
        if (0 <= x && x < 30) {
            basic.showArrow(ArrowNames.East)
        } else if (22 <= x && x < 67) {
            basic.showArrow(ArrowNames.NorthEast)
        } else if (67 <= x && x < 112) {
            basic.showArrow(ArrowNames.North)
        } else if (112 <= x && x < 157) {
            basic.showArrow(ArrowNames.NorthWest)
        } else if (157 <= x && x < 202) {
            basic.showArrow(ArrowNames.West)
        } else if (202 <= x && x < 247) {
            basic.showArrow(ArrowNames.SouthWest)
        } else if (247 <= x && x < 292) {
            basic.showArrow(ArrowNames.South)
        } else if (292 <= x && x < 337) {
            basic.showArrow(ArrowNames.SouthEast)
        } else if (337 <= x && x <= 360) {
            basic.showArrow(ArrowNames.East)
        } else {
            basic.showIcon(IconNames.No)
        }
    }
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.clearScreen()
})
