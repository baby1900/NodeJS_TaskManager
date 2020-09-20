# NodeJS_TaskManager


<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">Task Manager</h3>

  <p align="center">
    An awesome app to manage your tasks!
    <br />
    <a href="https://github.com/baby1900/NodeJS_TaskManager"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/baby1900/NodeJS_TaskManager/issues">Report Bug</a>
    ·
    <a href="https://github.com/baby1900/NodeJS_TaskManager/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project
This app mainly focuses on backend and tests. If you want to see some sample frontend codes, please see the [WeatherApp](https://github.com/baby1900/NodeJS_WeatherAPP)

This app is deployed on Heroku at [https://michael-task-manager.herokuapp.com](https://michael-task-manager.herokuapp.com)

The purpose of this app is to help people to keep track of their tasks.

The app utilized MongoDB to store users and tasks data, and Postmark is used to send emails when a user creates an account or closes the account.

The app uses Rest API to perform CRUD operations, and it uses jsonwebtoken for user authentication.

Jest is usd to perform automation testing process of the app, and the code includes a sample test suite.

### Built With
* [MongoDB](https://www.mongodb.com/)
* [REST API](https://restfulapi.net/)
* [Postmark](https://postmarkapp.com/)
* [Jest](https://jestjs.io/)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```

### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
```sh
git clone https://github.com/baby1900/NodeJS_TaskManager.git
```
3. Install NPM packages
```sh
npm install
```
4. Set your API in environment variables
```env
PORT='ENTER YOUR PORT'
POSTMARK_API_KEY='ENTER YOUR API'
MONGODB_URL='ENTER YOUR MONGODB ADDRESS'
JWT_SECRET='ENTER YOUR TOKEN'
FROM_EMAIL='ENTER YOUR EMAIL'
```
5.Start your MongoDB
6. Start the app 
```sh
npm run start
```



<!-- USAGE EXAMPLES -->
## Usage

* User Related
1. Create User
```html
POST {{url}}/users
```
Needed information: name, email, password

Optional information: age

A welcome email will send to you after this.

2. Login User
```html
POST {{url}}/users/login
```
Needed information: email, password

3. Upload Avatar
```html
POST {{url}}/users/me/avatar
```
Needed information: <= 1Mb jpg,jpeg,png file

4. Read User Information
```html
GET {{url}}/users/me
```
Available options: name, email, password, age

5. Update User Information
```html
PATCH {{url}}/users/me
```
Available options: name, email, password, age

6. Delete User Account
```html
DELETE {{url}}/users/me
```
All task that the user owens will also get deleted.

A goodbye email will be sent after this.

* User Related
1. Create Task
```html
POST {{url}}/task
```
Needed information: description

Optional information: completed (default = false)

2. Read Task
```html
GET {{url}}/tasks/:id
```
Needed information: task id

3. Update Task
```html
PATCH {{url}}/tasks/:id
```
Needed information: task id

Available options: description, completed

4. Delete Task
```html
DELETE {{url}}/tasks/:id
```
Needed information: task id








<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/baby1900/NodeJS_TaskManager/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
. Open a Pull Request




<!-- CONTACT -->
## Contact

Michael Du - qiushidu@outlook.com

Project Link: [Github](https://github.com/baby1900)




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/md-uw/
