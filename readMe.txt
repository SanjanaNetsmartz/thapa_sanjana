Note: User needs to setup mongoDB before running this project.

Steps:

1. npm i
2. npm run start
3. Our project will run on http://localhost:8000
3. We have 3 APIs, need to hit these APIs using postman
4. Our three APIs are:
   
a. API to create user

Request URL: http://localhost:8000/userRegCreate
 Request type: POST
 payload:
{
 "name": "******",
   "email": "*********@*****.com",
   "password": "*********",
    "contact": "**********"
}

b. API to login user

Request URL: http://localhost:8000/login
 Request type: POST
 payload:
{
   "email": "*********@*****.com",
   "password": "*********"
}

c. API to get the list of registered users.

Request URL: http://localhost:8000/getAllUsers
 Request type: GET
 (user will get a token after login, that token needs to be passed with this API with type: bearer)

