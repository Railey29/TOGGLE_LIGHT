from flask import Flask, jsonify , request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/Api/App" , methods=["POST"])
def get_data():
    #data = {'message': 'Hello From Flask'}
    #return jsonify(data)
    user_data = request.json # request from Jsx
    user_Message = user_data.get("userMessage","") #get the data from useMessage
    
    data = {"userMessage":user_Message} #Maigging directory yung sinend ni user "Hello Railey"
    
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
