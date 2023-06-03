const opt = [
    {
      "nomor": 1,
      "soal": "Temanmu belajar hari ini di pagi hari",
      "pilihan1": "Semangat ya!",
      "pendidikan1": 0,
      "sosial1": 1,
      "kesehatan1": 0,
      "ekonomi1": 0,
      "pilihan2": "Loh, belajar!",
      "pendidikan2": 0,
      "sosial2": -1,
      "kesehatan2": 0,
      "ekonomi2": 0
    },
    {
      "nomor": 2,
      "soal": "Hari ini akan ada event upacara pramuka. Sayangnya, baret pramuka kamu hilang",
      "pilihan1": "Memasrahkan diri",
      "pendidikan1": -1,
      "sosial1": 0,
      "kesehatan1": 0,
      "ekonomi1": 0,
      "pilihan2": "Beli yang baru di kopsis",
      "pendidikan2": 1,
      "sosial2": 0,
      "kesehatan2": 0,
      "ekonomi2": -2
    },
    {
      "nomor": 3,
      "soal": "Jadwal Rapat OSIS-mu bertabrakan dengan Jadwal Rapat Ekstrakurikulermu!",
      "pilihan1": "Ikut OSIS",
      "pendidikan1": 0,
      "sosial1": 1,
      "kesehatan1": -1,
      "ekonomi1": 0,
      "pilihan2": "Ikut Ekstra",
      "pendidikan2": 1,
      "sosial2": 0,
      "kesehatan2": -1,
      "ekonomi2": 0
    },
    {
      "nomor": 4,
      "soal": "Hasil dari 16:2 adalah 8, 8 + 5 = 13, 13 + {absen - 13} = {absen}. {nama[absen]}, maju! Coba kerjakan soal ini: Dua buah muatan listrik memiliki besar yang sama yaitu 6 μC. Jika gaya coulomb yang terjadi antara dua muatan tadi adalah 1,6 N, tentukan jarak pisah kedua muatan tersebut!",
      "pilihan1": "45cm",
      "pendidikan1": 1,
      "sosial1": 0,
      "kesehatan1": 0,
      "ekonomi1": 0,
      "pilihan2": "4,5cm",
      "pendidikan2": -2,
      "sosial2": 0,
      "kesehatan2": 0,
      "ekonomi2": 0
    },
    {
      "nomor": 5,
      "soal": "Hari ini akan ada event upacara bendera. Sayangnya, topi sekolah kamu hilang",
      "pilihan1": "Memasrahkan diri",
      "pendidikan1": -1,
      "sosial1": 0,
      "kesehatan1": 0,
      "ekonomi1": 0,
      "pilihan2": "Beli yang baru di kopsis",
      "pendidikan2": 1,
      "sosial2": 0,
      "kesehatan2": 0,
      "ekonomi2": -2
    },
    {
      "nomor": 6,
      "soal": "Ada sekelompok anak kelas 7 yang sedang bermain basket. Sekelompok anak itu tidak dapat memasukkan bola basket kedalam ring. Disekelilingmu terdapat teman sekelas yang juga memperhatikan. Kamu dapat membiarkannya saja. Namun, kamu bisa saja memberikan sebuah challenge apabila bola itu masuk. Seperti contoh, ‘jika bolanya masuk saya bilang I love you ke mereka’",
      "pilihan1": "Biarkan",
      "pendidikan1": 0,
      "sosial1": 0,
      "kesehatan1": 0,
      "ekonomi1": 0,
      "pilihan2": "Bikin challenge kalau masuk",
      "pendidikan2": 0,
      "sosial2": 1,
      "kesehatan2": 0,
      "ekonomi2": -1
    },
    {
      "nomor": 7,
      "soal": "Sekarang saatnya untuk persiapan untuk mempresentasikan MAN PK! Oh tentu saja, kita membutuhkan taplak meja, vas bunga, video presentasi, dan teks presentasi yang sangat matang",
      "pilihan1": "Aku yang mencari infonya",
      "pendidikan1": 1,
      "sosial1": 0,
      "kesehatan1": -1,
      "ekonomi1": 0,
      "pilihan2": "Aku yang mempresentasikan",
      "pendidikan2": 0,
      "sosial2": 1,
      "kesehatan2": -1,
      "ekonomi2": 0
    },
    {
      "nomor": 8,
      "soal": "It’s Biologi Time! Bawang merah termasuk kedalam apa?",
      "pilihan1": "Umbi lapis",
      "pendidikan1": 1,
      "sosial1": 0,
      "kesehatan1": 0,
      "ekonomi1": 0,
      "pilihan2": "Umbi batang",
      "pendidikan2": -2,
      "sosial2": 0,
      "kesehatan2": 0,
      "ekonomi2": 0
    },
    {
      "nomor": 9,
      "soal": "It’s Biologi Time! Umbi Lapis disebut apa?",
      "pilihan1": "Bulbus",
      "pendidikan1": 1,
      "sosial1": 0,
      "kesehatan1": 0,
      "ekonomi1": 0,
      "pilihan2": "Geragih",
      "pendidikan2": -2,
      "sosial2": 0,
      "kesehatan2": 0,
      "ekonomi2": 0
    },
    {
      "nomor": 10,
      "soal": "Kucing kelas bernama Muthy datang lagi. Kali ini, dia melakukan tindakan membuang hajat di kursimu",
      "pilihan1": "Masukkan kucing kedalam blender",
      "pendidikan1": -1,
      "sosial1": -1,
      "kesehatan1": -1,
      "ekonomi1": -1,
      "pilihan2": "Membersihkan kursi",
      "pendidikan2": 1,
      "sosial2": 0,
      "kesehatan2": 0,
      "ekonomi2": 0
    },
    {
      "nomor": 11,
      "soal": "Hei lihat, ada sebuah boneka!",
      "pilihan1": "Biarkan",
      "pendidikan1": 0,
      "sosial1": 0,
      "kesehatan1": 0,
      "ekonomi1": 0,
      "pilihan2": "Jadikan miniatur pocong",
      "pendidikan2": -1,
      "sosial2": 1,
      "kesehatan2": 0,
      "ekonomi2": 0
    },
    {
      "nomor": 12,
      "soal": "Kamu berhasil membuat sebuah meme yang sangat lucu dan mengocok perut tentang madrasah, tapi sepertinya meme itu sedikit berbau satir",
      "pilihan1": "Hapus",
      "pendidikan1": 1,
      "sosial1": -1,
      "kesehatan1": 0,
      "ekonomi1": 0,
      "pilihan2": "Posting",
      "pendidikan2": -2,
      "sosial2": 2,
      "kesehatan2": 0,
      "ekonomi2": 0
    }
   ]