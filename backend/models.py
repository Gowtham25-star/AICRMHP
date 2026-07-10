from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Text
from sqlalchemy import Date
from sqlalchemy import Time

from database import Base


class Interaction(Base):

    __tablename__ = "interactions"

    id = Column(Integer, primary_key=True, index=True)

    doctor_name = Column(String)

    meeting_type = Column(String)

    meeting_date = Column(Date)

    meeting_time = Column(Time)

    topics = Column(Text)

    summary = Column(Text)

    sentiment = Column(String)

    outcome = Column(Text)

    followup = Column(Text)