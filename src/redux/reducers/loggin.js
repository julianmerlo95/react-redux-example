export const loggin = (state = false, action) => {
  switch (action.type) {
    case "LOGGIN":
      return !state;
    default:
      return state;
  }
};
