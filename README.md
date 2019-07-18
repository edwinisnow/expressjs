# Basic example to understand the ExpressJS concepts.

Topics covered
...

# Members API

Use the Postman to fetch the following queries.

GET requests
http://localhost:5000/api/members/

http://localhost:5000/api/members/1

POST request
http://localhost:5000/api/members

Headers:
[{"key":"Content-Type","value":"application/json","description":"","type":"text","enabled":true}]

Body:
{
"name":"Jake Smith",
"email":"JakeSmith@gmail.com"
}

PUT request
http://localhost:5000/api/members/1

Headers:
[{"key":"Content-Type","value":"application/json","description":"","type":"text","enabled":true}]

Body:
{
"email":"Sincere@yahoo.com"
}

DELETE request
http://localhost:5000/api/members/1


Packages used
Handlebars...