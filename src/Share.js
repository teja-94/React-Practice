import React, { Component } from "react";
//import MetaTags, { ReactTitle } from 'react-meta-tags';
//import ShareLink from 'react-facebook-share-link'
//import { FacebookProvider, Profile } from 'react-facebook';
//import ShareButton from 'react-social-share-buttons'
import {
    FacebookIcon, FacebookShareButton,
    TwitterShareButton, TwitterIcon, PinterestShareButton,
    RedditShareButton,
    TumblrShareButton,
    PinterestIcon,
    RedditIcon, TumblrIcon
} from 'react-share'



class Share extends Component {
  
    render()
    {
        

        //Facebook share not allowed ImageUrl/PictureUrl attributes in directly .So,that this is the another way.v r using Open Graph(https://developers.facebook.com/docs/sharing/webmasters#markup) Meta Tags for image,descrpition,title,url...etc.
        //and checking required url on facebook sharing debugger (https://developers.facebook.com/tools/debug/).
        const meta = {
            title: 'Open Graph Properties',
            meta: {
              property: {
                'og:title': 'Title for You',
                'og:url': 'https://images.app.goo.gl/hEKWEgD4DmCt7ig78',
                'og:image': 'https://images.app.goo.gl/jKTkX53w27vBRtZH8',
                'og:description': 'New Perspective of Exploration',
                'fb:app_id': "9869919170",
              }
            }
          };

    
    
        let pictureUrl = "https://images.app.goo.gl/BSodD3ikvy7qwJmW9" ;
        let title = "Hello,Tiger Kids" 
      
        return (
            <div>
                 <div>
                    Hey, share me!
                </div>
              
        <FacebookShareButton url={meta.meta.property["og:image"]} quote={meta.meta.property["og:title"]}>
            <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
   
        <TwitterShareButton url={pictureUrl} title={title} appId={1886616558154416}>
            <TwitterIcon size={32} round={true}/>
        </TwitterShareButton>
            
       {/* <PinterestShareButton url={meta.meta.property["og:image"]} title={meta.meta.property["og:title"]} appId={1886616558154416}>
            <PinterestIcon size={32} round={true}/>
        </PinterestShareButton>

              
        <TumblrShareButton url={meta.meta.property["og:image"]} title={meta.meta.property["og:title"]} appId={1886616558154416}>
            <TumblrIcon size={32} round={true}/>
        </TumblrShareButton> */}
                  
            </div>
    );
  }
}

export default Share;