# Remind-Me-Later
An google extension for reminding users after X amount of time to stretch.

# Remind-Me-Later Chrome Extension - Misha Ward

This coding project is designed to create a Chrome Extension that addresses the following requirements from my client:

*  Create a timer for x minutes that alerts the user via a screen popup on chrome
*  Once that timer is completed, it should kick off another timer that the user sets for another x amount of time
*  Future iterations should have a way to have multiple timers for the user to set
*  Those multiple timers should have the option to reset indefinitely

 The language of choice is Java and the program relies upon object oriented programming principles, data structures, and algorithms found in computer science to solve the problem. The code was designed to be scalable as evident with the use of HashMaps, ArrayLists, and Sets for quick and efficient storage and access of data.

Below was the prompt for this coding challenge:

**For this challenge, we want to you to calculate the total number of times vehicles, equipment, passengers and pedestrians cross the U.S.-Canadian and U.S.-Mexican borders each month. We also want to know the running monthly average of total number of crossings for that type of crossing and border.**

<!-- ## Instructions to Run

This program uses bash scripts to compile and run and has the functionality of accepting two arguments from the user for the input file name, and export file name. To run this program, please clone or download this project to your computer. To run the program, you can use bash scripts that were written to make it easy and seem-less to compile and execute the code. *Below are examples to how to run if you were in the main directory for the project (border-crossing-analysis):*

#### border-crossing-analysis directory:
```bash
# Without arguments
./run.sh
# With arguments
./run.sh exampleInputFileName.csv exampleOutputFileName.csv
```

*Below are examples to how to run if you were in the insight_testsuite directory of the project:*
#### insight_testsuite directory:
```bash
# Without arguments
./run_tests.sh
# With arguments
./run_tests.sh exampleInputFileName.csv exampleOutputFileName.csv
```

## Assumptions
Although there were restrictions on using third party libraries, I found that I needed some built-in Java libraries for I/O operations, data structures, and tools to manage strings, files, and dates which I assume would be okay.

In terms of data and input, I assumed that the column input order would stay the same, for example Border would show up as the forth column when reading the data, with date being the fifth and so forth. This assumption is key for my program as many of the columns are expected to be in a certain order. For future implementation, I believe this could be solved by potentially keeping this information in another data structure like a map. It should be noted that number of rows should not impact my program significantly as I planned on using a built in sorting algorithm and only two loops through the data (one for data input, the other for output). This loop might not be necessary if I could have the CSV file flipped so that I could read from the bottom instead of the top.

Furthermore, I made an assumption that the user would provide two arguments through the bash script in order to override the defaults. This is done in order to reduce initial complexity but could be implemented if needed with some testing for ease of use.

Another assumption I made was in regards to the test cases. I assume that tests will be added to the input folder in the main directory (border-crossing-analysis -> input).

Finally, the last assumption is that any running of this program would be with the run.sh or the run_tests.sh scripts. This is critical as I decided to read and write to files based on the script running being located in the main/parent directory of the src folder.
-->
## Next Steps
While the Chrome Extension works and meets the critical specifications above, there are some areas of improvement that could be included in the next steps. These are listed below:

**12/8/2019**
* Better input format for reminder timer - one line input
* Create functionality for multiple reminders
* Create functionality for repeating or turning off the reminder
* Allow for audio noise when alarm goes off
* Updates to the UI of the extension
* Fix misc. bugs
*
