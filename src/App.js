import VideoMonitoring from "./pages/videoMonitoring/VideoMonitoring";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainProvider from "./pages/provider/MainProvider";
import MainTelephony from "./pages/telephony/MainTelephony";
import MainDetails from "./pages/internetDetails/MainDetails";
import MainIPTV from "./pages/IPTV/MainIPTV";
import MainIpTelephony from "./pages/iptelephony/MainIpTelephony";
import MainInternetTraffic from "./pages/InternetTraffic/MainInternetTraffic";
import MainTv from "./pages/IPTVtv/MainTv";
import MainEquipment from "./pages/equipment/MainEquipment";
import MainItEquipment from "./pages/itequipment/MainITEquipment";
import MainForm from "./pages/TarifForma/MainForm";
import HomeInternetChoose from "./pages/internet/HomeInternetChoose";
import MainInstallation from "./pages/Installation/MainInstallation";
import ItDevelopment from "./pages/ITDevelopment/ITDevelopment";
import MainContact from "./pages/kontakt/MainContact";
import AllChannels from "./pages/IPTVtv/AllChannels";
import AllNews from "./pages/forNews/AllNews";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import NewsDetailPair from "./pages/forNews/NewsDetailPair";
import AOS from 'aos';

function App() {
    AOS.init();

    AOS.init({
        once: "true"
    });

    return (


      <div>
          <BrowserRouter>
              <div>
                  <Switch>
                      <Route path="/" exact component={MainIpTelephony}/>
                      <Route path="/video-monitoring" exact component={VideoMonitoring}/>
                      <Route path="/main-provider" exact component={MainProvider}/>
                      <Route path="/telifaniya" exact component={MainTelephony}/>
                      <Route path="/internetDetails" exact component={MainDetails}/>
                      <Route path="/main-iptv-proekt" exact component={MainIPTV}/>
                      <Route path="/mainInternet/traffic" exact component={MainInternetTraffic}/>
                      <Route path="/maintv" exact component={MainTv}/>
                      <Route path="/maintv/all-channels" exact component={AllChannels}/>
                      <Route path="/itequipment/equipment/:id" exact component={MainEquipment}/>
                      <Route path="/itequipment" exact component={MainItEquipment}/>
                      <Route path="/form" exact component={MainForm}/>

                      <Route path="/home-internet" exact component={HomeInternetChoose}/>
                      <Route path="/Installation" exact component={MainInstallation}/>
                      <Route path="/ItDevelopment" exact component={ItDevelopment}/>
                      <Route path="/contact" exact component={MainContact}/>

                      <Route path="/all-news" exact component={AllNews}/>
                      <Route path="/all-news/news-detail/:id" exact component={NewsDetailPair}/>
                  </Switch>
              </div>
          </BrowserRouter>
          <ToastContainer/>

      </div>

    );
}

export default App;
