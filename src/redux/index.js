import { init } from "@rematch/core";
import createPersistPlugin from "@rematch/persist";
import storage from "redux-persist/lib/storage";
import auth from "./models/auth";

const persistPlugin = createPersistPlugin({
  key: "root",
  storage,
  version: 2,
  whitelist: ["auth"],
});

const middlewares = [];
const enhancers = [];

const store = init({
  models: {
    auth: auth,
  },
  redux: {
    middlewares,
    enhancers,
    rootReducers: { RESET_APP: () => undefined },
  },
  plugins: [persistPlugin],
});

export const { dispatch } = store;

export default store;
