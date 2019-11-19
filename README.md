##CPE 1040 - ASSIGNMENT 8
 SUBMISSION
#Task 1: Visualize output of built-in function generator
Visualize simple continuous signals:
Visualize the following signals, using the Auto regime and default settings (trigger on a rising edge on CH1). For each signal, take a video of the setup (the source wire and connection of the oscilloscope probe) and the display of the oscilloscope, while varying one of the signal properties (wave shape, frequency, amplitude) using the controls of the source. Write up one sentence in the README, enough to be able to insert a link to the video. Signals:
Configure the OUT of the built-in function generator on the workstation with whatever function you want. Remember that we used it to drive external LEDs.
Fire up the standalone Rigol function generator. It is right beneath the multimeter. Connect a probe. Notice that the function generator probes also have two wires. Connect it properly to the oscilloscope probe. Repeat the previous task with this new source.
Write a one-line micro:bit program to set an analog pin to emit PWM pulses. Which pin function will you use? Capture the signal. PWM stands for Pulse Width Modulation and is a method to control servo motors. PWM is based on a square wave signal where the pulses (that is, the sections where the signal is *high*) vary in width. The servo motor decodes the signal (essentially comparing the width of the pulse to the period of the square wave) and rotates the shaft accordingly._
To repeat the task from (1), you need a loop for your program in (3). Write a loop that varies the duty cycle, up and down, between 5% and 95%, in steps of 5%. Note: Here, you need to read on the oscilloscope what the period of the base wave is, to calculate the duty cycles. Include the period and the pulse widths for the highest and lowest duty cycle in your short writeup.
Explore the other servo function, using the oscilloscope. Once you figure it out, write a small program to demo the operation, and record the video. You might or might not need to use the Single mode of the oscilloscope.
I2C warmup:
Read the SparkFun I2C tutorial.
In a small writeup in the README, answer the following questions:
What are the disadvantages of the other two serial communication channels, UART and SPI, and how does I2C improve on them?
I2C is a two-wire serial communication channel. What are the two wires, SDA and SCL?
What distinguishes the master and the slaves?
How are the two types of protocol frames different?
What is the most appropriate trigger for capturing an I2C frame on the oscilloscope?
(Advanced) If the micro:bit is configured by default as a master, and two micro:bits, connected to each other via the SDA and SCL lines, communicate over I2C? (Bonus for a convincing argument, one way or another.)
First steps with I2C:
In a loop, configure the micro:bit to write a number to some arbitrary I2C address. The address can be arbitrary. Capture an I2C frame on the oscilloscope. Note that I2C has 2 wires, so you will need 2 probes, and set the correct trigger on the correct channel. Use the Single mode on the oscillocope. Take a picture of your setup and a picture of the oscilloscope display. In the writeup, analyze what you have captured:
What frame did you capture?
What does the I2C write function do when there is nothing connected?
Is there a difference in what you capture if you write a number to one of the internal device addresses? (The accelerometer and magentometer (compass) are connected to the I2C bus on the micro:bit PCB. Their addresses can be found here.)
Write a short program to read a number from the I2C devices on the micro:bit. For each device:
Try all three addresses. (Bonus for a cogent argument about why there are three.)
Try signed and unsigned single bype integers.
Scroll the values on the LED matrix.
What values do you read?
Can you get different values by moving the micro:bit around.
(Advanced, optional, and bonus) Simple pulse-based protocol:
Program one micro:bit to emit pulse-based patterns by driving a digital output pin. Use a 50% duty cycle. Start with the 11111 pattern.
Program another micro:bit to detect the pattern by listening on an digital input pin. Play with the bits.onPulsed() and bits.pulseDuration() functions.
Generate and capture all 5-bit patterns. How will you deal with the patterns that start with the same value as your protocol line (that is, if your line is high by default, how will you deal with patterns that start with 1, and if you line is low by default, how will you deal with patterns that start with 0)? Devise a demo that shows this capability on a video. You may use the LED matrix to show the sent and received patterns, for comparison.
