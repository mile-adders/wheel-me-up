# ***401 Midterm Project***
---------------------------------
---------------------------------

# Project Wheel Me Up  
---------------------------------
## We are deployed on 3000

(wheel me up URL)[http://localhost:3000/]

---------------------------------
## Wheel Me Up

We as Mile-adders believe in returning to the community, as it stands this is the age of technology and we want to carve our name in annals of history, so as a plan of creating multiple useful web applications, we started with creating a car renting web application where our users will enjoy and use our application to connect to each other in need of renting a car, so we designed an application that provides the ability to rent cars of any type and brand, directly from their owners, or a much better deal from car renting companies, and we believe that small things like that connects the world together.

The web application doesn't consist of a frontend yet. but in the final project it will have a frontend, written in HTML, CSS, Bootstrap, jQuery and React. The backend was written in javascript using NodeJS, and Express.

An interface is provided to create new account in which you can
choose to rent a car, from another owner, or have a better from a renting company, or be the renter.
as a car owner you can post, view existing cars, edit existing cars data, delete existing cars, and search for cars.
all this functionality is done by using NodeJS, and Express. 

---------------------------------

## Tools Used
Microsoft Visual Studio

- NodeJS
- Express 
- mongoDB
- Swagger

---------------------------------
### Prerequisites

What things you need to install the software and how to install them

```
    - @code-fellows/supergoose
    - base-64
    - bcryptjs
    - cors
    - dotenv
    - eslint
    - express
    - jest
    - jsonwebtoken
    - mongoose
    - morgan
    - supergoose
    - jsdocs
    - superagent
```

---------------------------------

## Getting Started

Clone this repository to your local machine.
```
https://github.com/mile-adders/wheel-me-up/tree/stage
```
Once downloaded, you can use visual studio code and ubuntu to build the application.
```
cd YourRepo/YourProject
`npm i`
```
Install all dependencies needed for the project.
```
Database mongoDB
```
* The database is used to store all the necessary data needed like, the Sign up and Sign in information and and the car renter and owner information these two objects are joined together through the car name *
```
cd YourRepo/YourProject
npm run start
```

---------------------------------

## Usage

### Main page
![Main Page](assets/wheelmeup-homepage.PNG)

### Sign up
![Sign up](assets/wheelmeup-signuppage.PNG)

### Guest page
![Guest Page](assets/wheelmeup-guestpage.PNG)

### The Mile Adders
![Team Page](assets/wheelmeup-teampage.PNG)

---------------------------

## User Stories 
(Trello)[https://trello.com/b/nMNPPInv/wheel-me-up]

---------------------------
## Data Flow (Frontend, Backend, REST API)
![Data-Flow-Backend](assets/data-model.PNG)
![Data-Modeling](assets/database.PNG)

---------------------------
## Data Model

### Overall Project Schema
Wheel me up have multiple databases, combined with virtual keys, the user database contains the user, email, car (which acts as the virtual), dailyRentTime, and dateOut. this is the user's schema, which will have the sign in data, the car rented which connects the schema to the car owner/ car company schema. the virtual field in the owner schema/car company, is the name, the car owner schema have name (virtual), brand, type, year, dateAvailable, and price_to_rent. when the user rents a car the car field will contain all the car's data. 
![Database Schema](assets/database-connection.PNG)

---------------------------


## Authors "The Mile Adders"
- Ahmad K. Al-Mahasneh
- Obada M. Al-Matrami
- Mai Y. Al-Shagarain
- Bayan M. Al-shaqareen

------------------------------
## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

------------------------------
## Acknowledgments

* Mr. Brain Nations
* The instructional team
* Qusai A. Al-Hanaktah (Backend Master)[https://github.com/Qusai-alhanaktah]

------------------------------