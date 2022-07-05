import { initialState } from "./adddatastudent";

const ChangeNum = (state = 0, action) => {
  switch (action.type) {
    case "holdStore":
      return (state = initialState);
    default:
      return state;
  }
};
export default ChangeNum;
