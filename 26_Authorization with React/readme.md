# Achmad Rizky

## Summary

## ==== Authorization with React ====

# Sistem Autentikasi

Fitur terakhir yang akan kita tambahkan ke aplikasi DinoTes adalah fitur autentikasi.

Autentikasi adalah proses yang dilakukan untuk memvalidasi identitas seseorang.

Fitur autentikasi ini bisa dibilang adalah fitur yang harus ada pada setiap aplikasi yang menyimpan data yang bersifat penting dan rahasia.

Terlebih lagi pada aplikasi seperti aplikasi notes, karena hampir semua aplikasi notes digunakan untuk menyimpan data yang bersifat pribadi, seperti data keuangan atau bahkan credential seperti username & password.

# [](https://devsaurus.com/authentication#model-autentikasi)Model Autentikasi

Banyak sekali model autentikasi yang bisa diimplementasikan pada sebuah aplikasi.

Paling tidak ada 5 model autentikasi yang sering digunakan:

1.  **Password-based**  
    Model autentikasi ini paling banyak digunakan, kita sering temukan pada aplikasi seperti email, social media platform, internal app dll.  
    Dimana proses autentikasi dilakukan dengan memasukan username dan password yang sudah tervalidasi di sistem.
2.  **Certificate-based**  
    Proses autentikasi dilakukan dengan menggunakan digital certificate.  
    Konsep digital certificate mirip dengan konsep Kartu Identitas.  
    Dimana yang berhak memiliki akses adalah mereka yang bisa menunjukan kartu identitas atau keanggotaan.
3.  **Multi-factor**  
    Proses autentikasi dilakukan lebih dari satu kali, contoh aplikasi yang menerapkan multi-factor ini adalah gmail, setiap kali kita berhasil login dengan menggunakan username & password kita masih harus memverifikasinya menggunakan smartphone baik dalam bentuk SMS OTP atau notifikasi.
4.  **Token-based**  
    Proses autentikasi dilakukan dengan menggunakan sebuah token, umumnya berupa kombinasi string yang sudah dienkripsi.  
    Sering digunakan di dalam komunikasi client-server atau REST API, dimana setiap request dari client divalidasi dengan menggunakan token yang sudah diberikan server ke client sebelumnya.

5.  **Biometric-based**  
    Proses autentikasi menggunakan karakter biologis, seperi pemindai wajah (facial recognition), fingerprint (sidik jari), voice (suara), dan eye scanner (pemindai mata).

Sedangkan untuk sebuah web app, model autentikasi yang sering digunakan adalah Local Authentication (username & password), OpenID atau OAuth dan Multi Factor.

# [](https://devsaurus.com/authentication#beda-authentication--authorization)Beda Authentication & Authorization

Istilah **Authentication**(autentikasi) & **Authorization**(otorisasi) sering digunakan secara bersamaan atau dianggap sama, meskipun ada sedikit perbedaan diantara keduanya.

**Authentication** adalah proses validasi sebuah identitas sedangkan **Authorization** adalah proses menentukan jenis akses untuk setiap identitas atau role.

Contoh dari Authorization dapat kita temukan di sistem internal di sebuah perusahaan atau universitas, dimana setiap departemen memiliki hak akses yang berbeda-beda.

Seseorang dari tim HR memiliki akses ke semua resource yang berhubungan dengan kepegawaian tapi tidak memiliki akses ke sistem finance, begitu juga sebaliknya tim finance memiliki akses ke sistem finance tapi tidak memilik akses ke sistem kepegawaian. Meskipun keduanya menggunakan aplikasi/sistem yang sama dan login dengan cara yang sama.

# [](https://devsaurus.com/authentication#library-dan-layanan-autentikasi)Library dan layanan Autentikasi

Selain modelnya yang banyak, kita juga akan temukan banyak library yang dibuat khusus untuk menangani proses autentikasi pada suatu aplikasi.

Karena membuat sistem autentikasi bukanlah pekerjaan yang sederhana, banyak hal yang harus dipertimbangkan karena menyangkut security atau keamanan data pengguna.

Kebocoran data pengguna adalah masalah yang sangat serius, oleh karena itu kita tidak disarankan membuat sistem autentikasi versi kita sendiri kecuali kita benar-benar tahu cara membuatnya.

Lebih baik kita menggunakan library atau layanan sistem autentikasi yang sudah terbukti dan teruji.

Beberapa contoh library autentikasi yang bisa kita gunakan untuk aplikasi NodeJS:

- [PassportJS](http://www.passportjs.org/)
- [Grant](https://github.com/simov/grant)
- [Permit](https://github.com/ianstormtaylor/permit)
- [Firebase Authentication](https://firebase.google.com/)

Contoh provider layanan autentikasi atau AaaS(_Authentication as a Service_) yang bisa digunakan dan tidak terbatas pada NodeJS tapi juga untuk stack yang lain:

- [Auth0](http://auth0.com/)
- [Okta](http://okta.com/)
