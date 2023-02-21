    require 'sinatra'
    require_relative 'my_user_model.rb'


    get '/' do
    @users=User.all()
    erb :index
    end

    get '/users' do
        status 200
        User.all.map{|col| col.slice("firstname", "lastname", "age", "email")}.to_json
    end

    post '/users' do

        if params[:firstname] != nil
            create_user = User.create(params)
            new_user = User.find(create_user.id)
            user={:firstname=>new_user.firstname,:lastname=>new_user.lastname,:age=>new_user.age,:password=>new_user.password,:email=>new_user.email}.to_json
        else 
            check_user=User.auth(params[:password],params[:email])
            if !check_user[0].empty?
                status 200
                session[:user_id] = check_user[0]["id"]
            else
                status 401
            end 
            check_user[0].to_json
        end 

    end

    post '/sign_in' do
        verify_user=User.auth(params[:password],params[:email])
        if !verify_user.empty?
            status 200
            session[:user_id] = verify_user[0]["id"]
        else
            status 401
        end 
        verify_user[0].to_json
    end

    put '/users' do

        User.update(session[:user_id] , 'password', params[:password])
        user=User.find(session[:user_id])
        status 200
        user_info={:firstname=>user.firstname,:lastname=>user.lastname,:age=>user.age,:password=>user.password,:email=>user.email}.to_json

    end

    delete '/sign_out' do
        session[:user_id] = nil if session[:user_id]
        status 204
    end

    delete '/users' do
        status 204
    end

    set :bind, '0.0.0.0'
    set :port, 8080
    enable :sessions


# require "sinatra"

# require "json"

# enable :sessions

# set :port, 8080
# set :bind, "0.0.0.0"

# require_relative "my_user_model"


# get '/' do
#     @users = User.all()
#     erb :index
# end

# get '/users' do
#     # status 200
#     # user_arr = User.all
#     # new_arr = []
#     # for x in 0..user_arr.length - 1
#     #     subset = user_arr[x].slice("firstname", "lastname", "age", "email")
#     #     new_arr.append(subset)
#     # end
#     # new_arr.to_json

#     User.all.map{|col| col.slice("firstname", "lastname", "age", "email")}.to_json
# end


# post '/users' do

#     if params[:firstname] != nil
#         create_user = User.create(params)
#         new_user = User.find(create_user.id)
#         user={:firstname=>new_user.firstname,:lastname=>new_user.lastname,:age=>new_user.age,:password=>new_user.password,:email=>new_user.email}.to_json
#     else 
#         check_user=User.auth(params[:password],params[:email])
#         if !check_user[0].empty?
#             status 200
#             session[:user_id] = check_user[0]["id"]
#         else
#             status 401
#         end 
#         check_user[0].to_json
#     end 

# end

# # post '/users' do

# #     if params

# #         new_user = User.create(params)
# #         user_info = User.find(new_user.id)

# #         result = {firstname: new_user.firstname, lastname: new_user.lastname, age: new_user.age, email: new_user.email}
# #         result.to_json
# #     end
# # end

# # post '/sign_in' do

# #     user = User.auth(params["email"], params["password"])
# #     if user
# #         # session[:user_id] = user.id
# #         # result = {firstname: user.firstname, lastname: user.lastname, age: user.age, email: user.email}

# #         # result.to_json

# #         puts user.inspect
# #     else
# #         status 401

# #     end
# # end

# post '/sign_in' do
#     email = params[:email]
#     password = params[:password]

#     if email.nil? || password.nil?
#         status 401
#     else
#         user = User.auth(email, password)
#         result = user[0]

#         if result
#             status 201

#             id = result["id"]
#             session[:user_id] = id

        

# end

# # post '/sign_in' do
# #     verify_user=User.auth(params[:password],params[:email])
# #     if !verify_user.empty?
# #         status 200
# #         session[:user_id] = verify_user[0]["id"]
# #     else
# #         status 401
# #     end 
# #     verify_user[0].to_json
# # end

# put '/users' do

#     User.update(session[:user_id] , 'password', params[:password])
#     user=User.find(session[:user_id])
#     status 200
#     user_info={:firstname=>user.firstname,:lastname=>user.lastname,:age=>user.age,:password=>user.password,:email=>user.email}.to_json

# end

# delete '/sign_out' do
#     session[:user_id] = nil if session[:user_id]
#     status 204
# end

# delete '/users' do
#     status 204
# end