const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

// URL da API original
const API_URL = 'https://boasorte.teddybackoffice.com.br/users';

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/:id', async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/', async (req, res) => {
  try {
    const response = await axios.post(`${API_URL}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.patch('/:id', async (req, res) => {
  try {
    const response = await axios.patch(`${API_URL}/${req.params.id}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


app.delete('/:id', async (req, res) => {
  try {
    const response = await axios.delete(`${API_URL}/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Middleware-teddy rodando na porta ${PORT}`);
});
