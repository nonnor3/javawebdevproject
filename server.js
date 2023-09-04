// Requires the package dotenv
require('dotenv').config();

// gameKeys object that will contain a list of the 10 games and their 10 keys.
// The actual keys are stored in the .env file first and we access them here
// These keys are not unique, just for testing purposes

const gameKeys = {
    "Counter Strike: Global Offensive": [
        process.env.CSGO_KEY_1, process.env.CSGO_KEY_2, process.env.CSGO_KEY_3,
        process.env.CSGO_KEY_4, process.env.CSGO_KEY_5, process.env.CSGO_KEY_6,
        process.env.CSGO_KEY_7, process.env.CSGO_KEY_8, process.env.CSGO_KEY_9,
        process.env.CSGO_KEY_10
    ],
    
    "Dota 2": [
        process.env.DOTA2_KEY_1, process.env.DOTA2_KEY_2, process.env.DOTA2_KEY_3,
        process.env.DOTA2_KEY_4, process.env.DOTA2_KEY_5, process.env.DOTA2_KEY_6,
        process.env.DOTA2_KEY_7, process.env.DOTA2_KEY_8, process.env.DOTA2_KEY_9,
        process.env.DOTA2_KEY_10
    ],

    "Apex Legends": [
        process.env.APEX_KEY_1, process.env.APEX_KEY_2, process.env.APEX_KEY_3,
        process.env.APEX_KEY_4, process.env.APEX_KEY_5, process.env.APEX_KEY_6,
        process.env.APEX_KEY_7, process.env.APEX_KEY_8, process.env.APEX_KEY_9,
        process.env.APEX_KEY_10
    ],

    "PUBG: BATTLEGROUNDS": [
        process.env.PUBG_KEY_1, process.env.PUBG_KEY_2, process.env.PUBG_KEY_3,
        process.env.PUBG_KEY_4, process.env.PUBG_KEY_5, process.env.PUBG_KEY_6,
        process.env.PUBG_KEY_7, process.env.PUBG_KEY_8, process.env.PUBG_KEY_9,
        process.env.PUBG_KEY_10
    ],
    "Grand Theft Auto V": [
        process.env.GTA5_KEY_1, process.env.GTA5_KEY_2, process.env.GTA5_KEY_3,
        process.env.GTA5_KEY_4, process.env.GTA5_KEY_5, process.env.GTA5_KEY_6,
        process.env.GTA5_KEY_7, process.env.GTA5_KEY_8, process.env.GTA5_KEY_9,
        process.env.GTA5_KEY_10
    ],
    
     "Rust": [
        process.env.RUST_KEY_1, process.env.RUST_KEY_2, process.env.RUST_KEY_3,
        process.env.RUST_KEY_4, process.env.RUST_KEY_5, process.env.RUST_KEY_6,
        process.env.RUST_KEY_7, process.env.RUST_KEY_8, process.env.RUST_KEY_9,
        process.env.RUST_KEY_10
    ],
    "Team Fortress 2": [
        process.env.TF2_KEY_1, process.env.TF2_KEY_2, process.env.TF2_KEY_3,
        process.env.TF2_KEY_4, process.env.TF2_KEY_5, process.env.TF2_KEY_6,
        process.env.TF2_KEY_7, process.env.TF2_KEY_8, process.env.TF2_KEY_9,
        process.env.TF2_KEY_10
    ],
    "Call of Duty: Modern Warfare II": [
        process.env.CODMW2_KEY_1, process.env.CODMW2_KEY_2, process.env.CODMW2_KEY_3,
        process.env.CODMW2_KEY_4, process.env.CODMW2_KEY_5, process.env.CODMW2_KEY_6,
        process.env.CODMW2_KEY_7, process.env.CODMW2_KEY_8, process.env.CODMW2_KEY_9,
        process.env.CODMW2_KEY_10
    ],

    "Destiny 2": [
        process.env.DESTINY2_KEY_1, process.env.DESTINY2_KEY_2, process.env.DESTINY2_KEY_3,
        process.env.DESTINY2_KEY_4, process.env.DESTINY2_KEY_5, process.env.DESTINY2_KEY_6,
        process.env.DESTINY2_KEY_7, process.env.DESTINY2_KEY_8, process.env.DESTINY2_KEY_9,
        process.env.DESTINY2_KEY_10
    ],
    "War Thunder": [
        process.env.WARTHUNDER_KEY_1, process.env.WARTHUNDER_KEY_2, process.env.WARTHUNDER_KEY_3,
        process.env.WARTHUNDER_KEY_4, process.env.WARTHUNDER_KEY_5, process.env.WARTHUNDER_KEY_6,
        process.env.WARTHUNDER_KEY_7, process.env.WARTHUNDER_KEY_8, process.env.WARTHUNDER_KEY_9,
        process.env.WARTHUNDER_KEY_10
    ],
};

// Imports Express.js and the path module
const express = require('express');
const path = require('path');


// Creates an Express application by calling the express() function

const app = express();

// Defines the server port to be 3000

const PORT = 3000;

// Ensures that JSON payloads can be correctly parsed
app.use(express.json());


// Ensures that the files in the public directory (HTML, CSS, JS) can be served.
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to claim a game key based on the game name
app.post('/claimKey', (req, res) => {
    const gameName = req.body.gameName;

    // See if a key is available and send it, else show an error message
    if (gameKeys[gameName] && gameKeys[gameName].length) {
        const key = gameKeys[gameName].pop();
        res.json({ key });
    } else {
        res.status(400).json({ error: 'No keys available or invalid game name.' });
    }
});

// Serves the HTML webpage (from the public directory)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

