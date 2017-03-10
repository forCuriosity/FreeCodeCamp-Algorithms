START SERVER
npm start

NODE EXPRESS SERVER TO TEST CODE CHALLENGES
console.log results

'Express' Installation Tutorial: http://expressjs.com/en/starter/hello-world.html
'Module.Export & Require' tutorial: http://openmymind.net/2012/2/3/Node-Require-and-Exports/

CHALLENGE:
Implement another testing method to aid my development.


TESTING CODE
'./package.json'
```
"scripts": {
  "test": "jest",
},
"devDependencies": {
  "jest-cli": "^19.0.2"
},
"jest": {
  "testEnvironment": "node"
}
```
'__tests__/1.test.js'
```
test('accepts bread, which it heats, to return toast', () => {
  expect(toaster(bread).toBe(toast)
});
