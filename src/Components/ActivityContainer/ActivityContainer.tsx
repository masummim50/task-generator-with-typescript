import React, { useContext, useState } from 'react';
import { Context, contextType } from '../../App';
import './ActivityContainer.css'

export interface ActivityType{
  activity:string,
  type:string,
  participants:number,
  price:number,
  link:string,
  key:string,
  accessibility:number
}

const ActivityContainer = () => {
  const [activity, setActivity]= useState<ActivityType>({
    activity:'I',
    type:'',
    participants:0,
    price:0,
    link:'',
    key:'',
    accessibility:0
  })
  const generateFunction = ()=>{
      setActivity({
        activity:'',
        type:'',
        participants:0,
        price:0,
        link:'',
        key:'',
        accessibility:0
      })
      fetch('https://www.boredapi.com/api/activity')
      .then(res=>res.json())
      .then(data=>setActivity(data))
    }
  const {added, setAdded} = useContext<contextType>(Context)
    const addtolist = (activity:ActivityType)=>{
      if(added.filter(ad=> ad.activity === activity.activity).length === 1){
        return false
      }else{
      setAdded([...added, activity])
      }
    }

  return (
    <>
    <div className="activity-container">
        {
          activity.activity === 'I'?
          <>
            <h2>Feeling Bored?</h2>
            <h2>Generate a fun activity</h2>
          </>
          :
          <div style={{padding:'0 10px'}} className="visible-activity">
            <h3>{activity.activity}</h3>
            {
              activity.activity !== ''? 
              <>
              <p>Like this idea?</p>
              <button onClick={()=>addtolist(activity)} className="addbtn">Add to list</button>
              </>:
              <></>
            }
          </div>
        }
      </div>
      <button 
        className="generate-btn"
        onClick={generateFunction}
      >
        {
          activity.activity===''?
          `Loading...` :
          <span>Generate<br/>Activity</span>
        }
      </button>
      </>
  );
};

export default ActivityContainer;