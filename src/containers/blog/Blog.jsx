import React from 'react'
import './Blog.css'
import Article from '../../components/article/Article'
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
  return (
    <div className='blog-main-container section__padding' id='blog'>
      <div className='blog-heading'>
        <h1 className='gradient__text'>A lot is happening,<br />We are blogging about it.</h1>
      </div>
      <div className='blog-articles'>
          <div className='blog-article-first'>
                <Article img ={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          </div>
          <div className='blog-article-second'>
          <Article img ={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article img ={blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article img ={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article img ={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>                
          </div>
      </div>
    </div>
  )
}

export default Blog