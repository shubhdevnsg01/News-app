import React, { Component } from 'react'

export class Newsitem extends Component {
  render() 
  {
    let {title,description,imageUrl,newsUrl,author,date}=this.props;
    return (
      <div>
        <div className="card">
  <img src={!imageUrl?"https://i1.prth.gr/images/640x360share/files/2023-08-28/elon_musk_xr.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">By {author?author:"Unkonwn"} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem
