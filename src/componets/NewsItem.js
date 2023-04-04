import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
   let {title ,description,imageUrl,newsUrl} = this.props;
    return (
      <div>
        <div className="card" >
            <img src={!imageUrl?"https://nypost.com/wp-content/uploads/sites/2/2023/03/NYPICHPDPICT000009028773.jpg?quality=75&strip=all&w=1024":imageUrl
        } className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a rel='noreferrer' href={newsUrl}  target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
} 

export default NewsItem
