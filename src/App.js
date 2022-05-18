import React, { useEffect, useState } from 'react';
import './App.css';

const App = () =>{
  const [fake,setFake] = useState([]);
  console.log(fake);

  useEffect(() =>{
    fakestore();
  },[])

  const fakestore = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    const jsonData = await response.json();
    //console.log(jsonData)
    setFake(jsonData);
  }
  return(
    <>
    <h2>Users-Data</h2>
    <div className="container">
      {fake.map((values) =>{
        return(
          <>
           <div className='box'>
             <div className='content'>
               <h5>User Id: {values.id}</h5>
              <h5>Name: {values.name}</h5>
              <h5>UserName: {values.username}</h5>
              <h5>Email: {values.email}</h5>
              <h5>Street: {values.address.street}</h5>
              <h5>City: {values.address.city}</h5>
              <h5>Zipcode: {values.address.zipcode}</h5>
              <h5>Phone No:: {values.phone}</h5>
              <h5>Website: {values.website}</h5>
              <h5>Company: {values.company.name}</h5>
              </div>
            
           </div>
    
          </>
        )
      })}
      </div>
    </>
  )
}

export default App;
