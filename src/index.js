import React from 'react';

import ReactDOM from 'react-dom';

//class based component

class Clock extends React.Component{

    
    
 dec2bin(dec) {
        return (dec >>> 0).toString(2);
      }
    render(){
return(
    <div>
<h1>class based component</h1>
{}
dec2bin(2)
</div>
);
    };
    
};



   
ReactDOM.render(<Clock />, document.getElementById('root'));









