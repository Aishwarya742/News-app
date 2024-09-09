import React, { Component } from 'react'

export class NewsItem extends Component {
    
render() {
   let {title, description, imageUrl,newsUrl,author,date, source} = this.props

   console.log(imageUrl)
return (
<div>
    <div className="my-3">
        <div className="card">
            <img src={!imageUrl?"https://images.moneycontrol.com/static-mcnews/2024/06/20240627155137_Sushi-6.jpg?impolicy=website&width=770&height=431":imageUrl} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title"> {title}<span class="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{left: '90%',zIndex: '1'}}>{source}</span></h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small>By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>

                    <a  rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
        </div>
    </div>
</div>
    )
  }
}

export default NewsItem
