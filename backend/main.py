from flask import Flask
import os

app = Flask(__name__)
PORT = int(os.getenv("PORT", 5000))
ENV = os.getenv("ENV", "development")

@app.route("/api/health")
def health():
    return {"status": "ok", "env": ENV}, 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=PORT, debug=(ENV=="development"))
