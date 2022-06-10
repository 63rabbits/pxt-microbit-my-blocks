let cValue = 0
let fValue = 0
let temp = 0
basic.showString("test")
basic.forever(function () {
    temp = input.temperature()
    fValue = myBlocks.convertTemperature(temp, TempConvertType.CtoF)
    cValue = myBlocks.convertTemperature(fValue, TempConvertType.FtoC)
    basic.showString("T:")
    basic.showNumber(temp)
    basic.showString("C:")
    basic.showNumber(cValue)
    basic.showString("F:")
    basic.showNumber(fValue)
})
