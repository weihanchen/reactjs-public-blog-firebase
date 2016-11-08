# ReactJS demo with blog CRUD #
Get start with react application

## Requirement ##
* [Nodejs](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/) - A package manager for build environment

## Quick Start ##
* git clone https://github.com/weihanchen/reactjs-public-blog-firebase.git
* cd reactjs-public-blog-firebase
* npm install
* npm run dev - development
* npm run build - build to public/bundle.js

## Stack ##
>1. [React](https://facebook.github.io/react/)
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
	 |-sagas - middleware
	 |-store
	 |-utils - view converter
	 |-client.js
	 |-routers.js
	public - running application folder

Todo...

