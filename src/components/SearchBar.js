
import React from 'react';




class SearchBar extends React.Component{
  
  state = { term: " " };

   onFormSubmit=(event)=>{
     event.preventDefault();
    
     this.props.onSubmit(this.state.term);
   }
  // componentDidMount() {
  //   window.addEventListener("scroll", () => {
  //     if (
  //       window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 
  //     ) {
        
  //       this.props.onSubmit(this.state.term);
  //     }

  //    }
  //   );
  // }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form"
          onSubmit={ this.onFormSubmit}>
          <div className="field">
            <label>Image search</label>
            <input type="text"
             
              value={this.state.term}
              onChange={(event) => { this.setState({ term: event.target.value }) }} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;