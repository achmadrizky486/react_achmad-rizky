# Achmad Rizky

## Summary

## ==== Introduction React ====

### **Pengertian dan Sejarah React JS**

React JS adalah sebuah pustaka javascript yang dibuat oleh facebook, ia bukan sebuah framework MVC. React JS bersifat composable user interface yang berarti pengguna bisa membuat berbagai UI dan nantinya bisa dibagi dalam beberapa komponen dan juga bersifat reusable component yang berarti komponennya bisa digunakan kembali tanpa harus membangun kembali dari awal lagi, React JS bisa digunakan untuk membangun antarmuka pengguna yang khusus untuk tampilan aplikasi dalam satu halaman yang menangani tampilan pada web dan aplikasi seluler.

Resmi dirilis pada tahun 2013, React JS dibuat oleh Jordan Walke. React JS ini telah menjadi salah satu pustaka UI terpenting dalam Javascript, dan telah digunakan oleh Facebook, Instagram, Netflix, Spotify, Medium hingga Twitter. React telah mengubah cara Anda membangun antarmuka UI, kebanyakan orang menyebut React JS sebuah framework. Secara teknis React JS bukanlah sebuah framework melainkan sebuah library yang digunakan untuk membuat UI.

Jordan Walke merupakan salah satu karyawan Facebook, prototipe React JS yang ia rilis pertama kali Fax JS yang terinspirasi dari XHP. Facebook menyadari bahwa aplikasi web milik mereka semakin kompleks, ada banyak bagian yang harus terus menerus di update seperti pada bagian news feed, chat list, chat box, dan lainnya secara realtime. Untuk memenuhi hal tersebut, sangat tidak memungkinkan untuk menggunakan JQuery yang masih tradisional karena memakan banyak biaya kedepannya. Memanipulasi DOM membutuhkan resource yang besar, sehingga React JS hadir untuk memberikan solusi berupa Virtual DOM yang menurut mereka lebih cepat.

### **Fitur yang Dimiliki React JS**

React JS juga memiliki fitur bawaan yang bisa digunakan sesuai dengan komponennya masing-masing, berikut ulasannya.

- #### **JSX**

  Daripada menggunakan Javascript biasa untuk melakukan templating, Anda bisa langsung menggunakan JSX yang merupakan javascript sederhana yang sangat memungkinkan untuk kuotasi HTML dan menggunakan Sintaksis tag pada HTML untuk membuat subkomponen. Sintaks HTML ini akan diproses menjadi sebuah panggilan ke Javascript dari React Framework. Sintaknya adalah const elemen < h1>Hello, world!< /h1>;

- #### **React Native**

  React Js juga memiliki native library yang diluncurkan oleh Facebook pada 2015 silam, yang menyediakan Arsitektur React pada Native Application seperti iOS, Android, dan juga UPD. React Native merupakan suatu framework yang bisa digunakan untuk membangun aplikasi hanya dengan Javascript, desain yang digunakannya sama persis seperti React sehingga Anda juga bisa menggunakannya untuk membangun aplikasi dengan UI Library yang luas dan declarative component. Keunggulan yang dimiliki framework satu ini adalah kode yang digunakan bisa untuk aplikasi Android maupun iOS, sehingga Anda hanya perlu membuat satu block code saja tanpa harus membuatnya dalam jumlah lebih.

- #### **Single-way Data Flow**

  Seperangkat nilai yang tidak lagi dapat diubah dan diteruskan ke dalam komponen renderer sebagai properti di tag HTML-nya, komponen yang dimilikinya tidak dapat memodifikasi properti apapun secara langsung namun tetap dapat melewati fungsi panggilan balik dengan bantuan yang dapat dimodifikasi.

### **Keuntungan dari React JS**

Keuntungan-keuntungan yang bisa Anda dapatkan dalam menggunakan React JS, beberapa keuntungan tersebut diulas sebagai berikut.

1.  #### **Simple**

    React JS itu simple dan mudah dipelajari, pendekatan yang dilakukannya berbasis komponen, lifecycle-nya terdefinisi dengan baik serta penggunaan Javascriptnya yang sederhana dalam membangun web profesional dan aplikasi mobile. Dengan menggunakan JSX Anda bisa menggunakan campuran dari HTML dengan Javascript, Anda tetap bisa menulis dalam Javascript biasa namun perlu diketahui bahwa JSX tetap lebih mudah untuk digunakan.

2.  #### **Mudah Dipelajari**

    Berbeda dengan Angular dan Ember yang menggunakan Domain Specified Language, React menggunakan bahasa yang hampir sama dengan bahasa HTML dan CSS sehingga Anda sebagai programmer pemula akan cepat akrab dengan React.

3.  #### **Berbasis Native**

    Menggunakan React Native Anda bisa membangun code yang mampu bekerja dengan baik bagi aplikasi Android, iOS maupun pada web application, ini memungkinkan untuk dikerjakan sebab adanya fitur Reusability code pada React Native nya.

4.  #### **Data Binding**

    Data Binding yang digunakan React adalah satu arah dengan arsitektur aplikasinya disebut dengan Flux berfungsi untuk mengontrol aliran data ke komponen melalui satu titik kontrol yang diatur oleh operator, aplikasi React JS yang besar mudah untuk dilakukan debug mandiri dengan fitur ini.

5.  #### **Performance**

    Pemutakhiran DOM sering menjadi salah satu penyebab kemacetan yang terjadi dalam proyek pembuatan aplikasi berbasis web, dengan menggunakan React JS hal tersebut bisa dihindari. React JS memungkinkan Anda untuk membangun DOM Virtual dan menghostingnya ke dalam memori sehingga setiap kali ada perubahan yang terjadi dalam DOM actual, DOM Virtual akan berubah dan otomatis terletak di memori. Akibatnya DOM tidak akan melakukan pembaruan secara rutin sehingga kecepatan kinerja aplikasi Anda tidak terganggu oleh aktivitas DOM.

6.  #### **Testability**

    Aplikasi React JS mudah untuk dilakukan uji atau testing, sehingga React view nya bisa digunakan sebagai function dari state. Anda dapat memanipulasi dengan menggunakan state yang dilewati ke view pada React JS, Anda bisa dengan segera melihat output dari code program atau dengan melakukan uji coba pada tombol Action, event, function, dan lainnya.
