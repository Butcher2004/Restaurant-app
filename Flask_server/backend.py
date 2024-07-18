from flask import Flask, jsonify
import pandas as pd
import json
app = Flask(__name__)

import random


@app.route("/restaurants")
def restaurants():
    # data = pd.read_csv(r"E:\Projects\Zomato\dinewell\Flask_server\zomato.csv",encoding='latin1')
    # required = data[["Restaurant ID","Restaurant Name","Aggregate rating","Votes"]]
    
    # data_dict = required.to_dict(orient='records')
    # json_data = json.dumps(data_dict, default=str)
    
    with open(r'E:\Projects\Zomato\dinewell\Flask_server\restaurants_info.json', 'r') as json_file:
        json_data = json.load(json_file)
    return json_data

@app.route('/thumbnails')
def thumbnails():
    with open(r"E:\Projects\Zomato\dinewell\src\utils\thumbnails.json", 'r') as json_file:
        json_data = json.load(json_file)
    return json_data

@app.route('/information/<regid>')
def information(regid):
    
    a = ['ile1.json','ile2.json','ile3.json','ile4.json','ile5.json']
    elem = {}
    for i in a:
        flag = False
        x = open(r'E:\Projects\Zomato\dinewell\Flask_server\f'+i,'r')
        data = json.load(x)
        for k in range(len(data)):
            try:
                check = data[k]['restaurants']
            except : 
                break
            for l in range(len(check)):
                check1 = check[l]['restaurant']
                if(str(check1['R']['res_id'])==str(regid)):
                    for detail in check1.keys():
                        print(check1[detail])
                        elem[detail] = check1[detail]
                    # print(elem)
                    flag = True
                    break
            if flag:
                break
        if flag:
            break
    return jsonify(elem)
    

@app.route('/random')
def randdom():

    


    x = open(r'E:\Projects\Zomato\dinewell\Flask_server\file1.json', 'r')
    data = json.load(x)
    while(True):
        rand1 = random.randint(0,len(data))
        
        if 'restaurants' in data[rand1] and len(data[rand1]['restaurants'])>=1:
            try:
                rand2 = random.randint(0,len(data[rand1]['restaurants']))
                res = data[rand1]['restaurants'][rand2]['restaurant']
                return jsonify(res)
            except:
                continue
    

    



if __name__=="__main__":
    app.run(debug = True)