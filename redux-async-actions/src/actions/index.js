import jsonPlaceholder from "../apis/jsonPlaceholder";

// Action creator must return an action object
// and action object must be an object with type property and optional payload property
// Function returns a function
// Redux thunk allows action creator to return a function, two arrow functions seem to chained together
// this is a syntax for function returning a function
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response });
};
