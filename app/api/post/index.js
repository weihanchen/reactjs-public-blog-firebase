import PostService from './services/PostService';

export class Post {
	constructor() {
		this.service = new PostService(this);
		return this.service;
	}
}

export default new Post();