# rmCentre
A landing page sample for proposed website of local medical centre.

# Riverwalk Medical Centre Website (landing page sample)

Welcome to the Riverwalk Medical Centre Website project. This repository contains the HTML, CSS, and JavaScript code for a simple web page showcasing the services provided by Riverwalk Medical Centre. The website includes a header, a navigation bar, service description buttons, a main content area with images and descriptions, and a footer.

## Project Structure

### HTML

The main structure of the webpage is defined in `index.html`. It includes:

- A header with a title and navigation links.
- Buttons to select and display different service descriptions.
- A main content area with images and information about the services.
- A footer with a copyright notice.

### CSS

The styles are defined in `StyleSheet.css`. It includes:

- Global styles for the body and all elements.
- Specific styles for the header, navigation bar, buttons, and main content area.
- Flexbox layout for organizing the gallery of images and text.

### JavaScript

The functionality is defined in `rmc.js`. It includes:

- An event listener to update the year in the footer automatically.
- A function to update the service description when a button is clicked.
- Event listeners for the buttons to call the update description function with the appropriate text.

## File Structure
project-root/
│

├── index.html

├── styles/

│ └── StyleSheet.css

└── scripts/

└── rmc.js


## Setup and Usage

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/Mandla-tech/rmCentre.git
    ```

2. Navigate to the project directory:
    ```bash
    cd riverwalk-medical-centre
    ```

3. Open `index.html` in your web browser to view the website:
    ```bash
    open index.html
    ```

## Functionality

### Buttons

There are three buttons on the page:
- **Doctor**: Displays the description "Get personalized attention from our caring professionals".

- **Pharmacy**: Displays the description "For your convenience, the Pharmacy is within the Centre".

- **Lab**: Displays the description "Quick and carefully handled inhouse lab tests".

### Updating Descriptions

The `updateDescription` function updates the text content of the description section based on the button clicked. In a fully ran website, these buttons would be redirecting to the actual page link.


## Contributing

Feel free to fork this repository and submit pull requests. Contributions are welcome!
You can use any part of this code for further updates or development of your projects.

## Contact

For any inquiries, please contact Mandla at moyo7mandla@gmail.com
