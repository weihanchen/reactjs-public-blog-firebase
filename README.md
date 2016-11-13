# ReactJS demo with blog CRUD #
學習Reactjs過程中的目錄結構、技術堆棧，並記錄相關流程、步驟、遇到的問題，以備下一個專案基礎沿用

## <a href="https://weihanchen.github.io/reactjs-public-blog-firebase/public" target="_blank">Live Demo</a> ##


## Requirement ##
* [Nodejs](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/) - A package manager for build environment

## Quick Start ##
* git clone https://github.com/weihanchen/reactjs-public-blog-firebase.git
* cd reactjs-public-blog-firebase
* npm install
* npm run dev - development
* npm run build - build to public/bundle.js
* node run.js - run with express

## Stack ##
>1. [React](https://facebook.github.io/react/)
>2. [Redux](https://github.com/reactjs/redux)
>3. [Redux Saga](https://github.com/yelouafi/redux-saga)
>4. [React Router](https://github.com/ReactTraining/react-router)
>5. [Firebase](https://firebase.google.com/) - database to store data
>6. [SASS、SCSS](http://sass-lang.com/)
>7. [Bootstrap](http://getbootstrap.com/)
>8. [Fontawesome](http://fontawesome.io/)

## Dependencies ##
>1.[react-html-parser](https://github.com/wrakky/react-html-parser)

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
	 	|-Spinner
	 |-containers - connect with redux's store and dispatch actions
	 	|-pages
	 		|-HomeContainer.js
	 		|-index.js
	 |-reducers
	 |-sagas - middleware to process async actions
	 |-store
	 |-stylesheets - scss files
	 |-utils
	 |-client.js
	 |-routers.js
	public - running application folder

## Components ##

![App](./images/Components.png)

## Data Flow ##
Todo...