from flask import Flask
import pandas as pd
import json
app = Flask(__name__)


@app.route("/restaurants")
def restaurants():
    # data = pd.read_csv(r"E:\Projects\Zomato\dinewell\Flask_server\zomato.csv",encoding='latin1')
    # required = data[["Restaurant ID","Restaurant Name","Aggregate rating","Votes"]]
    
    # data_dict = required.to_dict(orient='records')
    # json_data = json.dumps(data_dict, default=str)
    
    with open(r'E:\Projects\Zomato\dinewell\Flask_server\restaurants_info.json', 'r') as json_file:
        json_data = json.load(json_file)
    return json_data
    


if __name__=="__main__":
    app.run(debug = True)