import  './App.css'

export default function Latihan(props){
    return (
        <div className="App-link">
        
        {props.Ulangtahun ==="Faqih" ? 'Ulangtahun' + "" +props.Ulangtahun + 'pada' + props.tahun: 'not'} 
        </div>
    )
}