# Achmad Rizky

## Summary

## ==== GraphQL - Mutation ====

Kueri mutasi mengubah data di penyimpanan data dan mengembalikan nilai. Ini dapat digunakan untuk menyisipkan, memperbarui, atau menghapus data. Mutasi didefinisikan sebagai bagian dari skema.

Sintaks kueri mutasi diberikan di bawah ini

    mutation{

    someEditOperation(dataField:"valueOfField"):returnType

    }

## Ilustrasi

Mari kita pahami cara menambahkan catatan siswa baru ke dalam penyimpanan data menggunakan kueri mutasi.

### Langkah 1 – Unduh dan Instal Dependensi yang Diperlukan untuk Proyek

Buat folder proyek dengan nama mutasi-app. Ubah direktori Anda menjadi aplikasi mutasi dari terminal. Ikuti langkah 3 hingga 5 yang dijelaskan di bab Pengaturan Lingkungan.

### Langkah 2 – Buat File schema.graphql

Tambahkan file **schema.graphql** di folder proyek mutasi-aplikasi dan tambahkan kode berikut

    type Query { greeting:String } type Mutation { createStudent(collegeId:ID,firstName:String,lastName:String):String

    }

Perhatikan bahwa fungsi createStudent mengembalikan tipe String. Ini adalah pengenal unik (ID) yang dihasilkan setelah membuat siswa.

### Langkah 3 – Buat File resolver.js

Buat file resolvers.js di folder proyek dan tambahkan kode berikut

    const db = require('./db') const Mutation = { createStudent:(root,args,context,info) => { return db.students.create({collegeId:args.collegeId, firstName:args.firstName, lastName:args.lastName}) } } const Query = { greeting:() => "hello" } module.exports = {Query,Mutation}

Fungsi mutasi menunjuk ke koleksi siswa di datastore. Untuk menambahkan _siswa_ baru , aktifkan metode create di koleksi siswa. Objek _args_ akan berisi parameter yang diteruskan dalam kueri. Metode create koleksi _siswa akan mengembalikan id dari objek siswa yang baru dibuat._

### Langkah 4 Jalankan Aplikasi

Buat file **server.js** . Lihat langkah 8 di Bab Pengaturan Lingkungan. Jalankan perintah npm start di terminal. Server akan aktif dan berjalan pada port 9000. Di sini, kami menggunakan GraphiQL sebagai klien untuk menguji aplikasi.

Langkah selanjutnya buka browser dan ketik URL **http://localhost:9000/graphiql** . Ketik kueri berikut di editor

    //college Id should be matched with data from colleges.json for easy retrieval mutation { createStudent(collegeId:"col-2",firstName:"Tim",lastName:"George") }

Query di atas akan membuat objek mahasiswa dalam file student.json. Kueri akan mengembalikan pengidentifikasi unik. Respon dari query tersebut adalah seperti yang ditunjukkan di bawah ini

    { "data": { "createStudent": "SkQtxYBUm" } }

Untuk memverifikasi apakah objek siswa telah dibuat, kita dapat menggunakan kueri studentById. Anda juga dapat membuka file student.json dari folder data untuk memverifikasi id.

Untuk menggunakan kueri studentById, edit **schema.graphql** seperti yang diberikan di bawah ini

    type Query { studentById(id:ID!):Student } type Student { id:ID! firstName:String lastName:String collegeId:String }

Edit file **resolver.js** seperti yang diberikan di bawah ini

    const db = require('./db') const Query = { studentById:(root,args,context,info) => { return db.students.get(args.id); } } const Mutation = { createStudent:(root,args,context,info) => { return db.students.create({collegeId:args.collegeId, firstName:args.firstName, lastName:args.lastName}) } } module.exports = {Query,Mutation}

Diberikan di bawah ini adalah kueri untuk mendapatkan siswa dengan id unik yang dikembalikan dari kueri mutasi

    { studentById(id:"SkQtxYBUm") { id

    firstName

    lastName } }

Tanggapan dari server adalah sebagai berikut

    { "data": { "studentById": { "id": "SkQtxYBUm", "firstName": "Tim", "lastName":"George" } } }

## Mengembalikan Objek dalam Mutasi

Ini adalah praktik terbaik untuk mengembalikan objek dalam mutasi. Misalnya, aplikasi klien ingin mengambil detail siswa dan perguruan tinggi. Dalam hal ini, daripada membuat dua permintaan yang berbeda, kita dapat membuat kueri yang mengembalikan objek yang berisi siswa dan detail perguruan tinggi mereka.

### Langkah 1 Edit File Skema

Tambahkan metode baru bernama **addStudent** yang mengembalikan objek dalam tipe mutasi **schema.graphql** .

Mari kita pelajari cara mengakses detail perguruan tinggi melalui detail siswa. Tambahkan jenis perguruan tinggi di file skema.

    type Mutation { addStudent_returns_object(collegeId:ID,firstName:String,lastName:String):Student createStudent(collegeId:ID,firstName:String,lastName:String):String } type College { id:ID! name:String location:String rating:Float } type Student { id:ID! firstName:String lastName:String college:College }

### Langkah 2 - Perbarui File resolvers.js

Perbarui file **resolvers.js** di folder proyek dan tambahkan kode berikut

    const Mutation = { createStudent:(root,args,context,info) => { return db.students.create({ collegeId:args.collegeId, firstName:args.firstName, lastName:args.lastName }) }, // new resolver function addStudent_returns_object:(root,args,context,info) => { const id = db.students.create({ collegeId:args.collegeId, firstName:args.firstName, lastName:args.lastName }) return db.students.get(id) } } //for each single student object returned,resolver is invoked const Student = { college:(root) => { return db.colleges.get(root.collegeId); } } module.exports = {Query,Student,Mutation}

### Langkah 3 - Mulai Server dan Ketik Permintaan Permintaan di GraphiQL

Selanjutnya, kita akan memulai server dan meminta kueri di GraphiQL dengan kode berikut

    mutation { addStudent_returns_object(collegeId:"col-101",firstName:"Susan",lastName:"George") { id

    firstName

    college{ id

    name } } }

Query di atas menambahkan siswa baru dan mengambil objek siswa bersama dengan objek perguruan tinggi. Ini menghemat perjalanan pulang pergi ke server.

Jawabannya seperti yang diberikan di bawah ini

    { "data": { "addStudent_returns_object": { "id": "rklUl08IX", "firstName": "Susan", "college": { "id": "col-101", "name": "AMU" } } } }

# Mutasi dan Jenis Masukan

Jika Anda memiliki titik akhir API yang mengubah data, seperti memasukkan data ke dalam database atau mengubah data yang sudah ada dalam database, Anda harus menjadikan titik akhir ini sebagai `Mutation`daripada `Query`. Ini semudah membuat titik akhir API sebagai bagian dari tipe tingkat atas, `Mutation`bukan tipe tingkat atas `Query`.

Katakanlah kita memiliki server "pesan hari ini", di mana siapa pun dapat memperbarui pesan hari ini, dan siapa pun dapat membaca pesan saat ini. Skema GraphQL untuk ini hanyalah:

    type Mutation {
      setMessage(message: String): String
        }
        type Query {
         getMessage: String
        }

Seringkali lebih mudah untuk memiliki mutasi yang memetakan ke database membuat atau memperbarui operasi, seperti `setMessage`, mengembalikan hal yang sama yang disimpan server. Dengan begitu, jika Anda memodifikasi data di server, klien dapat mempelajari modifikasi tersebut.

Mutasi dan kueri dapat ditangani oleh root resolver, jadi root yang mengimplementasikan skema ini dapat berupa:

    var fakeDatabase =  {};

    var root =  {

     setMessage:  ({message})  =>  {

     fakeDatabase.message = message;

      return message;

      },

     getMessage:  ()  =>  {

      return fakeDatabase.message;

      }

    };

Anda tidak memerlukan apa pun selain ini untuk menerapkan mutasi. Namun dalam banyak kasus, Anda akan menemukan sejumlah mutasi berbeda yang semuanya menerima parameter input yang sama. Contoh umum adalah bahwa membuat objek dalam database dan memperbarui objek dalam database sering mengambil parameter yang sama. Untuk membuat skema Anda lebih sederhana, Anda dapat menggunakan "tipe input" untuk ini, dengan menggunakan `input`kata kunci, bukan `type`kata kunci.

Misalnya, alih-alih satu pesan hari itu, katakanlah kita memiliki banyak pesan, diindeks dalam database oleh `id`bidang, dan setiap pesan memiliki `content`string dan `author`string. Kami menginginkan API mutasi baik untuk membuat pesan baru maupun untuk memperbarui pesan lama. Kita bisa menggunakan skema:

    input MessageInput {

     content: String

     author: String

    }

    type Message {

     id: ID!

     content: String

     author: String

    }

    type Query {

      getMessage(id: ID!): Message

    }

    type Mutation {

      createMessage(input: MessageInput): Message

      updateMessage(id: ID!, input: MessageInput): Message

    }

Di sini, mutasi mengembalikan suatu `Message`tipe, sehingga klien bisa mendapatkan lebih banyak informasi tentang yang baru dimodifikasi `Message`dalam permintaan yang sama dengan permintaan yang mengubahnya.

Tipe input tidak boleh memiliki bidang yang merupakan objek lain, hanya tipe skalar dasar, tipe daftar, dan tipe input lainnya.

Memberi nama tipe input dengan `Input`di bagian akhir adalah konvensi yang berguna, karena Anda akan sering menginginkan tipe input dan tipe output yang sedikit berbeda untuk satu objek konseptual.

Berikut beberapa kode runnable yang mengimplementasikan skema ini, menyimpan data di memori:

    var express =  require('express');

    var  { graphqlHTTP }  =  require('express-graphql');

    var  { buildSchema }  =  require('graphql');

    // Construct a schema, using GraphQL schema language

    var schema =  buildSchema(`

     input MessageInput {

     content: String

     author: String

     }

     type Message {

     id: ID!

     content: String

     author: String

     }

     type Query {

     getMessage(id: ID!): Message

     }

     type Mutation {

     createMessage(input: MessageInput): Message

     updateMessage(id: ID!, input: MessageInput): Message

     }

    `);

    // If Message had any complex fields, we'd put them on this object.

    class  Message  {

      constructor(id,  {content, author})  {

      this.id = id;

      this.content = content;

      this.author = author;

      }

    }

    // Maps username to content

    var fakeDatabase =  {};

    var root =  {

     getMessage:  ({id})  =>  {

      if  (!fakeDatabase[id])  {

      throw  new  Error('no message exists with id '  + id);

      }

      return  new  Message(id, fakeDatabase[id]);

      },

     createMessage:  ({input})  =>  {

      // Create a random id for our "database".

      var id =  require('crypto').randomBytes(10).toString('hex');

     fakeDatabase[id]  = input;

      return  new  Message(id, input);

      },

     updateMessage:  ({id, input})  =>  {

      if  (!fakeDatabase[id])  {

      throw  new  Error('no message exists with id '  + id);

      }

      // This replaces all old data, but some apps might want partial update.

     fakeDatabase[id]  = input;

      return  new  Message(id, input);

      },

    };

    var app =  express();

    app.use('/graphql',  graphqlHTTP({

     schema: schema,

     rootValue: root,

     graphiql:  true,

    }));

    app.listen(4000,  ()  =>  {

     console.log('Running a GraphQL API server at localhost:4000/graphql');

    });

Untuk memanggil mutasi, Anda harus menggunakan kata kunci `mutation`sebelum kueri GraphQL Anda. Untuk meneruskan tipe input, berikan data yang ditulis seolah-olah itu adalah objek JSON. Misalnya, dengan server yang ditentukan di atas, Anda dapat membuat pesan baru dan mengembalikan `id`pesan baru dengan operasi ini:

    mutation {

      createMessage(input:  {

     author:  "andy",

     content:  "hope is a good thing",

      })  {

     id

      }

    }

Anda dapat menggunakan variabel untuk menyederhanakan logika klien mutasi seperti halnya dengan kueri. Misalnya, beberapa kode JavaScript yang memanggil server untuk mengeksekusi mutasi ini adalah:

    var author =  'andy';

    var content =  'hope is a good thing';

    var query =  `mutation CreateMessage($input: MessageInput) {

     createMessage(input: $input) {

     id

     }

    }`;

    fetch('/graphql',  {

     method:  'POST',

     headers:  {

      'Content-Type':  'application/json',

      'Accept':  'application/json',

      },

     body: JSON.stringify({

     query,

     variables:  {

     input:  {

     author,

     content,

      }

      }

      })

    })

      .then(r => r.json())

      .then(data => console.log('data returned:', data));

Salah satu jenis mutasi tertentu adalah operasi yang mengubah pengguna, seperti mendaftarkan pengguna baru. Meskipun Anda dapat menerapkan ini menggunakan mutasi GraphQL, Anda dapat menggunakan kembali banyak pustaka yang ada jika Anda mempelajari
