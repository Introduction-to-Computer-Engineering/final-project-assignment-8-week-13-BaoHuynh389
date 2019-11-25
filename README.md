
 # Week 13 - Oscilloscopes and serial protocols
 
 # CPE 1040 - Introduction to Computer Engineering

## Assignment 8, Part 2: Final Project

## Part II (Week 13, Assignment #8)
Submission
### 1. Summary

This is the final project and the last required assignment. It contains lab work, source code versioning, and a writeup. The [README.md](README.md) is empty for you to fill with your project writeup. This file, [requirements.md](requirements.md) contains the requirements. There are three parts to the final project, to be done, in order, in weeks 12-14, respectively:
1. An extended version of Assignment #6, requiring some basic I/O and pin operation on the microbit.
2. Oscilloscope exercises and passing data over I2C.
3. Tutorial on creating a Makecode extension package for the soil moisture sensor.
The file [criteria.md](criteria.md) contains the criteria for passing.

 ## Part 1: Oscilloscope warmup:
1. Watch the first 4 oscilloscope videos referenced below.

2. Take a look at the Rigol 1000 Series oscilloscopes documentation site to see what resources you have in case you need more in-depth knowledge.

3. The oscilloscope shows continuous varying signals that it detects at the tips of its probes. The 
         
 ## Part 2: Visualize output of built-in function generator:
   i: Visualize the following signals, using the Auto regime and default settings (trigger on a rising edge on CH1). For each signal, take a video of the setup (the source wire and connection of the oscilloscope probe) and the display of the oscilloscope, while varying one of the signal properties (wave shape, frequency, amplitude) using the controls of the source. *(LINK FILES)
   
a. Out: The video shows the configured the OUT of the built-in function generator on the workstation connected to the oscilloscope.
  1. videolink:https://imgur.com/gallery/jajNZaW
  2. code link[OUT.js](OUT.js)

b. standalone Rigol function generator: The video of a oscilloscope attached to the function generator
1. video link: https://imgur.com/gallery/uSdJl33

c. PWM: the video that shows the one line of code that sends a PWM pulse.
1. video link: https://imgur.com/gallery/rZBdRUE
2. code link:[PWM-pulses.js](PWM-pulses.js)

d. PWM 5%:  video of that shows a program that sends PWM pusles with the period of the base wave increasing by 5% every time.
1. video link: https://imgur.com/gallery/OQwcaUQ
2. code link:[PWM-pulses-5%.js](PWM-pulses-5%.js)

   ii: other servo function, using the oscilloscope
   a video of the other servo function, servoSetPulse. This function sets the duration of the pulse that is emitted.
 1. video link: https://imgur.com/gallery/AF6RdlW
 2. code link:[servo.js](servo.js)
   
 ## Part 3: I2C warmup:(Answer the following questions)
1. Read the SparkFun I2C tutorial.

2. Question:
a. What are the disadvantages of the other two serial communication channels, UART and SPI, and how does I2C improve on them?
- UART is between only 2 devices that have to have the same data rate. SPI requires pins and routing signals also become more difficult in a tight PCB layout.

b. I2C is a two-wire serial communication channel. What are the two wires, SDA and SCL?
- SDA is the data signal, which is the information that is being transmitted. The SCL is the clock signal that acts as a sort of timer for the exchange of data.

c. What distinguishes the master and the slaves?
- Masters drives the clock and initiates the transfer over the I2C bus. Slaves can transfer data, but cannot initiate transfer. Slaves can also delay the clock by clock stretching to delay the transmission of data.

d. How are the two types of protocol frames different?
- The address frame is the first process in the communication sequence. Its data is trasmitted to the recieving device, and the SDA is either placed on the master or slave depending on if the program call for read or write.

e. What is the most appropriate trigger for capturing an I2C frame on the oscilloscope?
- The appropriate trigger for capturing an I2C frame on the oscilloscope is the falling edge of the SDA. The reason for this is that process is started off by the address frame, which pulls the SDA low.that is why SDA will lead with a falling edge. 

f.(Advanced) If the micro:bit is configured by default as a master, and two micro:bits, connected to each other via the SDA and SCL lines, communicate over I2C? 
- Both of microbits are configured to be masterst. when the programmer dont want to go deep into the operating system, having 2 masters will not work.

    
 ## Part 4: Capture an I2C frame from the micro:bit
 
1.  Configure the micro:bit to write a number to some arbitrary I2C address. The address can be arbitrary. Capture an I2C frame on the oscilloscope. 

a. what frame did you capture?
- We were testing to captured the address frame.

b. what does the I2C write function do when there is nothing connected?
- When nothing connected, the I2C write function still has the master try to initiate a transaction to the slave, but after the slave doesn't respond the master realizes that there is nothing to transmit to. So that, we could not see anthing on the lab experiment.

c. Is there a difference in what you capture if you write a number to one of the internal device addresses?
- It have a a difference between the addresses because when writes to the internal address, we receive a response from the slave, but when writing to an arbitrary address, there is only a data frame 

 1. code link (write i2c): [write-I2C.js ](write-I2C.js)
 2. photo set-up link: https://imgur.com/gallery/o7Vy8VS
 3. photo oscilloscope link: https://imgur.com/gallery/El8rFZv

2. Write a short program to read a number from the I2C devices on the micro:bit. For each device:
Requirement:

a. Try all three addresses. (Bonus for a cogent argument about why there are three.)
- It is one address. In the code I first wrote to 0x19, then wrote to one of the other two addresses 0x32, 0x33. As the video shows, when writing to 0x19, there is a data frame, but when writing to either 0x33 or 0x32, there is only an address frame.

b. Try signed and unsigned single bype integers.
- by the pictures and the videos that were atached, the signal was the simliar for signed and unsigned numbers for both (acclometer) and (magnetometer). It did not matter because there was no visible change for signed and unsigned numbers.

c. Scroll the values on the LED matrix.
- these two video describe how to scroll the values on the LED matrix when reading the accelerometer address and showing the numbers on the led display (sign and usign)
https://imgur.com/gallery/0cEyQ3b
https://imgur.com/gallery/lvFoLDt

- these two video describe how to scroll the values on the LED matrix when reading the magnetometer address and showing the numbers on the led display (sign and usign)

9. Video link of a program to read a number from the I2C devices on the micro:bit (magnetometer, sign byte integers):
https://imgur.com/gallery/Itjb8w2
https://imgur.com/gallery/IIDuARU

d. What values do you read?
- When reading the accelerometer with signed numbers, it read -128. When reading the accelerometer with unsigned numbers, it read 128. When reading the magnetometer, it displayed a changed number when we moved it around.

e. Can you get different values by moving the micro:bit around.
- When reading from the accelerometer, the value does not change while moving the microbit. However, try moving the microbit cause the value changes in magnetometer. This makes sense because the magnetometer is what we would use to make a compass. It reacts to changes in magnetic feilds.

# Files:
1. Code link of a program to read a number from the I2C devices on the micro:bit (acclometer, sign byte integers):
[readi2c_accelerometer_signed.js](readi2c_accelerometer_signed.js)

2. Image link of a program to read a number from the I2C devices on the micro:bit (acclometer, sign byte integers):
https://imgur.com/gallery/B8GZNfG

3. Video link of a program to read a number from the I2C devices on the micro:bit (acclometer, sign byte integers):
https://imgur.com/gallery/0cEyQ3b

4. Code link of a program to read a number from the I2C devices on the micro:bit (acclometer, unsign byte integers):
[readi2c_accelerometer_unsigned](readi2c_accelerometer_unsigned)

5. Image link of a program to read a number from the I2C devices on the micro:bit (acclometer, unsign byte integers):
https://imgur.com/gallery/wHw9cy9

6. Video link of a program to read a number from the I2C devices on the micro:bit (acclometer, unsign byte integers):
https://imgur.com/gallery/lvFoLDt


7. Code link of a program to read a number from the I2C devices on the micro:bit (magnetometer, sign byte integers):
[readi2c_magnetometer_signed.js ](readi2c_magnetometer_signed.js)

8. Image link of a program to read a number from the I2C devices on the micro:bit (magnetometer, sign byte integers):
https://imgur.com/gallery/MR9a3AJ

9. Video link of a program to read a number from the I2C devices on the micro:bit (magnetometer, sign byte integers):
https://imgur.com/gallery/Itjb8w2

10. Code link of a program to read a number from the I2C devices on the micro:bit (magnetometer, unsign byte integers):
[readi2c_magnetometer_unsign.js](readi2c_magnetometer_unsign.js)
11. Image link of a program to read a number from the I2C devices on the micro:bit (magnetometer, unsign byte integers):
https://imgur.com/gallery/ARu55PG

12. Video link of a program to read a number from the I2C devices on the micro:bit (magnetometer, unsign byte integers):
https://imgur.com/gallery/IIDuARU


