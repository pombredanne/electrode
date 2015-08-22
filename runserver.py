#from flask import Flask
from flask import Flask, request, render_template

import logging
app = Flask(__name__)

# This is where we make our api endpoints

@app.route("/")
def home():
    return "Electrode. Powered by Python."

# Another route would look like this:
# @app.route("/hello")
# def hello():
#   return "Howdy!"

# Andy's first route. gonna be sweet
# I hate pound sign commenting
# I love //
# this is mildly similar to PHP's symfony
# UPDATE: I will figure out how to render a template
@app.route("/Andy")
def Andy():
	return render_template('index.html')

#Still not working********



if __name__ == "__main__":
    app.run(host='127.0.0.1', port=4040)
