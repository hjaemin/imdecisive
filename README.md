IMDECISIVE
IMDECISIVE is a web application designed to simplify the process of deciding what to eat with friends. Each user selects the foods they are willing to eat, and the application finds common matches, making it easier to find a dinner menu that everyone is excited about.

Table of Contents
Introduction
Features
Installation
Usage
Project Structure
Contributing
License
Introduction
Meeting up with friends often leads to the stressful task of deciding what to eat together. IMDECISIVE streamlines this process by allowing each person to select foods they are currently interested in eating. The application then finds overlapping choices among the group, making it easier to find a common menu.

Features
Generate a unique session code for each group.
Users can join a session using the session code.
Users select foods they are willing to eat from a predefined list.
The application finds and displays common food choices among all users in the session.
Installation
To run this project locally, follow these steps:

1. Clone the repository:
git clone https://github.com/your-username/imdecisive.git
cd imdecisive

2. Install dependencies:
npm install

3. Run the server:
node server.js

4. Open the application:
Open index.html in your browser.

Usage
Generate a Session Code:

One member of the group clicks the "Generate Code" button to receive a unique session code.
Join a Session:

Other members enter the session code and click "Start Session".
Make Selections:

Each user selects the foods they are currently interested in eating from the provided list and submits their selections.
Show Matches:

Once all users have submitted their selections, click "Show Matches" to see the common food choices.

Project Structure
.
├── assets
│   ├── css
│   ├── images
│   └── js
├── node_modules
├── .gitignore
├── index.html
├── package.json
└── server.js
assets/: Contains CSS, images, and JavaScript files for the frontend.
node_modules/: Contains project dependencies.
.gitignore: Specifies files and directories to be ignored by Git.
index.html: The main HTML file for the application.
package.json: Contains metadata about the project and its dependencies.
server.js: The Node.js backend server handling session and selection logic.

Contributing
Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
git checkout -b feature-name
3. Make your changes and commit them:
git commit -m 'Add some feature'
4. Push to the branch:
git push origin feature-name
5. Create a pull request.
   
License
This project is licensed under jammin
