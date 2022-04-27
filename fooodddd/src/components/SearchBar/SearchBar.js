import React from 'react'; 
import '../SearchBar/SearchBar.css';

let sortByOptions = { 
  'Best Match': "best_match",
  'Highest Rated': "highest_rated",
  'Most Reviewed': "most_reviewed"
}

class SearchBar extends React.Component { 
  renderSortByOptions() { 
    Object.keys(sortByOptions).map(sortByOption => { 
      let sortByOptionValue = sortByOptions(sortByOption);
      return <li key={sortByOptionValue}>{sortByOption}</li>
    });
  };

  render() { 
    return ( 
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
           thi.renderSortByOptions()
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
    )
  }

}

export default SearchBar;