# Wheel Me Up

-----------------------------
----------------------------
## Vision 

We as Mile-adders believe in returning to the community, as it stands this is the age of technology and we want to carve our name in annals of history, so as a plan of creating multiple useful web applications, we started with creating a car renting web application where our users will enjoy and use our application to connect to each other in need of renting a car, so we designed an application that provides the ability to rent cars of any type and brand, directly from their owners, or a much better deal from car renting companies, and we believe that small things like that connects the world together.

----------------------------
## Scope (In/Out)

 ### IN
  - Search for cars to rent.
  - Add a personal car for renting.
  - Update the information about the cars
  - Delete rented Cars
 
 ### OUT
  - Payment Methods (But it is a stretch goal for us)

------------------------------
## Minimum Viable Product

the MVP For this project is provide the ability to create accounts, either as users, owners, car companies, or guests, allow to search for cars from a self-build API, post cars to rent, update their information and delete them.

-----------------------------
## Stretch Goals 

our stretch goals are creating an instant chat and payment Methods.

------------------------------
## Functional Requirements

 1. a user can create an account.
 2. the user can search for cars to rent.
 3. the owner can post a car to rent.
 4. the owner can update and delete the car information.

---------------------------------
## Data Flow

 the user signs up to our web application, his/her (women empowerment) information are added to the database, by hashing the password, and creating a Bearer Auth. also the user have the ability to sign up by using other platforms. after the user signs up the user have the ability either to search for a car or post his/her car to be rented all the necessary information are stored in mongoDB, these data are connect by the car's name. for each user access control is a must to differentiate from each other. 

 --------------------------------
 ## Non-Functional Requirements

  1. Security 
   in our application is security is everything, the user information is stored in mongodb, the password is hashed, and all personal information are not viewable under no circumstances. since our stretch is add payment methods, this will be another reason to secure our application.

  2. Testability
   Because we are working in a TDD methodology, this one of the reasons why having a testable code is a Must, we are aiming to create a modular application for future implementations.    