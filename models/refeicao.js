const mongoose = require('mongoose');

const RefeicaoSchema = new mongoose.Schema(
    {
          prato: String,
          dia: String,
		      horario: String,
          refeicoesDia: String,
          alimento: String,
          calorias:String
    }
);

module.exports = mongoose.model('Refeicao', RefeicaoSchema);