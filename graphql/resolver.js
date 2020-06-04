const Todo = require('../models/todo');

const users = [
  {
    name: 'Kirill',
    email: 'kumma@gmail.com',
    age: 54,
  },
  {
    name: 'Danila',
    email: 'osin@gmail.com',
    age: 18,
  },
];

module.exports = {
  test() {
    return {
      count: Math.round(Math.random() * 100),
      users: users,
    };
  },
  random({ min, max, count }) {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const random = Math.random() * (max - min) + min;
      arr.push(random);
    }
    return arr;
  },
  addTestUser({ user: { name, email } }) {
    const user = {
      name,
      email,
      age: Math.ceil(Math.round(Math.random() * 30)),
    };
    users.push(user);
    return user;
  },
  async getTodos() {
    try {
      const todos = await Todo.findAll();
      return todos;
    } catch (e) {
      console.log(e);
    }
  },
  async createTodo({ todo: { title } }) {
    try {
      const todo = await Todo.create({
        title,
        done: false,
      });
      return todo;
    } catch (e) {
      console.log(e);
    }
  },
  async completeTodo({ id }) {
    try {
      const todo = await Todo.findByPk(id);
      todo.done = true;
      await todo.save();
      return todo;
    } catch (e) {
      console.log(e);
    }
  },
  async deleteTodo({ id }) {
    try {
      const todo = await Todo.findByPk(id);
      await todo.destroy();
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  },
};
