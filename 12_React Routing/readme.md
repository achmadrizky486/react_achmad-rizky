# Achmad Rizky

## Summary

## ==== React Routing====

- Routing sendiri adalah proses pemetaan antara sebuah URL ke dalam sebuah halaman yang terdapat konten / UI (User Interface) sesuai dengan URL yang dituju.

- Ada beberapa library yang bisa digunakan, diantara library yang sangat familiar adalah react-router dan reach/router

- Library react-router-dom dapat diinstall dengan menjalankan perintah "yarn add react-router-dom" atau "npm i react-router-dom"

Dalam web jika ingin berganti halaman satu dan halaman yang lainnya diperlukan suatu proses routing. Routing sendiri adalah proses pemetaan antara sebuah URL ke dalam sebuah halaman yang terdapat konten / UI (_User Interface_) sesuai dengan URL yang dituju.

Jika ingin membuat routing membutuhkan library tambahan karena tidak secara langsung tersedia. Ternyata ada beberapa library yang bisa digunakan, diantara library yang sangat familiar adalah `react-router` dan `reach/router`. Sebenernya yang dipakai untuk routing di React biasanya `react-router-dom` anak dari `react-router`, yang mana selain `react-router-dom` juga terdapat `react-router-native` yang bisa digunakan untuk development aplikasi Android dan iOS.

Library `react-router-dom` dapat diinstall dengan menjalankan perintah

```bash
yarn add react-router-dom

```

atau

```bash
npm i react-router-dom

```

### Mari kita _Keceh_

Pada contoh kali ini, kita akan membuat routing sederhana menggunakan `react-router-dom`. Halaman-halaman yang akan dibuat diantaranya Home, Profil, Detail Profil, Notfound.

Setelah membuat project baru react, buat file-file berikut untuk membuat halaman yang akan digunakan sebagai component dalam routes.

![](https://afrijaldzuhri.com/belajar-routing-dalam-react/1.png)

File yang akan kita jadikan sebagai `routes` yaitu `App.js`, karena component `App` yang dijadikan entry point dan dirender pertama kali oleh `ReactDOM` di `index.js`.

Setelah itu buat routes untuk masing-masing halaman di component `App`

```js
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Notfound from "./pages/NotFound";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import ProfilDetail from "./pages/ProfilDetail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profil" exact component={Profil} />
        <Route path="/profil/:name" exact component={ProfilDetail} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
```

Disana kita mengimport `BrowserRouter`, `Route`, dan `Switch` yang akan kita gunakan dari `react-router-dom`, kemudian kita import component yang akan dijadikan halaman.

Karena component `App` dijadikan router, maka component ini akan merender halaman yang path di browser sama dengan path yang ada di route. Jika tidak ada path yang sesuai, maka component yang akan dirender yaitu component `Notfound`.

- `BrowserRouter` digunakan sebagai router yang menggunakan `API history` dari HTML5, sehingga dapat menggunakan `location` untuk mensingkronasi UI dengan url. Di dalam object `location` sendiri merepresentasikan dimana lokasi aplikasi sekarang.
- `Switch` digunakan untuk membungkus node `Route`, yang mana hanya akan merender satu `Route` saat `path`nya cocok dengan URL.
- Route digunakan untuk merender `UI` saat path cocok dengan URL saat ini. Di dalam Component Route ini kita menggunakan `exact`, yang mana bertugas untuk memastikan Route hanya merender component yang memiliki `path` dan `location.pathname` yang cocok. Jika tidak ada yang cocok, maka `Route` yang akan dirender yaitu `Route` terakhir dengan component `Notfound`.

Setelah itu kita menuju ke halaman utama, yaitu halaman `Home`. Di halaman Home ini, hanya ada tulisan informasi bahwa sekarang aplikasi berada di halaman Home. Lalu ada sebuah link untuk menuju ke halaman `Profil`.

```js
import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <>
      <h2>Home page</h2>

      <Link to="/profil">Menuju profil</Link>
    </>
  );
}

export default Home;
```

- Element kosong `<></>` tersebut adalah _shorthand_ dari `<React.Fragment></React.Fragment>` yang mana bisa untuk membungkus child element tanpa menambahkan node ke dalam DOM.
- `<Link></Link>` digunakan untuk berpindah antar halaman, property `to` tersebut merujuk pada path di `Route` yang akan dituju.

hasil tampilannya akan seperti ini.

![](https://afrijaldzuhri.com/belajar-routing-dalam-react/home.png)

Pada halaman profil, kita membuat list nama dengan `Link` yang nantinya akan menuju ke halaman detail profil beserta dengan `state` yang dibawanya melalui location.

```js
import React from "react";
import { Link } from "react-router-dom";

function Profil() {
  return (
    <>
      Profil Page
      <ul>
        <li>
          <Link
            to={{
              pathname: "/profil/pevita",
              state: {
                name: "Pevita Cleo Eileen Pearce",
                born: "1992-10-06",
              },
            }}
          >
            Pevita
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: "/profil/raline",
              state: {
                name: "Raline Rahmat Shah",
                born: "1985-03-04",
              },
            }}
          >
            Raline
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: "/profil/maudy",
              state: {
                name: "Ayunda Faza Maudya",
                born: "1994-12-19",
              },
            }}
          >
            Maudy
          </Link>
        </li>
      </ul>
      <hr />
      <Link to="/">Home</Link>
    </>
  );
}

export default Profil;
```

Di dalam list `Link` kita menyematkan property `to` dalam bentuk object location yang akan dituju. Pada saat halaman yang tertuju sesuai pathname, router akan membawa state sesuai yang diberikan halaman sebelumnya. Juga karena halaman detail profil menggunakan parameter dinamis, maka parameter bisa didapet dari `props.match.params`.

![](https://afrijaldzuhri.com/belajar-routing-dalam-react/profil.png)

Halaman detail profil akan dinamis menggunakan data yang diberikan di halaman profil. Data tersebut bisa didapat dari `props` karena halaman `Profil` dan `ProfilDetail` sama-sama dideklarasikan sebagai `Route` di Router (component `App`).

```js
import React from "react";

function ProfilDetail(props) {
  const name = props.match.params.name;
  const fullName = props.location.state.name;
  const bornDate = props.location.state.born;

  return (
    <>
      <h2>Hi, {name.charAt(0).toUpperCase() + name.slice(1)}</h2>
      <p>
        {fullName} was born on{" "}
        {new Date(bornDate).toLocaleDateString("en", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <button onClick={() => props.history.goBack()}>back</button>
    </>
  );
}

export default ProfilDetail;
```

Sehingga pada salah satu list yang dituju akan terlihat seperti ini

![](https://afrijaldzuhri.com/belajar-routing-dalam-react/detail.png)

Untuk halaman `Notfound` jika path di component `Route` tidak ada yang cocok akan memberikan informasi bahwa halaman yang dituju tidak sesuai.

```js
import React from "react";

function NotFound() {
  return <>Page not found</>;
}

export default NotFound;
```
