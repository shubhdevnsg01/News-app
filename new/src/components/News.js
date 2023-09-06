import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types';

export class News extends Component {
   static defaultProps={
     pageSize:8,
     country:'in',
     category:'general'
   }
    static propTypes={
      pageSize:PropTypes.number,
      country:PropTypes.string,
     category:PropTypes.string,
   }    
    constructor(){
        super();
        
        this.state={
            articles:[],
            loading:false,
            page:1

        }
    }
    async componentDidMount(){
     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=65255923e6aa4780aa05aaa3e20a3160&page=1&pageSize=${this.props.pageSize}`;
     let data= await fetch(url);
     let parsedData= await data.json()
     console.log( parsedData);
     this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults})
    }
     handlePrevClick=async()=>{
        console.log("Previous")
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=65255923e6aa4780aa05aaa3e20a3160&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        let data= await fetch(url);
        let parsedData= await data.json()
        console.log( parsedData);
        
        this.setState({
            page:this.state.page-1,
            articles: parsedData.articles

        })

    }
   handleNextClick=async()=>{ 
        console.log("Next")
        if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){

        }
    else {
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=65255923e6aa4780aa05aaa3e20a3160&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        let data= await fetch(url);
        let parsedData= await data.json()
        console.log( parsedData);
        
        this.setState({
            page:this.state.page+1,
            articles: parsedData.articles

        })
      }
    }

  render(){
    return (
      <div className='container my-3'>
        <h2 className='text-center'>News Gorilla-top headlines</h2>
       
        <div className='row'>
         {this.state.articles.map((element)=>{
            return <div className='col-md-4'> 
            <Newsitem key={element.url} title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl= {element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
            </div>
        })} 
            <div className='container d-flex justify-content-between '>
            <button disabled={this.state.page<=1} type="button" className="btn btn-success" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-success" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
        </div>
      </div>
    )
  }
}

export default News
