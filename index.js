const express = require('express');
const koneksiDatabase = require('./config/db');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes/api'));

async function jalankanServer() {
    await koneksiDatabase();
    app.listen(PORT, () => {
        console.log(`Server berjalan pada http://localhost:${PORT}`);
    }); 
}

jalankanServer();
