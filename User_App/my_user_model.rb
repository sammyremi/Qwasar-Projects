# require "sqlite3"

# # Define the User class
# class User
#     # Define the accessors for the instance variables
#     attr_accessor :id, :firstname, :lastname, :age, :password, :email

#     # The constructor method that sets the instance variables
#     def initialize(id = 0, firstname, lastname, age, password, email)
#         @firstname = firstname
#         @lastname = lastname
#         @age = age
#         @password = password
#         @email = email

#         # Prints "ok" after the instance variables are set
#     end

#     # A class method for connecting to the database
#     def self.connect
#         # the begin and rescue is to handle exception and error that might break code
#         begin
#             # Connect to the database
#             @db_connect = SQLite3::Database.open 'db.sql'
#             # Set the results to be returned as a hash
#             @db_connect.results_as_hash = true

#             # Create the 'users' table if it doesn't already exist
#             @db_connect.execute "CREATE TABLE IF NOT EXISTS 
#             users(id INTEGER PRIMARY KEY, firstname TEXT, lastname TEXT, age INTEGER, password TEXT, email TEXT)"
            
#             # Return the connection object
#             return @db_connect
            
#         # In case of an error, print the error message
#         rescue => err
#             puts "Error occured", err.message
#         end
#     end

#     # A class method for creating a new user
#     def self.create(user_info)
#         # Set the instance variables with the information from the user_info hash
#         @firstname = user_info[:firstname]
#         @lastname = user_info[:lastname]
#         @age = user_info[:age]
#         @password = user_info[:password]
#         @email = user_info[:email]

#         # Connect to the database
#         @db_connect = self.connect
#         # Insert the user information into the 'users' table
#         @db_connect.execute("INSERT INTO users (firstname, lastname, age, password, email)
#       VALUES (?, ?, ?, ?, ?)", [@firstname, @lastname, @age, @password, @email])
#       user = User.new(@firstname, @lastname, @age, @password, @email)
#       user.id = @db_connect.last_insert_row_id
      
#         # Get the id of the last inserted row
#         # @id = @db_connect.last_insert_row_id
#         # Close the database connection
#         @db_connect.close
#         # Return the id of the last inserted row
#         return user
#     end

#     def self.find(user_id)
#         # store the :age value from user_id hash in the @id instance variable
#         @id = user_id
#         # create a database connection using the connect method and store it in @db_connect
#         @db_connect = self.connect
#         # execute a SELECT query to retrieve the user with specified @id from users table and store result in @result
#         @result = @db_connect.execute("SELECT * FROM users WHERE id = ?", @id)
#         # create a new User object with values from the query result and store it in @user_info
#         @user_info = User.new(@result[0]["firstname"], @result[0]["lastname"], @result[0]["age"], @result[0]["password"], @result[0]["email"])

#         # close the database connection
#         @db_connect.close
#         # return the @user_info object
#         return @user_info
#     end

#     def self.all
#          # create a database connection using the connect method and store it in @db_connect
#         @db_connect = self.connect
#         # execute a SELECT query to retrieve all rows from users table and store result in @result
#         @result = @db_connect.execute("SELECT * FROM users")
#         # closing our connection to db
#         @db_connect.close
#         #returning result as hash
#         return @result

#     end

#    # Class method to update an attribute of a user with a given user_id
# def self.update(user_id, attribute, value)
#     # Assign the input parameters to instance variables
#     @id = user_id
#     @attribute = attribute
#     @value = value
  
#     # Connect to the database
#     @db_connect = self.connect
    
#     # Execute an SQL update statement to set the value of the attribute to the given value for the user with the given id
#     @db_connect.execute("UPDATE users SET #{attribute} = ? WHERE id = ?",@value, @id)
    
#     # Retrieve the updated information of the user with the given id
#     @result = @db_connect.execute("SELECT * FROM users WHERE id = ?", @id)
    
#     # Close the database connection
#     @db_connect.close
  
#     # Return the result of the SELECT statement
#     return @result
#   end
  
#   # Class method to delete a user with a given user_id
#   def self.destroy(user_id)
#     # Assign the input user_id to an instance variable
#     @id = user_id
    
#     # Connect to the database
#     @db_connect = self.connect
    
#     # Execute an SQL delete statement to remove the user with the given id
#     @db_connect.execute("DELETE FROM users WHERE id = ?", @id)
    
#     # Close the database connection
#     @db_connect.close
  
#     # Print a message indicating that the user was removed successfully
#   end
  
#     def self.auth(email, password)
#         @db_connect = self.connect
#         @password = password
#         @email = email

#         @user = @db_connect.execute "SELECT * FROM users WHERE password = ? AND email = ?", @password, @email
#         @db_connect.close
#         return @user
#     end

# end


# # A hash containing information for a new user
# x = {firstname: "John", lastname: "remi", age: 1, password: "root", email: "@gmail.com" }

# # Call the User.create class method with the new user information
# # puts User.all

require 'sqlite3'

class User
    attr_accessor :id, :firstname, :lastname, :age, :password , :email
    def initialize (id=0, firstname, lastname, age, password , email)
        @firstname=firstname
        @lastname=lastname
        @age=age 
        @password=password 
        @email=email
        @id=id
    end

    def self.conns()
        begin
            @db_conns = SQLite3::Database.open 'db.sql'
            @db_conns = SQLite3::Database.new 'db.sql' if !@db_conns
            @db_conns.results_as_hash = true
            @db_conns.execute "CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, firstname STRING, lastname STRING, age INTEGER, password STRING, email STRING)"
            return @db_conns
        rescue SQLite3::Exception => e
            p "Error Ocurred: "
            p e
        end
    end 

    def self.create(user_info)
        @firstname = user_info[:firstname]
        @lastname = user_info[:lastname]
        @age = user_info[:age] 
        @password = user_info[:password] 
        @email = user_info[:email]
        

        @db_conns = self.conns
        @db_conns.execute "INSERT INTO users(firstname, lastname, age, password, email) VALUES(?,?,?,?,?)", @firstname, @lastname, @age, @password, @email
        user=User.new(@firstname, @lastname, @age, @password, @email)
        user.id = @db_conns.last_insert_row_id
        @db_conns.close
        return user
    end 

    def self.find(user_id)
        @db_conns = self.conns
        user = @db_conns.execute "SELECT * FROM users WHERE id = ?", user_id
        user_info=User.new(user[0]["firstname"], user[0]["lastname"], user[0]["age"],user[0]["password"], user[0]["email"])
        @db_conns.close
        return user_info
    end
     
    def self.all()
        @db_conns = self.conns()
        user = @db_conns.execute "SELECT * FROM users"
        @db_conns.close
        return user
    end 

    def self.update(user_id, attribute, value)
        @db_conns = self.conns
        @db_conns.execute "UPDATE users SET #{attribute} = ? WHERE id = ? ", value, user_id
        user = @db_conns.execute "SELECT * FROM users where id = ? ", user_id
        @db_conns.close
        return user
    end

    def self.destroy(user_id)
        @db_conns=self.conns()
        deleted_user=@db_conns.execute "DELETE FROM users WHERE id=#{user_id}"
        @db_conns.close
        return deleted_user 
    end 

    def self.auth(password, email)
        @db_conns = self.conns
        user = @db_conns.execute "SELECT * FROM users WHERE email = ? AND password = ?", email, password
        @db_conns.close
        return user 
    end
end 