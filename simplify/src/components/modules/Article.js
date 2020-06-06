import React, { Component } from 'react';
import "../../styles/pages/article.scss";

import backIcon from "./public/chevron-left-solid.svg";
import shareIcon from "./public/share.svg";

class Article extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      loaded: false
    }
  }

  componentDidMount() {
    this.setState({
      data: this.props.data,
      loaded: true
    });
  }

  Join(data) {
    return data.join(", ");
  }
  
  render() {
    return (
      <div className="article">
        {this.state.loaded ? (
          <div className="article__content">
            <div className="article__content__branding">
              <a href="/" className="article__content__branding__back">
                <img className="article__content__branding__back--icon" src={backIcon} alt="Back icon from back button" />
              </a>
              <div className="article__content__branding__content">
                <img className="article__content__branding__content--image" src={this.state.data.site_favicon} alt="Article site favicon" />
                <span className="article__content__branding__content--name">{this.state.data.site_name}</span>
              </div>
              <a href="/" className="article__content__branding__back">
                <img className="article__content__branding__back--icon" src={shareIcon} alt="Share icon from share button" />
              </a>
            </div>
            <div className="article__content__heading">
              <div className="article__content__heading__title">
                <h1 className="article__content__heading__title--text">{
                  this.state.data.article_title
                }</h1>
              </div>
              <div className="article__content__heading__pubdate">
                <span  className="article__content__heading__pubdate--text">
                  {this.state.data.article_pubdate}
                </span>
              </div>
            </div>
            <div className="article__content__paragraphs">
              {
                this.state.data.article_body.map((value, index) => (
                    value.is_img ? (
                      <img className="article__content__paragraphs--image" src={value.content} alt={value.alt} key={index}/>
                    ):(
                      <p className="article__content__paragraphs--text" key={index}>{value.content}</p>
                    )
                ))
              }
            </div>
          </div>
        ) : (
            <div>Loading</div>
          )}
      </div>
    );
  }
}

export default Article