# ProtractorJS

POC of ProtractorJS with Jasmine Framework

## Stack

<img src="https://angular.io/generated/images/marketing/concept-icons/protractor.png?raw=true?raw=true" width="100" height="100" /><img src="https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png?raw=true" width="100" height="100" />

## Features

```
1- Implementation of Angular Based Application with Page object Model(3 - Layers)
2- Jasmine Reporter
3- Logs Recording
4- Suites Management
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites


```
1- VS Code or WebStorm By JetBeans - IDE
2- Node.js Library
```

### Installing

A step by step procedure to run the project on local machine

```
1) git clone https://github.com/rehmanuet/ProtractorJS.git
2) open the cloned directory in VS Code.
3) Execute "npm install" (It'll download all the dependencies mentioned in package.json)
```

### Execution on Local Machine

```
npm run local
```

========================================

### Running Protractor Tests on  Docker


This is a simple tutorial that shows how to use docker to run Protractor tests. We would setup a Selenium Grid and run the tests.

### Prerequisites

Docker needs to be installed on your machine. One can download it from [Docker's website](https://www.docker.com) and follow the [documentation](https://docs.docker.com/) accordingly.
It is assumed that , one knows the basics of Docker for this tutorial.

### Setup
To ensure Docker is installed sucessfully , type :
``` shell
docker -v
```
and one  would see a similar output , depending on the version of docker installed :
``` shell
Docker version 1.12.0-rc4, build e4a0dbc, experimental
``` 

### Step 0 - Download the docker images for Selenium Hub and Selenium Node

``` shell
docker pull selenium/hub:latest
docker pull selenium/node-chrome:latest
```
One could pull 'node-firefox' if they want to work with firefox node. 
For more information about the different images one can work with , please look at [Docker Selenium Images List](https://github.com/SeleniumHQ/docker-selenium/blob/master/README.md)


### Step 1 - Starting the Selenium Grid
``` shell
docker run -d -p 4444:4444 --name selenium-hub selenium/hub:latest
```

One can change the tag from 'latest' to '2.53.0' or any other version as they see fit.

### Step 2 - Starting the Selenium Nodes
``` shell
docker run -d --link selenium-hub:hub selenium/node-chrome:latest
```

The above would create a chrome node and link it to the Selenium hub/grid created earlier.

### Step 3 - Running the tests

Update the seleniumAddress to the url of the hub in your protractor config file.

``` js
seleniumAddress: 'http://localhost:4444/wd/hub'
```
and run your tests. 

``` shell
npm run docker
```
_contact:`rehmanuet[at]yahoo[dot]com`_
