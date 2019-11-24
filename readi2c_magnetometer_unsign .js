// this code writes to the magnetometer, unsign byte integers
basic.forever(function () {//runs continuously
    let value = pins.i2cReadNumber(0x1E, NumberFormat.UInt8LE, false)
	basic.showNumber(value)
	basic.pause(200) 
}) 
