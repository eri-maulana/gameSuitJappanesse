var tanya = true;
while(tanya){
// mentukan pilihan player
var player = prompt('silahkan pilih jagoan kamu\nbatu / kertas / gunting\ndan tolong gunakan smallcaps ketika mengetik jagoan kamu yakkk....');

// menentukan pilihan komputer
// menggunakan fungsi "Math.random"
var computer = Math.random();
if(computer < 0.34){
    computer = "batu";
} else if(computer >= 0.34  && computer <= 0.65 ){
    computer = "kertas";
} else {
    computer = "gunting";
}

// menentukan aturan
var hasil = '';
if (player === computer){
    hasil = "Waaah Ternyata Seriii";
} else if(player == "kertas"){
    hasil = (computer == "gunting") ? "Yahhh Kamu kalah, jangan menyerah coba lagi..." : "Horeee Kamu Menang , Hebat Banget";
} else if(player == "batu"){
    hasil = (computer == "kertas") ? "Yahhh Kamu kalah, jangan menyerah coba lagi..." : "Horeee Kamu Menang , Hebat Banget";
} else if(player == "gunting"){
    hasil = (computer == "batu") ? "Yahhh Kamu kalah, jangan menyerah coba lagi..." : "Horeee Kamu Menang , Hebat Banget";
} else {
    hasil = "Maaf Jagoan yang kamu pilih tidak tersedia hehe:\)";
}

// mengeluarkan output hasil
alert('Kamu Memilih ' + player + ' dan Komputer Memilih ' + computer +"\nHasil nya ? .... \n" + hasil);

tanya = confirm('Mau Main Lagi? \nPilih "OK" untuk Bermain Lagi\nPilih "CANCEL" untuk Mengakhiri Permainan');
}
alert('saya Eri Maulana mengucapkan Terima Kasih Banyak ^_^');