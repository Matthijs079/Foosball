from flask import Flask, request
from flask_cors import CORS
from database import session, Goal, Game
import functions
import json

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/')
def hello():
	return str(functions.get_employee_name())

@app.route('/getgame')
def getgame():

	return str(functions.get_game_id())

@app.route('/game')
def game():
	create = functions.create_game()
	getgame = functions.get_game_id()

	return "Game is aangemaakt"

@app.route('/start', methods=['POST'])
def start():
	event = dict(headers=request.headers, queryStringParameters=request.form, body=json.dumps(request.json))

	pass_body = functions.new_game(event)

	return "het lukt"

@app.route('/count', methods=['POST'])
def count():
	event = dict(headers=request.headers, queryStringParameters=request.form, body=json.dumps(request.json))
	body = json.loads(event['body'])
	team = body['team']
	count = functions.goal_count(team)

	return str(count)

@app.route('/getstats', methods=['POST'])
def getstats():
	event = dict(headers=request.headers, queryStringParameters=request.form, body=json.dumps(request.json))
	body = json.loads(event['body'])
	game = body['game']
	allgoals = functions.get_stats(game)
	
	return str(allgoals)

if __name__ == '__main__':
   app.run()