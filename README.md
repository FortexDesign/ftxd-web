# Technical documentation for the fortex design website


## Introduction 

This document contains the architecture and construction guidelines for the Fortex Design website under React.js technologies combined with the Tailwind.css library for style design, thus guaranteeing the correct interpretation of the code without ambiguities.


## Recommended structure

The structure defined by the developer are the folders present in the /src folder, their contents are explained in this document:   

```
├── common
├── components  
├── hooks 
├── images 
├── styles 
├── App.jd
```

### /common

The common folder contains special functions used in different sections of the project as follows:
  
- **/Utils**
  
 
All other functions and/or tools used by developers throughout the project are inserted here

## /components

"The key feature of React is component composition. Components written by different people need to work well together. It's important to us that you can add functionality to a component without causing a tidal wave of changes throughout the code base. "(React,2021)

Understanding this, the components folder is of vital importance for the structure of the project, in it are the different components present in the scenes of the application, to expand this paradigm it is recommended to read the following article
https://es.reactjs.org/docs/design-principles.html

Each component is of the .js type, this language is used in this project to establish better dynamics when writing the code due to its typing and advantages over other languages.


## /hooks

In this folder you can find files with global functions, these global functions are of a special nature since they extend the characteristics of the useState , these functions are called "custom hooks"

## index.tsx

This file is our main file called the app.js file, import the project libraries, and create wrappers for handling states

## App.tsx

This file lists all the components that make up the web page, in this case each component is a section of the web page.


## Variable Naming

This project uses the concepts of good practices suggested for optimal software development.

In the case of naming the variables and functions, the camelCase expression is used, exemplifying we can observe the name of the following variable `getSubcategories` or `getSubcategories()` for the functions, it is important to highlight that the variables must not contain special characters or spaces, only the `_` character is allowed so `get_categories`, although this expression is not of type camelase in the project you will find this way.

In the case of class naming the expression is UpperCamelCase instantiated as `AddNewCategory`.

## Libraries and Frameworks

This project, being based on react, makes use of the libraries provided by npm or yarn, the dependencies of the project are found in the package.json file.
   

- Tailwind 

  - It is a set of code tools for site design, this library would offer custom classes that can be used in the className attribute of each tag.
## Run the project in a local environment

To run the project on the computer it is necessary to install the npm dependencies with the `npm install` command, after installing the dependencies the `npm start` command must be executed

Done, you can now run the server and run the application in your browser.

## Build Application

To build the application and make it ready for deployment, you only need to run the command
```
npm run build
```
