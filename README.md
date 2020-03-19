# ***401 Midterm Project***
---------------------------------
# Wheel Me Up  
---------------------------------
## This application is currently deployment on a development server

[Wheel Me Up](http://localhost:3000/)

---------------------------------
## Wheel Me Up

We as Mile-adders believe in returning to the community. As it stands, this is the age of technology and we want to carve out our name in the annals of history. So as a plan of creating multiple useful web applications, we started with creating a car renting app. This is where our users will enjoy the use of our application to connect to others in need of renting a car. We designed an application that provides the ability to rent cars of any type and brand, directly from their owners. This allows for a much better deal from car renting companies and we believe that small things like that connect the world together.

This web application does not consist of a user interface yet. In the final stages, it will have a user interface, created with ReactJS and modular tools like, SCSS. The backend was written in Javascript using NodeJS, and ExpressJS.

An interface is provided to create new account in which you can choose to rent a car, from another owner, or have a better experience than renting from a car rental company.

As a car owner, you can add cars, view existing cars, edit existing cars, delete existing cars, and search for cars. All of this functionality is done through the use of NodeJS, ExpressJS, and MongoDB. 

---------------------------------
## Tools Used
Microsoft Visual Studio for code editing

- NodeJS
- ExpressJS
- MongoDB
- Swagger
- Stripe for payment integration
- Bootstrap 4 for our payment UI

---------------------------
## User Stories 
God Bless Trello!!
[Trello](https://trello.com/b/nMNPPInv/wheel-me-up)

---------------------------------
## Future Wireframes 

### Main page
![Main Page](assets/wheelmeup-homepage.PNG)

### Sign up
![Sign up](assets/wheelmeup-signuppage.PNG)

### Guest page
![Guest Page](assets/wheelmeup-guestpage.PNG)

### The Mile Adders
![Team Page](assets/wheelmeup-teampage.PNG)

---------------------------
## Data Flow (Frontend, Backend, RESTful API)
![Data-Flow-Backend](assets/data-model.PNG)
![Data-Modeling](assets/database.PNG)

---------------------------
## Data Model

### Overall Project Schema
Wheel me up has multiple databases that are combined with virtual keys. The user database contains the user, email, car (which acts as the virtual), daily rent time, and the date is rented. This is the users schema, which will have sign in data, the car rented, which connects the schema to the car owner/car company schema. The virtual field in the owner schema/car company, is the name, the car owner schema has the name (virtual), brand, type, year, date available, and price to rent. When the user rents a car, the car field will contain all the car's data. 

![Database Schema](assets/database-connection.PNG)
---------------------------------
## Getting Started

Clone this repository to your local machine.
```
https://github.com/mile-adders/wheel-me-up/tree/stage
```
Once downloaded, you can use any text editor or terminal to build this application.
```
cd YourRepo/YourProject
`npm i`
```
Install all dependencies required for this application.
```
Database mongoDB
```
 The database is used to store all of the necessary data.  Like, sign up and sign in information, along with the car renter and owner information.  These two objects are joined together through the car name.
```
cd YourRepo/YourProject
npm run start
```

---------------------------------
### Prerequisites

Required 3rd party modules to use this application:

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
    - express-handlebars
    - body-parser
    - stripe
    - socket.io
```

---------------------------------
### Installation
After cloning the repo and knowing the pre-requisites, downloading the prerequisites is a **MUST!!** You need to make sure that there is a `package.json` file (because it might not be push to the repo)

if located,

```
ls
npm i 
```

if it the package.json is not present 

```

npm init -y
npm i [all prerequisites needed]
```

---------------------------
## App Usage 
At this stage, Wheel me Up is a pure API, so to use it's functionality, you can use a tool like Swagger inspector, as per the (requirements.md)[requirements.md] document. The application's scope is to create an application that allows a user to sign up as a car renter, or a car owner. The app is built based on GET, POST, PUT, and DELETE REST methods. These methods are access controlled, where the car company can get, put, update, and delete information. The renter can only create and read. Each type of users can have a separate schema. Both schemas are connected by virtual join. A list of API routes is provided in the details. 

 - POST request to /signup - in this case the user is an admin with full CRUD capabilities

expected response status 200

```

 {
    "username": "ahmadkhaleel96",
   "password": "password" ,
    "role":"admin"
}

output:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1ODIxMTMwNDl9.IUe2QXNbfAEZqgSLRpE4kh7YGqwTdGEUYzoTT2A1K0Q
```     

in the case of signing up as a user, with a read and create capabilities

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
- POST request for the /signin - sign in as an admin and give the same response - which is the same assigned token for the signed a up user

expected response status 200

```

  {
    "username": "MaiYusuf",
   "password": "281" 
  }

output:

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1ODIxMTMyNzB9.gUPPDS_696DAel8exh1FsQbeMhJHEwoIfzoKNmkSoGU
```

- get request for /users - which will return all the signed up users in the API

 expected response status 200

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
        "username": "ahmadkhaleel96",
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
```  

---------------------------------
 ### Our Crown Jewel - Stripe Payments
So life is all about the money money money! So a payment method is a MUST. This application uses the Stripe Payment Service. We integrated a test payment method that takes in payment data. The data used is the user e-mail, password, and all payment data. A test API is used to validate the payments.

---------------------------------
## Extra Feature

 ### Chat Room 
Chat Rooms are the infection of today's age, so it is only a natural thing to add a chat room!  This chat room is the communication channel between the users and a car-company. This communication will ensure a firm understanding of the cars rented and their payment details. 

---------------------------------
## TESTS 

in the `package.json` file there is a test script to run subsequent tests

```

npm run test
```

---------------------------------
### API Endpoint Tests

Here is an example of a test for an API Endpoint:

```
let users = {
  admin: {username: 'admin', password: 'password', role: 'admin'},
  editor: {username: 'editor', password: 'password', role: 'editor'},
  user: {username: 'user', password: 'password', role: 'user'},
};
describe('Auth Router', () => {
  Object.keys(users).forEach( userType => {
    describe(`${userType} users`, () => {
      let id;
      let token;
      let resultsToken;
      it('Can create user', () => {
        return mockRequest.post('/signup')
          .send(users[userType])
          .then(results => {
            console.log('result', results.text);
            resultsToken = results.text;
             let result = async function (){
            token =  await jwt.verify(results.text, process.env.SECRET)
            console.log(token)
            id = token.id;
            expect(token.id).toEqual(id);
             }
           });
      });
    });
  });
});
```

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

* Mr. Brian Nations [Mr. Bnates](https://github.com/bnates)
* Mr. Ahmad Al-Awad [Mr. Poker Face](https://github.com/Ahmad-Alawad)
* Mr. Mahmoud Al-Khudairi [Mr. Boss Man](https://github.com/mahmoudkhudairi)
* Qusai A. Al-Hanaktah [Backend Master](https://github.com/Qusai-alhanaktah)
* Rashid S. Al-Sawalqa [Frontend Master](https://github.com/Rashid-alsawalqa)

------------------------------
