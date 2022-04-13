# Achmad Rizky

## Summary

## ==== Event Handling====

# Event Handling

Kita ambil penjelasan bagaimana React menghandle sebuah _event_ dari dokumentasi [React](https://reactjs.org/docs/handling-events.html) :

Handling event pada React mirip dengan handling event pada DOM element, namun dengan sedikit perbedaan:

- React event menggunakan **camelCase**, bukan **lowercase**
- Handler untuk event adalah sebuah function yang ditulis diantara curly braces `{}` dan tidak ditulis dalam bentuk string

## **Menambahkan Event**

Event React ditulis dalam sintaks camelCase:

`onClick` bukannya `onclick`.

Penangan event yang sebenarnya ditulis di dalam kurung kurawal:

`onClick={shoot}` bukannya `onClick="shoot()"`.

React:

`<button onClick={shoot}>Take the Shot!</button>`

HTML:

` <``button ` ` onclick``=``"shoot()"``>Take the Shot!</``button``> `

Kita ambil contoh code pada pembahasan setState() sebelumnya:

    import React, { useState } from 'react';

        export default function App() {
          const [state, setState] = useState('brachio');

          const handleChange = () => {
            setState('t-rex');
          };

          return (
            <div>
              <h1>Hello Devsaurus</h1>
              <p>My Name is {state}</p>
              <button onClick={handleChange}>Change Name</button>
            </div>
          );
        }

Event klik button pada React tidak ditulis **onclick** tapi **onClick**.

Event handler bernama **handleChange** berfungsi untuk menghandle event onClick, yang berarti ketika button di klik maka function bernama handleChange akan dieksekusi.

## Event handler dengan Argument

    import React, { useState } from 'react';

    export default function App() {
      const [state, setState] = useState('brachio');

      const handleChange = (name) => {
        setState(name);
      };

      return (
        <div>
          <h1>Hello Devsaurus</h1>
          <p>My Name is {state}</p>
          <button onClick={() => handleChange('t-rex')}>Change Name</button>
        </div>
      );
    }

Untuk event handler dengan argument kita harus menggunakan arrow function(untuk function component):

    <button onClick={() => handleChange('t-rex')}>Change Name</button>

Dan kita tidak bisa menulisnya seperti ini
`<button onClick={handleChange('t-rex')}>Change Name</button>`
