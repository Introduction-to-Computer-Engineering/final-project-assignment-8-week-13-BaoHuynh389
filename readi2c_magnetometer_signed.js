// this code writes to the magnetometer, signed byte integers
basic.forever(function () {//runs continuously
    let value = pins.i2cReadNumber(0x1E, NumberFormat.Int8LE, false)
	basic.showNumber(value)
	basic.pause(200) 
}) 
