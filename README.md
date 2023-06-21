# Selector-app

This is a simple application for creating new users with selectors.

## You can
- Add a new user
- Edit the user that you just added

## API
The API only accepts calls from the Angular FrontEnd app (http://localhost:4200/).
- GetAll   http://localhost:8080/selectors to get all selectors
- create   http://localhost:8080/selectors/users to add new user
- update   http://localhost:8080/selectors/user/{id} to update a user

## Database
- this application uses h2 in memory database.
- The selectors data is added during creation. The commands can be found in the data.sql file.
- The data can be found in the selectors.json file for better reading.
- The database has 2 tables: Users and Selectors
### USERS
- ID - INTEGER(32) NOT NULL
- NAME - CHARACTER VARYING(255)
- SELECTORS - ARRAY(65536)
- ATT - BOOLEAN(1)
### SELECTORS
- ID - INTEGER(32) NOT NULL
- PARENT_ID - INTEGER(32)
- NAME - CHARACTER VARYING(255)