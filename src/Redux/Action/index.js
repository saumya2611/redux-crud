export const CREATE_USER = "CREATE_USER";
export const DELETE_USER = "DELETE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const JOB_TITLE = "JOB_TITLE";
export const FILTER_CITY = "FILTER_CITY";
export const SHORTING_ID = "SHORTING_ID";
export const SEARCHING_VALUE = "SEARCHING_VALUE";

export const createUser = (payload) => {
  console.log("action payload==========>", payload);

  return {
    type: CREATE_USER,
    payload,
  };
};

export const deleteUser = (payload) => {
  console.log("delete payload =============>", payload);

  return {
    type: DELETE_USER,
    payload,
  };
};

export const updateUser = (id, payload) => {
  console.log("id, payload=========>", id, payload);

  return {
    type: UPDATE_USER,
    payload,
    id,
  };
};

export const jobTitle = (payload) => {
  return {
    type: JOB_TITLE,
    payload,
  };
};

export const filterCity = (payload) => {
  return {
    type: FILTER_CITY,
    payload,
  };
};

export const shortingId = (payload) => {
  return {
    type: SHORTING_ID,
    payload,
  };
};

export const searchValue = (payload) => {
  return {
    type: SEARCHING_VALUE,
    payload,
  };
};
