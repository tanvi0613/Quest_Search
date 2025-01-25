const express = require('express');
const router = express.Router();


app.get('/api/search', async (req, res) => {
  try {
    const { query, type, page = 1, limit = 10 } = req.query;
    
    const searchConditions = {};
    
    if (query) {
      searchConditions.title = { $regex: query, $options: 'i' };
    }
    
    if (type) {
      searchConditions.type = type;
    }
    
    const questions = await Question.find(searchConditions)
      .skip((page - 1) * limit)
      .limit(Number(limit));
    
    const total = await Question.countDocuments(searchConditions);
    
    res.json({
      questions,
      totalPages: Math.ceil(total / limit),
      currentPage: Number(page)
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;