# Achmad Rizky

## Summary

## ==== Global State Management and Data fetching ====

# **Manajemen State Global (Redux)**

Jika kita ingin membuat beberapa halaman yang menggunakan state yang sama dan sinkron (Jika terjadi perubahan state di halaman A maka halaman B juga harus berubah) pada react native, ada baiknya kita menggunakan satu sumber data yang sama untuk meyakinkan bahwa data yang diambil akan selalu sama. Dalam hal ini kita bisa menggunakan bantuan library yang disebut dengan **_redux_**. Singkatnya,

**_“redux adalah library yang dapat membantu mengatur state yang digunakan bersama oleh beberapa halaman / Komponen.”_**

![](https://miro.medium.com/max/1400/0*Rg44zYGM1WCEXdeo.png)

Pembahasan dan penerapan redux banyak sekali sulit dipahami oleh seseorang yang baru belajar react ataupun react native. Untuk itu saya akan jabarkan poin-poin penting yang harus diperhatikan sebelum kita mempelajari redux. Berikut adalah poin-poinnya:

1. Redux adalah library yang membantu kita dalam menangani **_state global_** (State yang sama yang dipakai di beberapa halaman / komponen).

2. Kalian masih bisa melakukan pengaturan state global dengan banyak halaman dengan akal-akalan, salah satunya dengan memanfaatkan bantuan library navigasi (Melempar data dari halaman satu ke halaman yang lain dengan library navigasi, seperti ReactNavigation dll). Namun cara tersebut memiliki beberapa kelemahan, Sebagai contoh, jika kita hanya ingin melempar data dari 2 halaman, itu masih cukup mudah untuk dilakukan. Namun lain cerita ketika navigasi yang ada terlalu dalam, misalkan dari halaman A ke B ke C dan ke D ? Bukankah kita harus mengecek satu per satu data yang kita lempar di setiap halaman tersebut ?, Masalah lain adalah jika halaman A dan B benar-benar terpisah sedangkan kedua halaman tersebut sebenarnya memiliki state yang sama namun tidak ada penghubung navigasi di kedua halaman tersebut, sehingga tidak memungkinkan kita untuk melempar data dari kedua halaman tersebut. Masalah yang sama jika kita membuat komponen-komponen yang terpisah pisah di react native.

3. Selanjutnya aplikasi-aplikasi seperti apa saja yang membutuhkan redux ? aplikasi kecil dan tidak terlalu kompleks seperti aplikasi list activity, game tic tac toe dan sebagainya, tidak wajib menggunakan redux. Namun aplikasi yang besar dan kompleks seperti toko online, marketplace dan sebagainya, sangat dianjurkan menggunakan redux.

4. Tidak perlu membuat redux untuk manajemen state dimana state tidak bersifat global(hanya dipakai di halaman itu saja, meskipun pada aplikasi yang cukup kompleks sekalipun) meskipun sebenarnya masih bisa dibuat redux-nya sih, tapi buat apa ?, itu buang-buang waktu saja :)

5. Redux tidak hanya membantu kita untuk memudahkan manajemen state antar halaman, tapi juga antara komponen induk(parent) dengan anaknya(child) begitu juga sebaliknya.

Jadi dari sini kita bisa tahu bahwa redux memang tidak wajib digunakan untuk setiap projek kita, namun itu akan sangat membantu kita mengatur state global apabila kita membuat aplikasi yang kompleks dan besar. Saran saya adalah, jika ternyata kalian masih bingung dengan konsep redux, silahkan saja membuat aplikasi kalian tanpa bantuan redux sampai pada titik kalian membutuhkan state manajemen yang lebih rapi dan mudah di-_maintainance_ untuk aplikasi kalian.

# **Fetch**

**Fetch** merupakan (API) atau fungsi dasar untuk meminta sumber daya melalui jaringan, Secara dasar berhubungan dengan **request** & **response** (permintaan/tanggapan) yang dapat digunakan hampir di semua jenis **browser**.

![](https://miro.medium.com/max/1400/1*1ylDNUxbBdJ9zPIxTuiWFQ.png)

Dukungan untuk **fetch** pada **browser** dapat dilihat pada situs C[**_aniuse.com_**](https://caniuse.com/), Pada situs tersebut tercatat **fetch** tidak **support** pada **operamini**, Namun setelah mencoba menggunakan **Operamini** , Saya mendapatkan hasil seperti ini.

![](https://miro.medium.com/max/1400/1*Fs__q0ObcDNYm6PcKSWUBQ.png)

Okay, Kita **skip** saja mengenai **browser support**, Intinya **manual test** terhadap **browser** sangat penting yah, Selain mencari referensi pada situs seperti **C*aniuse.com***.

Berikut ada 3 cara bagaimana menggunakan **fetch** pada ReactJS, Yang pertama saya menyebutnya dengan istilah **“Normal Fetch”** yang dimana saat pertama kali mempelajari ReactJS, Saya menggunakan cara implementasi seperti itu, Dan banyak ditemukan pada pembahasan seputar ReactJS di Internet.

## 1. Normal Fetch

![](https://miro.medium.com/max/1400/1*XPe0gsKSEnmuVZhjPI9HTA.png)

Pada **Class App** (default **CRA**) saya mendefinisikan sebuah S**tate** dengan nama “**data**” yang diberi nilai **Array** [].

    state = {
        data : []
    }

Kemudian, menambahkan _lifecycle_ _componentDidMount_ yang dimana setiap fungsi atau perintah yang di tuliskan pada _method_ atau _function_ tersebut dijalankan setelah _Component_ telah selesai melakukan _render_ **DOM**.

    componentDidMount(){
       const urlFetch = fetch('alamaturl')
       urlFetch.then( res => {
          if(res.status === 200)
             return res.json()
       }).then( resJson => {
          this.setState({
              data: resJson
          })
       })
    }

- **const urlFetch** **:** Definisi konstanta **_urlFetch_** yang di beri nilai **_Fetch_** berserta parameter berupa String untuk alamat url yang akan kita Request data. Kembalian nilai dari fungsi **_Fetch_** yakni berupa **_Object Promise_**, **_Object Promise_** memiliki 3 _State_ yakni **_Pending_**, **_Fulfilled_**, & **_Reject_**. keadaan pertama yakni **_Pending_**, didalam keadaan ini akan berubah menjadi salah satu dari **_Fulfilled_** atau **_Reject_**, **_Fulfilled_** ketika Permintaan **_Fetch_** berhasil dan berjalan tanpa masalah, **_Reject_** ketika Permintaan gagal (Penyebab yang umum yakni **_CORS_**). **_Finally_,** nilai yang di kembalikan yakni berupa **_promise_** juga, yang miliki 2 **_method promise.then_** dan **_promise.catch._**

![](https://miro.medium.com/max/1400/1*0mBlni5vsYZE2wFzfVv8EA.png)

[_https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Description_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Description)

- **urlFetch.then :** Pada **_method_** **_then_**, Menge-check apakah _status request_ dengan nilai **_200_** , jika benar maka mengembalikan nilai berupa **res.json()** kemudian memanggil kembali **_method_** **_then_** untuk mengambil nilai kembalian yang telah di dapatkan dan mengatur kembali **state.data** dengan fungsi **this**.**setState** dengan nilai **JSON** (**resJson**).

Berikut kehidupan yang terjadi jika mengikuti contoh kode diatas (hehehhe).

![](https://miro.medium.com/max/1400/1*usb5NCNa0ZKBquy0EaXryg.png)

## 2. Async/Await Fetch

![](https://miro.medium.com/max/1400/1*-gVesn0N1qaI7T5HpqQcVw.png)

Cara ke-2 dengan memanfaatkan **_Async/Await_**, Pada cara ini sebaiknya memahami **_Promise_** yang telah di tuliskan pada cara pertama agar dapat memahami bagaimana proses kerja **_Async Function_** dan **_Await_**.

- _Async Function_ : Membuat **_Object asynchronous Function_** , Dengan menambahkan kata **_async_** saat mendefinisikan sebuah **_function_**.
- _Await_ : Untuk menunda **_statement_** atau pengerjaan di sebuah **_Async Function_** sampai **_object Promise_** selesai. (**_Await Promise_**_)_

const FungsiAsync = async () => {  
const urlFetch = await fetch('url'} # fetch is Promise object

fetch kembaliannya dalam bentuk promise , maka baris code setelah await fetch akan di kerjakan sampai promise atau fungsi fetch tersebut selesai. jika telah selesai , maka lanjut pada statement return dibawah ini.
return jika 'json' in urlFetch benar maka `return await urlFetch.json()` , jika false maka `return Array [] return 'json' in urlFetch ? await urlFetch.json() : []` mengapa await urlFetch.json() ? urlFetch.json masih bernilai Object Promise , dengan menambahkan await maka kita akan resolve dan mendapatkan nilai JSON

![](https://miro.medium.com/max/1400/1*hDm_dEYJ40BcW0Tzlri9cQ.png)

## 3. Export/Import Your Ways

Terakhir bagaimana membuat **AsyncFetch** tersebut dapat digunakan ulang tanpa perlu menuliskan kembali fungsi tersebut di setiap **Component** yang ingin menggunakan.

Pertama kali, Buat sebuah **_File_** , Kita beri nama “**AsyncFetch.js**” pada folder **_src_**, Berikut **_code_** pada **_file_** tersebut.

    const AsyncFetch = async (url) => {
        const urlFetch = await fetch(url)
        return urlFetch.status === 200 && 'json' in urlFetch ?
            await urlFetch.json() : []
    }export default AsyncFetch

- **_const AsyncFetch :_** fungsi yang digunakan dan di jelaskan pada cara ke 2 diatas.
- **_export default AsyncFetch:_** degan menambahkan Keyword export default maka fungsi tersebut secara langsung digunakan ketika component atau module tersebut di import di component atau module lainnya.

Kemudian **save** dan kembali ke **App.js** , untuk menggunakan AsyncFetch.js,

- **_Import_** dulu **_module_** **_AsyncFetch._**
- Pada **_async_** **_componentDidMount_**, langsung saja **_setStateAsync_** dengan **_key_** data pada **_state_** di beri nilai **await AsyncFetch(url)** dan mendapatkan nilai **_JSON_** dari **_URL_** yang di **Request.**

```
import AsyncFetch from './AsyncFetch'
  async componentDidMount(){
    const url = "your url"
    this.setStateAsync({
        data: await AsyncFetch(url)
    })
  }
```

berikut contoh pada screenshot dibawah ini.

![](https://miro.medium.com/max/1400/1*mVQXGWONAWExJtwbz0PcvQ.png)
