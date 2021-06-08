- to upgrate the project to production level:
		npm run build
  ..which will create dist folder to be deployed

- now you have to install serve globallay and make the project deal with dis folder only:
		npm install -g serve
		serve -s dist
  all of it here in the documentation:
		https://cli.vuejs.org/guide/deployment.html#previewing-locally

- Now install the npm json server:
		https://www.npmjs.com/package/json-server
  which is a fake json file stored locally and having a local address for it
  ..so you can deal with it as a real api server that can get and edit and
  ..store and delete data!

- install it:
		npm install -g json-server
  and add this to package.json:
		"backend": "json-server --watch db.json --port 5000"
  this line of code is a short cut so you just write in the terminal:
		npm run backend
  and it will run the code, the code means run this db json file in the 
  .. local host port 5000

- now make db.json server in the root folder (same root as this file)
  .. and fill it with json data same as the one existing in app.vue
  now do this:
		npm run backend
  and go to:
		http://localhost:5000/tasks <<<<<< hehehehe

- the rest are all logical, any method deal with json file or needs a time to fetch data should have a prefix 'async', and if it's a resonse with 'await'




