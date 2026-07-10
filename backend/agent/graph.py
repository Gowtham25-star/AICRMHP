from langgraph.graph import StateGraph
from langgraph.graph import END

from agent.state import AgentState


def chatbot(state):

    text = state["user_input"]

    text = text.lower()

    if "edit" in text:

        return {

            "response": "Calling Edit Tool"

        }

    elif "search" in text:

        return {

            "response": "Calling Search Tool"

        }

    elif "summary" in text:

        from agent.tools import generate_summary

        result = generate_summary.invoke(text)

        return {

            "response": result

        }

    else:

        return {

            "response": "Calling Log Tool"

        }


workflow = StateGraph(AgentState)

workflow.add_node("chatbot", chatbot)

workflow.set_entry_point("chatbot")

workflow.add_edge("chatbot", END)

graph = workflow.compile()