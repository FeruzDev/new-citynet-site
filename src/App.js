import VideoMonitoring from "./pages/videoMonitoring/VideoMonitoring";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Design from "./pages/design/Design";
import MainProvider from "./pages/provider/MainProvider";

function App() {
  return (


    <BrowserRouter  >
        <div>



            <Switch>
                <Route path="/video-monitoring" exact component={VideoMonitoring} />
                <Route path="/design" exact component={Design} />

                <Route path="/" exact component={MainProvider}/>
            </Switch>
        </div>
    </BrowserRouter>






  );
}

export default App;
