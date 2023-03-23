import React from 'react'
import './Article.css'

const Article = ({img, date, text}) => {
  return (
    <div className='article-container'>
        <div className='article-img'>
            <img src={img} alt="img" />
        </div>
        <div className='article-content'>
            <div>
            <p>{date}</p>
            <h3>{text}</h3>
            </div>          
            <p>Read Full Article</p>
        </div>
    </div>
  )
}

export default Article