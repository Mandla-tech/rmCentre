
//setting date, year automatic calendar update.
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('year').textContent = new Date().getFullYear();
});

//function definition for the services buttons selection.
function updateDescription(text) {
    document.getElementById('description').textContent = text;
}

// Event listeners for the services buttons
document.getElementById('doctorButton').addEventListener('click', function() {
    updateDescription('Get personalized attention from our caring professionals');
});

document.getElementById('pharmacyButton').addEventListener('click', function() {
    updateDescription('For your convenience, the Pharmacy is within the Centre');
});

document.getElementById('labButton').addEventListener('click', function() {
    updateDescription('Quick and carefully handled inhouse lab tests.');
});
