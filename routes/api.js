const express = require("express");
const router = express.Router();

const komikController = require("../controller/komikController");
const userController = require("../controller/userController");
const verifikasiToken = require("../middleware/authMiddleware");

// Autentikasi
router.post("/register", userController.registrasiUser);
router.post("/login", userController.loginUser);

// Endpoint publik (Komik)
router.get("/komik", komikController.ambilSemuaKomik);
router.get("/komik/:id", komikController.ambilKomikBerdasarkanId);

// Endpoint terproteksi (Komik)
router.post("/komik", verifikasiToken, komikController.tambahKomik);
router.put("/komik/:id", verifikasiToken, komikController.perbaruiKomik);
router.delete("/komik/:id", verifikasiToken, komikController.hapusKomik);

module.exports = router;
