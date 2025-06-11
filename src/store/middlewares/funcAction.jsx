export const funcAction = (store) => (next) => (action) => {
  console.log("FuncAction");
  if (typeof action === "function") {
    action();
  }
  next(action);
};
