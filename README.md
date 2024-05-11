# Project Title
  Student dasboard-management-destination
## Introduction
Streamline student dashboard management with this platform. Effortlessly organize dashboard by admin side, saving you valuable time. Quickly login to get see your all collage details here. Efficiently by adding multiple users to a single admin. Get things done efficiently with this app.
### Home Page 
![Screenshot 2024-05-11 112823](https://github.com/Upendrapal0607/rurux-assignment-dashboard/assets/112810287/33621a9b-58be-4a56-89d5-d1db98c6809b)

### Login page
![Screenshot 2024-05-11 112909](https://github.com/Upendrapal0607/rurux-assignment-dashboard/assets/112810287/d8f4c8d3-0c07-40d3-a1da-47a8f620532e)

### Dashboard Page 
![Screenshot 2024-05-11 112851](https://github.com/Upendrapal0607/rurux-assignment-dashboard/assets/112810287/00d7ef71-40ec-4f8d-81f6-dac67b7033cd)


## Project Type
It is a Fullstack (MERN base) project
## Deplolyed App
### Frontent
 [Live](https://663f063bbcb7cea66f800c82--lustrous-centaur-7692ce.netlify.app/)

### Backent
 [Base_URL](https://rurux-university-dashboard-backend.vercel.app/)

## Video Walkthrough of the project

   Link- `https://drive.google.com/file/d/1RNS7bqRvvstF2kxBQEMOMmkXVotxHuI7/view?usp=sharing`

## Installation & Getting started
Detailed instructions on how to install, configure, and get the project running. For BE/FS projects.
### Frontend
Locally it will run:-
```bash
clone git clone  https://github.com/Upendrapal0607/rurux-assignment-dashboard.git
cd frontend/
npm install
npm start
```
it will running on `http://localhost:3000/`

### Backend
Locally it will run:- `http://localhost:8080/`
```bash
clone same repo for backend
cd backend
npm install
npm npm run server
```
### Database
.env file have variable:
MongoDB_URL, you want to connect to within your database so use it.
you have to add it for make connection with the server
and sum secreate unique for admin login are in .env file


## API Endpoints
### Stream endpoints
- GET /stream/ - retrive all streams
- POST /stream/ - add new streame
- DELETE /stream/delete/:paramId -Delete the particular stream
- PATCH /stream/update/:paramId -update the particular stream

### Subject endpoints

- GET /subject/ - retrive all subject list
- POST /subject/ - add new subject
- DELETE /subject/delete/:paramId -Delete the particular subject
- PATCH /subject/update/:paramId -update the particular subject

### Marks endpoints

- GET /marks/ - retrieve all marks list of student with ID
- POST /marks/addmarks - create a new student marks
- PATCH /marks/update/:paramId - Delete the particular marks
- DELETE /marks/delete/:paramId - update the particular marks

### Student endpoints
- GET /student/ - retrieve all student list
- POST /student/register - create a new student
- PATCH /marks/update/:paramId - Delete the particular student
- DELETE /marks/delete/:paramId - update the particular student


### Admin endpoints
- GET /admin/login - login for static admin routes
  password :
 ```bash
admin
```
username :
 ```bash
admin
```


## Technology Stack
- Node.js
- Express.js
- MongoDB
- React.js
- Redux
- Tailwind css
- Other libraries/modules
