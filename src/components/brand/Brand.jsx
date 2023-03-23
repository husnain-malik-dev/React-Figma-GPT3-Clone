import React from 'react';
import './Brand.css'
import { google, slack, atlassian, shopify, dropbox } from './import'

const Brand = () => {
  return (
    <div className='brand-container section__padding'>
      <img src={google} alt="" />
      <img src={slack} alt="" />
      <img src={atlassian} alt="" />
      <img src={shopify} alt="" />
      <img src={dropbox} alt="" />
    </div>
  )
}

export default Brand