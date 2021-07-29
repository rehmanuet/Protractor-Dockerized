# Protractor Framework | Docker | Travis CI
<sup>Live Build Status:</sup><br />
[![Build Status](https://travis-ci.org/rehmanuet/Protractor-Dockerized.svg?branch=master)](https://travis-ci.org/rehmanuet/Protractor-Dockerized)[![GitHub](https://github.com/rehmanuet/Protractor-Dockerized/workflows/CI/badge.svg)](https://github.com/rehmanuet/Protractor-Dockerized/actions)

POC of Protractor with Jasmine Framework (Both Localize and Dockerize)

## Stack

<img src="https://static.javatpoint.com/images/javascript/javascript_logo.png?raw=true?raw=true" width="120" height="100" /><img src="https://i.pinimg.com/originals/48/4d/9a/484d9a03c676a55671a9d257a48c4378.png?raw=true?raw=true" width="120" height="90" /><img src="https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png?raw=true" width="100" height="100" /><img src="https://travis-ci.org/images/logos/TravisCI-Mascot-1.png?raw=true" width="100" height="100" /><img src="https://i.morioh.com/2019/12/19/b2d58b5bee3c.jpg?raw=true" width="140" height="100" />

## Features

```
Test Application: AngularJS 
Design Pattern: Page Object Model (3-Layers)
Framework: Jasmine Framework
Reporter: Jasmine Reporter
Runner: Local (Native Chrome Driver) and Selenium Standalone Server
Container: Docker
CICD: Travis CI and GitHub Action Pipeline
```


## Getting Started

These instructions will get you a copy of the project up and running on your local machine or Docker Container for development and testing purposes.

### Prerequisites


```
1- VS Code or WebStorm By JetBeans - IDE
2- Node.js Library
```

### Installing (Let's Get Started)

A step by step procedure to run the project on local machine

```
1) git clone https://github.com/rehmanuet/ProtractorJS.git
2) open the cloned directory in VS Code.
3) Execute "npm install" (It'll download all the dependencies mentioned in package.json)
```

## Execution on Local Machine (Peanut Butter)

```
npm run localize_test
```

========================================

## Running Protractor Tests on Docker (Things about get little dirty)


Now time has come to show you how to use docker to run Protractor tests. Here I would setup a Selenium Grid and run the tests.

### Prerequisites

Docker needs to be installed on your machine. One can download it from [Docker's website](https://www.docker.com) and follow the [documentation](https://docs.docker.com/) accordingly.
It is assumed that , one knows the basics of Docker for this tutorial unless you live in stone-age :D .

### Setup
To ensure Docker is installed sucessfully , type :
``` shell
docker -v
```
and one would see a similar output , depending on the version of docker installed :
``` shell
C:\Users\abdur.rehman>docker -v
Docker version 19.03.2, build 6a30dfc
``` 

### Step 0 - Download the docker images for Selenium Hub and Selenium Node

``` shell
docker pull selenium/hub:latest
docker pull selenium/node-chrome:latest
```
One could pull 'node-firefox' if they want to work with firefox node (Personally I hate firefox, So goddamn slow). 
For more information about the different images one can work with , please look at [Docker Selenium Images List](https://github.com/SeleniumHQ/docker-selenium/blob/master/README.md)


### Step 1 - Starting the Selenium Grid
``` shell
docker run -d -p 4444:4444 --name selenium-hub selenium/hub:latest
```

One can change the tag from 'latest' to '2.53.0' or any other version as they see fit but I recommend to use latest.

### Step 2 - Starting the Selenium Nodes
``` shell
docker run -d --link selenium-hub:hub selenium/node-chrome:latest
```

The above would create a chrome node and link it to the Selenium hub/grid created earlier (linking two images are always cute though!!).

### Step 3 - Initializing Docker

Update the seleniumAddress to the url of the hub in your protractor config file.


``` shell
docker build .
```
``` shell
docker-compose build
```
``` shell
docker-compose up
```
``` shell
docker-compose scale chrome=1
```

### Step 4 - Running the tests
and Finally run your tests. 

``` shell
npm run dockerize_test
```

### Step 5 - Debugging the test


``` shell
docker-compose -f docker-compose-sa-debug.yml up -d
```

Open VNC Viewer and Connect to following VNC Server

``` shell
VNC Server: localhost:5900
```

Execute the test to see the running in actual
 ``` shell
 npm run dockerize_test
 ```


_contact:`rehmanuet[at]yahoo[dot]com`_ *or* _[LinkedIn](https://www.linkedin.com/in/rehmanuet/)_
