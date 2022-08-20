import jsonPlaceholder from "../apis/jsonPlaceholder";

// Action creator must return an action object
// and action object must be an object with type property and optional payload property
// Function returns a function
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response });
};
