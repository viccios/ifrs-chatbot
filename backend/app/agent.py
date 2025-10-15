from typing import Any
from google.adk.agents import LlmAgent
from google.adk.tools.openapi_tool.openapi_spec_parser.openapi_toolset import (
    OpenAPIToolset,
)
import httpx

openapi_spec_json: dict[str, Any] | None = httpx.get(
    'http://localhost:3000/openapi.json'
).json()
toolset = OpenAPIToolset(spec_dict=openapi_spec_json)


def anais_2024():
    """Retorna os anais da mostra científica de 2024"""
    response = httpx.get('http://localhost:9000/anais2024')
    return response.json()


def anais_2024_apresentacoes():
    """Retorna as apresentações da mostra científica de 2024"""
    response = httpx.get('http://localhost:9000/anais2024/apresentacoes')
    return response.json()


root_agent = LlmAgent(
    name='timetable_restinga_fetcher',
    model='gemini-2.5-flash',
    description='Fetch school schedule data from Timetable Restinga',
    instruction="""
    You are a school assistant who helps students and teachers
    obtain academic schedules.
    """,
    tools=[toolset, anais_2024, anais_2024_apresentacoes],
)
