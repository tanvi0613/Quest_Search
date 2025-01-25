const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  type: String,
  title: String,
  solution: String,
  options: [{ 
    text: String, 
    isCorrectAnswer: Boolean 
  }],
  blocks: [{
    text: String,
    showInOption: Boolean,
    isAnswer: Boolean
  }]
}, { collection: 'data' });

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;