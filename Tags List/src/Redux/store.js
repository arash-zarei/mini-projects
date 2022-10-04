import { createStore } from "redux";

// import rootReducer from "./rootReducer";
import tagReducer from "./Tags/tagReducer";

const store = createStore(tagReducer)

export default store;