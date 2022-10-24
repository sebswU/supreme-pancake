from flask import Flask
from flask import request
from flask import url_for
from flask import render_template
from flask import flash
from markupsafe import escape
import urllib.request
from datetime import datetime
import pandas as pd

top= 1000 # num of records get per call
skip = 0 # number skip records

#base url to openFEMA API
b_url = "https://www.fema.gov/api/open/v1/FemaWebDeclarationAreas"
app = Flask(__name__)

"""
disasterNumber code translations

0001-1999 Major Disaster Declaration

2000-2999 Fire Management

3000-3999 Emergency Declaration (Special Emergency)

4000- Major Disaster Declaration
"""

@app.route("/")
def index():
    return render_template("create.html")

@app.route("/about")#function must be same name as URI
def about():
    return render_template('about.html')

@app.route("/", methods=["GET","POST"])
@app.route("/create/", methods = ['GET','POST'])
def register():
    if request.method == 'GET':
        state = request.form['state']
        county = request.form['county']
        
        print(county)
        print(state)
        if not state or not county:
            flash("You must enter both state and county for proper analysis")
        #pagination from openFEMA dataset
        webRetr = urllib.request.urlopen(b_url + f"?$filter=stateName%20eq%20'{state}'%20and%20placeName%20eq%20'{county}'&$select=disasterNumber,ProgramTypeCode&$format=csv")
        webRetr = webRetr.read()
        dataset = pd.read_csv(webRetr)#convert to pandas dataFrame   
        
        return render_template("result.html")
    else:
        return render_template("create.html")


if __name__ == "__main__":
    app.run()

