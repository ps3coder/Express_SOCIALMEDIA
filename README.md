00:00:02.350 [Music]
00:00:11.960 thank you
00:00:16.270 [Music]
00:00:19.500 about the mongodb it is like a nosql
00:00:21.900 database which stores documents in the
00:00:24.180 collections instead of the record as
00:00:26.100 tables as in the SQL database so if you
00:00:28.859 are coming from the SQL background so
00:00:30.840 you can refer the record as the document
00:00:32.820 and the collection as it tables so what
00:00:35.280 is the* node.js so it was a JavaScript
00:00:37.200 engine originally* built for the browser
00:00:39.660 which we known as as the Chrome's via
00:00:41.700 tinjan and now it can work without a
00:00:43.739 browser as well and having some extra
00:00:45.780 apis that we can use and it allow us to
00:00:48.300 run the JavaScript outside of the
00:00:49.920 browser so it was the Chrome's weird
00:00:51.840 engine which is now maintained as a
00:00:53.460 standalone project which we call as the
00:00:55.140 node.js and having some extra apis that
00:00:57.360 we can use and then what is the
00:00:59.280 express.js so it is like a framework for
00:01:01.320 the node.js which help us to ease the
00:01:03.539 process in handling the server-side
00:01:04.860 tasks and then relations between the 
00:01:07.260 collections so we have the relations
00:01:09.360 between the collections inside the
00:01:11.040 mongodb so we have two collections here
00:01:13.140 with the user and with the blocks so
00:01:15.659 each user can have multiple blocks or we
00:01:18.479 can say each user I can have the array
00:01:20.640 of the blocks but each block Belongs to
00:01:23.520 Only single user inside this application
00:01:25.560 so this is the structure of this
00:01:27.420 database that we are using so this is
00:01:29.400 the schema that we are using from the
00:01:30.900 database
00:01:31.979 I have opened a folder in the vs code
00:01:33.900 and now I will create a new folder here
00:01:35.880 as the backend so or both applications
00:01:38.400 will be there in the folders as the
00:01:39.900 backend and the front end so I have
00:01:41.460 created a backend folder and now we need
00:01:43.200 to go to the terminal select a new
00:01:45.240 terminal from there and then we need to
00:01:47.280 move on to the back end so now we are in
00:01:49.259 the backend directory and then we can
00:01:51.119 install the node.js application here so
00:01:53.640 the command to install the node.js
00:01:55.320 application will be the npm in it so for
00:01:58.799 this command now it will ask you some
00:02:00.899 questions like the package name of our
00:02:03.060 application like it can be a backend the
00:02:05.399 version can be so initially can be the
00:02:07.560 1.0.0 as the same the description you
00:02:10.199 can add as a Blog application
00:02:12.360 and then there is some entry point so we
00:02:15.060 can change the entry point to the app.js
00:02:16.920 As for the structure of our application
00:02:18.959 and then we have the test command so we
00:02:21.120 can just skip all of these things like
00:02:22.739 the test command git repository keywords
00:02:25.200 author and the license and now you will
00:02:27.480 see all of the details will be now shown
00:02:29.220 there and it will ask you for the one
00:02:31.260 last time as is this okay and once you
00:02:33.660 will click the yes then you will see the
00:02:35.760 package.json file will be created and it
00:02:38.459 will contain all of the details of our
00:02:40.200 application like we have given the name
00:02:42.000 as the back end we have given the
00:02:43.920 version as the 1.0.0 we have given the
00:02:46.620 description as the blog application and
00:02:48.480 then we have the main as the app.js and
00:02:50.940 now the package.json file is created and
00:02:53.580 now we can install some dependencies to
00:02:55.379 use the application so first dependency
00:02:57.420 I will install is the node mod so the
00:02:59.819 node one will help us to detect the file
00:03:02.040 changes in our application so so if any
00:03:04.500 of the file will be modified while
00:03:06.300 running the application so it will
00:03:07.980 restart the application once again with
00:03:10.440 that overwritten file so we need to
00:03:12.300 install the node bond with that and I
00:03:14.580 will show you the demo with the note
00:03:15.720 mode like how it works
00:03:18.420 so now the node one is installed and now
00:03:20.459 we can see the demo so we can just go to
00:03:22.739 the scripts and then we can just add a
00:03:24.480 script at the start so this will be a
00:03:26.640 start script and then we need to add
00:03:28.140 here the node mon which we have just
00:03:29.700 installed and then the app.js so the
00:03:32.220 nodebon app.js will then listen for the
00:03:34.860 file changes of the app.js file and all
00:03:37.319 of its code inside that and even if we
00:03:39.720 have returned functions which are
00:03:41.099 available in the other file so it will
00:03:42.780 still detect the file changes and it
00:03:44.760 will just rerun the app.js once again
00:03:46.560 and then I have written the start
00:03:48.540 command as this and then we can just
00:03:50.700 create a new app.js file in the back end
00:03:52.680 in the root directory so app.js file and
00:03:55.799 then we can just add just a console log
00:03:57.840 here
00:03:58.920 to just check if everything works fine
00:04:00.900 or not so it will be the hello world
00:04:03.420 so if I will now save and to run this
00:04:05.940 application now as we have written the
00:04:08.220 command as this start so we need to run
00:04:10.200 the command as the npm start there and
00:04:12.480 then you will see the node one is now
00:04:14.580 running and then it is showing us the
00:04:16.380 hello world and now about which I told
00:04:19.260 you about the file changes like if you
00:04:20.940 will just change anything like the hello
00:04:22.320 world you can just set three as
00:04:24.540 collaboration marks there and then once
00:04:26.580 you will save the file now you will see
00:04:28.500 and the node one will just rerun the
00:04:30.419 application for you and then you will
00:04:32.160 see the automatically the file changes
00:04:33.780 will be detected and all of your code
00:04:35.699 will be updated instantly so now we have
00:04:38.280 installed the node one and now the next
00:04:40.020 thing we need to install is Express so
00:04:42.300 we need to install the express.js as we
00:04:44.160 have discussed in the introduction video
00:04:45.660 so the expressjs is useful for the
00:04:47.759 node.js applications to handle the HTTP
00:04:50.699 task and for running the HTTP servers
00:04:53.460 so we need to install the express as the
00:04:55.440 npm install as the express
00:04:58.320 so from this command the express.js will
00:05:00.600 be then installed and then we will just
00:05:02.280 create a basic application with the
00:05:04.320 react with the express.js
00:05:06.540 so the express.js is now installed and
00:05:08.520 to verify the installation you can move
00:05:10.139 on to the package.json file anytime and
00:05:12.900 then you will see there will be a
00:05:14.040 dependencies array dependencies object
00:05:16.020 and then you will see there will be the
00:05:17.880 express and then we have installed the
00:05:19.560 node one also so now the express is
00:05:21.720 installed and now we can just use here
00:05:23.580 the express so now for using the es6
00:05:26.400 import and the export modules in the
00:05:28.259 node.js now we need to do one thing we
00:05:31.080 need to add here the type after the main
00:05:33.060 so we can add a type
00:05:34.680 and it will be the modules so we need to
00:05:37.020 give our type as the module and then in
00:05:39.120 the start now we have to change the
00:05:40.860 start script here so the start will be
00:05:42.539 then there so you can just copy that so
00:05:44.580 it will the node one and then it will be
00:05:46.680 the dash dash as the experimental
00:05:48.960 Dash modules
00:05:51.900 and then you have to add another two
00:05:53.699 dashes as the es Dash module
00:05:56.880 a specifier
00:05:58.979 and then again one dash it will be the
00:06:01.020 resolution
00:06:02.699 and it will be equals to the node so
00:06:05.460 this will be the updated start command
00:06:07.020 for now so I will now just minimize this
00:06:09.419 now you will see this is the start
00:06:10.680 command as the node mon as the
00:06:12.539 experimental modules and then you will
00:06:15.000 see there's the uh there with the Es at
00:06:17.160 the module specifier which is resolution
00:06:19.259 equals to the node and then the file
00:06:21.419 name will be close to the app.js so this
00:06:23.400 will help us to Import and Export for
00:06:25.800 the es6 so this will help us to use the
00:06:28.380 ESX import and the export modules in the
00:06:30.539 node.js as well so we need to go to the
00:06:32.759 app.js and then we have already
00:06:34.259 installed the express so we can just
00:06:36.300 import the express from the express
00:06:37.860 build Express from the express
00:06:42.060 one of the experiences there and then
00:06:44.039 once you will hover over it it will show
00:06:45.840 you the namespace of the express so now
00:06:47.460 the express is there and then we can
00:06:49.440 just use the Express in the app so we
00:06:51.960 will declare a variable as the app and
00:06:53.580 the express.js will give all of its
00:06:55.440 functionality to the app variable so it
00:06:57.539 will Express
00:06:59.340 so now the express has given all of the
00:07:02.039 reference to this app and then we can
00:07:04.080 just create a bit like it with Zig
00:07:05.699 application like we need to create the
00:07:07.319 middlewares and the middlewares are used
00:07:09.360 for handling some tasks in the
00:07:11.100 application so to the app dot use so
00:07:14.940 this will be the middleware and then it
00:07:16.440 will be the URL there and then the URL
00:07:18.960 can be the main URL which will be there
00:07:21.120 and then we will add a call by function
00:07:23.460 after that which will be the request
00:07:25.340 response and the next so this will
00:07:27.840 handle the URL of the default URL like
00:07:30.720 if I will not move on to the localhost
00:07:32.819 at the 5000 so it will be still there
00:07:35.099 but if I will know where there is the
00:07:36.720 API or something so it will only work
00:07:38.759 for the API so we will stick with the
00:07:40.860 API for now and then you will see
00:07:42.720 request response and the next and then
00:07:44.580 we will just send the response to the
00:07:47.039 server like response dot send I came to
00:07:49.740 the hello world
00:07:52.080 and then this will be the application
00:07:53.940 and then we need to use the port as well
00:07:55.860 so we need to Define here the port in
00:07:57.720 which the application will run so it
00:08:00.000 will the app Dot listen so it will just
00:08:02.400 listen to the port of the 5000 from this
00:08:05.160 function so we need to Define here the
00:08:07.259 port like the 5000 so now if I would now
00:08:09.419 save now it will restart the server and
00:08:11.819 now if we can move on to the localhost
00:08:13.560 at the red 5000 so it will be the Local
00:08:16.380 Host
00:08:17.400 it will be the 5000 and slash API but
00:08:20.759 then you will see it will shows the
00:08:22.440 hello world down to the web page because
00:08:23.879 now we are sending the response as a
00:08:25.860 hello world to the server so this is
00:08:27.960 something which we needed so this is a
00:08:29.639 basic express.js application with the
00:08:31.319 node.js which we have just created and
00:08:33.719 now we need to move on to the main
00:08:35.219 application which we want to build which
00:08:36.839 is a Blog application and this structure
00:08:39.179 we have already defined the structure in
00:08:40.860 the demo application that what will be
00:08:42.360 the structure so I will recall it for
00:08:44.279 you so there will be the application
00:08:45.899 there will be some routes for the user
00:08:47.700 and for the blogs as well so first the
00:08:50.220 user will sign up or login and then he
00:08:52.500 or she will be able to see all of the
00:08:54.360 blocks which are available from all of
00:08:56.580 the users and then there will be an
00:08:58.920 option to add the block for the user for
00:09:00.899 the specific user which I have just
00:09:02.339 logged in and then he or she can just
00:09:04.680 create a new block for the food and then
00:09:07.019 he or she can delete or just edit or
00:09:09.600 update that record since the application
00:09:11.580 which you want to win so there will be
00:09:13.320 two tables or like two Collections and
00:09:15.420 then we will get a reference between the
00:09:17.040 two collections to create this
00:09:18.899 application so let's start building the
00:09:20.880 application so I will now remove this
00:09:22.880 app.user and then now we need to move on
00:09:25.620 to the mongodbit to create the database
00:09:27.540 and for creating the database we need to
00:09:29.640 move on to the mongodb website
00:09:31.920 and then we need to just build a new
00:09:33.720 project from there so now you can see
00:09:35.580 there is a sign up page so we so we need
00:09:38.279 to just click on the sign in from there
00:09:42.420 and then there will be the option for
00:09:44.160 the login with Google so you can try out
00:09:45.959 with the Google or if you have your
00:09:47.640 email and the password so you can do
00:09:49.140 with that so I will not try with the
00:09:51.240 Google and now you will see now we will
00:09:52.680 create database option so now we need to
00:09:55.320 just move on to the drop down and then
00:09:56.940 we need to click on the new project so
00:09:59.279 we will create a new project from the
00:10:00.779 scratch in the mongodb
00:10:02.700 and then the name of the project can be
00:10:04.860 the block app
00:10:06.300 and then we can just click on the next
00:10:08.220 and then there will be some options so
00:10:10.260 we can just skip that and we can just
00:10:11.940 click on the create project button from
00:10:13.740 there and then we can just move on and
00:10:16.140 we can just build the database from
00:10:17.760 there
00:10:19.860 and then you will see there is a builder
00:10:21.660 database option so we can just click on
00:10:23.399 that button and then you will see there
00:10:25.200 will be the mongodb atlas so you can
00:10:26.940 just select according to your preference
00:10:28.560 if you want the serverless then you can
00:10:30.480 go with that serverless and it will cost
00:10:32.279 you around 0.30 dollar per 1 million
00:10:35.459 reads and then if you want to go with
00:10:37.380 the dedicated then you can just click on
00:10:39.180 that but I will now create a free
00:10:41.100 cluster which is a shared so we can just
00:10:43.080 create that with the free so I will
00:10:45.000 create a free cluster and then you can
00:10:47.279 see there will be some default options
00:10:48.660 so I will now move on with the default
00:10:50.220 options as well so I will now click on
00:10:52.260 the create cluster from there
00:10:56.459 and then it will prompt you for the
00:10:58.320 username or password so you can just
00:10:59.940 create a username here like we can
00:11:02.160 create the username as the admin and
00:11:04.140 then in the password we can just Auto
00:11:06.000 generate the secure password from the
00:11:07.620 mongodb and make sure you copy this
00:11:09.600 password and then you can just store it
00:11:11.279 anywhere like this
00:11:13.860 and then you can just click on the
00:11:15.240 create user after that
00:11:18.839 and then you will see there is a success
00:11:20.700 message and then you can see now we have
00:11:22.860 some ports and we need to just allow it
00:11:25.620 from anywhere so we can just skip that
00:11:27.480 but I think so we can just move on to
00:11:29.940 the network access from there and then
00:11:32.519 we need to select the IP from there so
00:11:34.500 we need to click on the add IP address
00:11:35.880 and then we can just click allow access
00:11:38.399 from anywhere from there and then we can
00:11:40.740 just confirm that entry
00:11:44.040 and we have already set up the mongodb
00:11:46.200 for that so you can say we have a
00:11:48.060 database so it will be deployed in
00:11:49.800 around one to three minutes so till then
00:11:52.019 we can just move on to the app.js and we
00:11:54.120 can just import the Mongoose to connect
00:11:55.680 to the database so it will be the import
00:11:57.600 as a mongoose and then we can use the
00:12:00.000 mongoose
00:12:01.260 dot connect function to connect to the
00:12:03.779 database and for the URL now it needs a
00:12:06.060 URL in the string and then we need to go
00:12:08.100 to the database deployments and now our
00:12:09.899 database is deployed so we can just
00:12:11.760 click on the connect and then there will
00:12:13.860 be the option of the connected
00:12:15.000 application so you can just click that
00:12:16.680 and then you will see the node.js is
00:12:18.660 already there so we can just copy that
00:12:21.360 and we can just move on to the
00:12:22.980 mongos.connect once again and I will now
00:12:24.839 copy the string so now you will see this
00:12:27.060 is the string but now the ad the user is
00:12:29.339 the admin which we have already defined
00:12:30.839 but the password Here we need to just
00:12:32.880 remove this password because this is not
00:12:34.860 the password of our mongodb database so
00:12:38.100 we need to just copy this password which
00:12:39.779 we have just copied and we need to paste
00:12:41.760 it here after the call on and then after
00:12:44.279 this there is a my first database so
00:12:46.800 this will be the database name in our
00:12:48.360 mongodb so we need to change this it
00:12:50.339 with the block so this will be the
00:12:52.139 database name and the Mongoose dot
00:12:54.180 connect returns a promise so we need to
00:12:56.220 just add a then statement after there so
00:12:58.380 it will be the then and then after that
00:13:00.540 we can just console.log or we can just
00:13:03.420 use the app Dot listen after that so we
00:13:05.820 need to just get this and then I will
00:13:07.980 now just add the app Dot listen to the
00:13:09.779 port here because when the mongodb will
00:13:12.240 be connected and then only we will just
00:13:13.920 listen to the server of the 5000 and
00:13:16.260 then we can use another then statement
00:13:17.820 after that and then it will be just a
00:13:19.920 console
00:13:21.000 Dot Lock so we need to just add a
00:13:23.459 console.log that's the connected
00:13:25.880 to database
00:13:28.560 and listening
00:13:31.079 to localhost
00:13:33.839 Port of the 5000 that we have just
00:13:35.880 defined so this will be the console
00:13:38.220 message which we want to show and this
00:13:40.139 is a promise and this is a database
00:13:42.000 request so it is type of a server
00:13:43.740 request and it can fail also so we need
00:13:46.139 to add here the cache statement also
00:13:47.820 because if we don't add the cache
00:13:50.040 statement then it will not catch any
00:13:51.779 error if we will just get the error from
00:13:53.700 the server so we can just add here the
00:13:55.200 cache statement after that and then it
00:13:57.300 will catch an error and then we will
00:13:59.339 just console.lock the error just for now
00:14:01.800 so it will be console.log the error so
00:14:04.500 if I will now save and if I will now
00:14:06.180 just check if everything would work fine
00:14:07.980 or not I think something is missing
00:14:10.500 there I think it is showing as as the
00:14:12.600 module not found
00:14:14.880 so I think there is an error so the
00:14:17.579 error is that the Bongos is not
00:14:19.200 installed so we can just install the
00:14:21.120 Mongoose Library so it will the npm is
00:14:23.040 the mongoose
00:14:24.540 so the Mongoose will be then installed
00:14:26.220 and then we will use the mongos from
00:14:27.720 there and now the mongos is installed
00:14:29.760 and now we can just check again with the
00:14:31.380 npm start command if it connects to the
00:14:33.899 database or not so we can just see the
00:14:36.120 log if it connects to the database
00:14:38.279 so I think so now you will see it is
00:14:40.019 connected to the database and it is
00:14:41.639 listening to the localhost at the rate
00:14:43.139 Port of the 5000 and now everything till
00:14:45.360 the connections of the mongodb is
00:14:46.860 working fine and now we need to create
00:14:48.600 the folder structure so there first
00:14:50.459 there will be the backend and then there
00:14:52.079 will be the folder of the routes so it
00:14:54.480 will contain the routes and then there
00:14:56.339 will be the folder of the controllers
00:14:59.639 so now we have the routes and the
00:15:01.199 controllers and then we will have one
00:15:02.579 more folder of the models so the models
00:15:05.220 will contain the models of the user and
00:15:08.220 the blocks and the controllers will
00:15:10.079 contain the controller functions which
00:15:12.240 will control the API routings in the
00:15:14.040 mongodb and the express.js and then the
00:15:16.860 routes will contain the routing
00:15:18.240 operations so from which route and from
00:15:20.339 what route the controller will call so
00:15:22.560 all of these things will be then
00:15:23.699 connected and now we can just start
00:15:25.500 creating the application
00:15:27.959 and now the first thing which we need is
00:15:29.880 we need to build the model and the model
00:15:31.800 of the user so user model will contain a
00:15:34.560 schema in which the user will be having
00:15:36.420 the name field the email field the
00:15:38.820 password field and the blocks field so
00:15:41.040 we need to build the schema of the user
00:15:42.660 first so it will be the user dot JS and
00:15:46.139 here we need to import the Mongoose so
00:15:48.060 it will be import mongoose
00:15:50.160 from the Mongoose and now we need to
00:15:52.440 import the schema of the Mongoose so we
00:15:54.360 need to build the schema so we need to
00:15:56.100 get the schema class of the Mongoose at
00:15:57.899 this schema
00:15:59.040 will be equals to the mongoose dot
00:16:01.620 schema
00:16:02.820 and with this schema then we can win the
00:16:04.920 model of the Mongoose with the user
00:16:06.899 collection so it will make a user
00:16:08.940 collection for us so we can just make
00:16:10.560 the fields like the schema of the user
00:16:13.019 will contain the cons user schema
00:16:15.540 will be equals to the new schema that we
00:16:18.660 have just imported from the Mongoose dot
00:16:20.399 schema and then we need to edit the
00:16:22.139 object and then we need to add some
00:16:23.880 Fields like it will contain the name
00:16:25.740 field and the name field will contain an
00:16:27.959 object and the type of the name will
00:16:30.000 contain a string so we need to add the
00:16:31.740 type in an object and then this field
00:16:33.899 will be the required so we need to add
00:16:35.399 the required path and the required part
00:16:37.500 will be close to the two and if anyone
00:16:39.600 with the request they won't provide the
00:16:41.639 name now into the user schema then the
00:16:44.160 application will break and then we can
00:16:45.959 just provide here the email also and
00:16:48.060 then email will be type of this as the
00:16:49.740 string as the same as the user and then
00:16:52.500 it will be the required field so the
00:16:54.540 required will be equals to the two and
00:16:56.519 then
00:16:58.320 and then there will be the one more
00:16:59.940 field in the email because the email
00:17:01.680 should be unique of every user so we
00:17:04.380 need to add here the unique as it true
00:17:06.480 so the unique property will allow us to
00:17:08.640 add some unique email also on to the
00:17:11.040 users and then we can build the password
00:17:13.439 field as the password
00:17:15.839 and the password will be there as a type
00:17:17.939 again as the string
00:17:21.299 and then it will contain the required
00:17:23.939 field it will also be the required will
00:17:26.459 be equals to the true always and then we
00:17:28.439 need to add here the minimum length so
00:17:31.020 the password will contain a minimum lens
00:17:33.059 so we can just add the minimum length as
00:17:35.100 the six so now we have created the user
00:17:37.260 schema so this will be the collection
00:17:38.940 and all of these fields will be now
00:17:40.919 stored in inside the collection so now
00:17:43.020 we have just built the schema of the
00:17:44.580 collection and then we can then we can
00:17:46.080 just export The Collection into the
00:17:47.820 mongodb so for exporting we need to
00:17:50.160 export the collection
00:17:51.720 so we can just export as the export as
00:17:54.600 will be the default so it will be the
00:17:56.520 default export and it will be the
00:17:57.900 Mongoose dot model so it will create the
00:18:00.600 model for us like a collection and then
00:18:02.580 we need to define the name of the
00:18:03.900 collection like it will be the user and
00:18:06.179 then we can just add the schema of the
00:18:07.799 user like we have the user schema so now
00:18:09.960 we are exporting the collection and then
00:18:12.059 in the mongodb the collection will be
00:18:13.799 stored as the users so there is a Nami
00:18:16.140 convection and by default naming
00:18:17.580 convention in the mongodb that if you
00:18:19.860 will store a name as the user the first
00:18:21.840 letter is a capital letter then it will
00:18:23.580 be stored at the small letter and all of
00:18:25.740 the fields will be now in the small
00:18:26.880 letter and it will be in the plural form
00:18:29.100 like we have given the user as a
00:18:31.020 singular form but in the mongodb it will
00:18:33.360 be stored as the users so now we have
00:18:35.340 created the user and now we need to just
00:18:37.620 build some routes and the controller
00:18:39.299 functions for the user so we need to
00:18:41.520 move on to the routes now and where then
00:18:43.620 we need to create a new route as a user
00:18:46.140 Dash routes
00:18:47.460 dot JS and now the user will contain
00:18:49.919 some routes and for giving some routes
00:18:52.380 now we need to import the I think the
00:18:54.960 express so it will import
00:18:56.880 the express from the express Js
00:19:01.500 it will be from Express
00:19:03.600 so now we have imported the express and
00:19:05.700 now we need to use the router from the
00:19:07.440 express so we can just create a variable
00:19:09.600 as the const router will be equals to
00:19:13.140 the express that we have dot router so
00:19:15.840 we have a router inside the express and
00:19:18.179 then we can use the router function from
00:19:19.860 there and then it will provide its
00:19:22.200 reference to this router variable and
00:19:24.539 then we can just use all of the router
00:19:26.340 Fields like all of the router requests
00:19:28.500 like it will be having the router dot
00:19:30.360 post router.get so all of the requests
00:19:33.120 will be done there as they put also and
00:19:35.039 for the delete also so all of the
00:19:36.539 requests that we need contains here so
00:19:39.240 now the first we need to just create a
00:19:41.520 simple command like the get and it will
00:19:43.799 be of the same URL that we have it will
00:19:46.320 be the blank URL and then and then we
00:19:48.720 can Define here a function and the
00:19:50.760 function we need to define the function
00:19:52.320 in the controller functions so then we
00:19:54.480 can just Define here only a singular
00:19:57.000 route like the same route and then there
00:19:59.039 will be a controller function and for
00:20:00.900 creating the controller function now we
00:20:02.580 can move on to the controller folder
00:20:04.260 create a new file as user Dash
00:20:06.720 controller
00:20:08.160 dot JS and then we can just import here
00:20:11.220 the model of the user to create the
00:20:13.380 controller so it will import the user
00:20:15.720 from the model slash user so now the
00:20:17.880 first route will contain a blank URL now
00:20:20.400 we will get all of the users from the
00:20:22.140 database so for doing that we can just
00:20:24.179 create a function as the const as we get
00:20:26.700 all users
00:20:29.160 will be equals to an async function
00:20:31.200 because it is an asynchronous task and
00:20:33.299 HTTP requests are always asynchronous
00:20:35.640 task so we have to use the async and
00:20:37.799 then it will contain the response
00:20:39.260 request response and the next as the
00:20:42.179 parameters so the request is what we
00:20:44.520 will request from the front end like the
00:20:46.200 request.body request dot headers and so
00:20:48.780 many things and the response which we
00:20:50.760 will provide to the intent and then
00:20:52.799 there will be a next function which will
00:20:54.600 allow us to move on to the next
00:20:55.980 available middleware and then we can
00:20:58.260 just provide here the users all of the
00:21:00.120 users to this route so we can just
00:21:02.640 Define a let as the users
00:21:05.580 and it will be by default undefined and
00:21:07.919 then we have to use the try catch block
00:21:09.539 because it is always because we have to
00:21:11.700 use the try cache block always whenever
00:21:13.620 we are dealing with the database because
00:21:15.539 the database operation can fail as well
00:21:17.700 so we should always use a try catch
00:21:19.740 block and if we get an error so we can
00:21:21.960 just log an error
00:21:24.360 so then we can use the tricaster block
00:21:26.160 and inside the try we can just provide
00:21:28.020 the users will be equals to the await
00:21:30.539 because it is an asynchronous task so
00:21:32.700 away it will be there and then we need
00:21:34.679 to add the user so now we have imported
00:21:36.900 the user from there and it will be the
00:21:38.520 user dot find so we have a function in
00:21:41.700 the Mongoose with the find so it will
00:21:43.799 find all of the documents with there so
00:21:45.600 if you will just hover over the find you
00:21:48.120 can see it will return an array like you
00:21:50.580 can see it will return and query array
00:21:52.440 or any other array like you can see it
00:21:55.620 will get a list of the documents that
00:21:57.299 matches the filter but now we are not
00:21:59.159 defining any filter so it will match all
00:22:01.080 of the records so then we are using the
00:22:03.299 try catch block and then we can use here
00:22:05.280 the validations also like we can use the
00:22:07.260 if statement like if we don't have any
00:22:09.600 users or the users is a falsy value
00:22:12.360 then we can just return the response dot
00:22:15.780 status of the request will be the 404
00:22:18.780 that no users found and it will contain
00:22:21.600 the Json message and inside the message
00:22:23.700 we can provide the message as the no
00:22:26.220 users
00:22:27.539 found so if we don't find any users
00:22:29.940 initially also because whenever we will
00:22:32.159 try this request so it will give us the
00:22:33.840 no users found because we don't have any
00:22:35.880 users available right now in the
00:22:37.799 database and then if everything is clear
00:22:39.960 then we can just return the response dot
00:22:42.840 status will be equals to the 200 which
00:22:45.419 is Success which can be okay and then we
00:22:47.940 can just send the Json message again
00:22:50.159 and the Json message now will contain
00:22:52.080 the users so it will contain the users
00:22:54.000 so we can just provide only the name
00:22:56.039 only because it will act same as the
00:22:58.620 users
00:22:59.820 property and the value of the users so
00:23:01.860 because es6 so it will provide us the
00:23:04.200 same result so we can just save and then
00:23:06.299 we need to just export this as well so
00:23:08.039 it will be the export so now this
00:23:10.559 function will be exported and now we
00:23:12.059 need to use this function inside the
00:23:14.280 controllers so in the by default same
00:23:16.080 request then we can use the get users
00:23:18.120 get all user from there then you can see
00:23:21.000 the guitar user is now imported from the
00:23:23.940 controllers and then we can use that and
00:23:26.100 now everything is fine but now in the
00:23:28.200 main app file we have to use the
00:23:30.780 middleware to use the routes because
00:23:32.280 here we are not giving the application
00:23:34.440 an idea that we are using the routes so
00:23:37.140 we need to provide that idea to there
00:23:38.880 like we need to import here the routes
00:23:41.220 file so it will import the route I think
00:23:44.100 the router is there from the and I think
00:23:46.799 we haven't exported the router from
00:23:48.480 there so we need to export the router as
00:23:50.880 well so it will do the export so to a
00:23:53.520 default export as the export default as
00:23:55.320 a router so we are now exporting the
00:23:57.720 router from there and then we can just
00:23:59.520 use it the router as the app dot use and
00:24:02.640 now it will auto detect the router if we
00:24:04.500 will add here like the router now you
00:24:06.419 can see it will auto detect that and
00:24:09.179 then it has imported from there as well
00:24:11.100 and then we are using the router and
00:24:13.200 then if you want to use a specific URL
00:24:15.480 from there so you can just add a
00:24:17.039 specific URL like it will be slash API
00:24:19.799 slash user so now every request will
00:24:22.860 work as the HTTP Port of the 5000 and
00:24:25.559 then it will work as the Slash
00:24:28.919 API slash user and then all of the
00:24:32.280 routes in the user will work so it will
00:24:34.440 act as this and then if we are giving
00:24:36.659 only the same URL so it will work as the
00:24:38.760 same but when we will provide the sign
00:24:40.620 up or we login so it will actually sign
00:24:42.419 up until login and this route will be
00:24:44.520 accessible from this URL only from API
00:24:46.980 user so we can just provide that API in
00:24:49.440 the user and then we can just remove
00:24:51.179 that so if I would now save and if I
00:24:53.760 would now move on to the postman which
00:24:55.500 we have just installed and this is a
00:24:57.720 screen of the postman then we can just
00:24:59.460 create a new request from there it will
00:25:01.500 be HTTP slash localhost
00:25:05.880 Port of the 5000 that we have defined
00:25:08.400 and then it will be API slash user and
00:25:12.360 then it will be the same route so if I
00:25:14.039 will not just create a get request now
00:25:15.659 you will see the users is giving us an
00:25:18.059 array because now we are having the
00:25:20.340 users in the database and it is giving
00:25:22.440 us an array of the blank array because
00:25:24.179 now the users is a successful but we
00:25:26.700 don't have any user and now we can just
00:25:28.500 create the user by creating a sign up
00:25:30.840 route so we can just move on to the user
00:25:33.120 routes to create a user so it will be
00:25:35.520 the router and it will the post function
00:25:37.500 because we will just send some data with
00:25:39.840 the request so it will be dos slash it
00:25:42.480 will be the ad or it can be the sign up
00:25:45.299 so it will be a sign up request a post
00:25:47.460 HTTP request and then we can just Define
00:25:49.740 a controller function there after that
00:25:51.539 so to the export as the const and it
00:25:54.720 will be the sign up function
00:25:56.520 and it will be equals to again the async
00:25:58.919 and request response and the next inside
00:26:01.559 the function parameters and then we can
00:26:04.200 just Define here this sign up
00:26:05.640 functionality inside this controller
00:26:07.740 function and for defining that now we
00:26:10.200 have to get something from the
00:26:11.520 request.body because the request.body
00:26:14.400 contains something which we will send
00:26:16.799 from the front end so now the postman
00:26:20.159 will act as a front end and then we will
00:26:22.440 send the name the email and the password
00:26:24.360 from the postman so we need to get all
00:26:27.059 of the things from the request dot body
00:26:28.919 and the request.body is like it will
00:26:31.559 contain the body now you can see there
00:26:33.240 we have a body Tab and this will be
00:26:35.279 acted as the response.body so we can
00:26:37.799 just get the requested body so it will
00:26:39.600 be const so we can just restructure all
00:26:42.000 of these fields which we will receive
00:26:43.260 from the request.body like the name we
00:26:45.600 will receive the name field the email
00:26:47.460 and the password
00:26:49.380 and it will be equals to the request dot
00:26:52.980 body so we can just restructure all of
00:26:54.960 the things and then now we have to
00:26:57.120 Define here something because now if we
00:26:59.940 are giving a sign up request so now if
00:27:01.980 the user is already available in the
00:27:03.600 database then we have to add here some
00:27:05.580 validation and for adding the validation
00:27:07.620 now we can Define that existing user
00:27:10.980 and it will be equals to the by default
00:27:13.380 it will be then defined and then we can
00:27:15.419 just again add a try catch block as we
00:27:17.340 have earlier discussed that we should
00:27:19.320 use the try catch block always
00:27:21.299 but will the catch
00:27:23.820 so whenever we will get an error we will
00:27:26.100 just console.lock the error as of now
00:27:28.380 and then in the try then we can just
00:27:30.480 Define as the existing user will be
00:27:32.700 equals to the await because it is an
00:27:34.740 asynchronous task and now we need to
00:27:37.080 find the user so if the user is already
00:27:39.360 available then we can find with that
00:27:41.340 like the user dot find and then we can
00:27:44.880 use the find as well but there is a one
00:27:46.679 more function as the find one which will
00:27:48.720 just find of only one record from the
00:27:50.880 database and for the filter we can just
00:27:52.980 Define the filter as the email so we
00:27:55.559 will just filter the email query and
00:27:57.600 email is available in the user model as
00:27:59.820 well so it will just filter the email
00:28:01.260 property and the value of the email
00:28:03.240 property which we will just send from
00:28:05.039 there from the request.body so the email
00:28:07.200 will be accessible as the key value pair
00:28:09.059 there and then it will just fetch one
00:28:11.159 record so if the record is there
00:28:13.440 we can just add a semicolon there so if
00:28:17.039 the email is there then we can just add
00:28:19.559 here some validation like if the
00:28:22.440 existing user is already available in
00:28:24.840 the database and then we can just return
00:28:27.299 the response I can do the response dot
00:28:30.000 status and the status will be equals to
00:28:32.340 the 400 which is unauthorized and then
00:28:35.159 we can just add a Json message also like
00:28:37.440 the message inside that key and then it
00:28:40.380 will be the user already
00:28:43.080 exist
00:28:45.539 and then we can just add here the login
00:28:47.580 instead so this will be the message
00:28:49.440 which we will send if the user is
00:28:51.299 already available and then if the
00:28:53.340 existing user is not found then we can
00:28:55.860 just create a new user so to create the
00:28:58.440 new user now we can just create the user
00:29:00.419 as the user will be equals to a new user
00:29:03.779 it will be the new user document so we
00:29:06.179 can just refer the collection of the
00:29:07.679 user the model of the user and it will
00:29:09.960 contain the object and it will contain
00:29:12.360 the name of the user that we will Define
00:29:14.100 it will be the email which we will
00:29:16.500 Define and then it will the password so
00:29:18.840 we are now defining here without the key
00:29:20.580 value pair as in the ESX always and then
00:29:23.520 now we can Define the user so and then
00:29:26.100 now we need to save the user as well and
00:29:28.200 to save the user now we need to use the
00:29:30.419 try catch again because it is a HTTP
00:29:33.120 task so we show you the try catch block
00:29:35.460 because it is a database task and then
00:29:38.039 if we will get an error we will just
00:29:39.539 console.lock the error again and then to
00:29:42.179 save the user we have a function as the
00:29:44.700 user that we have just created which is
00:29:47.039 the reference of the new document is it
00:29:49.620 will be document dot save so we have a
00:29:52.080 save function inside the Mongoose which
00:29:54.600 will help us to save the document inside
00:29:56.760 the database so this will help us as the
00:29:59.159 user.safe and then we can just add here
00:30:01.740 the return statement after that so it
00:30:04.020 will the return response dot status will
00:30:06.840 be the 201 which is created and then we
00:30:10.020 can just add a Json message again and
00:30:12.179 this time the Json message will not
00:30:14.100 contain a string or anything it will
00:30:15.779 contain the main user which we have just
00:30:18.120 defined and which we have just saved and
00:30:20.580 then it is a asynchronous task so we
00:30:23.039 should add here the await as well
00:30:24.360 because it will be user.save and it can
00:30:26.640 take some time as well so we can just
00:30:28.740 create that and now if we can see the
00:30:31.080 sign up request what we have created in
00:30:33.360 the controller function we have created
00:30:34.740 the request.body fields which we will
00:30:37.140 receive from the front end we have
00:30:39.059 defined the existing user we are now
00:30:40.799 checking the validation if it is already
00:30:42.480 available and then if available then we
00:30:45.120 are sending the 400 response and if it
00:30:48.120 is not available then we are sending a
00:30:50.039 new user and with the try cash block we
00:30:52.380 are saving the user and then we are
00:30:54.000 returning the status of the 201 and
00:30:56.399 sending the user as the Json and then we
00:30:58.860 need to use the other routes again and
00:31:00.419 it will the sign up function from there
00:31:01.860 so it will the sign up so we have
00:31:03.360 imported the sign up as well from the
00:31:05.460 user's controller so if I will now save
00:31:07.620 and if I will now move on to the post
00:31:09.120 when create a new request from there so
00:31:12.120 I can now copy this URL from there
00:31:15.419 and paste this URL here total the user
00:31:18.240 slash sign up because this is a sign up
00:31:20.340 request and we have defined the sign up
00:31:21.960 and then this is the post request so we
00:31:24.240 can just get here the post request from
00:31:26.279 there from this drop down and now we
00:31:28.380 need to send the body to send the body
00:31:30.240 we need to move on to the body Tab and
00:31:32.580 then we need to select the raw body
00:31:34.020 which will be of type of the Json so you
00:31:36.539 need to click on the text and select the
00:31:38.520 Json and now we need to add here the
00:31:40.559 Json so Json will contain the name field
00:31:43.020 as we have defined and it will contain
00:31:45.120 the name like I will provide my name as
00:31:47.100 of now as the nickel and it will contain
00:31:49.320 the email
00:31:50.340 so we can just provide the email name as
00:31:52.740 the nickel
00:31:54.000 at the redtest.com and then this will be
00:31:57.720 the email and then we can define a
00:31:59.220 password
00:32:00.320 can be like one one one one one one one
00:32:03.120 as of now and if I would now save now we
00:32:06.779 will see a interesting thing if I will
00:32:09.120 now just send a request now you can see
00:32:11.399 it will just not send any request now
00:32:13.799 you can see it will throw us an error in
00:32:16.140 the console so if you will just see that
00:32:18.600 error that what is the error then you
00:32:20.580 can see cannot destructure the property
00:32:22.380 the name of the request.body and it is
00:32:25.020 undefined and now this error is coming
00:32:27.480 because this application Server doesn't
00:32:29.279 know that what type of data it is
00:32:31.679 receiving from the request.body so we
00:32:34.559 need to tell the application that we are
00:32:36.779 receiving the Json body so we can just
00:32:39.179 use a another middleware before every
00:32:41.159 middleware so it will be the app dot use
00:32:43.980 it will be the express that we have
00:32:47.279 imported in the app dot Json so it will
00:32:49.919 just consider it will just pass all of
00:32:52.200 the data into the Json format and
00:32:54.480 earlier we were using the body parser
00:32:56.220 but now the express has a solution so we
00:32:58.799 can use the solution from the express
00:33:00.299 only so it will be express.json it will
00:33:03.659 get the Json data from there and now you
00:33:05.940 can see the request for still sending so
00:33:07.919 we can just go to the user's controller
00:33:10.559 because the request was still sending
00:33:12.179 from there and then we need to just stop
00:33:14.159 the request so if there is an error then
00:33:16.679 we can just return there like the
00:33:18.840 console.lock only and then we can just
00:33:20.820 return here a new error from from by
00:33:23.880 creating a new error class or we can
00:33:25.679 just return a notification from there
00:33:27.600 but now we are now only returning the
00:33:29.700 console.log so to the return statement
00:33:32.220 as well from the catch so if I will now
00:33:35.100 save and if I will now just move on to
00:33:36.779 the postman ahead
00:33:38.340 and if I will now just create a new post
00:33:40.559 request again
00:33:43.200 and then you will see the status is the
00:33:45.179 201 and then we have created the user
00:33:47.460 and it is sending us the user in the
00:33:49.380 Json so now everything is working fine
00:33:51.600 but here we are receiving the two fields
00:33:53.580 which is the ID and the V and this is
00:33:56.220 coming from the mongodb because we have
00:33:57.899 not stored the document in the mongodb
00:33:59.820 and in the collection of the user and
00:34:02.640 then we are now retrieved and now we are
00:34:04.919 saving the password of the user as the
00:34:07.080 same which we are receiving inside the
00:34:09.119 mongodb database so we can just secure
00:34:11.399 that also so if you want to secure it
00:34:13.679 then you can just create a hashed
00:34:16.320 password to store in the mongodb and
00:34:18.659 with that the password will be encrypted
00:34:20.399 so you can just use the encrypted
00:34:22.199 password and to use that you can just
00:34:24.179 stop this server and then you can just
00:34:26.580 install a new library as the npm install
00:34:29.580 as the Big Crypt
00:34:31.440 JS so the big crypt.js will then allow
00:34:34.800 you to just create a hashed password to
00:34:36.839 store inside the mongodb so you can just
00:34:39.359 install that Library
00:34:41.580 and then now the Big Crypt is now
00:34:43.320 installed and now we can just move on to
00:34:45.000 the user's controller import the Big
00:34:47.159 Crypt
00:34:49.918 from the decrypt.js
00:34:52.440 and now the big rate is imported and now
00:34:54.540 when we are signing up the user then we
00:34:56.760 will just create a password like it will
00:34:58.380 be the cost at the hashed password
00:35:02.580 and it will be equals to which we have
00:35:04.800 just imported as a decrypt
00:35:07.140 it will be the hash sync so till the
00:35:10.200 hash sync it will just Hash a password
00:35:11.940 in the synchronous way so we can just
00:35:13.619 pass here this the
00:35:15.720 string inside that and it will contain
00:35:17.640 the password inside that so we are now
00:35:19.560 hashing the password and then we will
00:35:21.839 just store the password as the hashed
00:35:23.460 password from there so it will the
00:35:24.900 password so we can just create a hashed
00:35:27.119 password five will now cut from here and
00:35:29.339 we need to add here because because here
00:35:31.619 we are creating the new user and the
00:35:33.180 user will contain the password as the
00:35:35.339 hashed password so we can just talk as
00:35:37.619 the hashed password so if I will now
00:35:39.240 save I will now restart the application
00:35:41.579 by running the npm start
00:35:44.520 and then we need to move on to the
00:35:46.020 postman again I will now create a post
00:35:47.820 request is it is a sign up request also
00:35:51.660 we can just create a new request by
00:35:53.760 giving a new field as a Roman
00:35:56.820 and then the email will be Roman and now
00:35:59.400 the password will contain the triple one
00:36:01.200 triple one and if I will now just create
00:36:03.060 a send request again
00:36:04.680 now you can see you will see a different
00:36:06.839 thing in the password and it is
00:36:08.400 contained an encrypted password and now
00:36:10.859 the password is also encrypted of the
00:36:12.660 user and once you will click on the get
00:36:14.280 user again you will get that user as
00:36:16.619 well from the there and now we can just
00:36:18.720 delete these two users as well from the
00:36:20.700 database so we can just move on to the
00:36:22.740 Chrome we can just move on to the
00:36:25.200 mongodb
00:36:26.700 to just start over with the hashed
00:36:28.560 password so to the mongodb so I have
00:36:30.900 just closed mongodb because my
00:36:32.579 application was crashing so we can just
00:36:34.619 click on the sign in again and then we
00:36:36.720 can just remove these two users
00:36:40.380 so here we have the screen and then we
00:36:42.900 can just move on to the browse
00:36:44.339 collections so it will just give us all
00:36:46.800 of the collections that we have in the
00:36:48.660 database right now and it will be the
00:36:50.400 user I think
00:36:52.020 so then you can see the blog is the
00:36:53.880 database name and we have the users and
00:36:55.859 then we have three users currently in
00:36:57.480 the database we can just remove this
00:36:59.640 user from there click on the delete
00:37:02.099 and then you can just delete this user
00:37:04.320 as well
00:37:07.859 and then the James user will also be
00:37:09.780 deleted
00:37:10.859 and then now you can see now we have
00:37:12.660 only one record in the database and now
00:37:14.880 if we will just get the users it will
00:37:16.740 only show one record in the database
00:37:18.420 which is the Roman and then we can just
00:37:20.400 create another user again as it James
00:37:23.099 it will be the James
00:37:25.380 and then if I will now send a new
00:37:26.940 request now you can see now we have the
00:37:28.920 different password of the James so now
00:37:31.020 the sign up functionality is completed
00:37:32.700 and now we need to log in the user as
00:37:34.680 well so create the login route we can
00:37:36.900 just move on to the user routes again
00:37:38.339 create a new route as a router
00:37:41.280 dot post and table the post request
00:37:43.560 again and the URL will be the login so
00:37:46.440 it will be the login route and then
00:37:48.060 instead of the sign up we can just
00:37:49.859 create another controller function to
00:37:51.599 control the login operation and then we
00:37:53.880 can use the login as the const login
00:37:56.820 will be equals to the asynchronous task
00:37:58.800 again as the response request response
00:38:03.300 and the next as the parameters
00:38:06.540 and then we can just create here we can
00:38:09.300 just get all of the fields from the
00:38:11.460 because dot body so we can just grab
00:38:13.680 this line from there
00:38:17.760 and then you can see now we are grabbing
00:38:19.440 the name email and the password and now
00:38:21.420 for logging in the user now we don't
00:38:23.280 need the name so we can just remove that
00:38:25.380 and then we can just only get the email
00:38:27.720 and the password from the request.body
00:38:29.520 and then now we can just move on and we
00:38:32.160 can just check some validation like the
00:38:34.440 existing user is there or not so we can
00:38:36.780 just grab that functionality from there
00:38:38.640 only that we have just created so we can
00:38:41.099 just grab existing user there
00:38:44.220 so we can now just grab that and then we
00:38:47.280 can just paste that here and now you can
00:38:49.740 see existing user is here and then we
00:38:51.780 are now finding the user and then you
00:38:53.940 can see if we are getting the existing
00:38:55.920 user then we need to change this
00:38:57.480 functionality so if we don't get the
00:38:59.880 existing user then we can just send the
00:39:02.280 response dot status as the four
00:39:04.500 of four
00:39:06.300 that we don't find the user by this ID
00:39:08.400 like they don't don't find
00:39:12.359 find user
00:39:14.099 by this
00:39:15.720 email
00:39:17.220 so we can just add that
00:39:19.500 and then after the user is found then we
00:39:22.440 can just compare the password of the
00:39:24.000 user and because the email is now
00:39:26.099 verified the user is there in the
00:39:28.020 database and then we can just compare
00:39:29.880 the password so we have a method inside
00:39:32.400 the big grip to compare the password
00:39:34.079 because we are storing the hashed
00:39:35.579 password so it will be the const as the
00:39:38.400 is password
00:39:40.079 correct
00:39:43.020 so it will be a Boolean function so it
00:39:45.240 will return a Boolean value so we can
00:39:47.040 just use the decrypt dot compare sync
00:39:50.400 and it will just synchronously compare
00:39:52.260 the password so we can just use that so
00:39:54.480 it will be the string that the password
00:39:56.760 and here we can pass the string which
00:39:58.920 will contain the string which we are
00:40:00.540 just sending it will the password and
00:40:02.820 then we need to just add here the
00:40:04.320 compare also and the second parameter
00:40:06.240 will contain the actual password that we
00:40:07.980 need to compare with so it will be the
00:40:10.079 existing user that we have just fetched
00:40:11.880 from the database it will existing user
00:40:14.400 dot password so we will just compare the
00:40:17.339 current password which we have just
00:40:18.780 received with the existing password so
00:40:21.240 we can just add a validation again like
00:40:23.460 if the is password correct is not true
00:40:27.000 then we can just set if it is a falsy
00:40:29.280 value then we can just return
00:40:31.320 the response dot status again until the
00:40:34.619 400 as the unauthorized and then we can
00:40:36.900 just add a Json and then the Json will
00:40:39.540 contain a message
00:40:41.040 that incorrect
00:40:43.560 password
00:40:45.660 and then if the password is correct then
00:40:47.339 we can just return the response dot
00:40:49.020 status again
00:40:50.160 it will be the 200 which is okay and
00:40:52.020 then we can just send the Json message
00:40:53.520 again and it will contain a message as
00:40:56.400 the
00:40:57.780 is logged in equals to the true or we
00:41:00.300 can just Define here only the message
00:41:02.640 here as the login successful
00:41:07.320 so now we are sending this request and
00:41:09.480 then the function is complete and then
00:41:11.700 we can just return here the function
00:41:13.920 like now we need to just move on to the
00:41:16.619 const login and then we need to just
00:41:18.540 export this login function from there
00:41:20.280 and now everything is fine I think and
00:41:22.740 then we can just move on to the user
00:41:24.300 routes and then we can just get the
00:41:26.280 login function from there and if I will
00:41:28.740 now save and now I think the terminal is
00:41:30.839 stopped so we can just select the new
00:41:32.160 terminal
00:41:33.780 move on to the backend folder at the npm
00:41:36.720 start command and now everything will be
00:41:38.700 fine
00:41:41.040 and then we can just move on to the
00:41:42.839 postman and then we can just close this
00:41:46.260 chrome also so in the postman now we can
00:41:48.720 just create a login so we can just grab
00:41:50.940 this URL
00:41:52.320 and then we can just move on to the new
00:41:54.540 tab and then we can just select in post
00:41:56.460 and then the URL with the login
00:41:59.400 and then we can just grab the email and
00:42:02.040 the password fields from there so we can
00:42:04.200 just grab that
00:42:09.000 we need to move on to the body in the
00:42:11.099 raw in the text instead of the text we
00:42:13.380 need to add the Json and then it will
00:42:15.240 contain a Json and then we are sending
00:42:16.980 the email as the james.com and the
00:42:19.859 password is there a triple one triple
00:42:21.300 one so if the password with the hashed
00:42:23.400 password is correct then we will just
00:42:25.140 see the message as the login successful
00:42:27.240 I think the application is now crashed
00:42:29.940 so there is an error
00:42:31.680 so error event on This Server instance
00:42:34.020 so I think there is an error
00:42:36.839 so we can just restart the application
00:42:38.640 from there
00:42:40.980 and now the application is started again
00:42:42.599 and now we are most request and then we
00:42:44.640 can just create the request by clicking
00:42:47.220 on the send button now you can see we
00:42:48.839 have a message as a login successful so
00:42:51.240 now everything is working fine on the
00:42:53.400 user's end so now the user's
00:42:55.320 functionality is completed and now we
00:42:56.760 need to build the block functionality
00:42:58.140 and for building the block we can just
00:43:00.119 move on to the model we can just create
00:43:02.400 a new model as the block dot JS and it
00:43:05.579 will be the block model now and now
00:43:07.319 everything is working fine as of now so
00:43:09.119 we can just create the model again we
00:43:11.220 need to import the mongoose
00:43:13.020 from the Mongoose we can just create the
00:43:15.780 schema of the collection of the block so
00:43:19.079 we can just have the schema class
00:43:22.200 equals to the Mongoose dot schema and
00:43:25.800 then we can just create a new variable
00:43:27.300 define a new instance of the schema so
00:43:29.640 we can just use the U const as the block
00:43:31.440 schema
00:43:32.940 will be equals to the new schema
00:43:36.060 and then it will contain an object again
00:43:38.099 and now the and now we need to define
00:43:39.660 the fields which will contain in the
00:43:41.280 block schema so it should contain the
00:43:43.319 title of the block so the title can be
00:43:45.599 an object the type
00:43:47.339 can be the string
00:43:50.400 and then it will contain the required
00:43:52.200 field also which will be the true
00:43:54.900 and it will contain the I think it will
00:43:57.180 contain the description as well so we
00:43:58.740 can just copy the title
00:44:00.839 and then it will be the description
00:44:02.280 after that
00:44:04.200 the description
00:44:07.619 it will be the string and the required
00:44:09.180 field will also be true and then it will
00:44:11.040 contain the image like it will the image
00:44:13.680 and this will also be the type of this
00:44:15.780 string and the required path will be
00:44:17.339 close to the true
00:44:19.319 so the image will be type of the string
00:44:21.240 because it will be the type of the URL
00:44:23.099 and then we need to define a which user
00:44:25.380 has posted so we can Define here the
00:44:27.599 user and then it will contain the user
00:44:30.480 and then we need to Define here the user
00:44:32.400 like type will be equals to this string
00:44:34.500 as of now because as of now we haven't
00:44:36.900 defined the block inside the user's
00:44:39.420 model as well so we have to Define there
00:44:41.160 as well so the user will contain the
00:44:43.140 type as the string and it will also be
00:44:45.359 the required field as it true and now
00:44:47.940 everything should work fine and then we
00:44:49.619 can just export this as the export at
00:44:52.380 the default and then into the mongoose
00:44:54.839 dot model again
00:44:56.579 and that will contain the block and then
00:44:59.280 it will contain the schema of the blocks
00:45:01.319 the block schema so now everything
00:45:03.660 should work fine and then we can just
00:45:05.760 create a new routes after that so it
00:45:07.859 will the block Dash routes
00:45:10.859 dot JS so it will contain the routes of
00:45:13.440 the blocks so we can just import the
00:45:14.880 express again
00:45:17.099 from the express.js
00:45:20.040 and then we can just have here the
00:45:21.839 router from the express cons router
00:45:24.780 will be equals to
00:45:27.060 the Express dot router
00:45:32.280 and then we can just grab the router
00:45:34.079 from there and then we need to use here
00:45:36.119 the functions from the router like if
00:45:38.460 the first it will contain the get as
00:45:40.200 always and then it will just get all of
00:45:42.300 the blocks so for that it will be only
00:45:44.400 the main route slash and then it will
00:45:46.560 get all blocks
00:45:49.020 so we can just create that function and
00:45:51.300 for creating the function then we need
00:45:52.859 to move on to the controllers we can
00:45:54.960 just create a controller as a block
00:45:57.000 cache controller
00:45:58.859 dot JS now we have created the blocked
00:46:01.500 controller and then we can just import
00:46:02.880 the blocks collection so it will import
00:46:05.180 as a block from the model slash block
00:46:09.359 and then we can just create a new
00:46:11.099 function as the cons as you get all
00:46:12.960 blocks will be equals to an async
00:46:15.540 function again
00:46:16.800 request response and the next as the
00:46:19.500 parameters again
00:46:21.300 and it will be an arrow function and
00:46:23.280 then for the get all blocks now we can
00:46:25.020 define a variable as if blocks by
00:46:26.819 default it will be undefined so we can
00:46:28.560 just use try catch as always
00:46:32.579 the try catch is here and then we are
00:46:34.800 now returning the console Dot Lock
00:46:39.300 as the error if we will receive an error
00:46:41.520 and then we can just get the blocks
00:46:45.420 will be equals to the I think it will
00:46:47.579 block dot it will be the find so as we
00:46:51.060 have found all of the users then we can
00:46:53.160 just Define the find with the empty
00:46:54.780 query and it will find all of the record
00:46:56.700 from that query and if we can see if the
00:46:59.400 blocks is the empty value or it will be
00:47:01.859 or if it is a falsy value then we can
00:47:04.380 just return
00:47:07.079 the response dot status again
00:47:10.440 it will be the 404 dot Json it will be
00:47:14.040 the message
00:47:15.599 as you know blocks found
00:47:20.160 and then we can just add here the
00:47:22.560 response as the return
00:47:25.140 as the response dot status so if
00:47:27.180 everything is okay then we can just send
00:47:28.740 the status as the 200
00:47:30.480 and then we can do the Json again
00:47:33.780 the message will be the blocks and then
00:47:36.000 we can just export that or get all
00:47:38.040 blocks and then we can just use the get
00:47:40.200 all blocks from there inside the
00:47:41.940 function as well so we can just import
00:47:43.920 that route and then now we have created
00:47:46.260 the routes of the blocks and the
00:47:48.240 controller and the model as well of the
00:47:49.920 routes and now we need to use here the
00:47:51.839 middleware in the app.js to use the
00:47:53.520 routes as well so here in the blocked
00:47:55.680 routes now we can just export the router
00:47:57.540 variable the export default and now it
00:48:00.599 should contain the blog router because
00:48:02.099 the name will get conflicts so we can
00:48:04.380 just declare the blog router
00:48:07.079 will be equals to the
00:48:09.480 expression router and instead of this
00:48:11.819 router we can just Define here the block
00:48:13.619 router because it will just have the
00:48:16.440 conflict with the name of the routers
00:48:18.000 which are in the users so to the blog
00:48:20.339 router
00:48:21.960 and then we can use the app.js it will
00:48:24.900 just import the
00:48:26.460 blog routes from there it will the
00:48:28.020 app.use it will be the slash API again
00:48:30.540 that we have just defined from there and
00:48:32.819 instead of this user then it will
00:48:35.040 contain the block so now the API slash
00:48:37.859 block and now we can just Define the
00:48:39.780 blog router from there so blog router
00:48:42.240 will be then imported so if I will now
00:48:43.980 save and if I will now just move on to
00:48:45.900 the postman again send a new request I
00:48:48.480 will now grab this URL again
00:48:51.240 but the URL will now be different so
00:48:53.460 instead of this user login so the block
00:48:55.740 it will slash empty request after there
00:48:58.200 I will now click on the send now we
00:49:00.180 should receive an empty array everything
00:49:01.980 is successful status is 200 because now
00:49:04.440 the blocks is truthy value and now we
00:49:06.900 can just Define a new block by giving a
00:49:09.180 post request to the block so it will be
00:49:11.460 we can just move on to the block routes
00:49:13.319 again
00:49:14.040 so we will just close all of the files
00:49:16.319 as of now and then we can just move on
00:49:18.599 and we can just create a blog as the
00:49:21.000 post request so in the post slash add so
00:49:25.500 it will be the URL and then we can just
00:49:27.060 add a block function
00:49:28.740 then we can just create that function in
00:49:30.900 the user's controller in the blocks
00:49:33.000 controller sorry so to the export as the
00:49:36.420 it will be the cost as the name of the
00:49:40.020 function at block will be equals to the
00:49:41.579 async again
00:49:42.720 it will request response and the next as
00:49:46.260 the parameters
00:49:47.579 and then it will contain an arrow
00:49:49.319 function and then we can just grab all
00:49:51.300 of the details from the requested body
00:49:52.859 again like title
00:49:57.420 get to the description
00:50:00.119 it will be the image URL regular image
00:50:02.700 and then we can just grab the user and
00:50:05.040 it will be all coming from the request
00:50:06.780 dot body
00:50:11.099 so we can just Define a new blog
00:50:12.960 instance so to the block will be close
00:50:15.000 to the I think that will be the new
00:50:16.920 block
00:50:18.180 and now we need to import the block from
00:50:20.040 there so we need to just import the blog
00:50:21.900 as well so now we have imported the
00:50:23.700 block and then we need to just create a
00:50:25.319 new instance of this block now like it
00:50:27.359 will contain the title of the block the
00:50:29.940 description of the block
00:50:32.640 it will contain the image of the block
00:50:34.619 and then the user so all of the things
00:50:37.380 will be then there and now we can just
00:50:39.060 save this record inside the try catch
00:50:40.980 block so it will contain the try it will
00:50:43.980 be a block as the it will be the block
00:50:47.280 that we have just created an instance
00:50:49.319 dot save so now we are using the same
00:50:51.960 function this save again and then once
00:50:54.660 we will get an error we will return
00:50:56.220 console
00:50:57.660 DOT log b error and and then we can just
00:51:01.440 add a response at the return
00:51:05.160 the response dot status again
00:51:08.700 will be equals to I think it will be the
00:51:10.980 of 200 but again the Json
00:51:14.520 it will contain an object like it will
00:51:16.980 be the new block that we have just
00:51:18.359 created and now we have now defined
00:51:20.400 everything but now here we need to
00:51:21.839 define the await as well because it is
00:51:23.760 an HTTP task so it should be the weight
00:51:25.619 and then we are sending the ad block
00:51:27.359 function but this is a simple function
00:51:29.400 as of now but it will get complex
00:51:31.680 whenever we will add the relation
00:51:33.420 between the users and the blocks so we
00:51:35.940 can just now save
00:51:37.319 and then if we can see if there is any
00:51:39.300 error so I think there is any error and
00:51:42.059 the error is because in the blog routes
00:51:44.160 so we can just import the ad block from
00:51:45.960 there
00:51:47.220 so now we can save everything should
00:51:49.380 work fine
00:51:51.240 and then we can just create a new
00:51:52.800 request from there so we can just copy
00:51:54.839 the URLs select a new URL select a new
00:51:58.260 tab here the API search block slash add
00:52:01.319 and then it will be the post type of
00:52:03.480 request to the Post
00:52:05.160 it will contain the body as a raw again
00:52:07.920 instead of this text we can use a Json
00:52:10.020 and then it will contain all of the
00:52:11.819 fields so now we need to define the
00:52:13.079 title
00:52:14.880 will be equals to my new block
00:52:19.200 and it will the description
00:52:21.900 description will contain the description
00:52:23.940 like this
00:52:25.680 is my first block
00:52:28.740 and then it will contain the image the
00:52:31.500 image URL now the image URL now will
00:52:34.319 contain sample strings then we can just
00:52:36.480 Define a user as well so to the user the
00:52:38.940 user will contain the string like it can
00:52:40.680 contain the one two three four five so
00:52:42.660 if I will now save and now if I will now
00:52:44.640 just create the send request
00:52:46.319 so now everything should work fine now
00:52:48.240 you can see now we have defined the
00:52:49.500 block the title equals to the my new
00:52:51.240 block the description is same the image
00:52:53.640 URL is now the only the sample URL
00:52:56.339 because it will not be the URL whenever
00:52:58.500 we'll move on to the front end and then
00:53:00.599 it contains a user as the one two three
00:53:02.280 five and it contains an ID so now
00:53:04.559 everything is working fine now we need
00:53:06.119 to create the update and the delete
00:53:07.319 request from there as well so it will be
00:53:09.839 the router blog router again dot it will
00:53:12.780 be the update and it will the put
00:53:15.599 request because the put request is used
00:53:17.339 to update the user and then we can just
00:53:19.500 use here this slash it will do the
00:53:21.780 update block
00:53:24.180 and then we can just add here a function
00:53:26.400 after that so we can just move on to the
00:53:28.140 block controller select a new function
00:53:30.000 as the update so it will be the export
00:53:33.660 const it will be the update
00:53:36.839 block
00:53:39.359 will be equals to again the asynchronous
00:53:41.339 task again it will contain the request
00:53:43.260 response and the next
00:53:46.140 as the parameters and then it will
00:53:48.300 contain all of the things and now we are
00:53:50.520 now defining the update block now we
00:53:52.079 need to find the block and to find the
00:53:54.480 block now we need to add something to
00:53:56.280 the block route so now we can just move
00:53:58.079 on to the update and then we need to get
00:54:00.119 the ID also of the block to update and
00:54:02.520 now after this it will contain an ID so
00:54:04.980 we can just give a parameter in the URLs
00:54:07.500 so it will contain the ID so we can just
00:54:09.900 grab the ID from this route after there
00:54:12.420 so now it will contain after the update
00:54:14.579 we need to provide the ID from the
00:54:16.260 mongodb and now we can just grab the ID
00:54:18.720 from the request.parents and the
00:54:20.460 request.params contain all of the
00:54:22.200 variables which we have defined in the
00:54:23.640 parameters and then we need to grab the
00:54:25.680 variable that we have defined like it
00:54:27.780 will be the cost as the blog ID
00:54:30.780 will be equals to the quest Dot params
00:54:33.900 object dot the name of the variable that
00:54:36.900 we have just defined so it is the ID and
00:54:39.059 if you will just Define it as a bid then
00:54:41.220 you can just Define as a bid from there
00:54:43.079 and then now everything should work fine
00:54:45.059 and now we have the ID so we can just
00:54:47.099 create a new block as the const block
00:54:50.099 and it will be equals to the await
00:54:52.380 because it is an asynchronous task and
00:54:54.720 then we can just find the block so we
00:54:56.940 can just find the block from the block
00:54:59.480 dot find by ID and then we have sub
00:55:02.640 function of the find by ID and update
00:55:04.500 and this function needs two parameters
00:55:07.079 first it will contain an ID
00:55:09.059 so we can just Define the block ID that
00:55:11.220 we have just received and then we can
00:55:13.200 just add the update query so like now
00:55:15.960 the update Fields will only contain the
00:55:18.180 title and the description so now in our
00:55:20.760 in the structure of our application so
00:55:22.619 we can just only update the title and
00:55:24.300 the description of our blog so we can
00:55:26.700 just grab the title and the description
00:55:29.700 from the request.body
00:55:34.800 and then it will contain from the
00:55:36.480 request.body and then we can just add
00:55:38.099 the title
00:55:40.920 will be equals to the title that we have
00:55:43.079 just received and it will the
00:55:44.220 description
00:55:45.660 so now we are defining the title and the
00:55:47.700 description and now we have defined the
00:55:49.380 block so now we need to use it inside
00:55:51.119 the try catch block so we can just
00:55:52.980 Define a variable as a block as the
00:55:55.079 empty and then we can just remove the
00:55:56.819 cost and then we can just add the try
00:55:58.740 catch block
00:56:00.660 and then it will be the block equals to
00:56:02.640 the away description till there and then
00:56:04.920 we can just use the cache also
00:56:07.380 error to return the error
00:56:12.720 foreign
00:56:15.380 so we can just add a validation like if
00:56:18.420 the block doesn't save or if it is a
00:56:20.700 falsy value then we can just return
00:56:22.500 again
00:56:23.940 that response dot status will be equals
00:56:26.400 to the 500 added to the Json
00:56:30.720 Json will contain a message
00:56:33.180 and it will be like the enable
00:56:35.940 to update
00:56:38.280 sub block
00:56:39.900 this will be the message and if
00:56:41.400 everything will work fine then we can
00:56:42.900 just return again response dot status
00:56:45.900 will be equals to the 200 which is
00:56:48.780 success and then we can just send the
00:56:51.180 block that we have just created Now by
00:56:53.460 using the Json with the block so it will
00:56:55.380 just provide us the same description and
00:56:57.240 the title which was already available in
00:56:59.099 the block because it will send the
00:57:01.020 request immediately and it will just
00:57:02.520 send the return statement immediately to
00:57:04.319 the server so now we can just save and
00:57:07.260 now we are now already exporting the
00:57:08.880 update block and then we need to use the
00:57:10.559 update blog here
00:57:11.819 like it will be update block
00:57:16.020 so now the update block is here so now
00:57:17.819 everything should work fine and now we
00:57:19.800 can just move on to the postman we can
00:57:21.480 just create a new route and it will be a
00:57:23.760 put request we can just use here the put
00:57:25.559 instead of this get and then we can just
00:57:28.559 move on and then we can just get the
00:57:30.300 title in the description
00:57:33.420 so we can just grab everything from
00:57:35.280 there we can just select the body select
00:57:38.280 here the Raw
00:57:39.780 select here the Json from there and then
00:57:42.359 we can just add a Json here and then we
00:57:44.280 can just remove the image and the user
00:57:46.260 from there and now the title will
00:57:48.180 contain my new it's instead it will
00:57:50.819 contain and update it block and then
00:57:53.819 this is my first updated block
00:57:57.059 if I will now just send the request now
00:57:58.980 we should see if everything should work
00:58:00.480 fine now you can see now it is a type of
00:58:03.119 request and now we need to grab the ID
00:58:04.859 also from there so we haven't specified
00:58:06.900 the ID so for the ID we can just specify
00:58:09.359 this ID which we have just received by
00:58:11.339 creating the post request so we can just
00:58:13.380 move on to the put again we can just
00:58:15.420 grab this ID we can just add the ID in
00:58:17.460 the URL so now it will just get the ID
00:58:19.740 from there and then it will just send
00:58:21.300 the request to fetch by ID and then
00:58:23.160 update the details of the block so now
00:58:25.680 this will not be the ADD and this will
00:58:27.780 be now the update
00:58:29.520 we can just click on this end so now
00:58:31.380 everything should work fine now you can
00:58:33.359 see it will be updated because this data
00:58:35.700 is the 200 and now as we have discussed
00:58:37.619 earlier it will be just sharing us the
00:58:40.140 same blog which was available in the
00:58:41.760 database so we can just move on to the
00:58:43.380 get again so if I will now just click
00:58:45.660 the request now you can see it will be
00:58:47.819 the updated block because now it is
00:58:49.740 sending the request immediately so it is
00:58:51.839 not stopping us to save a record and
00:58:54.599 everything is now clear and now we can
00:58:56.880 just create a new request at the blog
00:58:58.799 router
00:58:59.819 dot it will the get so we can just
00:59:01.799 create a get request to just get a block
00:59:03.900 from this ID so we can just add a blank
00:59:06.359 URL dot ID and then we can just get a
00:59:09.299 great by ID
00:59:11.880 and then we can just create a function
00:59:13.680 as you get by ID from there as well so
00:59:15.960 it will export
00:59:17.280 const as you get by ID
00:59:22.140 and it will be equals to again the async
00:59:24.240 function it will contain the requests
00:59:26.280 response and the next are the parameters
00:59:29.400 and then we will grab the ID from the
00:59:31.339 request.params that will the ID will be
00:59:34.079 because we request Dot params.id
00:59:38.760 and then we will grab the block from
00:59:40.980 there that will be the Black Block will
00:59:43.319 be the undefined we can just use the try
00:59:45.299 again
00:59:47.099 try cash block it will contain an error
00:59:49.859 and then we will just return the
00:59:51.900 console.log the error
00:59:54.420 and then inside the try we can just
00:59:56.099 create a block
00:59:57.780 will be equals to the block model that
00:59:59.640 we have created Dot
01:00:02.339 find by ID so it will just find the
01:00:04.920 block by its ID and it will return that
01:00:07.079 block from this ID so we can just Define
01:00:08.940 here the ID find by ID and then we can
01:00:12.000 just add here the await also
01:00:14.640 because it is an HTTP task and then we
01:00:17.819 can just check validation like if we
01:00:19.440 don't have the block
01:00:21.599 and then we can just return the response
01:00:24.540 dot status again dotted with the
01:00:26.819 404.json
01:00:29.460 message will contain that no block found
01:00:34.799 and then after that we can just return
01:00:36.839 your new statement as a return response
01:00:39.119 dot status will now be 100 and then we
01:00:42.359 can just send you the Json
01:00:43.980 as the block so we will just send the
01:00:46.619 block from there and now if I will now
01:00:48.720 save and if I will not just move on to
01:00:50.220 the blog routes import the get by ID
01:00:52.020 block so now this block will contain a
01:00:54.540 same URL slash ID and then we will just
01:00:57.299 get the blocks from its ID so if I will
01:00:59.700 now save and if I will now just create a
01:01:01.859 new block from there
01:01:03.839 and then if I will now just create a
01:01:05.520 post request again now we will have the
01:01:07.859 two blocks in the database like there
01:01:09.960 and if I will now just grab the ID of
01:01:11.880 the second block let's create a new
01:01:13.500 request from there like it will be the
01:01:15.599 get request again
01:01:16.980 from the block or we can just provide
01:01:19.440 here the ID here the ID on the send
01:01:22.020 request and then you can see it will
01:01:24.780 show us my second new block so now
01:01:26.760 everything is working fine as of now now
01:01:28.859 we can get the block from its ID and we
01:01:31.140 can just update the block from their ID
01:01:33.000 and then we can just delete the block
01:01:34.859 from this ID as well so we can just
01:01:36.720 create a new request at the blog
01:01:38.760 router.delete it with the delete request
01:01:41.099 and then we will just grab the ID from
01:01:43.140 the delete so we will grab the ID and
01:01:45.180 then we will just create a controller
01:01:46.680 function to delete a block and then we
01:01:49.619 can just create a new controller
01:01:50.819 function as the export
01:01:52.799 const as it delete
01:01:55.079 block and it will be again the async
01:01:59.220 and then request response and the next
01:02:03.180 and then it will contain an arrow
01:02:04.740 function and then we will just grab the
01:02:06.420 ID again from the URL the ID will be
01:02:09.119 equals to the request dot param subject
01:02:11.760 dot ID field and then we can just create
01:02:14.520 a new blog as a block there and then we
01:02:17.520 can just add the try catch block once
01:02:19.200 again it will be the block will be
01:02:21.540 equals to now we have a function again
01:02:23.760 it will be the await it will be the
01:02:25.619 block dot find by ID and remove so we
01:02:29.400 can just use this function to find by ID
01:02:31.260 so it will just find the block by its ID
01:02:33.780 and it will remove it from the database
01:02:36.000 so we can just use that find by ID and
01:02:38.339 remove we can just pass here the ID
01:02:40.260 which we have received
01:02:42.119 and it will just await for that and if
01:02:44.220 you just delete it then we can just use
01:02:46.380 the error we can just console.log the
01:02:48.299 error again
01:02:49.380 and now we can just use here if the
01:02:51.960 block is the falsy value once again
01:02:56.220 we can again just return the response
01:02:58.680 dot status dot it will do the 400 and
01:03:02.220 then we can just send a new request to
01:03:03.960 the Json
01:03:04.920 and then we can just add here the
01:03:06.900 message
01:03:08.819 again as you unable to delete
01:03:14.640 and then I think it should be the 500
01:03:19.559 and now if everything is correct then we
01:03:21.839 can just return
01:03:23.839 response dot status
01:03:26.099 it will be equals to the 200 success and
01:03:28.859 Dot Json
01:03:30.119 it will just send a message again
01:03:33.780 as this string and it will contain the
01:03:35.940 successfully
01:03:37.740 delete it
01:03:39.059 if I will now save and now we have just
01:03:41.099 exported the delete block also and then
01:03:43.440 we can just import the delete block from
01:03:45.420 there as well we can just save and then
01:03:47.700 we can just try again
01:03:51.299 everything is working fine and then we
01:03:53.339 can just create a delete request after
01:03:55.319 there so the request will be there like
01:03:58.140 this ID is there
01:04:00.480 so we can just grab this and then we can
01:04:02.460 just add a delete request there
01:04:04.380 so it will be the same ID and then we
01:04:06.359 can just add here as a delete and then
01:04:08.819 the update will not be there
01:04:11.640 and if I will now just send the request
01:04:13.500 by deleting it send in your request I
01:04:16.559 think there is an error
01:04:18.660 and the error is because we haven't
01:04:20.280 specified the ID there so it should be
01:04:22.559 the call on ID to declare a variable and
01:04:24.960 if I will now save and if I will not
01:04:26.460 just try again click on the send request
01:04:28.920 again now you can see the successfully
01:04:31.260 deleted now the blog is successfully
01:04:32.940 deleted and once I will just grab this
01:04:36.599 block from its ID click on the get
01:04:39.059 request block so if I will now just give
01:04:41.220 this ID to is so now we can see that the
01:04:43.799 no block found from this ID so now
01:04:45.960 everything is working fine from the
01:04:48.000 users and from the blocks perspective
01:04:49.859 and now the thing which is remaining is
01:04:52.680 a relation now we need to relate the
01:04:55.260 user with the blocks and the blocks with
01:04:57.660 the user to do this now we have one
01:05:00.420 thing inside the Mongoose so we can just
01:05:02.220 provide the reference to the collection
01:05:04.260 of the blocks from the users and vice
01:05:07.079 versa from the blocks to the users as
01:05:09.180 well so we need to move on to the I
01:05:11.460 think the block and then we can just
01:05:13.380 provide the reference to the user so we
01:05:15.660 have defined it as a user so it will not
01:05:17.940 be the type of this string it will be
01:05:19.980 type of the Mongoose dot we have the
01:05:22.559 types namespace and then we can just
01:05:25.140 have here the object ID so we have the
01:05:27.599 ID of the user from there and then we
01:05:29.460 can just specify the object ID from
01:05:31.559 there and after this we need to specify
01:05:34.200 one more thing we need to specify a
01:05:36.119 reference so the ref is used to provide
01:05:39.000 a reference and then it will just
01:05:40.859 provide a reference inside the string so
01:05:43.260 we need to define the collection name so
01:05:45.480 the collection name that we have just
01:05:47.339 created the model it will be the user so
01:05:49.680 it will just Store The Collection as the
01:05:51.299 user so now we have defined the user as
01:05:53.700 a type because of the Mongoose DOT type
01:05:55.619 of object ID and we have specified the
01:05:58.020 reference of the U user and now the
01:06:00.359 thing is that each block will contain
01:06:02.460 only one single user so each block will
01:06:05.579 now they have the parent of the one
01:06:07.260 single user but each user can have the
01:06:10.859 multiple blocks so here we are only
01:06:12.839 defining only the single user per single
01:06:15.240 block but when we will move on to the
01:06:17.880 users now we can Define here the blocks
01:06:20.579 field it will the blocks
01:06:23.339 but it will be an array because the
01:06:26.039 users can have multiple blocks inside
01:06:27.960 that and array will contain an object it
01:06:30.960 will be the type and the type will be
01:06:33.180 same as the mongoose
01:06:36.079 DOT type schema dot object ID so we can
01:06:39.900 just define object ID again and then we
01:06:42.359 can just Define a reference also it will
01:06:44.579 contain the reference to the block the
01:06:47.339 block is a collection and it will just
01:06:49.200 contain the reference and then it will
01:06:51.359 be the required Fields also it will be
01:06:53.760 required
01:06:56.579 it will the true so now everything
01:06:58.559 should work fine as before but now we
01:07:01.799 need to change few things now we need to
01:07:03.780 move on to the user's controller and
01:07:06.000 once we are creating a new user like in
01:07:07.980 this sign up it will be having a blocks
01:07:10.260 because now we have now defined the
01:07:11.880 required field of the block so it will
01:07:13.619 just have some blocks inside that so
01:07:15.780 once we are defining the user as the
01:07:17.520 name and the password then we can just
01:07:19.559 Define here the blocks will be equals to
01:07:21.839 an empty array so it will just store the
01:07:24.240 blocks as an empty array so if I will
01:07:26.520 now save and if I will not just move on
01:07:28.319 to the sign up request of the user it
01:07:31.440 will be like this now we have the sign
01:07:33.119 up request and then we can just create
01:07:34.980 together as a nickel
01:07:37.260 it will contain the email as a nickel
01:07:40.799 at the redtest.com the password is the
01:07:42.900 one one one one one one but if I will
01:07:45.119 now click on this send now we would see
01:07:47.220 two things now you can see now we have
01:07:49.440 the name as the nickel the email as this
01:07:51.660 the password is the hashed now we have
01:07:53.700 the blocks field and now everything is
01:07:56.099 working fine because now we have the
01:07:57.660 blocks field there and because now this
01:07:59.880 is only a sign up request so we have
01:08:01.440 just empty blocks array so now
01:08:03.059 everything is working fine inside the
01:08:04.920 users and now the users is completed and
01:08:07.440 now we need to move on to the blocks so
01:08:09.599 we have the blocks controller and then
01:08:11.760 once we are creating a new ad block now
01:08:14.220 we need to add the user as well so now
01:08:16.020 this time the user will contain the ID
01:08:18.600 so before everything by creating the ad
01:08:21.000 block now we can just create a
01:08:23.279 validation we can just create a existing
01:08:25.198 user again like that existing user is
01:08:27.839 available or Not by default it will be
01:08:29.520 undefined so we can just add a try catch
01:08:31.259 block again
01:08:33.600 and then it will be having existing user
01:08:36.479 will be equals to
01:08:39.719 will be equals to the update again the
01:08:42.120 input the user dot find by ID so we will
01:08:45.779 just add here the user.find by ID
01:08:48.600 I think the user is not imported so we
01:08:50.819 need to import the user as well because
01:08:52.319 now we have relation between the two
01:08:53.939 documents so we can just add the user
01:08:55.859 dot find by ID and then we have to grab
01:08:58.738 the ID of the user and now the user will
01:09:01.500 contain the ID so now this user field
01:09:03.839 will contain the actual ID of the user
01:09:06.120 and now we have defined the user and now
01:09:08.698 we can add a cache block also
01:09:11.880 to specify an error and just return the
01:09:14.219 console
01:09:15.479 Dot Lock the error
01:09:18.120 and then now if the existing user is
01:09:20.460 true then we can just verify that like
01:09:22.799 if if the existing user is like the
01:09:25.439 falsy value
01:09:26.580 and then we will just run the return and
01:09:28.679 the response dot status
01:09:30.839 and it will be the 500 or you'll add the
01:09:33.179 400 unauthorized dot Json will contain a
01:09:36.540 message again message will be the like
01:09:39.420 the enable
01:09:40.859 2
01:09:42.420 find user
01:09:44.880 by
01:09:46.979 this ID
01:09:48.779 we can just send this validation message
01:09:50.819 and if everything is working fine then
01:09:53.040 we can just create a new blog as the
01:09:55.020 block and now we are already saving the
01:09:57.300 block but now instead of directly saving
01:10:00.000 the block now we need to add the block
01:10:01.739 to the users as well and for that now we
01:10:05.340 can just remove that await and now we
01:10:07.860 can just add some session from there so
01:10:10.199 for that now we can just Define here
01:10:11.760 this session
01:10:13.380 and it will be equals to the await
01:10:16.199 again as the Mongoose that we have the
01:10:18.239 session in the Mongoose dot start
01:10:20.460 session there
01:10:21.840 so we can use that so it will just start
01:10:24.000 a session and then we will just do every
01:10:26.880 single thing from this session and then
01:10:28.500 we will just about this session so then
01:10:31.380 we can just have a session variable and
01:10:33.600 then we'll be having a start transaction
01:10:35.480 so we will just start the transaction
01:10:37.679 from there and then we will just first
01:10:40.080 we will just save the block so to the
01:10:43.199 block that we have
01:10:46.500 dot save so it will just save this block
01:10:50.219 from calling the save function from
01:10:52.199 there and then we will just use the
01:10:54.600 existing user that we have so the
01:10:56.699 existing user now we need to push to the
01:10:59.100 array of the existing user always so it
01:11:01.620 will existing user dot blocks that we
01:11:05.580 have and Dot push
01:11:09.000 so so this user will contain the
01:11:11.100 existing user so the existing user will
01:11:13.080 contain from the user that we are just
01:11:14.760 finding and and it will just push the
01:11:16.980 block to this array like it will be the
01:11:19.260 block and then we are referring to the
01:11:20.880 block and then we can just save also and
01:11:23.940 then we can save also from there it will
01:11:26.400 be I think of it again
01:11:28.560 await from there it will existing user
01:11:31.080 again dot save so it will just save but
01:11:34.199 now we need to add a session because now
01:11:36.659 we are saving the user and now we need
01:11:38.520 to add this session always so it will
01:11:40.500 the session and here also we need to
01:11:42.179 define the session because now we need
01:11:43.980 to save the user from this session only
01:11:46.320 from this session object only so we need
01:11:48.600 to Define this session
01:11:51.179 there as well and there as well so we
01:11:53.280 are now defining the sessions as a key
01:11:54.780 value pairs again and then if everything
01:11:57.000 would work fine then we can just use a
01:11:59.520 weight as well it will the session
01:12:01.880 dot commit transaction so now if
01:12:04.800 everything would work fine then we can
01:12:06.480 just use the commit so now after this
01:12:08.880 transaction would be committed so now
01:12:11.280 this is a whole complex thing because
01:12:13.140 now we are declaring a session because
01:12:15.179 the sessions contain the start session
01:12:16.860 then we are now defining a transaction
01:12:19.140 and then we are now saving the block
01:12:20.699 from this from the same session that we
01:12:22.679 have just created and then we are now
01:12:24.600 sending the blocks to the existing users
01:12:27.600 array and then we are now up saving that
01:12:29.880 user also that block also and now now we
01:12:32.880 are committing the session if can it
01:12:35.040 contains an error we can just
01:12:36.360 console.log error and then we can just
01:12:38.340 return
01:12:39.239 the response dot status
01:12:42.780 will be equals to the 500 dot we will
01:12:45.600 just send the Json again
01:12:48.540 and it will contain a message let's see
01:12:51.239 error itself that we have just received
01:12:52.800 so it will just send the error and now
01:12:54.900 if everything will be fine now we can
01:12:56.880 just save that
01:12:58.500 I think we are now declaring the
01:13:00.239 existing user finding the user by its ID
01:13:02.760 if error we are now logging the error if
01:13:05.580 no user then we are sending the message
01:13:07.440 and then we are now defining the new
01:13:09.360 user as a new block and then we are
01:13:11.820 defining a session to save the block
01:13:14.280 start the transaction and then save the
01:13:17.100 block and save the array and then push
01:13:19.920 to the array of the user and then we are
01:13:21.960 saving the users array as well and then
01:13:24.239 we are committing the transaction so if
01:13:25.860 everything would work fine now we can
01:13:27.420 just save
01:13:28.440 and we can just try it out again we can
01:13:31.320 just move on to the post request again
01:13:32.940 of the blocks so it will be the post
01:13:34.860 registrative request of the block it
01:13:36.900 will be the ADD and now we need to
01:13:38.400 define the main user that we have so we
01:13:40.320 can just use the get users get all the
01:13:42.300 users from there but now you can see we
01:13:45.719 have now all of the users from there and
01:13:47.460 then we can just use here this ID so it
01:13:50.100 will be the James user we will get the
01:13:51.719 ID of the James and then we will just
01:13:53.640 use this ID instead of this one two
01:13:56.040 three four five which is a sample so if
01:13:58.860 I will not just save and if I will know
01:14:01.500 just click on the send
01:14:05.159 now you can see now once we are sending
01:14:07.440 the request now you can see now it
01:14:09.120 contains a block but now it contains a
01:14:11.520 title as the my second new block the
01:14:13.739 image will be the sample image but now
01:14:15.900 it contains the user's field as well and
01:14:18.239 the ID of the block that we have just
01:14:19.860 created but if you will just move on to
01:14:22.140 the get users again click on the send
01:14:25.100 once you will just move on to the James
01:14:27.179 now you can see the James has the blocks
01:14:29.640 array and it contains a ID of the block
01:14:32.760 so now you can see it is now related and
01:14:35.400 now this ID contains in the end it
01:14:37.260 contains a double F and then we can just
01:14:39.120 move on to the post request again it
01:14:41.219 will be the double F so now you can see
01:14:42.900 everything is now related and now
01:14:45.000 everything is working fine properly
01:14:47.400 and then now we can just save that user
01:14:50.040 also from this update block and in the
01:14:52.560 update blog I think everything would
01:14:54.360 work same as before because we are now
01:14:56.280 just updating the block but now the next
01:14:58.500 complex thing is now we need to delete
01:15:00.000 the block so for deleting the block the
01:15:02.460 block will be deleted from the blocks
01:15:04.140 collection but we need to remove the
01:15:06.120 array we need to remove the block from
01:15:08.280 the user's array as well so we can just
01:15:10.920 again get the block from the ID so we
01:15:14.580 can just get the block from his ID we
01:15:16.320 are now removing the block from its ID
01:15:18.659 and then we are now returning the status
01:15:20.940 if the block is not found
01:15:22.800 and now we need to do one more thing
01:15:24.540 here now once we are sending the block
01:15:26.460 so then we can use here the populate
01:15:28.860 method to populate something so the
01:15:31.140 populate method will allow us to
01:15:32.760 populate something from this object so
01:15:35.820 we will get the user so it will just
01:15:37.500 move on to the user's collection so
01:15:39.600 populate works for the reference
01:15:41.219 Collections and it will reference to the
01:15:43.380 user and it will just find the details
01:15:45.480 from the users as well so now this block
01:15:47.940 will contain the block and the user's
01:15:50.280 object as well and then we have to do
01:15:52.679 one more thing so it will be the await
01:15:54.600 and then it will be an asynchronous talk
01:15:57.120 so it will await as well and then we
01:15:59.460 need to just remove the ID from the
01:16:01.860 user's blog array so it will be the
01:16:03.900 block that we have just defined and then
01:16:06.300 as we have discussed earlier it will
01:16:07.860 contain the user object and then it will
01:16:10.500 contain the block of the users as the
01:16:12.480 user blocks and then we have a method in
01:16:15.360 the Mongoose which is the pull so we can
01:16:17.400 just use that pull and it will just
01:16:19.020 remove that block from there so we can
01:16:21.120 just pass that block from there so now
01:16:23.880 you can see now we are not defining the
01:16:25.679 block equals to the await and defined by
01:16:27.420 ID and remove and then we are now
01:16:29.520 removing the block from the user's array
01:16:31.620 as well so if I will now save if I will
01:16:35.280 now just try out deleting that block now
01:16:37.739 we can see now we have the delete
01:16:38.880 request and now this block is already
01:16:41.159 deleted so we can just get the block
01:16:42.900 that we have just created so we have
01:16:45.300 just created this block I will grab this
01:16:47.520 ID we can just move on to the delete
01:16:49.380 once again
01:16:50.760 we can just add this URL from that the
01:16:54.000 WF URL once I will click on this send
01:16:56.400 now everything is should work now you
01:16:58.739 can see the message is successfully
01:17:00.179 deleted and once I will get that block
01:17:02.400 from there like it will the James so we
01:17:04.620 can just click on this end
01:17:06.480 now you can see
01:17:08.400 and now the blog is not deleted because
01:17:10.199 we are not saving the user after
01:17:11.940 creating a pull of the user so there
01:17:14.520 after we are creating the pull when we
01:17:16.620 are removing the block from the user
01:17:18.239 then we need to save again between the
01:17:20.340 block dot user dot save again so if I
01:17:24.360 will now save and if I will now just try
01:17:26.100 again so we can just create a new post
01:17:27.840 request of the new block so I will now
01:17:30.300 just add a new block with this user like
01:17:32.520 if I will now just add the user with the
01:17:35.040 double FB so if I will not just send
01:17:37.679 now we should see the success message
01:17:39.719 now you can see the status is 200 which
01:17:42.060 is okay and then if I will now just get
01:17:44.400 the users like 11b it is a Roman if I
01:17:47.340 will now just send the request now you
01:17:48.960 can see this is the new block which we
01:17:50.820 have just created and then now we can
01:17:53.100 just copy this blog ID and then we can
01:17:55.679 just move on to the delete
01:17:57.540 and add this ID here in the URL and
01:18:00.000 click on this send now you can see the
01:18:02.100 successfully deleted and once we will
01:18:04.500 move on to the get again send the new
01:18:06.840 request now you can see the block is now
01:18:09.179 removed from there as well so now the
01:18:11.340 delete request is also completed and now
01:18:13.320 everything is successfully completed and
01:18:15.239 now we are saving the data saving the
01:18:17.040 blocks with the user and then once we
01:18:18.780 are deleting the blocks and then you can
01:18:20.460 see the user's block is also deleted and
01:18:23.159 now everything is completed but one
01:18:24.780 thing is remaining that now we need to
01:18:26.760 create a one more route inside the
01:18:28.260 blocks and that cloud will be getting
01:18:30.600 the blocks of the users so for that we
01:18:33.179 can just create a new get request and
01:18:35.280 inside that we can just create a slash
01:18:37.500 user
01:18:38.460 slash its ID so it will be the slash
01:18:40.860 user ID and then we can create a
01:18:42.540 controller function after that also and
01:18:45.000 for that we can just move on to the
01:18:46.440 blocks controller again
01:18:48.239 and then we can just create a new
01:18:49.920 function as the const will the get by
01:18:52.920 user ID
01:18:55.080 it will be close to the asynchronous
01:18:56.940 again as always request response and the
01:19:00.600 next as the parameters and then we can
01:19:03.060 just create the function and then we can
01:19:05.159 just get the ID first so it will be the
01:19:07.140 user ID
01:19:08.400 will be equals to the request dot params
01:19:10.920 object dot ID as the value and then we
01:19:14.100 can just create a blocks of the user as
01:19:15.960 the user blocks
01:19:17.820 will be the by default it will be
01:19:19.620 undefined and then we can just create
01:19:21.239 again the try catch block
01:19:23.520 so the try catch block will contain the
01:19:25.320 user blocks will be equals to the await
01:19:28.440 and after the update we can just find
01:19:30.000 the blocks of the user from the user
01:19:31.800 model so we can just use the user model
01:19:33.900 again and then we can just find by ID of
01:19:37.080 the user like it will just find the user
01:19:39.840 by its ID by giving the user ID there
01:19:41.820 and then we can use here the one word
01:19:43.980 function and the function there will be
01:19:45.900 the populate so the populate will now be
01:19:48.179 used here
01:19:49.199 and it will just refer to the collection
01:19:51.179 of the blocks and it will just get the
01:19:52.800 data from the blocks so we can just
01:19:54.540 populate the block from there and now it
01:19:57.060 will just give all of the blocks for
01:19:58.739 only this user which have this ID and
01:20:01.140 then we can just add a cache statement
01:20:02.940 after that
01:20:04.440 it will be an error so we can just
01:20:06.239 return console
01:20:08.040 DOT log the error
01:20:10.500 so now everything will be completed and
01:20:12.480 now we can just add some validations
01:20:14.219 again it would be if we don't have the
01:20:16.920 user blocks or if it is a falsy value or
01:20:19.620 like there is some error and then we can
01:20:21.960 just return again it's done response dot
01:20:24.179 status
01:20:25.080 will be equals to the 404 that not found
01:20:28.500 dot Json will be there like message
01:20:33.300 that the no blocks found
01:20:35.940 here and then we can just create here a
01:20:39.420 return
01:20:41.100 then it would be the return
01:20:42.840 as the response dot status so we need to
01:20:45.840 add the status now as the
01:20:48.300 200 that everything is successful and
01:20:50.820 then we can just send a Json message
01:20:52.500 again and this time the Json message
01:20:54.420 will contain the blocks and then it will
01:20:56.820 contain the area of the blocks like we
01:20:58.440 have the user blocks so if I will now
01:21:00.840 save and if I will now just move on and
01:21:03.600 we can just export this
01:21:06.659 and then we can just use this get by
01:21:08.760 user ID inside the blocks routes as well
01:21:11.940 it will be the get
01:21:16.980 get by user ID
01:21:20.600 we can just import that
01:21:23.040 and then we can just save and then we
01:21:24.840 can just try so we can just move on to
01:21:26.820 the postman once again and I will now
01:21:28.980 just create a one more block for a user
01:21:31.380 and then I will just add this ID inside
01:21:34.020 the post so this will be my new block
01:21:36.239 again so the user will be there
01:21:39.239 like it can be the nickels
01:21:41.940 block I will now just save and send the
01:21:44.820 request now the blog will be created and
01:21:47.460 then once we will get the request now
01:21:49.560 you can see nikhil has one more block
01:21:51.719 now nikhil has the block and now we can
01:21:54.000 just get a block by the ID of the nickel
01:21:56.340 so we can just create a new get request
01:21:58.380 so it will be the http
01:22:01.679 so we can just get the URLs there
01:22:03.659 because the URL is almost same so we can
01:22:06.540 just get that and then we can just paste
01:22:08.820 this URL here
01:22:10.739 everything should work fine so instead
01:22:13.020 of this API slash block then we can add
01:22:15.840 there the user
01:22:17.280 slash it will be the ID of the user so
01:22:19.679 we can just copy the ID again
01:22:22.800 we can just get the ID again
01:22:26.040 click on this send now we should see the
01:22:28.440 blocks of the nickel
01:22:32.460 so I think there is an error once again
01:22:34.920 so we can just see the error like cannot
01:22:39.239 populate the path of the block so I
01:22:41.159 think we are we have missed the S after
01:22:43.320 that so we can just move on to the
01:22:44.760 blocks controller once again
01:22:46.440 and then it would be the blocks instead
01:22:49.020 of just a blocks so we can just cancel
01:22:50.880 and then we can just send that request
01:22:52.739 again and now everything should work
01:22:54.900 fine now if I will now send the request
01:22:57.060 now you can see now we are getting the
01:22:58.620 blocks with the ID and the details all
01:23:00.719 of the details of this and now you can
01:23:02.699 see we have the blocks and then we have
01:23:04.679 the array of the blocks you can see we
01:23:06.420 have the array so now everything is
01:23:08.219 completed and now we have completed the
01:23:09.840 back end
