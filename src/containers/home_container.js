import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getBooks} from '../actions';
import BookItem from '../widgets/book_item';

class HomeContainer extends Component {

    componentDidMount(){
        this.props.dispatch(getBooks(2,0,'desc'))
    }
    
    renderItems=(books)=>(
         books.list ? 
            books.list.map((item) =>
                 <BookItem {...item} key={item._id}/>
            )
        :null
        )
    
    loadmore = ()=>{
        let count = this.props.books.list.length;
        this.props.dispatch(getBooks(2,count,'desc',this.props.books.list))
    }
    

    render() {
        console.log(this.props)
        return (
            <div>
                {this.renderItems(this.props.books)}
                <div className="loadmore" onClick={this.loadmore}>
                    LOAD MORE
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(HomeContainer)