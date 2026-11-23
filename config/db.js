const db = require('../models');

async function koneksiDatabase() {
    try {
        await db.sequelize.authenticate();
        console.log('Koneksi ke database berhasil terhubung.');

        await db.sequelize.sync({ alter: true });
        console.log('Sinkronisasi database berhasil.');
    } catch (err) {
        console.error('Koneksi ke database gagal:', err.message);
        process.exit(1);
    }
}

module.exports = koneksiDatabase;
