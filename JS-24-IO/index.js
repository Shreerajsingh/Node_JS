import {readFile} from "fs/promises";

const filePath = new URL('./index.html', import.meta.url);

let content = await readFile(filePath, {encoding : 'utf-8'});

const data = {
    name : "Shreeraj Singh",
    company : "JP Morgan",
    age : 20
}

for(const [key, value] of Object.entries(data)) {
    content = content.replace(`{${key}}`, value);
}

console.log(content);