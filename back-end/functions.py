from database import session, Goal, Game
import json

def get_employee_name():
	s = session()
	employee= s.query(Goal.name).all()
	# employee.first()[0]
	
	return employee

def get_game_id():
	s = session()
	game = s.query(Game.id).all()[-1][-1]

	return game

def create_game():
	s = session()
	game = Game()
	s.add(game)
	s.commit()

def new_game(event):
	s = session()
	game = s.query(Game.id).order_by(Game.id.desc()).first()
	body = json.loads(event['body'])
	team = body['team']
	player = body['player']
	scored = Goal(name=player, game_id=game[0], team=team )
	s.add(scored)
	s.commit()

	return "het is gelukt"

def goal_count(team):
	s = session()
	game = s.query(Game.id).order_by(Game.id.desc()).first()
	count = s.query(Goal.team).filter_by(team=team, game_id=game[0]).all()

	return len(count)

def get_stats(game):
	s = session()

	count = s.query(Goal.name).filter_by(game_id=game[0]).all()

	seen = {}
	dupes = []
	for x in count:
		if x not in seen:
			seen[x] = 1
		else:
			if seen[x] == 1:
				dupes.append(x)
			seen[x] += 1

	type(seen)

	return seen