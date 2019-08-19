import React, { Component } from 'react'
//import axios from 'axios';
import {connect} from 'react-redux';

 class Post extends Component {
    // state={
    //     data:null
    // }
    // componentDidMount(props){
    //  //   console.log(this.props);
    //     let id=this.props.match.params.postId;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
    //     .then(res=>{
    //         this.setState({data:res.data}

    //     )
    //  } )
    // }

    handleClick=()=>{
        console.log(this.props);
        this.props.PostSil(this.props.data.id)
    }
    render() {
       // const posts=this.state.data
        const posts=this.props.data?(
            <div>
             <h4 className="center">
                 <p>{this.props.data.body}</p>
                 <button className="btn grey" onClick={this.handleClick}>Sil</button>
             </h4>
            </div>
        ):(
            <div className="center">Veriler Yükleniyor</div>
        )
        return (
            <div className="container">
               {posts}
            </div>
        )
    }
}

const mapStateToProps=(state,kendiProps)=>{
    //App.js deki bu satirla <Route path="/:postId" component={Post}/>
    //postId sine bakarak hangi state nin cagrilmak istedigini belirliyoruz
  let id=kendiProps.match.params.postId;//burada tiklanan Id yi yakaliyoruz
  return{
      data:state.posts.find(post=>post.id==id)//buradaki post lar store icerisinden gönderiliyor
  }
}

const mapDispatchToProps=(dispatch)=>{
    //action a gönderecegim type i dispatch ile belirliyoruz
    return{
        PostSil:(id)=>{dispatch({type:'DELETE',id:id})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Post);