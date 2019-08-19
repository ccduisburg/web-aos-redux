import React from 'react';
import Renkler from '../higherComponents/Renkler';

const Hakkimizda=(props)=>{
   // console.log(props);
//    setTimeout(()=>{
//        props.history.push('/contact');
//    },2000);
    return (
        <div className="container">
            <h4 className="center">Hakkimizda</h4>
            <p>Hakkimizda Yazilar</p>
        </div>
    )
}

export default Renkler(Hakkimizda);
