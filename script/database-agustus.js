const opt = [
    {
      "nomor": 1,
      "soal": "Hei lihat! Pelajaran terakhir telah berakhir dan sekarang saatnya untuk bimbel",
      "pilihan1": "Akan kudengarkan serius",
      "pendidikan1": 2,
      "sosial1": -1,
      "kesehatan1": -1,
      "ekonomi1": 0,
      "pilihan2": "Bentar 1 match lagi",
      "pendidikan2": -2,
      "sosial2": 1,
      "kesehatan2": 1,
      "ekonomi2": 0
    },
    {
      "nomor": 2,
      "soal": "Kamu menemukan alamat salah satu teman angkatan yang pernah menendangmu hingga masuk kedalam puskesmas",
      "pilihan1": "Let him cook",
      "pendidikan1": 1,
      "sosial1": 1,
      "kesehatan1": 0,
      "ekonomi1": 0,
      "pilihan2": "Rencanakan upaya teror",
      "pendidikan2": -1,
      "sosial2": -1,
      "kesehatan2": 1,
      "ekonomi2": 0
    },
    {
      "nomor": 3,
      "soal": "Kamu tidak diberikan informasi kalau besok harus pakai baju olahraga dan sekarang kamu pakai baju batik",
      "pilihan1": "Sial",
      "pendidikan1": -1,
      "sosial1": 0,
      "kesehatan1": 0,
      "ekonomi1": 0,
      "pilihan2": "Ugh",
      "pendidikan2": -1,
      "sosial2": 0,
      "kesehatan2": 0,
      "ekonomi2": 0
    },
    {
      "nomor": 4,
      "soal": "17 Agustus ada lomba. Ada banyak lomba pada bulan itu. Setiap kategori harus diikuti siswa, kalau tidak maka akan ada denda",
      "pilihan1": "Saya mengajukan diri",
      "pendidikan1": 1,
      "sosial1": 1,
      "kesehatan1": -1,
      "ekonomi1": 0,
      "pilihan2": "Beri kesempatan ke yang lain",
      "pendidikan2": 0,
      "sosial2": 0,
      "kesehatan2": 1,
      "ekonomi2": -1
    },
    {
      "nomor": 5,
      "soal": "Kamu disuruh untuk melakukan dance tiktok yang sangat cringe. Kamu yakin kamu tidak akan melihat video dance itu",
      "pilihan1": "Siap laksanakan!",
      "pendidikan1": 0,
      "sosial1": 2,
      "kesehatan1": -1,
      "ekonomi1": 0,
      "pilihan2": "Demi kehormatanku, tidak!",
      "pendidikan2": 0,
      "sosial2": -1,
      "kesehatan2": 2,
      "ekonomi2": 0
    },
    {
      "nomor": 6,
      "soal": "Sial! Hari ini ada Ulangan Harian SKI dadakan dan kamu belum belajar!",
      "pilihan1": "Sial",
      "pendidikan1": -1,
      "sosial1": 0,
      "kesehatan1": 0,
      "ekonomi1": 0,
      "pilihan2": "Ugh",
      "pendidikan2": -1,
      "sosial2": 0,
      "kesehatan2": 0,
      "ekonomi2": 0
    },
    {
      "nomor": 7,
      "soal": "Seragam batik warna abu-abu diberikan ke seluruh siswa. Akan tetapi, teman sebangkumu belum mendapatkan seragam batik itu. Kamu berkata,",
      "pilihan1": "Gapapa, sabar aja",
      "pendidikan1": 1,
      "sosial1": 1,
      "kesehatan1": 1,
      "ekonomi1": 0,
      "pilihan2": "Halo dek!",
      "pendidikan2": -1,
      "sosial2": -1,
      "kesehatan2": 3,
      "ekonomi2": 0
    },
    {
      "nomor": 8,
      "soal": "Kamu diberikan kesempatan untuk nonton bareng di aula atas. Ternyata, isinya terlalu membosankan. Tidak ada temanmu yang pulang",
      "pilihan1": "Bubar, bubar!",
      "pendidikan1": -1,
      "sosial1": -1,
      "kesehatan1": 2,
      "ekonomi1": 0,
      "pilihan2": "Tetap diam disitu",
      "pendidikan2": 1,
      "sosial2": 0,
      "kesehatan2": -1,
      "ekonomi2": 0
    },
    {
      "nomor": 9,
      "soal": "Seekor kucing belang masuk kedalam kelas. Ia tampaknya sedang lapar",
      "pilihan1": "Bawa keluar kelas",
      "pendidikan1": -1,
      "sosial1": -1,
      "kesehatan1": 1,
      "ekonomi1": 1,
      "pilihan2": "Beri kucing makanan",
      "pendidikan2": 1,
      "sosial2": 0,
      "kesehatan2": 1,
      "ekonomi2": -2
    },
    {
      "nomor": 10,
      "soal": "Kamu mendapatkan uang saku mingguan",
      "pilihan1": "Hore!",
      "pendidikan1": 0,
      "sosial1": 0,
      "kesehatan1": 0,
      "ekonomi1": 2,
      "pilihan2": "Sumbangkan semua",
      "pendidikan2": 1,
      "sosial2": 1,
      "kesehatan2": 1,
      "ekonomi2": 0
    },
    {
      "nomor": 11,
      "soal": "Saat lagi ngobrol sama sirkel, tiba-tiba sirkel kamu mengalihkan topik ke topik yang tidak kamu sukai",
      "pilihan1": "Jadi great listener",
      "pendidikan1": 0,
      "sosial1": 1,
      "kesehatan1": -1,
      "ekonomi1": 0,
      "pilihan2": "Walkout",
      "pendidikan2": 0,
      "sosial2": -1,
      "kesehatan2": 1,
      "ekonomi2": 0
    },
    {
      "nomor": 12,
      "soal": "Kamu pulang sekolah dan memasuki Warkop Ayu pada hari rabu. Seseorang yang tidak kamu kenal, namun menggunakan seragam batik sekolah, sedang merokok didalam warkop",
      "pilihan1": "Foto untuk bukti",
      "pendidikan1": 1,
      "sosial1": -1,
      "kesehatan1": 0,
      "ekonomi1": 0,
      "pilihan2": "Menegur untuk tidak merokok",
      "pendidikan2": -1,
      "sosial2": 1,
      "kesehatan2": 0,
      "ekonomi2": 0
    }
   ]