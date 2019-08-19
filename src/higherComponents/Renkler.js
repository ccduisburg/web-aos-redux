import React from 'react';
const Renkler=(WrapperComponent)=>{
  const renkler=['red','pink','pink','green','blue','orange'];
  const randomRenk=renkler[Math.floor(Math.random()*5)];
  const sinif=randomRenk+'-text';
  return (props)=>{
      return(
          <div className={sinif}>
              <WrapperComponent {...props}/>
          </div>
      )
  }
}
export default Renkler;