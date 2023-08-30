// gameKeys object contains a list of the 10 games and their 10 keys.These keys are not unique, and just for testing purposes

const gameKeys = {
    "Counter Strike: Global Offensive": [
        "A1B2C-D3E4F-G5H6I", "X4Y5Z-6A7B8-9C0D1", "E2F3G-H4I5J-K6L7M",
        "N8O9P-Q1R2S-T3U4V", "W5X6Y-7Z8A9-0B1C2", "D3E4F-G5H6I-J7K8L",
        "M9N0O-P1Q2R-S3T4U", "V5W6X-7Y8Z9-0A1B2", "C3D4E-F5G6H-I7J8K",
        "L9M0N-O1P2Q-R3S4T"
    ],
    
    "Dota 2": [
        "A1B2C-D3E4F-G5H6I", "X4Y5Z-6A7B8-9C0D1", "E2F3G-H4I5J-K6L7M",
        "N8O9P-Q1R2S-T3U4V", "W5X6Y-7Z8A9-0B1C2", "D3E4F-G5H6I-J7K8L",
        "M9N0O-P1Q2R-S3T4U", "V5W6X-7Y8Z9-0A1B2", "C3D4E-F5G6H-I7J8K",
        "L9M0N-O1P2Q-R3S4T"
    ],

    "Apex Legends": [
        "A1B2C-D3E4F-G5H6I", "X4Y5Z-6A7B8-9C0D1", "E2F3G-H4I5J-K6L7M",
        "N8O9P-Q1R2S-T3U4V", "W5X6Y-7Z8A9-0B1C2", "D3E4F-G5H6I-J7K8L",
        "M9N0O-P1Q2R-S3T4U", "V5W6X-7Y8Z9-0A1B2", "C3D4E-F5G6H-I7J8K",
        "L9M0N-O1P2Q-R3S4T"
    ],

    "PUBG: BATTLEGROUNDS": [
        "A1B2C-D3E4F-G5H6I", "X4Y5Z-6A7B8-9C0D1", "E2F3G-H4I5J-K6L7M",
        "N8O9P-Q1R2S-T3U4V", "W5X6Y-7Z8A9-0B1C2", "D3E4F-G5H6I-J7K8L",
        "M9N0O-P1Q2R-S3T4U", "V5W6X-7Y8Z9-0A1B2", "C3D4E-F5G6H-I7J8K",
        "L9M0N-O1P2Q-R3S4T"
    ],

    "Grand Theft Auto V": [
        "A1B2C-D3E4F-G5H6I", "X4Y5Z-6A7B8-9C0D1", "E2F3G-H4I5J-K6L7M",
        "N8O9P-Q1R2S-T3U4V", "W5X6Y-7Z8A9-0B1C2", "D3E4F-G5H6I-J7K8L",
        "M9N0O-P1Q2R-S3T4U", "V5W6X-7Y8Z9-0A1B2", "C3D4E-F5G6H-I7J8K",
        "L9M0N-O1P2Q-R3S4T"
    ],

    "Rust": [
        "A1B2C-D3E4F-G5H6I", "X4Y5Z-6A7B8-9C0D1", "E2F3G-H4I5J-K6L7M",
        "N8O9P-Q1R2S-T3U4V", "W5X6Y-7Z8A9-0B1C2", "D3E4F-G5H6I-J7K8L",
        "M9N0O-P1Q2R-S3T4U", "V5W6X-7Y8Z9-0A1B2", "C3D4E-F5G6H-I7J8K",
        "L9M0N-O1P2Q-R3S4T"
    ],

    "Team Fortress 2": [
        "A1B2C-D3E4F-G5H6I", "X4Y5Z-6A7B8-9C0D1", "E2F3G-H4I5J-K6L7M",
        "N8O9P-Q1R2S-T3U4V", "W5X6Y-7Z8A9-0B1C2", "D3E4F-G5H6I-J7K8L",
        "M9N0O-P1Q2R-S3T4U", "V5W6X-7Y8Z9-0A1B2", "C3D4E-F5G6H-I7J8K",
        "L9M0N-O1P2Q-R3S4T"
    ],

    "Call of Duty: Modern Warfare II": [
        "A1B2C-D3E4F-G5H6I", "X4Y5Z-6A7B8-9C0D1", "E2F3G-H4I5J-K6L7M",
        "N8O9P-Q1R2S-T3U4V", "W5X6Y-7Z8A9-0B1C2", "D3E4F-G5H6I-J7K8L",
        "M9N0O-P1Q2R-S3T4U", "V5W6X-7Y8Z9-0A1B2", "C3D4E-F5G6H-I7J8K",
        "L9M0N-O1P2Q-R3S4T"
    ],

    "Destiny 2": [
        "A1B2C-D3E4F-G5H6I", "X4Y5Z-6A7B8-9C0D1", "E2F3G-H4I5J-K6L7M",
        "N8O9P-Q1R2S-T3U4V", "W5X6Y-7Z8A9-0B1C2", "D3E4F-G5H6I-J7K8L",
        "M9N0O-P1Q2R-S3T4U", "V5W6X-7Y8Z9-0A1B2", "C3D4E-F5G6H-I7J8K",
        "L9M0N-O1P2Q-R3S4T"
    ],

    "War Thunder": [
        "A1B2C-D3E4F-G5H6I", "X4Y5Z-6A7B8-9C0D1", "E2F3G-H4I5J-K6L7M",
        "N8O9P-Q1R2S-T3U4V", "W5X6Y-7Z8A9-0B1C2", "D3E4F-G5H6I-J7K8L",
        "M9N0O-P1Q2R-S3T4U", "V5W6X-7Y8Z9-0A1B2", "C3D4E-F5G6H-I7J8K",
        "L9M0N-O1P2Q-R3S4T"
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

