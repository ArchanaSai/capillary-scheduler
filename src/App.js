import {React, useState, useEffect} from 'react'
import Particles from 'react-particles-js'
import 'tachyons'
import './App.css';

import particlesOptions from './components/assets/particlesjs-config.json'
import Navigation from './components/Navigation'
import TitleAndDescription from './components/TitleAndDescription'
import TitleAndDescriptionWithCard from './components/TitleAndDescriptionWithCard'
import Comments from './components/Comments'

import about from './components/assets/about'
import what from './components/assets/what'
import working from './components/assets/working'
import benefits from './components/assets/benefits'
import hydration from './components/assets/hydration'
import nutrition from './components/assets/nutrition'
import reconstruction from './components/assets/reconstruction'
import hair from './components/assets/images/hair.jpg'


function App() {
  const [route,setRoute] = useState("home")
  const onRouteChange = (route) => {
    setRoute(route)
  }
  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions}/>
      <Navigation onRouteChange={onRouteChange}/>
      { 
        console.log(route), 
        (route === 'hydration') ?
          <div>
            <TitleAndDescription id={hydration.componentID} title={hydration.title} data={hydration.data}/>
          </div> :
        (route === 'nutrition') ?
          <div>
            <TitleAndDescription id={nutrition.componentID} title={nutrition.title} data={nutrition.data}/>
          </div> :
        (route === 'reconstruction') ?
          <div>
            <TitleAndDescription id={reconstruction.componentID} title={reconstruction.title} data={reconstruction.data}/>
          </div> :
        (route === 'contact') ?
          <div>
            <img id="hairImage" src={hair}/>
            <Comments componentID="commentsPanel"/>
          </div> :
          <div>
            <img className="measure-width center f5 f4-ns lh-copy" id="hairImage" src={hair}/>
            <TitleAndDescription id={about.componentID} title={about.title} data={about.data}/>
            <TitleAndDescription id={what.componentID} title={what.title} data={what.data}/>
            <TitleAndDescription id={working.componentID} title={working.title} data={working.data}/>
            <TitleAndDescriptionWithCard id={benefits.componentID} title={benefits.title} data={benefits.data} articleList={benefits.articleList}/>
          </div>
      }  
    </div>
  );
}

export default App;
