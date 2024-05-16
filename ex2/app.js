const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = 16001;
const API_URL = 'http://localhost:16000/contratos';

module.exports = app;

// Set the view engine to Pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public'), { 
    setHeaders: (res, path, stat) => {
        if (path.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
    }
}));

// Route for the main page
app.get('/', async (req, res) => {
    try {
        const response = await axios.get(API_URL);
        const contratos = response.data;
        res.render('index', { contratos });
    } catch (error) {
        console.error('Error fetching data from API:', error.message);
    }
});

// Route for the page when you press an id

app.get('/:id', async (req, res) => {
    try {
        var d = new Date().toISOString().substring(0, 16)
        const response = await axios.get(`${API_URL}/${req.params.id}`);
        const contrato = response.data;
        res.render('contrato', { contrato , d});
    } catch (error) {
        console.error('Error fetching data from API:', error.message);
    }
});

// Route for entidades/:nipc

app.get('/entidades/:nipc', async (req, res) => {
    try {
        const nipc = req.params.nipc;
        const response = await axios.get(`${API_URL}?entidade=${nipc}`);
        const contratos = response.data;
        res.render('entidade', { nipc, contratos });
    } catch (error) {
        console.error('Error fetching data from API:', error.message);
        res.status(500).send('Error fetching data from API');
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
