import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import createStore from "./store";
import { setToken, tokenChecked } from "./store/actions";
import { getCurrentUser } from "./api";
import AppRoutes from "./routes";
const { store, persistor } = createStore();

class App extends Component {
  componentDidMount() {
    getCurrentUser()
      .then(() => {
        store.dispatch(tokenChecked());
      })
      .catch(() => {
        store.dispatch(setToken(""));
        store.dispatch(tokenChecked());
      });
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRoutes />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
