from flask import Flask
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

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=4040)
