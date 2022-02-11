import { Component } from "react";
import SectionArea from "./SectionArea";


class DisplaySections extends Component {

    state = {
        title : 'tom cruise'
    }


    handleSearch = async (str) => {
        this.setState({title: ''})
        this.setState({title: str})
        console.log('im the TITLE: '+ this.state.title)
        let response = await fetch(
            "http://www.omdbapi.com/?apikey=660268d7&s=" + this.state.title
          );
          let data = await response.json();
          console.log(data.Search);
    }

render(){
    return(<>
    <center><input type="text" className='mt-4' style={{width:'50%', margin:'auto', textAlign: 'center'}} placeholder='search your favorite movies' onChange={(event)=> this.handleSearch(event.target.value)}/></center>
        <SectionArea branding='harry%20Potter'/>
        <SectionArea branding='soccer'/>
        <SectionArea branding='friends'/>
        <SectionArea branding='lord%20of%20rings'/>
        </>)
    }
}



export default DisplaySections