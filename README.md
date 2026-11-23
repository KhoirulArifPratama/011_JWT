# REST API Autentikasi JWT & Manajemen Komik

Aplikasi backend REST API menggunakan Node.js, Express, PostgreSQL, dan Sequelize ORM dengan sistem autentikasi JSON Web Token (JWT).

## Daftar Isi
- [Fitur](#fitur)
- [Struktur Proyek](#struktur-proyek)
- [Instalasi](#instalasi)
- [Konfigurasi Database](#konfigurasi-database)
- [Menjalankan Aplikasi](#menjalankan-aplikasi)
- [Daftar Endpoint API](#daftar-endpoint-api)
- [Penamaan Fungsi (Bahasa Indonesia)](#penamaan-fungsi-bahasa-indonesia)

---

## Fitur
1. **Autentikasi User**:
   - Registrasi user baru dengan enkripsi password menggunakan bcrypt.
   - Login user dengan verifikasi password dan penerbitan JSON Web Token (JWT).
2. **Middleware Autentikasi**:
   - Verifikasi token JWT pada header `Authorization: Bearer <token>`.
3. **CRUD Data Komik**:
   - Endpoint publik untuk melihat daftar komik dan detail komik.
   - Endpoint terproteksi untuk menambah, mengubah, dan menghapus komik.

---

## Struktur Proyek
```
├── config/
│   ├── config.js         # Konfigurasi Sequelize untuk database
│   └── db.js             # Fungsi koneksiDatabase dan sinkronisasi model
├── controller/
│   ├── komikController.js# Pengendali logika CRUD komik
│   └── userController.js # Pengendali logika registrasi dan login
├── middleware/
│   └── authMiddleware.js # Middleware verifikasiToken JWT
├── models/
│   ├── index.js          # Inisialisasi Sequelize ORM
│   ├── komik.js          # Model data Komik
│   └── user.js           # Model data User
├── routes/
│   └── api.js            # Definisi rute endpoint API
├── .env.example          # Contoh variabel lingkungan
├── .gitignore            # Berkas yang diabaikan Git
├── .sequelizerc          # Konfigurasi jalur Sequelize CLI
├── index.js              # Berkas utama server Express
├── package.json          # Manajemen dependensi proyek
└── README.md             # Dokumentasi proyek
```

---

## Instalasi
1. Clone repositori:
   ```bash
   git clone https://github.com/KhoirulArifPratama/011_JWT.git
   cd 011_JWT
   ```
2. Install dependensi:
   ```bash
   npm install
   ```
3. Salin file `.env.example` ke `.env` dan sesuaikan kredensial database Anda:
   ```bash
   cp .env.example .env
   ```

---

## Konfigurasi Database
Pastikan database PostgreSQL sudah dibuat sesuai nama pada `DB_DATABASE` di file `.env`.
Tabel `Users` dan `Komiks` akan otomatis dibuat/disinkronkan melalui Sequelize saat server dijalankan.

---

## Menjalankan Aplikasi
```bash
npm start
```
Server akan berjalan secara default pada `http://localhost:3000`.

---

## Daftar Endpoint API

### 1. Autentikasi (Publik)
| Method | Endpoint | Deskripsi |
|---|---|---|
| `POST` | `/api/register` | Mendaftarkan akun user baru |
| `POST` | `/api/login` | Autentikasi user dan mendapatkan JWT |

### 2. Komik (Publik)
| Method | Endpoint | Deskripsi |
|---|---|---|
| `GET` | `/api/komik` | Mengambil seluruh data komik |
| `GET` | `/api/komik/:id` | Mengambil detail komik berdasarkan ID |

### 3. Komik (Terproteksi - Butuh Token JWT)
Header wajib: `Authorization: Bearer <token_jwt>`

| Method | Endpoint | Deskripsi |
|---|---|---|
| `POST` | `/api/komik` | Menambahkan data komik baru |
| `PUT` | `/api/komik/:id` | Memperbarui data komik berdasarkan ID |
| `DELETE` | `/api/komik/:id` | Menghapus data komik berdasarkan ID |

---

## Penamaan Fungsi (Bahasa Indonesia)
Seluruh fungsi pada proyek ini dinamai menggunakan kaidah Bahasa Indonesia:
- **`jalankanServer()`**: Menjalankan server Express dan menghubungkan ke database.
- **`koneksiDatabase()`**: Menguji autentikasi koneksi database dan sinkronisasi model.
- **`verifikasiToken()`**: Middleware untuk memvalidasi token JWT pada header request.
- **`registrasiUser()`**: Logika registrasi user dan hashing password.
- **`loginUser()`**: Logika autentikasi user dan pembuatan JWT token.
- **`ambilSemuaKomik()`**: Mengambil semua data komik dari database.
- **`ambilKomikBerdasarkanId()`**: Mengambil data komik spesifik berdasarkan primary key ID.
- **`tambahKomik()`**: Menyimpan data komik baru ke database.
- **`perbaruiKomik()`**: Mengubah data komik yang sudah ada.
- **`hapusKomik()`**: Menghapus data komik dari database.
