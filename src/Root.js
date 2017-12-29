import React,{ Component } from 'react'
import { App } from './App'
import './styles.css'
class Root extends Component {
    constructor(props){
        super(props)
        this.state = {
            id:1,
            gender:null,
            email:null,
            fist_name:null,
            last_name:null,
            age:null,
            selected:'id',
            value:''

        }
    }
    changevalue = (event)=>{

        if(this.state.selected=='id'){
            
            this.setState({value:event.target.value,id:Number(event.target.value),gender:null,email:null,fist_name:null,last_name:null,age:null})
        
        }else if(this.state.selected=='gender'){
        
            this.setState({value:event.target.value,id:null,email:null,fist_name:null,last_name:null,age:null,gender:event.target.value})
        }else if (this.state.selected=='email'){
            this.setState({value:event.target.value,id:null,email:event.target.value,gender:null,fist_name:null,last_name:null,age:null})
          
        }else if (this.state.selected=='fist_name'){
            this.setState({value:event.target.value,id:null,fist_name:event.target.value,gender:null,email:null,last_name:null,age:null})
            this.setState({fist_name:this.state.value})
        }else if (this.state.selected=='last_name'){
            this.setState({value:event.target.value,id:null,last_name:event.target.value,email:null,fist_name:null,gender:null,age:null})
            this.setState({value:this.state.value})
        }else if(this.state.selected=='age'){
            
            this.setState({value:event.target.value,age:event.target.value,gender:null,email:null,fist_name:null,last_name:null,id:null})
            
        }
    }
    handlechange=(event)=>{
        this.setState({selected:event.target.value})
        this.setState({value:''})
    }


    render(){

        return(
            <div>
            <div>
        
            
            <input type="text" value={this.state.value} onChange={this.changevalue}/>
            <select value={this.state.selected} onChange={this.handlechange}>
  <option  value="id">id</option>
  <option value="gender">gender</option>
  <option  value="email">email</option>
  <option  value="fist_name">fist_name</option>
  <option value="last_name">last_name</option>
  <option value="age">age</option>
</select>
            <App id={this.state.id} fist_name={this.state.fist_name} last_name={this.state.last_name} age={this.state.age} gender={this.state.gender} email={this.state.email} />
            </div>
            </div>
        )
    }
}
export default Root