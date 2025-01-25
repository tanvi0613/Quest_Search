const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const Question = require('./models/Question');
const connectDB = require('./config/db');

dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/search', async (req, res) => {
    try {
      const { query, type, page = 1, limit = 10 } = req.query;
      
      const currentPage = Math.max(1, parseInt(page));
      
      const searchConditions = {};
      
      if (query) {
        searchConditions.title = { $regex: query, $options: 'i' };
      }
      
      if (type) {
        searchConditions.type = type;
      }
      
      const totalQuestions = await Question.countDocuments(searchConditions);
      const totalPages = Math.ceil(totalQuestions / limit);
      
      const questions = await Question.find(searchConditions)
        .skip((currentPage - 1) * limit)
        .limit(Number(limit));
      
      res.json({
        questions,
        totalPages,
        currentPage
      });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });
  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});