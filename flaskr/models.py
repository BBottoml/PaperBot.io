from sqlalchemy import Column, Integer, String, ForeignKey, Date
from sqlalchemy.orm import relationship
from flask_appbuilder import Model

class User(Model):
    id = Column(Integer,primary_key=True,autoincrement=True)
    user = Column(String(128))
    bot = relationship("Bot")

class Bot(Model):
    id = Column(Integer, primary_key=True,autoincrement=True)
    bot_name = Column(String(128))
    bot_algorithm = Column(String(128))
    trading_log = relationship("Log")

class Log(Model):
    id = Column(Integer,primary_key=True,autoincrement=True)
    stock_name = Column(String(128))
    num_shares = Column(Integer)
    purchase_price = Column(Integer)
