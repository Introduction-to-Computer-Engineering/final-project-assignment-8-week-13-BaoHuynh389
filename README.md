##### Assignemnet 8, Part 2
 # Week 13 - Oscilloscopes and serial protocols
 ## Part 1: Oscilloscope warmup:
1. Watch the first 4 oscilloscope videos referenced below.

2. Take a look at the Rigol 1000 Series oscilloscopes documentation site to see what resources you have               in case you need more in-depth knowledge.

3. The oscilloscope shows continuous varying signals that it detects at the tips of its probes. The 
         
 ## Part 2: Visualize simple continuous signals:
   i: Visualize the following signals, using the Auto regime and default settings (trigger on a rising edge on CH1). For each signal, take a video of the setup (the source wire and connection of the oscilloscope probe) and the display of the oscilloscope, while varying one of the signal properties (wave shape, frequency, amplitude) using the controls of the source. *(LINK FILES)
   
a. Out:
 1.videolink:https://imgur.com/gallery/jajNZaW
 2.code link[OUT.js](OUT.js)

b. standalone Rigol function generator: 
1.video link: https://imgur.com/gallery/uSdJl33

c. PWM:
1.video link: https://imgur.com/gallery/rZBdRUE
2.code link:[PWM pulses.js](PWM pulses.js)

d. PWM 5%:
1.video link: https://imgur.com/gallery/OQwcaUQ
2.code link:[PWM pulses-5%.js](PWM pulses-5%.js)

   ii: other servo function, using the oscilloscope
 1.video link: https://imgur.com/gallery/AF6RdlW
 2.code link:[servo.js](servo.js)
   
 ## Part 3: I2C warmup:
1. Read the SparkFun I2C tutorial.

2. Question:
a. What are the disadvantages of the other two serial communication channels, UART and SPI, and how does I2C improve on them?

b. I2C is a two-wire serial communication channel. What are the two wires, SDA and SCL?

c. What distinguishes the master and the slaves?

d. How are the two types of protocol frames different?

e. What is the most appropriate trigger for capturing an I2C frame on the oscilloscope?

f.(Advanced) If the micro:bit is configured by default as a master, and two micro:bits, connected to each other via the SDA and SCL lines, communicate over I2C? 

    
 ## Part 4: fIRST STEP WITH I2C
 
1.  Configure the micro:bit to write a number to some arbitrary I2C address. The address can be arbitrary. Capture an I2C frame on the oscilloscope. 

a. what frame did you capture?

b. what does the I2C write function do when there is nothing connected?

c. Is there a difference in what you capture if you write a number to one of the internal device addresses?


2. Write a short program to read a number from the I2C devices on the micro:bit. For each device:



