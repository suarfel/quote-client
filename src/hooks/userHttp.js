import { useReducer, useCallback } from "react";

const apiReducer = (state, action) => {
  if (action.type === "SEND") {
    return {
      data: null,
      error: null,
      status: "pending",
    };
  }
  if (action.type === "SUCCESS") {
    return {
      data: action.responseData,
      error: null,
      status: "completed",
    };
  }
  if (action.type === "ERROR") {
    return {
      data: null,
      error: action.errorMessage,
      status: "completed",
    };
  }
};

const useHttp = (requestFunction, startWithPending = false) => {
  const [apiState, dispatch] = useReducer(apiReducer, {
    status: startWithPending ? "pending" : null,
    error: null,
    data: null,
  });

  const sendRequest = useCallback(
    async function (requestData) {
      dispatch({ type: "SEND" });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: "SUCCESS", responseData  : responseData});
      } catch (error) {
        dispatch({
          type: "ERROR",
          errorMessage: error.message || "Something went wrong!",
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest, 
    ...apiState,
  };
};

export default useHttp;
