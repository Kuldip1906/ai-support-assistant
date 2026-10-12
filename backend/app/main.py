
from fastapi import FastAPI

app = FastAPI(
    title="AI Support Assistant API",
    version="1.0.0"
)


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "ai-support-assistant"
    }
