export const dashboardFetchAction = () => {
  return {
    type: "FETCH_DASHBOARD_DATA",
  };
};
export const dashboardFetchSuccess = (payload) => {
  return {
    type: "FETCH_DASHBOARD_SUCCESS",
    payload: payload,
  };
};
export const dashboardFetchFail = () => {
  return {
    type: "FETCH_DASHBOARD_FAIL",
  };
};
