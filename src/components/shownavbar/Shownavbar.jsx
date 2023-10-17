import React from 'react'
import { useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import { useState } from 'react';

const Shownavbar = ({children}) => {

    const location =useLocation();

    const [viewNavbar, setViewNavbar] = useState(false)

    useEffect(()=> {
        console.log('Locación: ', location)
        if(location.pathname === '/login' || location.pathname === '/registro'){
            setViewNavbar(false)
        }else{
            setViewNavbar(true)
        }
    }, [location])
  return (
    <div>{viewNavbar && children}</div>
  )
}

export default Shownavbar