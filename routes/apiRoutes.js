/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

/// /////////////////////////////////
/// ////START:GROUP23////////
/// /////////////////////////////////
// Sravya GET requests

router.get('/', (req, res) => {
  res.send('Welcome to the College Park Restaurants API!');
});

router.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await db.restaurants.findAll();
    // const reply = halls.length > 0 ? { data: halls } : { message: 'no results found' };
    res.json(restaurants);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/restaurants/:rest_id', async (req, res) => {
  try {
    const hall = await db.restaurants.findAll({
      where: {
        restaurant_id: req.params.restaurant_id
      }
    });

    res.json(hall);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;