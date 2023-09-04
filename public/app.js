// Creates a way to keep track track of how many games a user has claimed
let claimCounter = 0;
const maxClaims = 5;

// Grabs the element that shows how many claims we've got left
const claimsRemainingElement = document.querySelector("#claims-remaining span");

// Updates number of claims left
function updateClaimsRemaining() {
    claimsRemainingElement.textContent = maxClaims - claimCounter;
}

// Creating a function to be able to claim a game
function claimGameKey(gameName) {
    fetch('/claimKey', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ gameName })
    })
    .then(response => response.json())
    .then(data => {
        if (data.key) {
            alert(`Congratulations! You got one free copy of ${gameName}. Here's your key: ${data.key}`);
            claimCounter++;
            updateClaimsRemaining();
        } else {
            alert(data.error);
        }
    })
    .catch(() => {
        alert('Oops! Something went wrong. Try again later.');
    });
}

// Sets up event listeners once the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Our claim buttons
    const buttons = document.querySelectorAll('[data-game]');
    
    // Attempt to claim a game when a button is clicked
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // (if 5 games have beeen claimed, stop and return and alert)
            if (claimCounter >= maxClaims) {
                alert("Hold up! You've claimed 5 games already.");
                return;
            }
            const gameName = this.getAttribute('data-game');
            claimGameKey(gameName);
        });
    });
    
    // Function call
    updateClaimsRemaining();
});
