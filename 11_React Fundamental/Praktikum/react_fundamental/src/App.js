import Latihan from './Latihan';

function App(props) {
  return (
    <>
      {/* <Todoapp users={dataUser}/> */}

      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}/> 
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter> */}

      <Latihan Ulangtahun="Rizky" tahun="2022" />

    </>
  );
}

// function Layout() {
//   return <h2>Layout</h2>;
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function Blogs() {
//   return <h2>Blogs</h2>;
// }
// function Contact() {
//   return <h2>Contact</h2>;
// }
// function NoPage() {
//   return <h2>NoPage</h2>;
// }


export default App;
