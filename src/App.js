import Form from "./Components/form";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Table from "./Components/table";
import "./App.css";
import { persistor, store } from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Form />
          <Table />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
