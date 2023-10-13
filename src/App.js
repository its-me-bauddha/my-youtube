import { Provider } from "react-redux";
import "./App.css";
import Body from "./componennts/Body";
//import Body from './componennts/Body';
import Head from "./componennts/Head";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./componennts/MainContainer";
import WatchPage from "./componennts/WatchPage";

const appRouter = createBrowserRouter([{
  path:'/',
  element: <Body/>,
  children : [
    {
      path :'/',
      element :<MainContainer/>
    }
    ,{
      path:'/watch',
      element:<WatchPage/>
    }
  ]
}])

function App() { 
  return (
    <Provider store={store}>
      <div>
        <Head />
       <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
