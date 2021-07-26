import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Header from './Components/Header/Header';
import { ActivityType } from './Components/ActivityContainer/ActivityContainer';
import ActivityList from './Components/ActivityList/ActivityList';


export type contextType = {
  added: ActivityType[] | [],
  setAdded: Dispatch<SetStateAction<[] | ActivityType[]>>
};

export const Context = createContext<contextType>({} as contextType)
function App() {
  const [added, setAdded] = useState<ActivityType[] | []>([])

  useEffect(()=>{
    if(sessionStorage.getItem('allactivity')===null){
      console.log('nothing here')
    }else{
      let data = sessionStorage.getItem('allactivity');
      let parsed = JSON.parse(data || '{}');
      setAdded(parsed)
    }
  },[added])
  
  return (
    <Context.Provider value={{added, setAdded}}>
    <div className="box">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header/>
            <Home/>
          </Route>
          <Route path='/list'>
            <Header/>
            <ActivityList/>
          </Route>
        </Switch>
      </Router>
    </div>
    </Context.Provider>
  );
}

export default App;
