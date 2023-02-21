# Welcome to My Users App
The User class is a Ruby class that interacts with a SQLite3 database using the sqlite3 gem. It provides methods for creating, 
reading, updating, and deleting user records in the database.

## Task
The create method will insert the user record into the users table in the database and return a User object representing the new user.
To retrieve a user record from the database by its ID, call the find method on the User class, passing in the ID of the user:
The find method will return a User object representing the user with the given ID.
To retrieve all user records from the database, call the all method on the User class:
The all method will return an array of hashes representing all the user records in the users table.
To update a user record in the database, call the update method on the User class, passing in the ID of the user, 
the name of the attribute to update, and the new value for the attribute:
The update method will update the specified attribute of the user with the given ID in the users table and return the updated user record.
To delete a user record from the database, call the destroy method on the User class, passing in the ID of the user:
The destroy method will delete the user with the given ID from the users table and return the deleted user record.
To authenticate a user by email and password, call the auth method on the User class, passing in the email and password:

## Description
The User class is a Ruby class that provides a simple interface for interacting with a SQLite3 database to perform 
CRUD (Create, Read, Update, Delete) operations on user records.

## Installation
To use the User class, you must have SQLite3 and the sqlite3 gem installed on your system. 
You can install the sqlite3 gem using gem install sqlite3.

## Usage
sudo apt-get install mysql-server

sudo apt-get update
```
./my_project argument1 argument2
```

### The Core Team


<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
<span><img alt='Qwasar SV -- Software Engineering School's Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px'></span>
