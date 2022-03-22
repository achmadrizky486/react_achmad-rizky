import './App.css'

export default function Latihan(props) {
    return (
        <div className="App-link">

            {props.Ulangtahun === "Rizky" ? 'Ulangtahun ' + props.Ulangtahun + ' pada ' + props.tahun : 'not'}
        </div>
    )
}