const { Router } = require('express');

const Todo = require('../models/todo');
const router = Router();

router.get('/', async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.status(200).json(todos);
  } catch (e) {
    console.log(e);
    res.status(500).json(e.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const todo = await Todo.create({
      title: req.body.title,
      done: false,
    });
    res.status(201).json({ todo });
  } catch (e) {
    console.log(e);
    res.status(500).json(e.message);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByPk(+req.params.id);
    todo.done = req.body.done;
    await todo.save();
    res.status(200).json({ todo });
  } catch (e) {
    console.log(e);
    res.status(500).json(e.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    // const todos = await Todo.findAll({
    //   where: {
    //     id: +req.params.id,
    //   },
    // });
    // const todo = todos[0];
    const todo = await Todo.findByPk(+req.params.id);
    await todo.destroy();
    res.status(204).json({});
  } catch (e) {
    console.log(e);
    res.status(500).json(e.message);
  }
});

module.exports = router;
