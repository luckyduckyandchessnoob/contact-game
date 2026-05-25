from flask import Flask, render_template, jsonify
import json

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/words")
def words():
    with open("words.json") as f:
        data = json.load(f)

    return jsonify(data)

app.run(debug=True)
