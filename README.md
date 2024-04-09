# Flask project initialization template for Cookiecutter

## Overview
This template is provided to initialize a Python Flask project and Vue 3 project based on setuptools.

## Preparation
The cookiecutter program

## How to run it
cookiecutter gh:search5/flask-cookiecutter-vue3

## What the template takes in
- project_name
- version
- using_sqlalchemy
- using_pytest
- using_cerberus
- dependencies
- testing_dependencies

## Item descriptions
- project_name - Project name. Defaults to my_project
- version - Program version. Defaults to 0.0
- using_sqlalchemy - Whether to use SQLAlchemy. y Use Enable SQLAlchemy and Flask-SQLAlchemy when entered.
- using_pytest - Whether to use PyTest. y Use pytest, coverage, and pytest-cov when entered.
- using_cerberus - Whether to use the cerberus validator.
- dependencies - program installation dependencies (enter comma separated)
- testing_dependencies - program testing dependencies (enter comma separated)

## About Package Development

Package Install to Virtual Environment
```
$ pip install -e ".[develop]
```

1. Node.JS install to Virtual Environment
```
$ nodeenv -n lts -p
```

2. npm install from {{cookiecutter.project_name}}_web directory
```
$ npm install
```

3. Frontend Development Server Start from {{cookiecutter.project_name}}_web directory
```
$ npm install dev
```

4. Frontend Development Build from {{cookiecutter.project_name}}_web directory
```
$ npm install build
```

5. Frontend Development Deploy Ready from {{cookiecutter.project_name}}_web directory
```
$ npm install production
```


## About building packages
You need a Python virtual environment to build this template. The virtual environment can be any, but you must install the build package in the virtual environment.

The final package generation is done by running the build module.

```
python -m build
```
