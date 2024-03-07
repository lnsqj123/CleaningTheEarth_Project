from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # CORS 미들웨어 추가

@app.route('/')
def home():
   return 'EC2 Flask Test'

@app.route('/hello')
def say_hello_world():
    return {'result': "Hello World"}

@app.route('/api/data', methods=['POST'])
def receive_data():
    data = request.get_json()
    # 데이터를 처리하고 응답 생성
    response_data = {'message': 'Data received successfully', 'received_data': data}
    return jsonify(response_data)

if __name__ == '__main__':
   app.run('0.0.0.0', port=5000, debug=True)
