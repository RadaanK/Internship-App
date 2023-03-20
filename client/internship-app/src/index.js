import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Applications from "./pages/Applications";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NoPage from "./pages/NoPage";
import { Provider } from 'react-redux';
import reducers from './reducers/index';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose} from 'redux';
import useToken from './useToken';


export default function App() {

  const { token, setToken } = useToken();

if(!token) {
  console.log(token);
  return(<BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login setToken={setToken}/>} />
        <Route path="applications" element={<Login setToken={setToken}/>} />
        <Route path="login" element={<Login setToken={setToken}/>} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>);
}
else{
  console.log(token);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="applications" element={<Applications />} />
          <Route path="login" element={<Login setToken={setToken}/>} /> 
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
}


//*ReactDOM.render(<App />, document.getElementById("root"));

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
const store = createStore(reducers, compose(applyMiddleware(thunk)));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
    );