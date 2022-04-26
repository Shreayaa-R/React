import React from 'react'; 
import '../SearchBar';

let sortByOptions = { 
  'Best Match': "best_match",
  'Highest Rated': "highest_rated",
  'Most Reviewed': "most_reviewed"
}

class SearchBar extends React.Component { 
  renderSortByOptions() { 
    return(Object.keys(sortByOptions)).map(sortByOptions);
  }

}