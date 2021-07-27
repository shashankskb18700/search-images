import React from 'react';
import unsplash from '../Api/unsplash';
import ImageList from './imageList';
import SearchBar from './SearchBar'

class App extends React.Component {


  state = { images: [] , str:" ", im:[]};
  
  onSearchSubmit = async (term) => {
    this.setState({str:term})
    const response = await unsplash.get("/search/photos", {
      params: { query: term, per_page: 30 },
    });
    // this.state.im.push(response.data.results);
    const joined = this.state.images.concat(response.data.results)
    
    this.setState({ images:joined });
  }
  // a = () => {
  //   console.log("scrlled")
  // }

  // componentDidMount() {
    
  //   window.addEventListener('scroll',this.onSearchSubmit)
  // }
  
  render() {
    
    console.log(this.state.joined)
    return (
      <div
        
        className="ui container"
        style={{ marginTop: "10px" }}
      >
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;