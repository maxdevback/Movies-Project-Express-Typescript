# Movies-Project-Express-Typescript
A simple mvc site for finding movies and adding it to your favorites.  Authorization is done via github-auth.

## Installation
- create an .env file in the project root folder
- Fill it out
```
PORT=number
STAGE="dev" | "prod"
API_KEY= You can use this: 1fb720b97cc13e580c2c35e1138f90f8
GITHUB_CLIENT= Your github oauth2  
GITHUB_SECRET= Your github oauth2 
MONGODB_LINK= Link to mongodb
COOKIE_SECRET= Sectet for cookies
```
Run commands
- ```npm i```
- ```npm run build```
- ```npm run start```
