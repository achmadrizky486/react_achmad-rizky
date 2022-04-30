# Achmad Rizky

## Summary

## ==== Deployment====

[Link] (https://taskdeploy-achmadrizky.netlify.app/)

## Pengertian

Deployment adalah kegiatan yang bertujuan untuk menyebarkan aplikasi yang sudah kita buat. Harapannya aplikasi tersebut dapat diakses oleh banyak orang, tidak hanya oleh kita sendiri.

## Surge.sh

Jika sebelumnya kita telah berhasil membuat React app menggunakan CRA, kali ini kita akan mencoba melakukan deployment menggunakan surge.sh. Surge.sh merupakan
langkah pertama kita perlu meng-install package surge.sh secara global. Langkah selanjutnya, kita perlu melakukan persiapan dari React app yang telah kita, yakni dengan `yarn build` atau `npm build` . Dengan perintah tersebut, kita membuat React app kita dalam bentuk static sehingga dapat diserve oleh server surge

![](https://cdn-images-1.medium.com/max/1600/1*yXVSjmXwkwG6zD5USbi-pA.png)Sukses deploy menggunakan surge.sh

Yang perlu diperhatikan adalah, ketika diminta memasukkan path dari project kita adalah, kita perlu mengarahkan kepada folder `build` dari React app yang kita buat.

## Heroku

Heroku merupakan salah satu perusahaan penyedia layanan *Platform as a Service (PaaS). *Untuk dapat menggunakan layanan heroku, kita perlu melakukan:

- [Sign Up](https://signup.heroku.com/)
- Install [command-lint tools (CLI)](https://devcenter.heroku.com/articles/heroku-cli) Heroku

![](https://cdn-images-1.medium.com/max/1600/1*BhGIGjEx1aQFuYFP1n1UoQ.png)Tampilan ketika kita sukses install Heroku CLI

Selanjutnya kita dapat menggunakan React app yang telah kita buat sebelumnya untuk dideploy ke Heroku dengan cara sebagai berikut:

```
git init

# Membuat Heroku app, membutuhkan akun gratis di Heroku.com
heroku create -b

# Mengarahkan root dari directory kita ke folder build
echo '{ "root": "build/" }' > static.json

# Menghapus folder build dari .gitignore
sed '/build/d' .gitignore > .gitignore.new && mv .gitignore.new .gitignore

# Build, commit, deploy!
yarn build
git add .
git commit -m "Deploy to Heroku!"
git push heroku master

```

![](https://cdn-images-1.medium.com/max/1600/1*f9BECNOhME8Q9onfXtGreg.png)Gagal deploy

Jika ada yang mengalami gagal seperti yang diatas, kita perlu masuk ke dalam halaman Dashboard akun Heroku. Masuk kedalam nama apps yang kita buat dan ada di tab Deploy

![](https://cdn-images-1.medium.com/max/1600/1*lRfLgYdF6y8r6WNMI7PQJA.png)Dashboard Heroku tab Deploy

![](https://cdn-images-1.medium.com/max/1600/1*_DLlO9XxHnUmDyxtHr-Qew.png)Sukses Deploy ke Heroku!

- [React](https://medium.com/tag/react?source=post)
- [Heroku](https://medium.com/tag/heroku?source=post)
- [Surge](https://medium.com/tag/surge?source=post)
- [Deploy](https://medium.com/tag/deploy?source=post)
- [JavaScript](https://medium.com/tag/javascript?source=post)
