export const CREATE_USER = "CREATE_USER";
export const DELETE_USER = "DELETE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const FILTER_VALUE = "FILTER_VALUE";
export const SHORTING_ID = "SHORTING_ID";
export const SEARCHING_VALUE = "SEARCHING_VALUE";
export const RESET_FILTER = "RESET_FILTER";

export const createUser = (payload) => {
  // console.log("action payload==========>", payload);

  return {
    type: CREATE_USER,
    payload,
  };
};

export const deleteUser = (payload) => {
  // console.log("delete payload =============>", payload);

  return {
    type: DELETE_USER,
    payload,
  };
};

export const updateUser = (id, payload) => {
  // console.log("id, payload=========>", id, payload);

  return {
    type: UPDATE_USER,
    payload,
    id,
  };
};

export const filterValue = (payload) => {
  console.log("filterCity payload=========>", payload);

  return {
    type: FILTER_VALUE,
    payload,
  };
};

export const resetFilter = () => {
  // console.log("resetFilter payload=============>", resetFilter);
  return {
    type: RESET_FILTER,
  };
};

export const shortingId = (payload) => {
  return {
    type: SHORTING_ID,
    payload,
  };
};

export const searchValue = (payload) => {
  // console.log("searchValue payload===========>", payload);

  return {
    type: SEARCHING_VALUE,
    payload,
  };
};
