import axios from 'axios';

const todoApi = axios.create({
  baseURL: 'https://my-json-server.typicode.com/sydneytiger/todo-app'
});

export { todoApi }