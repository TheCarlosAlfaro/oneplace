## ONEPLACE open-source codebase

ONEPLACE is an online live video streaming platform.

## Objectives

-  [x] 📝 Diagram the Full Stack
-  [x] 🔎 Differentiate between Client and Server
-  [x] 🔎 Create basic server
-  [ ] ⌨️ Get user input on the Client
-  [ ] ➡️ Send user input from the client with fetch to the server
-  [ ] 🗃 Store data in a database
-  [ ] 🔍 Retrieve data from a database on the Server
-  [ ] ⬅️ Retrieve data from a server on the client using Fetch
-  [ ] 🙈 Hide/Show elements on the client
-  [ ] ✨ Add elements to the page on the client
-  [ ] 🚀 Deploy the client with tbd
-  [ ] 🚀 Deploy the database with tbd
-  [ ] 🚀 Deploy the server with tbd

## Front-end

-  [x] Create client folder
-  [x] Create react app
-  [x] Install tailwindcss
-  [ ] Implement CSS grid for home layout
-  [ ] Implement routing
   -  [ ] Sign up
   -  [ ] Sign in/out

## Back-end

-  [x] Create server folder
-  [x] npm init -y
-  [x] npm install express morgan
-  [x] Setup index.js
-  [x] Add GET / route
-  [x] Add POST / route
   -  [ ] log out req.body

## Deploy

-  [ ] Deploy server with now
   -  [ ] Setup environment variables
      -  [ ] Database connection
         -  process.env.MONGO_URI
   -  [ ] Show mlab
   -  [ ] Deploy with environment variable
      -  now -e MONGO_URI=@meower-db
   -  [ ] Add alias
-  [ ] Deploy client folder with now
   -  [ ] Set API_URL based on hostname

## What's next?

-  Add comments/replies to a mew
-  User Accounts
   -  Don't just have the user enter their name
   -  Sign up/Login
-  User Profiles
   -  Only show mews from a given user
-  Search Mews
-  Hashtags
-  User @mentions
-  Realtime feed of mews
