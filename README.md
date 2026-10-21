# pet-shop-auto

Small Playwright + TypeScript POC with an API test and a UI test against the
[PetShop](https://github.com/jirateamadj/PetShop) FastAPI app.

## Setup

1. Start the SUT (from a PetShop checkout, after `pip install -r requirements.txt`):
   `python -m uvicorn app.main:app --port 8000`
2. `cp .env.example .env`
3. `npm install`
4. `npx playwright install chromium`
5. `npm test`

Other scripts: `npm run typecheck`, `npm run report`.

Note: the UI test opens Swagger UI (`/docs`), which loads its assets from a CDN, so it needs internet access.
