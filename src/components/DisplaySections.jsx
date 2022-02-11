import { Component } from "react";
import SectionArea from "./SectionArea";


class DisplaySections extends Component {

    state = {
        title : '',
        length : 0
    }


    handleSearch = async (str) => {

        this.setState({...this.state,title:''})
        this.setState({...this.state, title: str})
        console.log(this.state.title)
        // this.setState({...this.state, this.state.title.length})
    }



render(){
    return(<>
    <center><input type="text" className='mt-4' style={{width:'50%', margin:'auto', textAlign: 'center'}} placeholder='search your favorite movies' onChange={(event)=> this.handleSearch(event.target.value)}/></center>
  {this.state.title.length > 3 && this.state.title.length < 50 && <SectionArea branding={this.state.title}/>}

  {this.state.title.length < 4 &&    <SectionArea branding='Harry Potter'/>} 
  
      
  {this.state.title.length < 4 &&    <SectionArea branding='Soccer'/>}
     {this.state.title.length < 4 &&    <SectionArea branding='Friends'/>}
     {this.state.title.length < 4 &&    <SectionArea branding='lord Of Rings'/>}
        </>)
    }
}



export default DisplaySections