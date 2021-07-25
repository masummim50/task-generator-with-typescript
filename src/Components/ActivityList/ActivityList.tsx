import React, { useContext } from 'react';
import { Context } from '../../App';
import SingleActivity from '../SingleActivity/SingleActivity';

const ActivityList = () => {
  const {added} = useContext(Context)
  return (
    <div style={{width:'100%'}}>
      {
        added.map(ad=><SingleActivity {...ad}/>)
      }
    </div>
  );
};

export default ActivityList;