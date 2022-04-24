# Achmad Rizky

## Summary

## ==== React Fundamental====

Database relasional merupakan jenis Database Management System (DBMS) yang terbaru, yang memberikan gambaran atau bagam skema yang menjelaskan tentang hubungan antar tabel bisa dilakuan di dalam sebuah database. Model database ini digagas oleh seorang pakar database bernama EF codd.

Jenis database relasional ini merupakan jenis database yang paling sederhana disamping jenis database pendahulunya yaitu database Hierarki **_(Hierarchical Database Model_**_)_, dan database Jaringan **_(Network Database Model)_.** Jenis database relasional menggunakan strukrur database 2D (dimensi). Perlu diketahui bahwa kedua model pendahulu relasional database yaitu database hirarki dan database jaringan untuk saat ini sudah tidak banyak digunakan, hal ini karena adanya berbagai kelemahan dan fungsionalitas yang ada dari kedua jenis database tersebut yang sudah memenuhi spesifikasj atau kebutuhan aplikasi modern saat ini, yang menuntut sistem database yang lebih kompleks dan terstruktur untuk memenuhi berbagai kebutuhan komputasi skala besar saat ini, baik dalam skala personal maupun Enterprise.

## Bagaimana Relasi Database bisa Terhubung ?

Untuk membuat sistem basis data yang terpadu kita perlu menghubungkan terlebih dahulu kedua tabel yang ingin Kita dikoneksikan. Untuk setiap tabel yang ada terdapat [field](https://dosenit.com/software/dbms/mysql/fungsi-string-field-pada-mysql) kunci atau primary [key](https://dosenit.com/php/fungsi-key-simplexml-php), primary key ini dikoneksikan padatabel kedua sehingga di tabel kedua ini menjadi foreign key. Dengan relational database ini Kita cukup mengubungkan kedu tabel yang ada melalui foreign key.

## Konsep RDBMS

Ilmu yang mempelajari tentang konsep Database Relasional disebut _**Database Relational System**_. Database relasional System merupakan konsep yang muncul setelah adanya konsep database pendahulunya yaitu network database dan hierarchycal database. Dalam jenis database relasional ini, ada penggambaran yang jelas tentang hubungan suatu tabel dengan tabel yang lain bisa dilakukan, hubungan ini digambarkan dengan garis solid yang menghubungkan antara satu field name di tabel yang satu, dengan satu fieldname di tabel yang lain. Misalnya fieldname kdpasien di tabel pasien dengan fieldname kdpasien di tabel diagnosapasien, yang saling terhubung karena adanaya kesamaan dalam fungsi dan entitas dari objek yang dimaksud. Dengan demikian, sebuah database relasional ini dirancang untuk memiliki keterkaitan antar tabelnya, menyesuaikan dengan program atau analisa sistem yang dirancang.

## Aplikasi RDBMS

Untuk diketahui Database adalah sekumpulan tabel yag disimpan dalam bentuk [file](https://dosenit.com/ilmu-komputer/file)/elektronik dan dikelompokkan berdasarkan skema yang sudah dibuat oleh user. Untuk melakukan pembuatan struktur, pengisian, pengeditan, dan penghapusan database diperlukan software atau perangkat lunak, dan jenis perangkat lunak yang dimaksud adalah RDBMS atau disebut Relational Database Management System. Sedangkan command yang diterapkan untuk melakukan berbagai manipulasi terhadap database dan tabel yang ada di software RDBMS disebut [SQL](https://dosenit.com/sql/sql) (Structured [Query](https://dosenit.com/php/fungsi-mysqli-query-php) Language).

RDBMS adalah sebuah software komputer yang digunakan untuk membuat, menyunting dan menanajemen basis data yang telah mendukung skema relational. Pemanfaatan program ini sangat banyak sekali contohnya, misalnya dalam sistem apoteker, sistem penyewaan (Rental) mobir, sistem penjualan barang, sistem kepustakaan, sistem pertokoan, dan masih banyak lagi. RDBMS sendiri memiliki tingkatan sesuai skala yang akan digunakan, ada RDBMS yang digunakan untuk small-[scale](https://dosenit.com/python/scale-python) database semisal aplikasi stock sederhana, aplikasi perpustakaan, dan ada aplikasi large-scale database yaitu aplikasi RDBMS dengan skala yang lebih luas mencakup kebutuhan enteprise, contohnya adalah aplikasi Oracle yang digunakan untuk menangani kebutuhan akan manajemen Perusahaan berskala besar (dengan jumlah record yang sangat besar).

## Jenis-jenis Database Relasional

Secara umum ada 3 jenis database relasional yaitu :

**1. One to One (1 to 1)**

Relasi database model ini terjadi apalabila sebuah data terdapat pada 2 buah tabel, dan hanya diperbolehkan satu data saja pada masing masing tabel (unique record), sama halnya seperti primary key, record yang ada pada model ini tidak boleh ada yang sama.

**2. One to Many (1 to n)**

Relasi database model ini membolehkan data yang sama pada tabel kedua, tapi hanya membolehkan data yang bersifat unique (unik) pada tabel pertama. Jadi pada model tabel kedua boleh memiliki beberapa data yang sama.

**3. Many to many (n to m)**

Berbeda dengan kedua model diatas, relasi database model ini membolehkan beberapa data yang sama baik pada tabel pertama maupun tabel kedua. Dengan demikian tidak ada unique record di kedua tabel tersebut.

**Tujuan model relasional database**

- Menciptakan konsep database DBMS yang terintegrasi dan bersifat standalone
- Menciptakan DBMS yang konsisten dan menghindari terjadinya data redundancy (duplikasi data) dengan menerapkan konsep normalisasi data, dengan tujuan untuk meningkatkan kemampuan dalam mengambil dan juga memproses data.

**Karakteristik Database Relasional**

- Struktur tabel bersifat Tabular
- Satu [bahasa pemrograman](https://dosenit.com/kuliah-it/pemrograman/macam-macam-bahasa-pemrograman) atau sintaksis yang ada dapat digunakan untuk semua user
- Field dikoneksikan melalui value didalam record tabel

**Kelebihan Database Relasional**

- Model tampilan / View Tabular dan Query nya berupa table
- Tidak adanya variabel pointer
- Kemampuan operator yang baik
- User-friendly
