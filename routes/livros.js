const express = require('express');
const mongoose = require('mongoose');
const Livro = require('../models/Livro');

const router = express.Router();

function validarCamposObrigatorios(req, res, next) {
  const { body } = req;
  const campos = [
    { nome: 'titulo', rotulo: 'título' },
    { nome: 'autor', rotulo: 'autor' },
  ];

  const ausentes = campos.filter(
    ({ nome }) => typeof body?.[nome] !== 'string' || body[nome].trim() === ''
  );

  if (ausentes.length > 0) {
    const rotulos = ausentes.map(({ rotulo }) => rotulo);
    const camposObrigatorios =
      rotulos.length === 1
        ? `O campo "${rotulos[0]}" é obrigatório e deve ser um texto não vazio.`
        : `Os campos ${rotulos.map((rotulo) => `"${rotulo}"`).join(' e ')} são obrigatórios e devem ser textos não vazios.`;

    return res.status(400).json({ message: camposObrigatorios });
  }

  next();
}

function validarId(req, res, next) {
  if (!mongoose.isObjectIdOrHexString(req.params.id)) {
    return res.status(404).json({ message: 'Livro não encontrado.' });
  }

  next();
}

router.get('/', async (req, res, next) => {
  try {
    const livros = await Livro.find().sort({ titulo: 1 });
    return res.status(200).json(livros);
  } catch (error) {
    return next(error);
  }
});

router.post('/', validarCamposObrigatorios, async (req, res, next) => {
  try {
    const livro = await Livro.create({
      titulo: req.body.titulo.trim(),
      autor: req.body.autor.trim(),
    });

    return res.status(201).json(livro);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({ message: error.message });
    }

    return next(error);
  }
});

router.get('/:id', validarId, async (req, res, next) => {
  try {
    const livro = await Livro.findById(req.params.id);
    if (!livro) {
      return res.status(404).json({ message: 'Livro não encontrado.' });
    }

    return res.status(200).json(livro);
  } catch (error) {
    return next(error);
  }
});

router.put('/:id', validarId, validarCamposObrigatorios, async (req, res, next) => {
  try {
    const livro = await Livro.findByIdAndUpdate(
      req.params.id,
      {
        titulo: req.body.titulo.trim(),
        autor: req.body.autor.trim(),
      },
      { new: true, runValidators: true }
    );

    if (!livro) {
      return res.status(404).json({ message: 'Livro não encontrado.' });
    }

    return res.status(200).json(livro);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({ message: error.message });
    }

    return next(error);
  }
});

router.delete('/:id', validarId, async (req, res, next) => {
  try {
    const livro = await Livro.findByIdAndDelete(req.params.id);
    if (!livro) {
      return res.status(404).json({ message: 'Livro não encontrado.' });
    }

    return res.status(200).json({ message: 'Livro excluído com sucesso.' });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
