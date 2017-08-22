# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.1. 
This application is used to fetch the weather data like Temperature, Pressure, Humidity etc. of 5 different cities.
In the left hand side, we have a list of 5 cities whose weather can be retrieved by clicking on their names.
The Right hand panel is to show the weather of the city selected.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Working

The application consists of 2 componenents named "app.component" and "child.component". The app.component component consists of the functioning of left side menu i.e, a table of 5 cities on clicking of which a method is called from the child controller and get the weather data from APIs.
The app.component.html also consist of a decorator <child ></child> which is nothing but the Child component which is used to display the weather details of the city selected.

The "http.get()" services are used to fetch the data through an API in which the name of the city is passed. This service returns a JSON response which consists of all the details like Co-ordinates, Temperature, Pressure etc. of that particular city at that particular time.

Another service/API is used to get the "Local time" of the city selected.