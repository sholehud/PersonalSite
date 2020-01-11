var setWaktuMundur = new Date("Jan 10, 2020 00:00:00").getTime();

var x = setInterval(function () {
    var getHariIni = new Date().getTime();

    var jarak = setWaktuMundur - getHariIni;

    var hari = Math.floor(jarak / (1000 * 60 * 60 * 24));
    var jam = Math.floor((jarak % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var menit = Math.floor((jarak % (1000 * 60 * 60)) / (1000 * 60));
    var detik = Math.floor((jarak % (1000 * 60)) / 1000);

    document.getElementById("waktu").innerHTML = hari + "Hari " + jam + "Jam " + menit + "Menit " + detik + "Detik";

    if (jarak > 0) {
        document.getElementById("info").innerHTML = "Maaf, website ini sedang dalam perbaikan. Anda bisa mengunjungi media lain dibawah ini:";
        document.getElementById("fb").innerHTML = "Facebook";
        document.getElementById("ig").innerHTML = "Instagram";
        document.getElementById("in").innerHTML = "Linkedin";
    } else {
        clearInterval(x);
        document.getElementById("waktu").innerHTML = "";
        document.getElementById("info").innerHTML = "Maaf, website ini sedang dalam perbaikan. Anda bisa mengunjungi media lain dibawah ini:";
        document.getElementById("fb").innerHTML = "Facebook";
        document.getElementById("ig").innerHTML = "Instagram";
        document.getElementById("in").innerHTML = "Linkedin";
    }
}, 1000);