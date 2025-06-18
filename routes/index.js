const express = require('express');
const router = express.Router();

const options = {
  method: 'GET',
}


//get a single random recipe
router.get('/random', async (req, res) => {
  const url = `https://dummyjson.com/recipes/1`;

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    res.send(result)
  } catch (error) {
    console.error(error);
  }
});

//get all tags
router.get('/tags', async (req, res) => {
  const url = 'https://dummyjson.com/recipes/tags'

  try {
    const response = await fetch(url, options)
    const result = await response.json()
    res.send(result)
  } catch (error) {
    console.log(error)
  }
})

//search a recipe
router.get('/search', async (req, res) => {
  const { q } = req.query;
  url = `https://dummyjson.com/recipes/search?q=${encodeURIComponent(q)}`;

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    res.send(result)
  } catch (error) {
    console.error(error);
  }
});

//get recipes list
router.get('/', async (req, res) => {
  let url = 'https://dummyjson.com/recipes?limit=20';

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    res.send(result)
  } catch (error) {
    console.error(error);
  }
});

//get recipes based on id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const url = `https://dummyjson.com/recipes/${id}`

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    res.send(result)
  } catch (error) {
    console.error(error);
  }
})

//get recipes with tags
router.get('/:category/:value', async (req, res) => {
  const {category, value} = req.params
  const url = `https://dummyjson.com/recipes/${category}/${value}`;

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    res.send(result)
  } catch (error) {
    console.error(error);
  }
});


module.exports = router;
