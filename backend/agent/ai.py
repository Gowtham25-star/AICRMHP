import os

from dotenv import load_dotenv

from langchain_groq import ChatGroq

load_dotenv()

llm = ChatGroq(
    model="llama-3.1-8b-instant",
    api_key=os.getenv("GROQ_API_KEY")
)

def analyze_meeting(text):

    prompt=f"""

You are an AI CRM Assistant.

Extract

Doctor Name

Meeting Type

Summary

Sentiment

Outcome

Followup

Meeting

{text}

Return JSON only.

"""

    response=llm.invoke(prompt)

    return response.content