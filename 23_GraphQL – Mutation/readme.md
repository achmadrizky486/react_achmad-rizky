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

    type Query  { greeting:String  } type Mutation  { createStudent(collegeId:ID,firstName:String,lastName:String):String
    }

Perhatikan bahwa fungsi createStudent mengembalikan tipe String. Ini adalah pengenal unik (ID) yang dihasilkan setelah membuat siswa.

### Langkah 3 – Buat File resolver.js

Buat file resolvers.js di folder proyek dan tambahkan kode berikut

    const db =  require('./db')  const  Mutation  =  { createStudent:(root,args,context,info)  =>  {  return db.students.create({collegeId:args.collegeId, firstName:args.firstName, lastName:args.lastName})  }  }  const  Query  =  { greeting:()  =>  "hello"  }  module.exports =  {Query,Mutation}

Fungsi mutasi menunjuk ke koleksi siswa di datastore. Untuk menambahkan _siswa_ baru , aktifkan metode create di koleksi siswa. Objek _args_ akan berisi parameter yang diteruskan dalam kueri. Metode create koleksi _siswa akan mengembalikan id dari objek siswa yang baru dibuat._

### Langkah 4 Jalankan Aplikasi

Buat file **server.js** . Lihat langkah 8 di Bab Pengaturan Lingkungan. Jalankan perintah npm start di terminal. Server akan aktif dan berjalan pada port 9000. Di sini, kami menggunakan GraphiQL sebagai klien untuk menguji aplikasi.

Langkah selanjutnya buka browser dan ketik URL **http://localhost:9000/graphiql** . Ketik kueri berikut di editor

    //college Id should be matched with data from colleges.json for easy retrieval mutation { createStudent(collegeId:"col-2",firstName:"Tim",lastName:"George")  }

Query di atas akan membuat objek mahasiswa dalam file student.json. Kueri akan mengembalikan pengidentifikasi unik. Respon dari query tersebut adalah seperti yang ditunjukkan di bawah ini

    {  "data":  {  "createStudent":  "SkQtxYBUm"  }  }

Untuk memverifikasi apakah objek siswa telah dibuat, kita dapat menggunakan kueri studentById. Anda juga dapat membuka file student.json dari folder data untuk memverifikasi id.

Untuk menggunakan kueri studentById, edit **schema.graphql** seperti yang diberikan di bawah ini

    type Query  { studentById(id:ID!):Student  } type Student  { id:ID! firstName:String lastName:String collegeId:String  }

Edit file **resolver.js** seperti yang diberikan di bawah ini

    const db =  require('./db')  const  Query  =  { studentById:(root,args,context,info)  =>  {  return db.students.get(args.id);  }  }  const  Mutation  =  { createStudent:(root,args,context,info)  =>  {  return db.students.create({collegeId:args.collegeId, firstName:args.firstName, lastName:args.lastName})  }  }  module.exports =  {Query,Mutation}

Diberikan di bawah ini adalah kueri untuk mendapatkan siswa dengan id unik yang dikembalikan dari kueri mutasi

    { studentById(id:"SkQtxYBUm")  { id
        firstName
        lastName }  }

Tanggapan dari server adalah sebagai berikut

    {  "data":  {  "studentById":  {  "id":  "SkQtxYBUm",  "firstName":  "Tim",  "lastName":"George"  }  }  }

## Mengembalikan Objek dalam Mutasi

Ini adalah praktik terbaik untuk mengembalikan objek dalam mutasi. Misalnya, aplikasi klien ingin mengambil detail siswa dan perguruan tinggi. Dalam hal ini, daripada membuat dua permintaan yang berbeda, kita dapat membuat kueri yang mengembalikan objek yang berisi siswa dan detail perguruan tinggi mereka.

### Langkah 1 Edit File Skema

Tambahkan metode baru bernama **addStudent** yang mengembalikan objek dalam tipe mutasi **schema.graphql** .

Mari kita pelajari cara mengakses detail perguruan tinggi melalui detail siswa. Tambahkan jenis perguruan tinggi di file skema.

    type Mutation  { addStudent_returns_object(collegeId:ID,firstName:String,lastName:String):Student createStudent(collegeId:ID,firstName:String,lastName:String):String  } type College  { id:ID! name:String location:String rating:Float  } type Student  { id:ID! firstName:String lastName:String college:College  }

### Langkah 2 - Perbarui File resolvers.js

Perbarui file **resolvers.js** di folder proyek dan tambahkan kode berikut

    const  Mutation  =  { createStudent:(root,args,context,info)  =>  {  return db.students.create({ collegeId:args.collegeId, firstName:args.firstName, lastName:args.lastName })  },  // new resolver function addStudent_returns_object:(root,args,context,info)  =>  {  const id = db.students.create({ collegeId:args.collegeId, firstName:args.firstName, lastName:args.lastName })  return db.students.get(id)  }  }  //for each single student object returned,resolver is invoked  const  Student  =  { college:(root)  =>  {  return db.colleges.get(root.collegeId);  }  }  module.exports =  {Query,Student,Mutation}

### Langkah 3 - Mulai Server dan Ketik Permintaan Permintaan di GraphiQL

Selanjutnya, kita akan memulai server dan meminta kueri di GraphiQL dengan kode berikut

    mutation { addStudent_returns_object(collegeId:"col-101",firstName:"Susan",lastName:"George")  { id
          firstName
          college{ id
             name }  }  }

Query di atas menambahkan siswa baru dan mengambil objek siswa bersama dengan objek perguruan tinggi. Ini menghemat perjalanan pulang pergi ke server.

Jawabannya seperti yang diberikan di bawah ini

    {  "data":  {  "addStudent_returns_object":  {  "id":  "rklUl08IX",  "firstName":  "Susan",  "college":  {  "id":  "col-101",  "name":  "AMU"  }  }  }  }
