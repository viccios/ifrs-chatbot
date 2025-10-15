# Como subir o servidor

# Frontend

Entre na pasta e de `npm i` e `npm run dev`. Um servidor Vite deverá
subir no endereço http://localhost:5173/app

# Backend

Instale o UV (para projetos Python)
[https://docs.astral.sh/uv/guides/install-python/](https://docs.astral.sh/uv/guides/install-python/)

Entre no diretório backend e de um `uv sync`

Entre no venv `souce .venv/bin/activate`

Para rodar a interface de teste: `adk web`

Para rodar no interface customizada (frontend)

`adk api_server --allow_origins="*"`

# Integrações

Timetable Fetcher: entre na pasta integrações, timetable-restinga-fetcher, `npm i` e `npm start`

Mostra IFRS: Entre na pasta integrações, mostra-ifrs-restinga-api, e faça:

Venv: `python3 -m venv .venv`

Ativar venv: `source .venv/bin/activate`

Instalar dependências: `pip install -r requirements.txt`

Iniciar servidor: `uvicorn src.main:app --port --reload`

# Final

Depois de iniciar tudo deve estar funcionando.
Removi os `.gitignore` das pastas então minha chave de API está por aí. Favor não usar ela depois
da mostra. Vou limpar o repositório do Git mais tarde.
