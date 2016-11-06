# ReactJS demo with blog CRUD #
Start with react application

## Requirement ##
* [Nodejs](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/) - A package manager for build environment
* [Bower](https://bower.io/) - A package manager for the web

## Quick Start ##
* git clone ...
* cd ...
* npm install
* npm run bower install
* npm run gulp
* npm run dev - development
* npm run build - build to public/bundle.js

## Stack ##
>1. React
>2. [Redux](https://github.com/reactjs/redux)
>3. [Redux Saga](https://github.com/yelouafi/redux-saga)
>4. [React Router](https://github.com/ReactTraining/react-router)
>5. [Firebase](https://firebase.google.com/) - database to store data
>6. [Bootstrap](http://getbootstrap.com/)
>7. [Fontawesome](http://fontawesome.io/)

## File Structure ##
	app - reactjs source code
	 |-actions
	 |-api - firebase services
	 |-components - ui view
	 	|-App
	 	|-Body
	 	|-Editor
	 	|-Header
	 	|-Posts
	 	|-SearchBar
	 |-constants - action types
	 |-containers - connect with redux's store
	 	|-pages
	 		|-HomeContainer.js
	 		|-index.js
	 |-reducers
	 |-sagas
	 |-store
	 |-utils
	 |-client.js
	 |-routers.js
	public - running application folder



