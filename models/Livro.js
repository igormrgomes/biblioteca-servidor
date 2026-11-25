const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: [true, 'O título é obrigatório.'],
      trim: true,
    },
    autor: {
      type: String,
      required: [true, 'O autor é obrigatório.'],
      trim: true,
    },
  }
);

module.exports = mongoose.model('Livro', livroSchema);
