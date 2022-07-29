const mongoose = require('mongoose');

const DietaSchema = new mongoose.Schema(
    {
          refeicao: String,
          calorias: String,
		      nutrientes: String
    }
);

module.exports = mongoose.model('Dieta', DietaSchema);