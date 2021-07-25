import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import { Context } from '../../App';
import { ActivityType } from './../ActivityContainer/ActivityContainer';
import './SingleActivity.css';

const SingleActivity = (props:ActivityType) => {
  const {added, setAdded} = useContext(Context)
  const trash = (ac:ActivityType)=>{
    let newlist = added.filter(ad=> ad.activity !== ac.activity)
    setAdded(newlist)
  }
  return (
    <div className="single-activity-container">
      <div className="activity-text">
        <p className="p">{props.activity}</p>
        <p className="grey">It requires {props.participants} people.</p>
      </div>
      <div className="buttons">
        <button onClick={()=>trash(props)} className="trash">Delete</button>
      </div>
    </div>
  );
};

export default SingleActivity;