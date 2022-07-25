const express = require('express');
const asyncHandler = require('express-async-handler')
const router = express.Router();
const { Client } = require('pg');

/* GET analytes listing. */
router.get('/', asyncHandler(async (req, res, next) => {

  const analyteName = req.query.name

  if (!analyteName) {     
    return res.status(400).json({ error: "'name' query parameter required on request"})
  }

  const text = "SELECT * FROM analytes WHERE analyte = $1"
  const values = [analyteName]

  try {
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      }
    });

    client.connect()

    const analytesResponse = await client.query(text, values)
    
    client.end()
    console.info("res.rows", analytesResponse.rows)
    res.status(200).json({data: analytesResponse.rows});
  } catch (error) {
    res.json(error) 
  }

}));

module.exports = router;
