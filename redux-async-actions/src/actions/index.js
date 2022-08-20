import jsonPlaceholder from "../apis/jsonPlaceholder";

// Action creator must return an action object
// and action object must be an object with type property and optional payload property
export const fetchPosts = () => {
  return async function (dispatch, getState) {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response });
  };
};
