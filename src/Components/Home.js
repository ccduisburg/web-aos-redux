import React,{Component} from 'react';
// import Axios from 'axios';
import {Link} from 'react-router-dom';
import Resim from '../aos.png';
import {connect} from 'react-redux';


class Anasayfa extends Component{
    // state={
    //     posts:[]
    // }
    // componentDidMount() {
    //   Axios.get('https://jsonplaceholder.typicode.com/posts')
    //   .then(res=>{
    //  this.setState({
    //      posts:res.data.slice(0,10)// veriler posts array i ne atiliyor
    //  })
    //   })
    // }
    
    render(){
        // const {posts}=this.state;
        const {posts}=this.props;
        const postListesi=posts.length?(
            posts.map(post=>{
                return(
                    <div className="card blue-grey darken-1" key={post.id}>
                        <div className="card-image">
                            <img src={Resim}/>
                            <span className="card-title">AOS</span>
                        </div>
                        <div className="card-content white-text">
                            <Link to={'/'+post.id}> <span className="card-title">
                                {post.title}  </span></Link>
                           
                                <p>{post.body}</p>
                          
                        </div>
                    </div>
                )
            })
        ):(
            <div> Veri yok</div>
        )
    return (
        <div className="container">
           {postListesi}
        </div>
    )
    } 
    
}

//burada
// store icersisindeki posts array degiskenini Home sayfasinda kullanabilmek icin
// props haline getirmek gerekiyor
// bu islemi  function mapStateToProps yardimi ile yapiyoruz.
//state yi parametre olarak aliyor. 
const mapStateToProps=(state)=>{
    return{ posts:state.posts}     
    
}
//Anasayfada store nesnesini kullanacagiz
//index.js sayfasinda Provider isle stor u diger componentlerin kullanimina acmistik
//store icerisindeki state leri props lara ceviren function 
// connect in parametresi olarak geliyor
export default connect(mapStateToProps)(Anasayfa);
