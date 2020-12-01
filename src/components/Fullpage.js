import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from './Home';
import About from './About';
import Delegate from './Delegate';
import Partners from './Partners';

const pluginWrapper = () => {
    /*
    * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
    */
};
  
const Fullpage = () => (

// Review parameters and options here: 
// https://github.com/alvarotrigo/fullPage.js#options
// Need license key if we're going to deploy ($40)

  <ReactFullpage
    pluginWrapper={pluginWrapper}
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    navigation
    anchors={['home', 'about', 'delegate', 'partners']}
    sectionsColor = {['#040740', '#B4C7F9', '#056CF2', '#B4C7F9']}
    scrollingSpeed = {1200} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
        
          <div className="section">
            <Home />
          </div>

          <div className="section">
            <About />
          </div>

          <div className="section">
            <Delegate />
          </div>
          
          <div className="section">
            <Partners />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
)

export default Fullpage;