
![Logo](https://www.akmarv.com/static/aklogo.png)


# AKMarv


This project was built as a platform for user to listen to and purchase beats made by music producer, AKMarv.
## Technologies

**FrontEnd:** React.

**Backend:** Python, Django REST.

**Database:** Postgresql.


## Installation

1. Clone this repository

2. Create a virtual environment with python 3.6 or 3.7 for the project
    * Click [here](https://docs.python.org/3/library/venv.html) to learn how to     create virtual environment for python project.


3. Run the following commands to install the requirements for backend and frontend

```bash
  pip install -r requirements.txt
  npm i
```

## Usage
Add or make changes to 'akmarv/settings.py' with the following if they are not already included.

Choose and configure database - Default is Sqlite.

For help on Database, check Django documentation [here](https://docs.djangoproject.com/en/2.1/topics/install/#database-installation)

```
* Set environment variables for Secret Key - Ask For Secret Key

* Once settings configuration is completed, make and create migrations for database.

* Run the following commands
```

Make migrations
```bash
python manage.py makemigrations

```

Migrate with this command
```bash
python manage.py migrate

```



## Deployment

The backend of this project was written in python, using the Django framework while the frontend was developed using ReactJS.


In the project directory, you can run:
```bash
python manage.py runserver
```
This starts up a backend development server at default url, http://localhost:8000/

Then to run the frontend app:
```bash
yarn start
```
This runs the app in the development mode. Open http://localhost:3000 to view it in the browser.
