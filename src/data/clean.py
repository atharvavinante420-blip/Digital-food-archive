import re

file_path = r"src\data\food.js"

with open(file_path, "r", encoding="utf-8") as file:
    content = file.read()

# Replace oralHistory: [...] with oralHistory: ""
content = re.sub(
    r'oralHistory\s*:\s*\[[\s\S]*?\]',
    'oralHistory: ""',
    content
)

# Replace storyTeller: [...] with storyTeller: ""
content = re.sub(
    r'storyTeller\s*:\s*\[[\s\S]*?\]',
    'storyTeller: ""',
    content
)

with open(file_path, "w", encoding="utf-8") as file:
    file.write(content)

print("Done! oralHistory and storyTeller are now empty strings.")