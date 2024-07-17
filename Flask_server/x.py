# # import pandas as pd

# # # # Try different encodings
# # # encodings = [, 'iso-8859-1', 'cp1252']

# # # for encoding in encodings:
# # #     try:
        
# # #         break
# # #     except UnicodeDecodeError as e:
# # #         print(f"Encoding {encoding} failed: {e}")
# # data = pd.read_csv(r"E:\Projects\Zomato\dinewell\Flask_server\zomato.csv", encoding='latin1')


# # # print(data.head())

# # # print(len(data["Restaurant ID"].values))
# # # print(len(set(data["Restaurant ID"].values)))



# import json

# # Replace 'path_to_your_json_file.json' with the actual path to your JSON file
# file_path = ['file1.json','file2.json','file3.json','file4.json','file5.json']
# count = 0
# for i in file_path:
#     x = open(i, 'r')
#     data = json.load(x)
#     # print(count)
#     for j in range(len(data)):
#         try:
#             f =data[j]['restaurants']
#             for k in range(len(f)):
#                 if(list(f[k].keys())==['restaurant']):
#                     count = count+1
#         except:
#             break

# print(count)





import pandas as pd
import json

# Load the data from the CSV file
data = pd.read_csv(r"E:\Projects\Zomato\dinewell\Flask_server\zomato.csv", encoding='latin1')

# Select the required columns
required = data[["Restaurant ID", "Restaurant Name", "Aggregate rating", "Votes"]]

# Convert the selected data to a dictionary
data_dict = required.to_dict(orient='records')

# Convert the dictionary to a JSON string
json_data = json.dumps(data_dict, default=str)

# Write the JSON string to a file
with open('restaurants_info.json', 'w') as json_file:
    json_file.write(json_data)

print("Data has been written to restaurants_info.json")





# # print(f"Number of restaurants: {num_restaurants}")
