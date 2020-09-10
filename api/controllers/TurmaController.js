const database = require("../models");

class TurmaController {
  static async pegaTodasAsTurmas(req, res) {
    try {
      const todosOsTurmas = await database.Turmas.findAll();
      return res.status(200).json(todosOsTurmas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmaTurma(req, res) {
    const { id } = req.params;
    try {
      const umTurma = await database.Turmas.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(umTurma);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async criaTurma(req, res) {
    const novoTurma = req.body;
    try {
      const novoTurmaCriado = await database.Turmas.create(novoTurma);
      return res.status(200).json(novoTurmaCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaTurma(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await database.Turmas.update(novasInfos, {
        where: { id: Number(id) },
      });
      const turmaAtualizado = await database.Turmas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(turmaAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async apagaTurma(req, res) {
    const { id } = req.params;
    try {
      await database.Turmas.destroy({
        where: { id: Number(id) },
      });
      return res.status(200).json({
        mensagem: `id ${id} deletado com sucesso`,
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = TurmaController;
