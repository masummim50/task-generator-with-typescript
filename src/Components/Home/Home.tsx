import React, { useEffect, useState } from 'react';
import ActivityContainer from '../ActivityContainer/ActivityContainer';
import Header from '../Header/Header';
import './Home.css'

interface ActivityType{
  activity:string,
  type:string,
  participants:number,
  price:number,
  link:string,
  key:string,
  accessibility:number
}

const Home = () => {

  return (
    <div className="home">
      <ActivityContainer/>
    </div>
  );
};

export default Home;