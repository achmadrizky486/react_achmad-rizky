import '../App.css'

const ListPekerjaan = (props)=> { 
    const {data, hapusPekerjaan} = props
    return (
        <div className='.App'>
            

                <ul style={{listStyle:"none"}}>
                {data.map ((pekerjaan)=> 
                (<li>{pekerjaan.title}  <button onClick={()=>{hapusPekerjaan(pekerjaan.id)}}>Delete</button>
                </li>))} 
                </ul> 



                {/* <table  className='.tabel'> 
                <thead>
                <td>Nama Pekerjaan</td> 
                    <td>Aksi</td>
                </thead>
                <tbody>  */}  
                        {/* 
                        {data.map ((pekerjaan)=>
                        (<tr key={pekerjaan.id} >
                            <td>
                                {pekerjaan.title}
                            </td> 
                            <td>
                                <button onClick={()=>{hapusPekerjaan(pekerjaan.id)}}>Delete</button>
                            </td>
                        </tr> */} 
                         {/* </tbody>
                        </table> */} 
               
        </div>
    )
} 

export default ListPekerjaan;