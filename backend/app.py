from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/check', methods=['POST'])
def check_claim():
    data = request.json
    claim = data.get('claim', '').lower()

    if any(phrase in claim for phrase in ["earth is flat", "flat earth"]):
        verdict = "False ❌"
        source = "NASA - Scientific Consensus"

    elif any(phrase in claim for phrase in ["covid vaccine microchip", "microchip vaccine"]):
        verdict = "False ❌"
        source = "WHO - Vaccine Safety Data"

    elif "climate change hoax" in claim:
        verdict = "False ❌"
        source = "UN Climate Reports"

    elif any(phrase in claim for phrase in ["water boils at 100", "boiling point of water"]):
        verdict = "True ✅"
        source = "Basic Scientific Fact"

    else:
        verdict = "Unverified ⚠️"
        source = "No trusted sources found"

    return jsonify({
        "verdict": verdict,
        "source": source
    })
@app.route("/")
def home():
    return "TruthLens API is running 🚀"


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)