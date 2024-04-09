# Flask project initialization template for Cookiecutter

## Overview
This template is provided to initialize a Python Flask project based on setuptools.

## Preparation
The cookiecutter program

## How to run it
cookiecutter gh:search5/flask-cookiecutter-basic

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


## About building packages
You need a Python virtual environment to build this template. The virtual environment can be any, but you must install the build package in the virtual environment.

The final package generation is done by running the build module.

```
python -m build
```
