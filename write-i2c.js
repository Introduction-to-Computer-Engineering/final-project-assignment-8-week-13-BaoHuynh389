//write a number to some arbitrary I2C address.
//writes to an arbitrary address
basic.forever( function(){//runs continuously
    pins.i2cWriteNumber(0x07, 2055, NumberFormat.Int8LE)// writes to 0x07
}) 
