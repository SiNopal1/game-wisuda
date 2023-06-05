        /*

            Stats berfungsi untuk mengatur naik turunnya progress-bar. 
            
            Apabila sampai 0, maka game over
            Apabila sampai 6, maka tidak bisa ditambah lagi
            Defaultnya 3

        */

            var statsPendidikan = 3
            var statsSosial = 3
            var statsKesehatan = 3
            var statsEkonomi = 3
    
            /*
    
                statsDay berfungsi untuk menentukan berapa hari permainan berlangsung. 
                
                Apabila mencapai Hari ke-31, maka pemain akan diredirect untuk 
                mendapatkan kunci kodenya
    
                Jatah hints berfungsi untuk melimitasi pemain menggunakan bantuan
    
                Jumlah hari berfungsi untuk menghitung jumlah hari
            */
    
            var statsDay = 1
            var hint = 999
            var jumlahHari = opt.length + 1
    
            /*
                Memasukkan variabel yang akan digunakan untuk Document Object Model (DOM)
            */
           
            var pendidikan = document.getElementById("pendidikan")
            var sosial = document.getElementById("sosial")
            var kesehatan = document.getElementById("kesehatan")
            var ekonomi = document.getElementById("ekonomi")
            var efekPendidikan = document.getElementById("efek-pendidikan")
            var efekSosial = document.getElementById("efek-sosial")
            var efekKesehatan = document.getElementById("efek-kesehatan")
            var efekEkonomi = document.getElementById("efek-ekonomi")
            var day = document.getElementById("day")
            var pertanyaan = document.getElementById("pertanyaan")
            var pilihan1 = document.getElementById("pilihan1")
            var pilihan2 = document.getElementById("pilihan2")
            var hints = document.getElementById("hints")
            
            /* 
                Preset day 
            */
    
            document.getElementById("amountDay").innerHTML = opt.length
    
            /* 
                First Time Automation: Function
            */
            changeElements(statsDay, pertanyaan, pilihan1, pilihan2)
    
    
            function callElements() {
                /*
    
                    Semua yang ada disini dimaksudkan untuk mengambil semua elemen
                    Semua pengambilan elemen bertujuan untuk penggunaan teknik DOM (Document Object Model)
    
                    Tanpa awalan: Mengambil elemen progress
                    Berawalan efek: Mengambil elemen gambar pada progress
                    Day: Mengambil pada kalimat "DAY {day} OF 31"
                    Pertanyaan: Mengambil elemen pertanyaan
                    Pilihan: Mengambil elemen pilihan
    
                */
    
                var pendidikan = document.getElementById("pendidikan")
                var sosial = document.getElementById("sosial")
                var kesehatan = document.getElementById("kesehatan")
                var ekonomi = document.getElementById("ekonomi")
                var efekPendidikan = document.getElementById("efek-pendidikan")
                var efekSosial = document.getElementById("efek-sosial")
                var efekKesehatan = document.getElementById("efek-kesehatan")
                var efekEkonomi = document.getElementById("efek-ekonomi")
                var day = document.getElementById("day")
                var pertanyaan = document.getElementById("pertanyaan")
                var pilihan1 = document.getElementById("pilihan1")
                var pilihan2 = document.getElementById("pilihan2")
                var hints = document.getElementById("hints")
            }
    
            function indicator(score, dom) {
                /*
    
                    Konsep dari pemanggilan function ini adalah sebagai berikut:
                    1. score: skor pengurangan atau pertambahan pada database
                    2. dom: merujuk pada perubahan gambar
    
                    Apabila tidak berpengaruh, ubah gambar menjadi tidak ada lingkaran
                    Apabila berpengaruh, ubar gambar menjadi lingkaran kecil
                    Apabila sangat berpengaruh, ubah gambar menjadi lingkaran besar
    
                */
    
                if (score == 0) {
                    dom.src = "../aset/size/none.png"
                } else if (score == 1 || score == -1) {
                    dom.src = "../aset/size/small.png"
                } else {
                    dom.src = "../aset/size/big.png"
                }
            }
    
            function stalk() {
                if (view == 1) {
                    var dampakPendidikan = opt[statsDay - 1]["pendidikan1"]
                    var dampakSosial = opt[statsDay - 1]["sosial1"]
                    var dampakKesehatan = opt[statsDay - 1]["kesehatan1"]
                    var dampakEkonomi = opt[statsDay - 1]["ekonomi1"]
                } else if (view == 2) {
                    var dampakPendidikan = opt[statsDay - 1]["pendidikan2"]
                    var dampakSosial = opt[statsDay - 1]["sosial2"]
                    var dampakKesehatan = opt[statsDay - 1]["kesehatan2"]
                    var dampakEkonomi = opt[statsDay - 1]["ekonomi2"]
                }
            }
    
            function hintViewer(view, p, s, k, e) {
                /*
                    
                    Penggunaan singkatan:
                    view = pengguna mengarahkan mouse ke Hint 1 (1) atau Hint 2 (2)
                    p = pendidikan
                    s = sosial
                    k = kesehatan
                    e = ekonomi
    
                */
    
                /*
                    
                    Klik Hint 1, akan mengambil dampak dari Hint 1 pada database.js
                    Klik Hint 2, akan mengambil dampak dari Hint 2 pada database.js
    
                */
    
                if (view == 1) {
                    var dampakPendidikan = opt[statsDay - 1]["pendidikan1"]
                    var dampakSosial = opt[statsDay - 1]["sosial1"]
                    var dampakKesehatan = opt[statsDay - 1]["kesehatan1"]
                    var dampakEkonomi = opt[statsDay - 1]["ekonomi1"]
                } else if (view == 2) {
                    var dampakPendidikan = opt[statsDay - 1]["pendidikan2"]
                    var dampakSosial = opt[statsDay - 1]["sosial2"]
                    var dampakKesehatan = opt[statsDay - 1]["kesehatan2"]
                    var dampakEkonomi = opt[statsDay - 1]["ekonomi2"]
                }
    
                /*
    
                    Mengotak-atik indikator visual gambar
                
                */
    
                indicator(dampakPendidikan, p)
                indicator(dampakSosial, s)
                indicator(dampakKesehatan, k)
                indicator(dampakEkonomi, e)
            }
    
            async function evaluasi(view, statsday) {
                if (view == 1) {
                    var dampakPendidikan = opt[statsDay - 1]["pendidikan1"]
                    var dampakSosial = opt[statsDay - 1]["sosial1"]
                    var dampakKesehatan = opt[statsDay - 1]["kesehatan1"]
                    var dampakEkonomi = opt[statsDay - 1]["ekonomi1"]
                } else if (view == 2) {
                    var dampakPendidikan = opt[statsDay - 1]["pendidikan2"]
                    var dampakSosial = opt[statsDay - 1]["sosial2"]
                    var dampakKesehatan = opt[statsDay - 1]["kesehatan2"]
                    var dampakEkonomi = opt[statsDay - 1]["ekonomi2"]
                }
    
                if (statsPendidikan + dampakPendidikan <= 6) {
                    statsPendidikan += dampakPendidikan
                } else {
                    statsPendidikan = 6
                }
    
                if (statsSosial + dampakSosial <= 6) {
                    statsSosial += dampakSosial
                } else {
                    statsSosial = 6
                }
    
                if (statsKesehatan + dampakKesehatan <= 6) {
                    statsKesehatan += dampakKesehatan
                } else {
                    statsKesehatan = 6
                }
    
                if (statsEkonomi + dampakEkonomi <= 6) {
                    statsEkonomi += dampakEkonomi
                } else {
                    statsEkonomi = 6
                }
    
                pendidikan.value = statsPendidikan
                sosial.value = statsSosial
                kesehatan.value = statsKesehatan
                ekonomi.value = statsEkonomi
    
                if (statsPendidikan <= 0) {
                    swal("Maaf, coba lagi", "Kamu tidak memperhitungkan bagian pendidikan. Halaman ini akan kerefresh dan kamu harus mengulang dari awal :D", "error")
                        .then(() => {
                            location.reload();
                        });
    
                } else if (statsSosial <= 0) {
                    swal("Maaf, coba lagi", "Kamu tidak memperhitungkan bagian sosial. Halaman ini akan kerefresh dan kamu harus mengulang dari awal :D", "error")
                        .then(() => {
                            location.reload();
                        });
    
                } else if (statsKesehatan <= 0) {
                    swal("Maaf, coba lagi", "Kamu tidak memperhitungkan bagian kesehatan. Halaman ini akan kerefresh dan kamu harus mengulang dari awal :D", "error")
                        .then(() => {
                            location.reload();
                        });
    
                } else if (statsEkonomi <= 0) {
                    swal("Maaf, coba lagi", "Kamu tidak memperhitungkan bagian ekonomi. Halaman ini akan kerefresh dan kamu harus mengulang dari awal :D", "error")
                        .then(() => {
                            location.reload();
                        });
    
                }
            }
    
            function changeElements(statsDay, pertanyaan, pilihan1, pilihan2) {
                /*
                
                    Penggunaan DOM (Document Object Model) untuk mengubah:
    
                    1. Hari
                    2. Pertanyaan
                    3. Pilihan pertama
                    4. Pilihan kedua
    
                */
    
                day.innerHTML = statsDay
                pertanyaan.innerHTML = opt[statsDay - 1]["soal"]
                pilihan1.innerHTML = opt[statsDay - 1]["pilihan1"]
                pilihan2.innerHTML = opt[statsDay - 1]["pilihan2"]
            }
    
            function hint1() {
                /*
                
                    Apabila user klik Tanda Tanya pada bagian atas, maka function ini akan tereksekusi.
                    
                    Function ini akan mengambil semua keadaan elemen yang memiliki id, kemudian menampilkan hint
                    Berupa indikasi tidak ada lingkaran, lingkaran kecil, maupun lingkaran besar
    
                */
                if (hint > 0) {
                    hint -= 0
                    callElements()
                    hintViewer(1, efekPendidikan, efekSosial, efekKesehatan, efekEkonomi)
                } else {
                    swal("Jatah Hint anda habis", "Anda telah menggunakan seluruh hint anda. Silahkan refresh game ini jika anda tidak terima dengan saya", "warning");
                }
    
            }
    
            function hint2() {
                /*
                
                    Apabila user klik Tanda Tanya pada bagian bawah, maka function ini akan tereksekusi.
                    
                    Function ini akan mengambil semua keadaan elemen yang memiliki id, kemudian menampilkan hint
                    Berupa indikasi tidak ada lingkaran, lingkaran kecil, maupun lingkaran besar
    
                */
                if (hint > 0) {
                    hint -= 0
                    callElements()
                    hintViewer(2, efekPendidikan, efekSosial, efekKesehatan, efekEkonomi)
                } else {
                    swal("Jatah Hint anda habis", "Anda telah menggunakan seluruh hint anda. Silahkan refresh game ini jika anda tidak terima dengan saya", "warning");
                }
            }
    
            function resetHint(){
                indicator(0, efekPendidikan)
                indicator(0, efekSosial)
                indicator(0, efekKesehatan)
                indicator(0, efekEkonomi)
            }
    
            function option1() {
                callElements()
                evaluasi(1, statsDay)
                if(statsDay == 10){
                    localStorage.setItem("catKill", true)
                }
                statsDay += 1
                if(statsDay >= jumlahHari){
                    menang()
                }
                changeElements(statsDay, pertanyaan, pilihan1, pilihan2)
                resetHint()
            }
    
            function option2() {
                callElements()
                evaluasi(2, statsDay)
                if(statsDay == 10){
                    localStorage.setItem("catKill", false)
                }
                statsDay += 1
                if(statsDay >= jumlahHari){
                    menang()
                }
                changeElements(statsDay, pertanyaan, pilihan1, pilihan2)
                resetHint()
            }
    
            function menang(){
                swal("Selamat", "Anda telah memenangkan event bulan ini!", "success")
                    .then(() => {
                        window.location.href = pindahLokasi;
                    });
            }   