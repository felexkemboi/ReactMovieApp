import React,{ Component } from 'react';
import FontAwsome from 'react-fontawesome';
import './SearchBar.css';

class SearchBar extends Component {

    state = {
        value : ''
    }

    render(){
        return(
            <div className="rmdb-searchbar">
                <div className="rmdb-searchbar-content">
                    <FontAwsome className="rmdb-fa-search" name="search" size="2x"/>
                    <input 
                      type="text"
                      className = "rmdb-searchbar-input"
                      placeholder = "Search"
                      onChange = { this.doSearch}
                      value = { this.state.value }
                    />
                </div>
            </div>
        )
    
    }
     
}

export default SearchBar;