// this code writes to the accelerometer, unsigned byte integers
basic.forever(function () {//runs continuously
    let value = pins.i2cReadNumber(0x19, NumberFormat.UInt8LE, false)
	basic.showNumber(value)
	basic.pause(200) 
}) 
