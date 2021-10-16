import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import preval from 'preval.macro';
import "react-image-gallery/styles/scss/image-gallery.scss";
import { useHistory } from "react-router-dom";


import './App.scss'

const AllGalleryMap = [
  {
    group: 'Year 2021',
    albumns: [
      {
    name: 'yoga2021',
    display: 'Yoga Week',
    
    background: 'https://cdn.pixabay.com/photo/2017/06/23/04/50/yoga-2433478_960_720.jpg',
    desc: '',
  },
  {
    name: 'freedom75',
    display: 'Freedom 75',
    background: 'data:image/jpeg;base64,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',
    desc: ''
  },
  {
    name: 'covid21',
    display: 'Covid Support',
    background: 'data:image/jpeg;base64,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',
    desc: ''
  }
    ]
  },
  {
    group: 'Year 2020',
    albumns: [
      {
    name: 'dp2020',
    display: 'Durga Puja',
    background: 'https://ddspictures.files.wordpress.com/2014/10/dsc6303-copy-copy1.jpg',
    desc: '',
    images: [{
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    }],
  },
  {
    name: 'kp2020',
    display: 'Kali Puja',
    desc: ''
  }
    ]
  },
  {
    group: 'Year 2019',
    albumns: [
      {
    name: 'dp2019',
    display: 'Durga Puja',
    background: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMkQAx3axrc-uYi_arX-t13X00VuRHn3Fnr8APJgjW5QFvVLUiGvhUHSdakaYoBZWyapA&usqp=CAU',
    desc: ''
  },
  {
    name: 'kp2019',
    display: 'Kali Puja',
    desc: ''
  },{
    name: 'nazrul19',
    display: 'Nazrul Sandhya',
    desc: ''
  },{
    name: 'picnic19',
    display: 'Picnic',
    desc: ''
  }
    ]
  },
  {
    group: 'Year 2018',
    albumns: [
      {
    name: 'dp2018',
    display: 'Durga Puja',
    desc: ''
  },
  {
    name: 'kp2018',
    display: 'Kali Puja',
    desc: ''
  },{
    name: 'rabindra18',
    display: 'Rabindra Swarane',
    desc: ''
  }
    ]
  }
  
]
export const Gallery = (props) =>  {

  let { id } = useParams();
  let history = useHistory();

  const getImages = (alid) => {
    let found = {};
    AllGalleryMap.forEach((g) => {
      const obj = g.albumns.filter((f) => {
        return f.name === alid
      })
      if(obj && obj.length) {
        found = obj[0];
      }
    })
    // return found.images;
    return [{
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    }]
  }
    return (
   <div>
     {
       id? (<div style={{margin: '0 auto',width: '65%'}}><ImageGallery items={getImages(id)} originalHeight ="400"/></div>):(<>{
        AllGalleryMap.map((g, gi) => {
          return (
           <div className="content-section">
           <div className="side-title" key={gi}>{g.group}</div>
           <div className="apps-card">
           {
             g.albumns.map((a, ai) => {
               return (
                 <div className="small-card" key={ai} onClick={() => history.push(`gallery/${a.name}`)} style={{backgroundImage: `url(${a.background})`, backgroundSize: 'contain'} }>
           <span>
            <svg viewBox="0 0 52 52" style={{border: "1px solid #C75DEB"}}>
            </svg>
            {a.display}
           </span>
           <div className="app-card__subtext">{a.display}</div>
           <div className="app-card-buttons">
            <button className="content-button status-button">View</button>
           </div>
          </div>
               )
             })
           }
           </div>
           </div>
           
          )
        })
      }</>)
     }
     
   </div>
    
    );
}
