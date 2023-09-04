# Java Web Development Project

This is a Java/web development project where I decided to create a fictional video game store. 
My main focus with this project is learning how to put everything together, how to set up a back-end, and develop a fully working web application.

# Setup

1. **Set-up**  
   This project uses Node.js and Express.js, which you will need to install.
   Make sure you installed Node on your machine. Then type this in your terminal:
   npm install

2. **Start the Server**  
   Start the server using Node.js, by typing this in your terminal: node server.js

3. **View in Browser**  
    Once running, you can access the application in your browser at this URL: http://localhost:3000`


# Test Cases

# Test Scenario 1: To claim any game key

Test Steps:
1. The user runs the program / starts the server
2. The user navigates to http://localhost:3000/ in their web browser
3. The user clicks claim game, in this case the game 'War Thunder'

Browser: Chrome Version 116.0.5845.141 (Official Build) (64-bit)

Test Data: No test data is needed for the test steps. Pick any game.

Expected/Intended Result: Successful pop-up displaying the game title and retried game key.

Actual Results: As Expected

Test Status: Pass

# Test Scenario 2: To reach a game key limit which stops further game keys from being claimed

Test Steps:
1. The user runs the program / starts the server
2. The user navigates to http://localhost:3000/ in their web browser
3. The user proceeds to claim five different games. In this case, War Thunder, Grand Theft Auto V, Team Fortress 2, Destiny 2, Dota 2
4. The user attempts to claim a 6th game key, in this case, Destiny 2.

Browser:  Chrome Version 116.0.5845.141 (Official Build) (64-bit)

Test Data: No test data is needed for the test steps. Pick any game.

Expected/Intended Result: User is denied claiming a 6th game and an error message appears.

Actual Results: As Expected

Test Status: Pass
