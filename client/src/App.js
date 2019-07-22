import React, { useState } from "react";

import SavedList from "./Movies/SavedList";

// import components

import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

// Step 2a import Route inside your `app.js` file.
import { Route } from "react-router-dom";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      {/* Step 2b - Inside your App file add two routes. */}

      {/* * one route for `/` that loads the `MovieList` component. */}
      {/* * one route that will take an `id` parameter after`/movies/` (ex: `/movies/2`, `/movies/3` where the id is dynamic). This route should load the `Movie` component.    */}
      {/* // Declarative - eg. I have a Route that, when it is at the url path /About, it will render the component About  */}
      {/* // Be sure to add 'exact' prop to home page ("/"" path) so home component wont still render when youre on other pages  */}
      <Route path="/" exact component={MovieList} />
      <Route path="/Movies/:id" component={Movie} />
    </div>
  );
};

export default App;
