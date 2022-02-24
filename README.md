# Tasks
### 0. Project Proposal

Every great project starts with the design phase. For your application revolving around this theme, create your design documents that lay out what you and your team will build together. You should expect to spend about 1 day or less designing your application before starting on the implementation.

Please store in your git repository a directory named “Design Documents” with the following:

* Writeups of the design
    - What is it your are going to build and how does it fit the theme?
    What tools will you use?
    How long do you expect to spend on development of each part?
    etc.
    API documentation
    Database documentation (UML or similar)
    Wireframes for any implemented UI portions of your application
 
### 1. The Backend

Now that you and your team have a design in place, it is time to start implementing that design. Begin collecting the data you need, set up your database based on your design docs, build an ETL process to populate the database. Even if you (and your users) are manually inputting data into your database instead of collecting data from other sources, you do need to set up a database for this project for your API to interact with.

Once your database is in place and populated with data, it will be time to consider how you build your API to interact with your data. In this project, your API must do the following:

* Authenticate users of your API
* Allow for pagination of data
* Allow for caching of data to reduce hits to your database when possible and improve responsiveness to your users

Your API must also implement one of the following features:

* Queuing systems (for long-running process on your server)
* Web sockets (two-way communication between client and server)

You can have many users for your application, but at a minimum make sure that there is a test user available so that if you do not implement a user-creation process, you (and your reviewer) can test your API with this test user.

### Testing
While building your API, it is highly recommended that you use a tool, like Postman during development. With this tool you can hit your API without needing to write code to see that it is working properly. It is also recommended that you build tests for your API using Postman so that you can ensure that you do not break any of your functionality during development (something which is easy to do when tweaking API endpoints or changing the structure of your database during development). Postman can save you a lot of time and headache here.


 
### 2. The Frontend (A Single-Page Application)

An API is only as good as the user’s ability to use it. For this task, build a small, single-page application that utilizes your API and presents data to your user in a relevant way.

It does not need to be pretty, though that always improves any product - the most important thing is that it is able to use your API to authenticate users, retrieve data (including the use of pagination), and in retrieving data your user will end up using a caching system at times (when appropriate). This page should utilize the API where a queuing system or web sockets are implemented, as well.

If you’ve created a process for users to be created via your API you may choose to add that user registration as a part of this page. Regardless, this page will need a way for your user to authenticate themselves to be able to use the API.

 
### 3. Talk About Your Project!

You should take opportunities to present yourself and the projects you work on online. This is one of those opportunities where you get to showcase yourself and your creativity! Write a blog post that explains the following:

* Inspiration for this project
* The data sources you found for your project and how they were useful
* Talk through the tools you choose to use and how you used them
* Show off your database design
* Explain the functionality implemented by your API
* Talk through challenges and solutions found during development
* Screenshots of webpage(s) created
    - If hosting online, include a link for others to use as well as any credentials for a test user account, if applicable.
The blog post must be at least 1200 words long. Only one writeup is necessary for your team, but it is advised that each team member writes, and posts publicly, their own writeup. You will be Googled in the future so make sure your online presence is something that you’re proud of!


### Clone the Project
```
git clone https://github.com/breebrowder/custom-api_from-scratch.git
```
### Run the express server
```
npm run startDev
```
### Contributors
1. Bree Browder 
