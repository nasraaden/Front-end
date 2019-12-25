# Weight Lifting Journal Frontend

It's hard to keep track of how many reps you can do for time, or how much you usually deadlift. 
This app keep it all organized and tracked for you.

## Getting Started

Clone repo into your terminal and create your own branch -- MAKE SURE YOU DON'T FORK REPO BECAUSE WE ARE ALL EDITING OFF THE SAME REPO AND PUSHING TO MASTER

```
create-react-app client
```

I am setting up the components and creating a new react app so you will need to just cd into it

### Prerequisites

Install all dependencies

```
yarn or npm install
```

Run ```yarn start``` outside of the app

```
cd client
```

Install all dependencies inside of the React app

```
yarn or npm install
```

Look inside the ```package.json``` folder to see if there are any other dependencies you might need to install separately before continuing (maybe axios, router, material UI, etc.)

Once your dependencies are installed, run
```
yarn start or npm start
```
to start up the React app

## Our App

### PITCH

It's hard to keep track of how many reps you can do for time, or how much you usually deadlift. This app keep it all organized and tracked for you.


### MVP

- [ ] Users can log in and can create, review, update, and delete data on their workouts . 
- [ ] Can create a name of the exercise, amount lifted and/or reps completed, date, and region of the body exercise targets.

### Components We Need

#### ```App.js```
- [ ] Rendering everything here

#### ```axiosWithAuth.js```
- [ ] instance of axios with an authentification header

#### ```PrivateRoute.js```
- [ ] Setting up protected route for "/dashboard"--after logging in

#### ```Login.js```
- [ ] Login form
- [ ] **POST** request to retrieve token from backend

#### ```Signup.js```
- [ ] Sign up form
- [ ] **POST** request to create new user

#### ```WorkoutList.js```
- [ ] Displays all workouts
- [ ] **GET** request to display all workouts to dashboard
- [ ] Maybe **DELETE** request to delete workout

#### ```Workout.js```
- [ ] Displays a single a workout via id
- [ ] **GET** request to display single workout via id

#### ```UpdateWorkout.js```
- [ ] Can have an update workout form
- [ ] Pass down props from workout state and display workout to edit via a **GET** request
- [ ] **PUT** request to update information from workout
- [ ] Form to update 
- [ ] Maybe **DELETE** request could also go here

#### ```Dashboard.js```
- [ ] Maybe not needed but putting here just in case

This is plan is not set in stone. I just wanted to map something out to get some idea of how to start.

### State Management
### Redux

#### Actions
##### Add (POST) User/Workout
- [ ] CREAT_USER_START, CREAT_USER_SUCCESS, CREATE_USER_FAILURE
- [ ] ADD_WORKOUT_START, ADD_WORKOUT_SUCCESS, ADD_WORKOUT_FAILURE

##### Login User
- [ ] LOGIN_USER_START, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE

##### Fetch (GET) User/Workout
- [ ] FETCH_USER_START, FETCH_USER_SUCCESS, FETCH_USER_FAILURE
- [ ] FETCH_WORKOUT_START, FETCH_WORKOUT_SUCCESS, FETCH_WORKOUT_FAILURE

##### Edit (PUT) User/Workout
- [ ] EDIT_USER_START, EDIT_USER_SUCCESS, EDIT_USER_FAILURE
- [ ] EDIT_WORKOUT_START, EDIT_WORKOUT_SUCCESS, EDIT_WORKOUT_FAILURE

##### Delete (DELETE) Workout
- [ ] DELETE_WORKOUT_START, DELETE_WORKOUT_SUCCESS, DELETE_WORKOUT_FAILURE

##### Logout User
- [ ] LOGOUT_USER_START, LOGOUT_USER_SUCCESS, LOGIOUT_USER_FAILURE

#### Reducers
- [ ] Login/Signup Reducer
- [ ] User Reducer
- [ ] Workout Reducer

We could aslo use **Context API**


### REACT 1 TODO
Will fill this in once we meet

### REACT 2 TODO
Will fill this in once we meet

