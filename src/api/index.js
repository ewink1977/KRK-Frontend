import axios from 'axios';

const postsUrl = 'http://127.0.0.1:8000/api/posts/';
const eventsUrl = 'http://127.0.0.1:8000/api/events';
const userProfileUrl = 'http://127.0.0.1:8000/api/profiles';

export const fetchPosts = () => axios.get(postsUrl);
export const createPost = (newPost) => axios.post(postsUrl, newPost);
