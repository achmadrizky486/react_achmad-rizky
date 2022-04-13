import { Component } from "react";  

class tambahPekerjaan extends Component {  
    state = { 
        id : Math.floor(Math.random() * 100) +1,
        title : '', 
        completed : true
    }
    onChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    } 

    handleSubmit = (e) => {
        e.preventDefault();
        const formIsNotEmpty = this.state.title 
        if (formIsNotEmpty) { 
            // console.log (this.state.title)
            const newData = { 
                id : Math.floor(Math.random() * 100) +1,
                title : this.state.title,
                completed : true
            } 
            this.props.tambahPekerjaan (newData);

            this.setState({ 
                id : Math.floor(Math.random() * 100) +1,
                title: '',
                completed : true
            })

        }else{
            alert ("mohon isi pekerjaan")
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input type="text" placeholder="Masukkan Pekerjaan..." value={this.state.title} name="title" onChange = {this.onChange}/>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
} 

export default tambahPekerjaan;