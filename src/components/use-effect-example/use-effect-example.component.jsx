import React, { useState, useEffect } from 'react';

import Card from '../card/card.component';

const UseEffectExample = () => {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('Bret');

  //USE EFFECT
  //does not get back value
  //gets function whenever updates/rerenders
  //used instead of mount or didupdate
  useEffect(() => {
    //conditionals must be used within the hook rather than a hook being wrapped by the conditional
    
    if(searchQuery.length>0){
      console.log('render')
      //this is in place of component did mount = getting data on render
      const fetchFunc = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
        );
        const resJson = await response.json();
        setUser(resJson[0]);
      };
  
      fetchFunc();
    }

    //will not trigger rerender - only want to trigger when search query changes
    //empty array means we only want this to fire when we first mount the component
  }, [searchQuery]); //this param = searchquery makes it so that we only rerender when search query rerenders

  return (
    <Card>
      <input
        type='search'
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
      />
      {user ? (
        <div>
          <h3>{user.name}</h3>
          <h3> {user.username} </h3>
          <h3> {user.email} </h3>
        </div>
      ) : (
        <p>No user found</p>
      )}
    </Card>
  );
};

export default UseEffectExample;
