const db = require('../models');

async function ambilSemuaKomik(req, res) {
    try {
        const komik = await db.Komik.findAll();
        res.status(200).json(komik);
    } catch (err) {
        console.error('Gagal mengambil data komik:', err.message);
        res.status(500).json({ error: 'Gagal mengambil data komik' });
    }
}

async function ambilKomikBerdasarkanId(req, res) {
    const { id } = req.params;
    try {
        const komik = await db.Komik.findByPk(id);
        if (!komik) {
            return res.status(404).json({ error: 'Komik tidak ditemukan' });
        }
        res.status(200).json(komik);
    } catch (err) {
        console.error('Gagal mengambil data komik berdasarkan ID:', err.message);
        res.status(500).json({ error: 'Gagal mengambil data komik berdasarkan ID' });
    }
}

async function tambahKomik(req, res) {
    const { title, description, author } = req.body;
    try {
        const newKomik = await db.Komik.create({ title, description, author });
        res.status(201).json({
            message: 'Komik berhasil ditambahkan',
            data: newKomik
        });
    } catch (err) {
        console.error('Gagal menambahkan komik:', err.message);
        res.status(500).json({ error: 'Gagal menambahkan komik' });
    }
}

async function perbaruiKomik(req, res) {
    const { id } = req.params;
    const { title, description, author } = req.body;
    try {
        const komik = await db.Komik.findByPk(id);
        if (!komik) {
            return res.status(404).json({ error: 'Komik tidak ditemukan' });
        }
        komik.title = title;
        komik.description = description;
        komik.author = author;
        await komik.save();
        res.status(200).json({
            message: 'Komik berhasil diperbarui',
            data: komik
        });
    } catch (err) {
        console.error('Gagal memperbarui komik:', err.message);
        res.status(500).json({ error: 'Gagal memperbarui komik' });
    }
}

async function hapusKomik(req, res) {
    const { id } = req.params;
    try {
        const komik = await db.Komik.findByPk(id);
        if (!komik) {
            return res.status(404).json({ error: 'Komik tidak ditemukan' });
        }
        await komik.destroy();
        res.status(200).json({ message: 'Komik berhasil dihapus' });
    } catch (err) {
        console.error('Gagal menghapus komik:', err.message);
        res.status(500).json({ error: 'Gagal menghapus komik' });
    }
}

module.exports = {
    ambilSemuaKomik,
    ambilKomikBerdasarkanId,
    tambahKomik,
    perbaruiKomik,
    hapusKomik
};
