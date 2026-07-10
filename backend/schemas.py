from pydantic import BaseModel
from datetime import date, time


class InteractionCreate(BaseModel):

    doctor_name: str
    meeting_type: str
    meeting_date: date
    meeting_time: time
    topics: str
    summary: str
    sentiment: str
    outcome: str
    followup: str


class InteractionResponse(InteractionCreate):

    id: int

    class Config:
        from_attributes = True