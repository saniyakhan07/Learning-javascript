//for in loop for objects

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"

}

for (const key in myObject) {
  // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "cpp","py", "java","ruby"]
for (const key in programming) {
   console.log(programming[key]);
}

const map = new Map()    // map is not iterable
map.set('IN', "India")
map.set('SA', "Saudi Arabia")
map.set('Fr',"France")
map.set('IN', "India")

for (const key in map) {
    console.log(map[key]);
}