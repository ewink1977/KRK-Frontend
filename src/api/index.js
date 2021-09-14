import axios from 'axios';

export const authUserUrl = 'http://127.0.0.1:8000/api/auth/user'
export const loginUserUrl = 'http://127.0.0.1:8000/api/auth/login';
export const logoutUserUrl = 'http://127.0.0.1:8000/api/auth/logout';
export const postsUrl = 'http://127.0.0.1:8000/api/posts/';
// const eventsUrl = 'http://127.0.0.1:8000/api/events';
// const userProfileUrl = 'http://127.0.0.1:8000/api/profiles';

export const fetchPosts = () => axios.get(postsUrl);
export const createPost = (newPost) => axios.post(postsUrl, newPost);
