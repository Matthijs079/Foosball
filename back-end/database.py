from sqlalchemy import Column, DateTime, String, Integer, ForeignKey, func
from sqlalchemy.orm import relationship, backref
from sqlalchemy.ext.declarative import declarative_base
 
 
Base = declarative_base()
 
 
class Game(Base):
    __tablename__ = 'game'
    id = Column(Integer, primary_key=True)
    created_on = Column(DateTime, default=func.now())
 
 
class Goal(Base):
    __tablename__ = 'goal'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    # Use default=func.now() to set the default hiring time
    # of an Employee to be the current time when an
    # Employee record was created
    scored_on = Column(DateTime, default=func.now())
    team = Column(String)
    game_id = Column(Integer, ForeignKey('game.id'))
 
 
from sqlalchemy import create_engine
engine = create_engine('sqlite:///orm_in_detail.sqlite')
 
from sqlalchemy.orm import sessionmaker
session = sessionmaker()
session.configure(bind=engine)
Base.metadata.create_all(engine)