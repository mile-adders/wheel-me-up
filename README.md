# ***401 Midterm Project***
---------------------------------
# Project Wheel Me Up  
---------------------------------
## We are deployed on 3000

![wheel me up URL](http://localhost:3000/)

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
## Future WireFrames 

### Main page
![Main Page](assets/wheelmeup-homepage.PNG)

### Sign up
![Sign up](assets/wheelmeup-signuppage.PNG)

### Guest page
![Guest Page](assets/wheelmeup-guestpage.PNG)

### The Mile Adders
![Team Page](assets/wheelmeup-teampage.PNG)

---------------------------
## App Usage 
 At this stage Wheel me Up is a Pure Backend Full Stack Web Application, so to use the app functionality Swagger inspector will be used, as per the (requirements.md)[requirements.md] document, the Application's Scope is to create an application that allows a user to sign up as a car renter, or a car renter. the app is built on the GET, POST, PUT, and DELETE methods. these methods are access controlled, the car company can get, put, update, and delete. and the renter can only read, and delete. each type of users have a separate schema. both schemas are connected by virtual. a complete list of API hits is provided in details. 

 - POST request to /signup route 
    in this case the user is an admin with full CRUD Capabilities,

 ```

 {
    "username": "AhmadKhaleel",
   "password": "12345" ,
    "role":"admin"
}

output:

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1ODIxMTMwNDl9.IUe2QXNbfAEZqgSLRpE4kh7YGqwTdGEUYzoTT2A1K0Q

expected response status 200
 ```     

  in the case of signing up as a user, with a Read and create capabilities. 

   ```

  {
    "username": "MaiYusuf",
   "password": "281" ,
    "role":"user"
}

output:

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1ODIxMTMyNzB9.gUPPDS_696DAel8exh1FsQbeMhJHEwoIfzoKNmkSoGU

expected response status 200
 ```    
- POST request for the /signin route
sign in as an admin and a user give the same response which is the same assigned token for the signed up username. 

  ```

  {
    "username": "MaiYusuf",
   "password": "281" 
  }

output:

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1ODIxMTMyNzB9.gUPPDS_696DAel8exh1FsQbeMhJHEwoIfzoKNmkSoGU

expected response status 200
 ```   
- get request For the /users route
 which will return all the signed up users in the DataBase 

  ```
 
   {
        "role": "guest",
        "_id": "5e4a720ec6eaee5e38b25958",
        "username": "bayan95",
        "password": "123",
        "__v": 0
    },
    {
        "role": "guest",
        "_id": "5e4d00420688ce6ffc645586",
        "username": "obada.matrami92@gmail.com",
        "password": "$2a$05$bxMv/CmApvE8tyq9mrb0Q.MKdW3u1S46.eGbW/AVhvTGYcbnlm71y",
        "__v": 0
    },
    {
        "role": "admin",
        "_id": "5e4d2119313c8071b3037e41",
        "username": "AhmadKhaleel",
        "password": "$2a$05$iIYQsLkKf09ZI16nj6olvOD61Ea./RvCbOATW2d90/gkelxzOZXeW",
        "__v": 0
    },
    {
        "role": "user",
        "_id": "5e4d21f6313c8071b3037e42",
        "username": "MaiYusuf",
        "password": "$2a$05$Pzx7YW9gXjoKnMFU6TA.oOQs5YEMKZrvEFnM.hf0m9tK9XLxZTiQe",
        "__v": 0
    }

expeted response status 200
 ```  


---------------------------
## User Stories 
[Trello](https://trello.com/b/nMNPPInv/wheel-me-up)

---------------------------
## Data Flow (Frontend, Backend, REST API)
![Data-Flow-Backend](assets/data-model.PNG)
![Data-Modeling](assets/database.PNG)

---------------------------
## Data Model

### Overall Project Schema
Wheel me up have multiple databases, combined with virtual keys, the user database contains the user, email, car (which acts as the virtual), dailyRentTime, and dateOut. this is the user's schema, which will have the sign in data, the car rented which connects the schema to the car owner/ car company schema. the virtual field in the owner schema/car company, is the name, the car owner schema have name (virtual), brand, type, year, dateAvailable, and price_to_rent. when the user rents a car the car field will contain all the car's data. 

[Database Schema](assets/database-connection.PNG)

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

* Mr. Brain Nations [Coolest Dude Ever](https://github.com/bnates)
* Mr. Ahmad Al-Awad [Mr. Poker Face](https://github.com/Ahmad-Alawad)
* Mr. Mahmoud Al-Khudairi [Mr. Boss Man](https://github.com/mahmoudkhudairi)
* Qusai A. Al-Hanaktah [Backend Master](https://github.com/Qusai-alhanaktah)
* Rashid S. Al-Sawalqa [Frontend Master](https://github.com/Rashid-alsawalqa)

------------------------------