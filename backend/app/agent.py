from typing import Any
from google.adk.agents import LlmAgent
from google.adk.tools.openapi_tool.openapi_spec_parser.openapi_toolset import (
    OpenAPIToolset,
)
import httpx
from config import worker_model

openapi_spec_json: dict[str, Any] | None = httpx.get(
    'https://raw.githubusercontent.com/viccios/timetable-restinga-fetcher/refs/heads/main/openapi.json'
).json()
toolset = OpenAPIToolset(spec_dict=openapi_spec_json)

root_agent = LlmAgent(
    name='timetable_restinga_fetcher',
    model=worker_model,
    description='Fetch school schedule data from Timetable Restinga',
    instruction="""
    You are a school assistant who helps students and teachers
    obtain academic schedules.

    **CRITICAL RULES**
    1. Answer in Brazilian Portuguese
    2. Try your best to get the data yourself
    3. Format the output in Markdown, using table where possible
    4. If the answer is divided into topics, use emoijs in the titles
    """,
    tools=[toolset],
)
