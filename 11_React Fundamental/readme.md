# Achmad Rizky

## Summary

## ==== React Fundamental====

# Rendering Hello World (HTML, Javascript, React)

Membuat `Hello World` pada file HTML sangat mudah, kita hanya perlu menggunakan tag HTML yang sesuai. Namun kali ini kita akan membuat Hello World dengan menggunakan 3 cara, yakni cara HTML, javascript biasa, dan cara React.

> [HTML Online IDE](https://www.kodekami.com/reactjs/tools/online-code-compiler/#html-tryit-editor-w3schools) memudahkan kita untuk mencoba jalankan kode HTML

### Hello World di HTML

Hello world dapat dibuat dengan tags HTML tanpa menggunakan javascript sama sekali.

### Hello World di Javascript

Kita bisa membuat Hello World dengan menggunakan javascript dengan mengandalkan DOM (Document Object Model). DOM ini dibuat oleh browser yang berisi hirarki struktur HTML dalam bentuk Object. Kita bisa mengakses elemen HTML pada Javascript dengan menggunakan DOM.

### Hello World pada React

Membuat Hello World pada React mirip dengan membuat Hello World pada Javascript, perbedaannya adalah kita perlu menggunakan dependencies berupa React, React-DOM, dan Babel dari npm. Babel digunakan untuk mengubah kode javascript yang digunakan oleh React agar bisa dijalankan di browser.

# Pengenalan React Web API

`React` adalah titik awal dari library React. Jika Anda memuat React dari tag `<script>` seperti pada contoh Hello World sebelumnya, React API tingkat atas ini tersedia secara global, sehingga bisa digunakan di script manapun. Namun Jika Anda menggunakan ES6 dengan npm (Nodejs), Anda perlu menulis `import React from 'react'`.

Pada tutorial ini, kita akan mengkonversi kode HTML yang menggunakan [HTML DOM API](https://www.kodekami.com/redirect?url=https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API) menjadi kode HTML yang menggunakan React API.

Terdapat beberapa React API yang bisa Anda temukan di [React Documentation](https://www.kodekami.com/redirect?url=https://reactjs.org/docs/react-api.html).

`React.createElement` adalah React API yang digunakan untuk membuat elemen baru, React API ini merupakan salah satu API yang paling banyak digunakan. Sintaksnya kurang lebih seperti ini `React.createElement(typeElement, props, children)`

# Pengenalan React JSX

JSX (JavaScript Syntax Extension) adalah sintaks seperti XML/HTML yang digunakan oleh React dalam bahasa ES6 (ECMAScript 2015) agar HTML dapat ditulis di dalam kode JavaScript/React. Sintaksnya digunakan untuk mengubah teks HTML yang ditemukan dalam file JSX menjadi objek JavaScript standar, pengubahan ini menggunakan compiler ES6 ke Javascript seperti **Babel**.

Pada dasarnya, Anda dapat menulis struktur seperti HTML/XML yang ringkas (misalnya, Document Object Model) dengan menggunakan JSX dalam file yang sama saat Anda menulis kode JavaScript, kemudian Babel akan mengubah JSX menjadi kode JavaScript murni.

# Pengenalan Komponen React

Komponen React adalah bagian-bagian UI dari aplikasi React. Dimulai dari bagian UI terbesar (seluruh tampilan aplikasi) sampai ke bagian UI terkecil seperti input, button dll. Komponen React dapat ditulis berupa class dan bisa berupa function. Pada tutorial ini kami berfokus pada pembuatan komponen React dengan fungsi (function component React).

Kita bisa mengibaratkan komponen React sebagai mainan [Lego](https://www.kodekami.com/redirect?url=https://www.google.com/search?q=lego). Sebuah mainan Lego yang utuh terdiri dari beberapa komponen, dan komponen-komponen tersebut bisa terdiri dari beberapa komponen juga, sampai ke komponen paling sederhana.

Berikut ini contoh pohon komponen (component tree), sebuah komponen besar bisa terdiri dari komponen yang lebih kecil dan seterusnya.

![Contoh component tree](https://cdn.statically.io/img/raw.githubusercontent.com/f=auto/elfaro1453/blog-assets/98fe2b66cf2a3485ad62777d381a7c3ced1a58be/docs-javascript/react-components.png)

**Component Tree**: Komponen bisa terdiri dari komponen lain

Tujuan dari pembuatan komponen React adalah _reusable code_ (kode yang bisa digunakan kembali) yang tidak hanya berisi JSX namun juga bisa berisi logika. Kode di dalam komponen React bersifat independen dan terisolasi. Sehingga Data yang ada di dalamnya tidak akan dipengaruhi maupun mempengaruhi komponen lain, kecuali jika terjadi transaksi data antar komponen.

# Membuat Function Component React

Komponen React berupa fungsi (function component) adalah jenis komponen yang direkomendasikan di React. Sesuai dengan namanya, komponen ini dibuat berupa fungsi JavaScript/ES6 yang me-return elemen React (JSX).

### Membuat Komponen React

Komponen React dapat dibuat dengan ketentuan umum sebagai berikut ini:

1.  Import library `React`
2.  Nama Fungsi diawali dengan huruf kapital
3.  Return value dari fungsi berupa JSX dengan satu child

Mari kita bahas masing-masing ketentuan di atas.

### Library React Harus Berada di Dalam Scope

Dikarenakan JSX akan di-transform ke dalam bentuk javascript oleh compiler (babel). maka kita perlu mengikut sertakan library `React` di setiap scope atau cakupan kode yang menggunakan JSX. Sebagai contoh berikut ini komponen react yang valid :

```jsx
import React from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Selamat Datang di Reactjs</h1>
      <p>Kita belajar membuat komponen</p>
    </div>
  );
}
```

### Nama Fungsi Diawali dengan Huruf Kapital

Sebuah fungsi dengan nama yang diawali dengan huruf kapital dan me-return JSX disebut React function component, selanjutnya kita bisa menggunakan custom tag html dengan nama fungsi tersebut. Sedangkan nama fungsi biasa diawali dengan huruf kecil.

### Return Value Hanya Terdiri dari Satu Child

Sebuah fungsi tidak dianggap sebagai komponen React jika tidak menggunakan JSX atau method `React.createElement()`. Selain itu hanya boleh ada sebuah scope untuk JSX pada return-valuenya.

# State

State adalah salah satu konsep penting dalam ekosistem React. State bisa dikatakan sebagai data privat dari sebuah komponen, bersifat encapsulated yang berarti state dari sebuah komponen tidak bisa dipengaruhi dan mempengaruhi state komponen lain secara langsung. Selain itu, nilai pada state akan tereset ke nilai awal ketika halaman direload atau ketika komponen dirender kembali.

# Penanganan Event pada React

Handling atau penanganan event pada elemen React mirip dengan [event yang ada pada Javascript](https://www.kodekami.com/reactjs/javascript-for-learn-react/events-pada-javascript/), namun dengan beberapa perbedaan yaitu:

- Penamaan event pada React menggunakan **camelCase**, tidak lagi _lowercase_
- Event handler diisi dengan nama fungsi saja, tidak perlu pemanggilan fungsi.
