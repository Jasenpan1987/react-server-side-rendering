// Action Types
export const FETCH_USERS = "FETCH_USERS";

// Action Creators with extra arguments
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get("/users"); // /api/user
  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};
