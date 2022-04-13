# Achmad Rizky

## Summary

## ==== Testing ====

Mungkin banyak diantara developer yang ketika mendengar istilah **TDD** atau **_test-driven development_** akan merasa _overwhelmed,_ tapi sebenarnya TDD tidaklah menakutkan. Artikel ini dibuat untuk teman-teman yang ingin mengenal atau memulai TDD _practice_ pada front-end development, khususnya React.

![](https://miro.medium.com/max/1400/1*vHHBwcUFUaHWXntSnqKdCA.png)

Sedikit selingan, di wonderlabs, kami secara intensif menggunakan nodejs dan react untuk membangun aplikasi web dengan berbagai _scope_ dan skala, tapi tidak terbatas pada itu saja. Code quality adalah salah satu yang utama, oleh karena itu, testing juga menjadi sangat penting dalam mengembangkan sebuah aplikasi di wonderlabs.

# Manfaat Test

Sebelum kita mulai, kenapa kita harus membuat test untuk aplikasi yang kita buat? Diantara manfaat membuat test adalah:

- Ketika aplikasi kita mempunyai _coverage_ yang baik (mayoritas _codebase_ tercover oleh test), Kita akan merasa percaya diri jika harus mengubah suatu bagian pada aplikasi kita. Saat kita mengubah bagian tersebut, dan ada bagian yang lain menjadi _broken_ kita akan segera mengetahuinya.
- Mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi kita bebas bug, tetapi kita bisa mencegah beberapa hal yang berpotensi menjadi bug.
- Kita menjadi terbiasa mendesain sebelum mengerjakan. Beberapa studi telah dilakukan dan hasilnya TDD sangat efektif meningkatkan produktifitas, karena ada objektif yang harus kita capai, yaitu menjadikan semua test case passed.
- Dan lain-lain.
  Kode pengujian adalah praktik yang membingungkan bagi banyak pengembang. Itu bisa dimengerti karena menulis tes membutuhkan lebih banyak usaha, waktu, dan kemampuan untuk meramalkan kemungkinan kasus penggunaan. Startup dan pengembang yang bekerja pada proyek yang lebih kecil biasanya lebih suka mengabaikan tes sama sekali karena kurangnya sumber daya dan tenaga kerja.

Namun, ada beberapa alasan mengapa saya yakin Anda harus menguji komponen Anda:

1.  Ini membuat Anda merasa lebih percaya diri tentang kode Anda.
2.  Tes meningkatkan produktivitas Anda.

React juga tidak berbeda. Ketika seluruh aplikasi Anda mulai berubah menjadi tumpukan komponen yang sulit dipelihara, pengujian menawarkan stabilitas dan konsistensi. Menulis tes dari hari pertama akan membantu Anda menulis kode yang lebih baik, mendeteksi bug dengan mudah, dan mempertahankan alur kerja pengembangan yang lebih baik.

Dalam artikel ini, saya akan membawa Anda melalui segala sesuatu yang perlu Anda ketahui untuk menulis tes untuk komponen React Anda. Saya juga akan membahas beberapa teknik dan praktek-praktek terbaik saat kita melakukannya. Mari kita mulai!

## Testing Components dalam React

Pengujian adalah proses memverifikasi bahwa _test assertions_ kita benar dan bahwa mereka tetap benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode Anda.

Misalnya, asersi bisa menjadi sesuatu yang sederhana seperti ini: "Ketika pengguna menavigasi ke / **login**, modal dengan id `#login` harus dirender." Jadi, jika ternyata Anda mengacaukan komponen masuk entah bagaimana, asersi akan kembali salah. Asersi tidak hanya terbatas pada apa yang diberikan — Anda juga dapat membuat asersi tentang bagaimana aplikasi merespons interaksi pengguna dan tindakan lain.

Ada banyak strategi pengujian otomatis yang digunakan oleh pengembang front-end untuk menguji kode mereka. KIta akan membatasi diskusi kita hanya dengan tiga paradigma uji perangkat lunak yang populer dengan React: pengujian unit, pengujian fungsional, dan pengujian integrasi.

### Unit Testing

Pengujian unit adalah salah satu tes veteran yang masih populer di kalangan pengujian. Seperti namanya, Anda akan menguji setiap bagian kode untuk memverifikasi bahwa mereka berfungsi secara independen seperti yang diharapkan. Karena arsitektur komponen React, tes unit adalah fit alami. Mereka juga lebih cepat karena Anda tidak harus bergantung pada browser.

Tes unit membantu Anda memikirkan setiap komponen secara terpisah dan memperlakukannya sebagai fungsi. Tes unit Anda untuk komponen tertentu harus menjawab pertanyaan-pertanyaan berikut:

1.  Apakah ada alat peraga? Jika ya, apa hubungannya dengan mereka?
2.  Komponen apa yang dirender?
3.  Haruskah itu memiliki sebuah keadaan? Kapan atau bagaimana seharusnya memperbarui keadaan?
4.  Apakah ada prosedur yang harus diikuti ketika mount dan unmounts, atau pada interaksi pengguna?

### Pengujian Fungsional

Tes fungsional yang digunakan untuk menguji perilaku bagian dari aplikasi Anda. Tes fungsional biasanya ditulis dari perspektif pengguna. Suatu fungsi biasanya tidak terbatas pada komponen tunggal. Ini bisa menjadi bentuk penuh atau seluruh halaman.

Misalnya, ketika Anda sedang membangun formulir pendaftaran, mungkin melibatkan komponen untuk elemen formulir, peringatan, dan kesalahan jika ada. Komponen yang diberikan setelah formulir dikirimkan juga merupakan bagian dari fungsi itu. Ini tidak memerlukan perender browser karena kita akan menggunakan DOM virtual di memori untuk pengujian kita.

### Pengujian Integrasi

Pengujian integrasi adalah strategi pengujian di mana semua komponen individu diuji sebagai kelompok. Pengujian terintegrasi mencoba untuk mereplikasi pengalaman pengguna dengan menjalankan tes pada browser yang sebenarnya. Ini jauh lebih lambat daripada pengujian fungsional dan tes unit karena setiap rangkaian pengujian dijalankan pada browser langsung.
