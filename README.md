# SoBeDog

<p>SoBeDog, a one page application that consists of displaying all kinds of breeds and much more ...</p>

## Landing Page.

<img src="./img/Landing-img.PNG" alt="LandingPage" width="100%" height="80%"/>

## Sample of all types of race.

<img src="./img/Razas.PNG">
<h3>In this section the upper part has access to the Landing Page, the home page that is the current one and for the creation of a race</h3>
<h3>Through the backend API you can show the races of an external API and the race created by the users that are stored in a database.</h3>
<hr>

## The following form allows the creation of a breed in preference, each input has a careful validation: 

<img src="./img/Formulario.PNG" alt="Form">


## This section provides more detailed information about each race, just when you press the button of the name of the race in the home section:

<img src="./img/DogDetail.PNG" alt="Dog-Detail"/>

## Search for the breed you like and filter according to the breed you want:
<img src="./img/Search.PNG" alt="Search"/>
<hr/>
<img src="./img/SideBar-img.PNG" alt="SideBar-Breed"/>


## Finally, you can see what makes it easy to do this sidebar: Search by race, filter by race, temperaments or by external API or those created by the user, Sort by alphabetic order or weight in ascending or descending order:

<img src="./img/SideBar.PNG" alt="SideBar"/>


## Quick Start

### IMPORTANT: It is necessary to have at least the latest stable version of Node and NPM. Make sure you have it to be able to correctly install the necessary dependencies to run the project.

To verify which version they have installed:

node -v
npm -v

To start the project, first make sure you have a .env file in / api with the following environment variables:

(The variables that start with DB are related to the database, in this project postgeSQL was used. The other variables correspond to the port of the back-end server. A database must be created in postgres with the name "dogs" )

To start the project, run the following commands in both \ api and \ client:

npm install
npm start

## Technologies used.

### **In ./api:**

- Node.js.
- Express.js.
- database: Sequelize (ORM), PostgreSQL.

### **In ./client:**

- Javascript.
- React.js.
- Redux.
- HTML5.
- CSS3.

