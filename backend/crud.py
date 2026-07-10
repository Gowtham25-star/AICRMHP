from sqlalchemy.orm import Session
import models
import schemas

# ----------------------------
# Create Interaction
# ----------------------------
def create_interaction(db: Session, interaction: schemas.InteractionCreate):

    new_interaction = models.Interaction(
        doctor_name=interaction.doctor_name,
        meeting_type=interaction.meeting_type,
        meeting_date=interaction.meeting_date,
        meeting_time=interaction.meeting_time,
        topics=interaction.topics,
        summary=interaction.summary,
        sentiment=interaction.sentiment,
        outcome=interaction.outcome,
        followup=interaction.followup
    )

    db.add(new_interaction)
    db.commit()
    db.refresh(new_interaction)

    return new_interaction


# ----------------------------
# Get All
# ----------------------------
def get_all(db: Session):

    return db.query(models.Interaction).all()


# ----------------------------
# Search Doctor
# ----------------------------
def search_doctor(db: Session, doctor: str):

    return db.query(models.Interaction).filter(
        models.Interaction.doctor_name.ilike(f"%{doctor}%")
    ).all()


# ----------------------------
# Update Interaction
# ----------------------------
def update_interaction(db: Session, id: int, interaction):

    record = db.query(models.Interaction).filter(
        models.Interaction.id == id
    ).first()

    if not record:
        return None

    record.doctor_name = interaction.doctor_name
    record.meeting_type = interaction.meeting_type
    record.meeting_date = interaction.meeting_date
    record.meeting_time = interaction.meeting_time
    record.topics = interaction.topics
    record.summary = interaction.summary
    record.sentiment = interaction.sentiment
    record.outcome = interaction.outcome
    record.followup = interaction.followup

    db.commit()
    db.refresh(record)

    return record


# ----------------------------
# Delete Interaction
# ----------------------------
def delete_interaction(db: Session, id: int):

    record = db.query(models.Interaction).filter(
        models.Interaction.id == id
    ).first()

    if not record:
        return None

    db.delete(record)
    db.commit()

    return record