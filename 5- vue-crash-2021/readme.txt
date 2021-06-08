- in the last for lessons we had very simple strucure for vue that we built: 
	>> index.html << containg the view or the template
	>> style.css  << which has a typical styling
	>> app.js << which has vue js engine, which have Vue.createApp()
        .. which also have three parts: 
		>> template << generate an html
		>> data() << return object of data objects
		>> methods << return a cusomizable methods
- Now, in the vue project we have a very similar structor,
	src/main.js + src/app.vue === >> app.js <<
	style.css === >> style.css << 
	public/index.html = >> index.html <<
- Basically the app.vue is the single page app, which contains the components 
  .. (Header, Body, Footer)
- And every component can contain a component also 
  .. (header can have: Button, aComponent)


- our work: 
	- delete helloworld.html
	- delele its import from app.vue
	- empty the components object from the export object
	- in app.vue wrap everthing in a container
	- Make a component called Header.vue and set it up
	- import this Header in the app.vue 
 	- register Header in components object in the app.vue
	- make Button component and use it in Header component
	- make the Task component and use it in the app

	