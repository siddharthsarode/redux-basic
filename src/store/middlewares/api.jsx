export const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    console.log("Middleware", action);

    const BASE_URL = "https://fakestoreapi.com";

    if (action.type == "api/makeCall") {
      next(action);
      const { url, onSuccess, method, onStart } = action.payload;

      // set loading state (true)
      dispatch({
        type: onStart,
        payload: true,
      });

      fetch(`${BASE_URL}${url}`, {
        method,
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: onSuccess,
            payload: data,
          });
        })
        .catch((err) => {
          console.log("API error" + err.message);
        });
    } else {
      next(action);
    }
  };
