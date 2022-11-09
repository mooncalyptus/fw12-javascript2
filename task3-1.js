//nomor 1
/* 
Built-in function methods:
1. .charAt() = berfungsi untuk mengambil index dari string
contoh :
let string = "yupi";
tes = string.charAt(2);
console.log(tes);
output : p

2. concat = berfungsi untuk menggabungkan dua string ke dalam string baru
contoh:
let a = "fazz";
let b = "track";
let result = a.concat(b);
console.log(result);
output : fazztrack

3. toLowerCase() = berfungsi untuk membuat semua huruf yang ada didalam string menjadi lowercase
contoh :
let teks = "SELAMAT PAGI";
let result = teks.toLowerCase(teks);
console.log(result);
output : selamat pagi

4. length() = berfungsi untuk menghitung panjang string
contoh :
let teks = "hello world";
result = teks.length;
console.log(result);

5. toString = berfungsi untuk mengubah tipe data boolean atau number menjadi string
contoh :
let num = 15;
let result = num.toString();
console.log(typeof result);
output = string

6. sort = berfungsi untuk mengurutkan value pada array
let nama = ["Chika", "Bagas", "Risa", "Diana"];
let result = nama.sort();
console.log(result);
output = [ 'Bagas', 'Chika', 'Diana', 'Risa' ];

7. toUpperCase() = berfungsi untuk membuat semua huruf yang ada didalam string menjadi uppercase
contoh :
let teks = "selamat pagi";
let result = teks.toUowerCase(teks);
console.log(result);
output : SELAMAT PAGI

8. filter() = berfungsi untuk memfilter data array
contoh:
memfilter data yang merupakan bilangan genap
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const value = values.filter((elemen) => elemen % 2 === 0);
console.log(value);
output : [ 2, 4, 6, 8 ]

9. pop() = berfungsi untuk menghapus elemen terakhir pada array
contoh: 
const mahasiswa = ['budi', 'bambang', 'ucup'];
console.log(mahasiswa);
const mahasiswaDihapus = mahasiswa.pop();
console.log(mahasiswa);
output :
[ 'budi', 'bambang', 'ucup' ]
[ 'budi', 'bambang' ]

10. push() = berfungsi untuk menambahkan elemen ke dalam array
contoh :
const nama = ["Rika", "Bagas", "Caca"];
console.log(nama);
nama.push("Anisa", "Reza");
console.log(nama);
output :
[ 'Rika', 'Bagas', 'Caca' ]
[ 'Rika', 'Bagas', 'Caca', 'Anisa', 'Reza' ]
*/