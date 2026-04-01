from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/check', methods=['POST'])
def check_claim():
    data = request.json
    claim = data.get('claim')

    # Mock logic (we improve later)
    if "earth is flat" in claim.lower():
        verdict = "False"
        source = "NASA"
    else:
        verdict = "Unverified"
        source = "No source found"

    return jsonify({
        "verdict": verdict,
        "source": source
    })

if __name__ == '__main__':
    app.run(debug=True)