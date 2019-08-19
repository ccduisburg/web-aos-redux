import React,{Component} from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Anasayfa from './Components/Home';
import iletisim from './Components/Contact';
import Hakkimizda from './Components/About';
import Post from './Components/Post';


class  App extends Component {
render(){
return (
<BrowserRouter>
<div className="App">
   <Navbar/>
   <Switch>
   <Route exact path="/" component={Anasayfa}/>
   <Route path="/about" component={Hakkimizda}/>
   <Route path="/contact" component={iletisim}/>
   <Route path="/:postId" component={Post}/>
   </Switch>
  </div>
</BrowserRouter>

);
}
}

export default App;
