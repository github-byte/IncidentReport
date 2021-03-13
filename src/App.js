import React, { Component } from 'react'
import axios from "axios"
import {Button,Input,Label,FormGroup,Form} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
     reports:[], 
    date:"",
    Time:"",
    Guardname:"",
    Organisation:"",
    SiteName:"",
    Incident:"",
    Actions:""
    }

    this.onSubmit=this.onSubmit.bind(this)
   
  }

  componentDidMount(){
   

  }
  onSubmit(){
    const obj={
      date:this.state.date,
      Time:this.state.Time,
      Guardname:this.state.Guardname,
      Organisation:this.state.Organisation,
      SiteName:this.state.SiteName,
      Incident:this.state.Incident,
      Actions:this.state.Actions
    }
    console.log(obj)
    axios.post("http://localhost:5000/",obj).then(response=>console.log(response.data))
  
  // this.state.date="";
  // this.state.Time="";
  // this.state.Guardname="";
  //   this.state.Organisation="";
  //   this.state.SiteName='';
  //   this.state.Incident='';
  // this.state.Actions='';

  }

  seeList(){
    axios.get("http://localhost:5000/").then(response=>this.setState({reports:response.data}))
  }

  

  render() {
    return (
     
      <div className="container">
      <Form >
       <FormGroup tag="fieldset" >
      <legend>Incident Report</legend>
      <div className="row">
      
      <div className="col-md-4">
    
      <Label htmlFor="date">Date</Label>
      </div>
      <div className="col-md-8">
        <Input   name="date" value={this.state.date} onChange={(event)=>{this.setState({date:event.target.value})}}  />
        </div>

        <div className="col-md-4">
      <Label htmlFor="time"  >Time</Label>
      </div>
      <div className="col-md-8">
        <Input   name="time" value={this.state.Time}  onChange={(e)=>{this.setState({Time:e.target.value})}}  />
        </div>

        <div className="col-md-4">
      <Label htmlFor="Guardname">Guard name</Label>
      </div>
      <div className="col-md-8">
        <Input   name="Guardname" value={this.state.Guardname} onChange={(e)=>{this.setState({Guardname:e.target.value})}} />
        </div>

        <div className="col-md-4">
      <Label htmlFor="organisation" >Organisation</Label>
      </div>
      <div className="col-md-8">
        <Input type="select" value={this.state.Organisation} name="organisation" onChange={(e)=>{this.setState({Organisation:e.target.value})}} ><option>Org1</option>
        <option>Org2</option></Input>
        </div>
        <div className="col-md-4">
      <Label htmlFor="SiteName">Site Name</Label>
      </div>
      <div className="col-md-8">
        <Input   name="SiteName" value={this.state.SiteName} onChange={(e)=>{this.setState({SiteName:e.target.value})}}  required/>
        </div>
        <div className="col-md-4">
      <Label htmlFor="incident">Incident</Label>
      </div>
      <div className="col-md-8">
        <textarea className="input-group" value={this.state.Incident} name="incident" onChange= {(event)=> {this.setState({Incident: event.target.value})}} required/>
        </div>
        <div className="col-md-4">
      <Label htmlFor="Action" required>Action</Label>
      </div>
      <div className="col-md-8">
        <textarea class="input-group" value={this.state.Actions}  name="Action" onChange={(e)=>{this.setState({Actions:e.target.value})}} />
        </div>
        
        
        <Button onClick={this.onSubmit}>Submit</Button>
      <hr/>
      
        
        
        </div>

      
      </FormGroup>
      </Form>
<div className="row container" style={{marginTop:"100px"}}>
<h1 >See reports</h1>
<Button style={{float:"right",marginLeft:"50px"}} onClick={()=>{this.seeList()}}>See List</Button>
        
</div>
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Time</th>
      <th scope="col">Guard Name</th>
      <th scope="col">Site Name</th>
      <th scope="col">Actions</th>
      <th scope="col">Incidents</th>
    </tr>
  </thead>
  <tbody>
  {this.state.reports.map((e)=>{
    console.log(e)   
          return(
       <tr>
      <td>{e.date}</td>
      <td>{e.Time}</td>
      <td>{e.Guardname}</td>
      <td>{e.SiteName}</td>
      <td>{e.Actions}</td>
      <td>{e.Incident}</td>

    </tr>
      
          )
        })}
    

  </tbody>
</table>
      
      </div>
    
    )
  }
}

