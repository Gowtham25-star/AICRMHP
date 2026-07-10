from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from agent.graph import graph
from fastapi.middleware.cors import CORSMiddleware
import crud
import schemas
import models

from database import engine, get_db

models.Base.metadata.create_all(bind=engine)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "CRM Backend Running Successfully"}


# ----------------------------
# Create
# ----------------------------
@app.post("/log-interaction", response_model=schemas.InteractionResponse)
def log(interaction: schemas.InteractionCreate,
        db: Session = Depends(get_db)):

    return crud.create_interaction(db, interaction)


# ----------------------------
# Get All
# ----------------------------
@app.get("/interactions")
def get_all(db: Session = Depends(get_db)):

    return crud.get_all(db)


# ----------------------------
# Search
# ----------------------------
@app.get("/search/{doctor}")
def search(doctor: str,
           db: Session = Depends(get_db)):

    return crud.search_doctor(db, doctor)


# ----------------------------
# Update
# ----------------------------
@app.put("/edit/{id}")
def update(id: int,
           interaction: schemas.InteractionCreate,
           db: Session = Depends(get_db)):

    data = crud.update_interaction(db, id, interaction)

    if data is None:
        raise HTTPException(status_code=404,
                            detail="Interaction Not Found")

    return data


# ----------------------------
# Delete
# ----------------------------
@app.delete("/delete/{id}")
def delete(id: int,
           db: Session = Depends(get_db)):

    data = crud.delete_interaction(db, id)

    if data is None:
        raise HTTPException(status_code=404,
                            detail="Interaction Not Found")

    return {
        "message": "Interaction Deleted Successfully"
    }

@app.post("/chat")

def chat(message: dict):

    result = graph.invoke(

        {

            "user_input": message["message"]

        }

    )

    return result