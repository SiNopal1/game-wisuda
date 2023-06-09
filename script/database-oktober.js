const opt = [
    {
      "nomor": 1,
      "soal": "Hari ini adalah Bahasa Indonesia. Teks cerpen masih belum selesai. Kamu tau apa artinya?",
      "pilihan1": "Menyelesaikan tugas",
      "pendidikan1": 2,
      "sosial1": -1,
      "kesehatan1": -1,
      "ekonomi1": 0,
      "pilihan2": "Tambahan 1,5 jam gaming",
      "pendidikan2": -2,
      "sosial2": 1,
      "kesehatan2": 1,
      "ekonomi2": 0
    },
    {
      "nomor": 2,
      "soal": "Hujan turun dari langit. Membuat genangan, ciptakan kenangan",
      "pilihan1": "Tetap di kelas",
      "pendidikan1": 0,
      "sosial1": 0,
      "kesehatan1": 1,
      "ekonomi1": 0,
      "pilihan2": "Saatnya hujan-hujanan",
      "pendidikan2": 0,
      "sosial2": 1,
      "kesehatan2": 0,
      "ekonomi2": 0
    },
    {
      "nomor": 3,
      "soal": "Kamu menunggu di depan lapangan sembari menunggu dijemput. Tiba-tiba, ada anak yang jatuh di tengah lapangan",
      "pilihan1": "Bergerak membantunya",
      "pendidikan1": 0,
      "sosial1": 0,
      "kesehatan1": 1,
      "ekonomi1": 0,
      "pilihan2": "Bergerak menertawakannya",
      "pendidikan2": -1,
      "sosial2": -1,
      "kesehatan2": -1,
      "ekonomi2": 0
    },
    {
      "nomor": 4,
      "soal": "Sudah saatnya bel masuk. Namun, ternyata bakso kamu belum habis dimakan dan guru masuk kedalam kelas",
      "pilihan1": "Taruh bakso di loker",
      "pendidikan1": 1,
      "sosial1": 0,
      "kesehatan1": -1,
      "ekonomi1": -1,
      "pilihan2": "Minta izin makan",
      "pendidikan2": -2,
      "sosial2": 0,
      "kesehatan2": 1,
      "ekonomi2": 1
    },
    {
      "nomor": 5,
      "soal": "Kamu menemukan hand sanitizer dan korek api",
      "pilihan1": "Tolong, jangan aneh-aneh",
      "pendidikan1": 1,
      "sosial1": -2,
      "kesehatan1": 0,
      "ekonomi1": 0,
      "pilihan2": "Setidaknya bakar sesuatu!",
      "pendidikan2": -1,
      "sosial2": 2,
      "kesehatan2": -1,
      "ekonomi2": -2
    },
    {
      "nomor": 6,
      "soal": "Pertengkaran mulai memanas di kedua belah pihak",
      "pilihan1": "Aku memihak yang kanan",
      "pendidikan1": -1,
      "sosial1": -1,
      "kesehatan1": -1,
      "ekonomi1": -1,
      "pilihan2": "Mencoba mendamaikan",
      "pendidikan2": 0,
      "sosial2": 1,
      "kesehatan2": 0,
      "ekonomi2": 0
    },
    {
      "nomor": 7,
      "soal": "Kamu memiliki sesuatu untuk dibercandakan. Namun, bisa saja candaan itu menyindir pihak-pihak tertentu",
      "pilihan1": "Beritahu candaannya",
      "pendidikan1": -1,
      "sosial1": -1,
      "kesehatan1": -1,
      "ekonomi1": -1,
      "pilihan2": "Masukkan kedalam hati",
      "pendidikan2": 0,
      "sosial2": 0,
      "kesehatan2": 0,
      "ekonomi2": 0
    },
    {
      "nomor": 8,
      "soal": "Kamu diberikan arahan untuk berdo’a agar bisa diterima di sekolah yang difavoritkan",
      "pilihan1": "Hei, matchnya belum selesai!",
      "pendidikan1": -1,
      "sosial1": 1,
      "kesehatan1": 0,
      "ekonomi1": 0,
      "pilihan2": "Aku mengadahkan tangan",
      "pendidikan2": 1,
      "sosial2": -1,
      "kesehatan2": 0,
      "ekonomi2": 0
    },
    {
      "nomor": 9,
      "soal": "Saat ini, kamu sedang sangat mengantuk saat guru sedang mengajar Matematika. Biasalah, kan ditaruhnya suka di jam terakhir",
      "pilihan1": "Harus mendengarkan penjelasan guru",
      "pendidikan1": 1,
      "sosial1": 0,
      "kesehatan1": 0,
      "ekonomi1": 0,
      "pilihan2": "Pura-pura sakit demi UKS",
      "pendidikan2": 0,
      "sosial2": 0,
      "kesehatan2": 1,
      "ekonomi2": 0
    },
    {
      "nomor": 10,
      "soal": "Hari ini senin. Kabar baiknya, kamu membawa topi. Kabar buruknya, kamu membawa peci hitam",
      "pilihan1": "Beli peci di kopsis",
      "pendidikan1": 1,
      "sosial1": 0,
      "kesehatan1": 0,
      "ekonomi1": -2,
      "pilihan2": "Berharap dapat peci dari rongsokan",
      "pendidikan2": -1,
      "sosial2": 0,
      "kesehatan2": 0,
      "ekonomi2": 0
    },
    {
      "nomor": 11,
      "soal": "Bulan Oktober adalah bulan bahasa. Madrasah memberikan beberapa lomba terkait dengan bahasa",
      "pilihan1": "Ikut",
      "pendidikan1": 2,
      "sosial1": 0,
      "kesehatan1": -1,
      "ekonomi1": 0,
      "pilihan2": "Malas",
      "pendidikan2": -1,
      "sosial2": 0,
      "kesehatan2": 2,
      "ekonomi2": 0
    },
    {
      "nomor": 12,
      "soal": "Usai sholat dhuha, kamu melihat keluar jendela dan melihat Guru Qurdis sedang menunggu dijemput",
      "pilihan1": "Jemput",
      "pendidikan1": 1,
      "sosial1": 0,
      "kesehatan1": 0,
      "ekonomi1": 0,
      "pilihan2": "Tunjuk siswa lain",
      "pendidikan2": 0,
      "sosial2": 0,
      "kesehatan2": 0,
      "ekonomi2": 0
    }
   ]