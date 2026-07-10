from langchain.tools import tool


@tool
def log_interaction(data: str):

    return f"Interaction Logged:\n{data}"


@tool
def edit_interaction(data: str):

    return f"Interaction Updated:\n{data}"


@tool
def search_interaction(data: str):

    return f"Searching:\n{data}"


from agent.ai import analyze_meeting

@tool

def generate_summary(data):

    return analyze_meeting(data)

@tool
def recommend_followup(data: str):

    return "Recommended Follow-up after 2 Weeks"