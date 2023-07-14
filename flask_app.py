# Import the dependencies.
from flask import Flask, jsonify
import pandas as pd 
import datetime as dt
import numpy as np 

# Import mongoDB Database
from pymongo import MongoClient
import json

#################################################
# Database Setup
#################################################
# Create an instance of MongoClient

mongo = MongoClient(port=27017)

# assign the database to a variable name

db = mongo['SchoolAnalysis']

# assign the collection to a variable

SchoolData = db['SchoolData']


#################################################
# Flask Setup
#################################################

# create an app

app = Flask(__name__)

#################################################
# Flask Routes
#################################################

#Home route
@app.route("/")
def home():

    return (
        f"Welcome to the U.S. University Analysis API<br/>"
        f"Available Routes:<br>"
        f"<br>"
        f"1. All University Names<br>"
        f"/api/v1.0/Universities<br>"
        f"<br>"
        f"2. All States with the Universities<br>"
        f"/api/v1.0/States<br>"
        f"<br>"
        f"3. All Counties<br>"
        f"/api/v1.0/Counties<br>"
 
    )

# Universities route
@app.route("/api/v1.0/Universities")
def Universities():
    results = SchoolData.distinct('Name')
    Universities = list(np.ravel(results))
    return jsonify(Universities)

#States Route
@app.route("/api/v1.0/States")
def States():
    Stateresults= SchoolData.distinct('FIPSstatecode')
    States = list(np.ravel(Stateresults))
    
    return jsonify(States)


#Counties Route
@app.route("/api/v1.0/Counties")
def Counties():
    Countyresults= SchoolData.distinct('County name')
    Counties = list(np.ravel(Countyresults))
    
    return jsonify(Counties)
   

if __name__ == '__main__':
     app.run()