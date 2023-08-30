// gameKeys object to contain a list of the 10 games and their 10 keys.These keys are not unique, and just for testing purposes

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

// Creating a counter to keep track of how many games a user has claimed
let claimCounter = 0;

// Defining max number of claims a user can make
const maxClaims = 5;

// Displays the number of remaining claims
const claimsRemainingElement = document.querySelector("#claims-remaining span");

// Creating a function to update the number of remaining claims
function updateClaimsRemaining() {
// Calculate and update the text content with the number of claims left
    claimsRemainingElement.textContent = maxClaims - claimCounter;
}

// Event listener to run once the DOM content has been completely loaded (initial HTML document)
document.addEventListener('DOMContentLoaded', () => {
    // Select the buttons associated with the games.
    const buttons = document.querySelectorAll('.game button');

    // Adding a click event listener to each button.
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Creating an alert and exits when user reached max number of claims
            if (claimCounter >= maxClaims) {
                alert("You have already claimed 5 games!");
                return;
            }

            // Retrieves the game's name from the button's data-game attribute
            const gameName = this.getAttribute('data-game');

            // Checks if there are keys available for the selected game (not useful for our test scenario, but useful if keys are removed after claimed)
            if (gameKeys[gameName].length > 0) {
                // Gets a random index to select a key.
                const randomIndex = Math.floor(Math.random() * gameKeys[gameName].length);
                
                // Takes the key out from the array using the random index and get the first element from the resulting array
                const key = gameKeys[gameName].splice(randomIndex, 1)[0];
                
                // Gives the user back their claimed game key
                alert(`You claimed ${gameName}!\nKey: ${key}`);
                
                // Adds one (increments) the claim counter (max 5 games can be claimed).
                claimCounter++;

                // Updates the number of claims remaining.
                updateClaimsRemaining();
            } else {
                // If no keys are left for the game, alert the user (not useful for our test scenario, but if keys are removed after claimed)
                alert(`Sorry, all keys for ${gameName} have been claimed.`);
            }
        });
    });

    // Initializes the number of remaining claims the user has when the page first loads (5)
    updateClaimsRemaining();
});