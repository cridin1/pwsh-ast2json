import json
with open("output.json", encoding='utf-16') as json_file:
    json_object_a = json.load(json_file)
    
with open("output2.json", encoding='utf-16') as json_file:
    json_object_b = json.load(json_file)

print(json_object_a)