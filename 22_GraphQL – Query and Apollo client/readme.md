# Achmad Rizky

## Summary

## ==== GraphQL - Query and Apollo Client====

# Pengenalan

Graphql adalah sebuah konsep baru dalam membangun sebuah API. Graphql(Query Language) dikembangkan oleh Facebook dan diimplementasikan pada sisi server. Meskipun sebuah query language tetapi Graphql ini tidak berhubungan secara langsung dengan database, dengan kata lain GraphQL tidak terbatas untuk database tertentu baik sql ataupun nosql. Posisi Graphql ini berada pada sisi client dan server yang berhubungan / mengakses suatu API. Salah satu tujuan pengembangan bahasa query ini adalah untuk mempermudah komunikasi data antara backend dan frontend/mobile aplikasi.

GraphQL dapat diimplementasikan di berbagai bahasa sisi client seperti react, vue, meteor, dll. Apapun jenis framework nya selama dapat mengakses data dengan API.

dan karena GraphQL ini hanya penerjemah (query language) dan runtime saja maka tidak tergantung pada bahasa pemograman sisi server dan database apapun, kalian bisa cek disini [http://graphql.org/code/](http://graphql.org/code/) .

# Perbedaan GraphQL dengan REST API

Perbedaan mencolok antara GraphQL dengan REST API adalah struktur output data yang fleksibel. Contoh REST API, ketika kita ingin mendapatkan data teman dari suatu user maka frontend / client akan me request kepada server dengan format seperti berikut :

> GET /users/12/friends/

Cara membaca nya adalah tampilkan teman user dengan id 12, ketika client me request endpoint tersebut maka server akan menampilkan list teman user dengan id 12. Dengan mekanisme seperti ini, yang mendefinisikan data adalah **server** maksudnya adalah yang menentukan data user apa saja yang akan diberikan kepada client seperti nama, alamat, telepon, dll adalah **server.**

Sedangkan jika kita menggunakan GraphQL maka yang akan mendefinisikan data yang dibutuhkan adalah pada sisi client (Frontend atau aplikasi). Mobile apps atau Frontend dapat sesuka hati dalam menentukan data apa saja yang dibutuhkan dan sesuai dengan komponen aplikasi yang sedang dikerjakan.

Pada contoh query GraphQL diatas artinya adalah client meminta user dengan attribute nama dan alamat beserta teman nya dengan attribute nama saja.

Dengan menggunakan mekanisme GraphQL ini maka :

- Hanya terdapat 1 buah endpoint untuk berkomunikasi dengan server untuk mendapatkan suatu data.

- Client/Aplikasi dapat mendefinisikan data yang akan dibutuhkan sesuka hati sehingga akan meningkatkan efisiensi mengkonsumsi API dan Hemat pertukaran data.

Keunggulan GraphQL yang lain adalah mengatasi _overfetching_.

_Overfetching_ atau pengambilan data berlebih adalah di mana _client_ mendapatkan lebih banyak data daripada yang dibutuhkan komponen fitur tertentu.

Selain itu keunggulan lain nya adalah mendukung _rapid development_ di _front end._ Karena seperti yang sudah dijelaskan diatas, dengan GraphQL kita bisa mendefinisikan sendiri data yang kita mau tanpa harus meminta _backend_ untuk menyediakan data yang baru lagi yang mana akan membuat proses _development_ pada frontend akan menjadi terhambat karena harus menunggu _backend_ untuk menambahkan datanya dan membuat endpoint baru.

## Mutation[](https://graphql.org/learn/queries/#mutations)

Sebagian besar diskusi GraphQL berfokus pada pengambilan data, tetapi semua platform data lengkap memerlukan cara untuk memodifikasi data sisi server juga.

Di REST, permintaan apa pun mungkin akan menyebabkan beberapa efek samping pada server, tetapi menurut konvensi, disarankan agar seseorang tidak menggunakan `GET`permintaan untuk mengubah data. GraphQL serupa - secara teknis kueri apa pun dapat diimplementasikan untuk menyebabkan penulisan data. Namun, berguna untuk menetapkan konvensi bahwa setiap operasi yang menyebabkan penulisan harus dikirim secara eksplisit melalui mutasi.

Sama seperti dalam kueri, jika bidang mutasi mengembalikan tipe objek, Anda dapat meminta bidang bersarang. Ini dapat berguna untuk mengambil status baru suatu objek setelah pembaruan.

# Kesimpulan

Meskipun GraphQL ini merupakan teknologi baru daripada REST API tetapi bukan berarti GraphQL lebih unggul dari segi performa. Salah satu penelitian tentang GraphQL mengatakan bahwa GraphQL masih belum mengungguli performance RESTful API, dengan catatan sistem yang dibangun memiliki kompleksitas rendah
