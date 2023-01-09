import {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {HelmetProvider} from 'react-helmet-async';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import ModelProvider from './context/provider/ModelProvider';
import DestinationsProvider from './context/provider/DestinationsProvider';
import Nav from './components/Nav';
import NavProvider from './context/provider/NavProvider';
import Toggle from './components/Toggle';
import Details from "./pages/Details";
import SharedProvider from './context/provider/SharedProvider';
import GalleryProvider from './context/provider/GalleryProvider';
import EasternProvider from './context/provider/EasternProvider';
import WesternProvider from './context/provider/WesternProvider';
import NorthernProvider from './context/provider/NorthernProvider';
import SouthernProvider from './context/provider/SouthernProvider';
// <!-- npm i react-helmet-async --> 

function App() {
  console.log(SouthernProvider);
  return (
    <Router>
      <ModelProvider>
        <NavProvider>
          <GalleryProvider>
            <DestinationsProvider>
              <SharedProvider>
                <EasternProvider>
                  <WesternProvider>
                    <NorthernProvider>
                      <SouthernProvider>
                <Toggle />
                <Nav />                  
                  <HelmetProvider>
                    
                    <Switch>
                      <Route path = '/' exact component={Home} />
                      <Route path = '/about' exact component = {About} />
                      <Route path = '/details/:id' exact component = {Details} />
                      <Route component = {NotFound} />
                    </Switch>
                   
                  </HelmetProvider>
                  </SouthernProvider>
                  </NorthernProvider>
                  </WesternProvider>
                  </EasternProvider>
                </SharedProvider>
            </DestinationsProvider>
          </GalleryProvider>
      </NavProvider>
      </ModelProvider>
    </Router>
    
  );
}

export default App;
