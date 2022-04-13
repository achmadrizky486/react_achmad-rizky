# Achmad Rizky

## Summary

## ==== React Form====

# Form

React Form sedikit berbeda dengan [HTML Form](https://devsaurus.com/html), React memperkenalkan konsep **controlled component** dan **uncontrolled component**.

# [](https://devsaurus.com/react-form#controlled-components)Controlled Components

Pada HTML, data dari sebuah form dihandle oleh DOM.

Tetapi pada React, data atau value dari setiap element di dalam form di simpan dalam component state.

Sebuah element HTML yang valuenya dikontrol oleh React disebut **controlled component**, selain itu disebut **uncontrolled component**.

Contoh membuat form di React :

    import React, { useState } from 'react';

    export default function App() {
      const [state, setState] = useState('');

      const handleSubmit = () => {
        alert(`Hi ${state}`);
      };

      const handleChange = (e) => {
        setState(e.target.value);
      };

      return (
        <div>
          <h1>Masukan Nama</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Nama:
              <input type="text" value={state} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }

Pada code di atas value dari element `<input>` disimpan dalam state dan diupdate menggunakan `setState()`, handler `handleSubmit()` dieksekusi ketika form disubmit.

> `e` adalah event object, salah satu propertiesnya adalah `e.target` yang mewakili sebuah element DOM
>
> Sedangkan `e.target.value` mewakili value dari sebuah element DOM

# [](https://devsaurus.com/react-form#uncontrolled-components)Uncontrolled Components

`<input type="file" />` adalah contoh dari uncontrolled component, karena value tersebut tidak dikontrol oleh React maka untuk mengakses file kita harus menggunakan File API dan **Refs**.

## [](https://devsaurus.com/react-form#refs)Refs

**Refs** dapat digunakan untuk mengakses react element di dalam method render.

Untuk membuat Refs kita menggunakan **React.createRef()** yang dipasang ke sebuah elemen lewat atribut **ref**.

    import React from "react";

    export default function App() {
      const fileInput = React.createRef();

      const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Nama file: ${e.fileInput.current.files[0].name}`);
      };

      return (
        <div>
          <h1>Upload File</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Pilih File
              <input type="file" ref={fileInput} style={{marginLeft: "5px"}} />
            </label>
          </form>
        </div>
      );
    }
