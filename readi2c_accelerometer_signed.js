// this code writes to the accelerometer, signed byte integers
basic.forever(function () {//runs continuously
    let value = pins.i2cReadNumber(0x19, NumberFormat.Int8LE, false)
	basic.showNumber(value)
	basic.pause(200) 
}) 
