import React, { Component } from 'react';

import Article from "../modules/Article";

import LoadingArticle from "../abstracts/loading";
import mug from "./public/cute_mug_sad.svg";
import '../../styles/pages/homepage.scss';
import "../../styles/components/_error.scss";


class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      url: null,
      loading: false,
      error: false,
      loaded_article: false,
      data: null
    };
  }

  ChangedUrl(e) {
    this.setState({
      url: e.target.value
    });
  }

  ClearURLField() {
    document.getElementById("url_input").value = "";
    this.setState({
      url: null
    });
  }

  Simplify(url) {
    this.setState({
      loading: true
    })

    var payload = new Headers();
    payload.append("article-url", url)

    fetch(`https://simplifyjournal-api.herokuapp.com/parser/json`, {
      method: "GET",
      headers: payload,
      mode: "cors",
      cache: "default"
    })
      .then(res => res.json())
      .then(json => this.ProcessData(json))
      .catch(err => this.PromiseError(err));
  }

  PromiseError(err) {
    this.setState({
      loading: false,
      error: true,
      error_msg: ""
    });
  }

  ProcessData(json) {
    if (json) {
      this.setState({ loading: false });

      if (json.error) {
        this.setState({
          error: true,
        });

        console.error(json);
      } else {
        this.setState({
          error: false,
          data: json,
          loaded_article: true
        })
      }
    }
  }

  render() {
    return (
      <div className="master">
        {!this.state.loaded_article ? (
          <div className="homepage">
            {this.state.loading ? (
              <LoadingArticle />
            ) : (
                <div className="homepage__container">
                  <div className="homepage__container__logo">
                    <h1 className="homepage__container__logo__texts">
                      <span className="homepage__container__logo__texts--small">Simplify</span>
                      <span className="homepage__container__logo__texts--bigger">Journal</span>
                    </h1>
                  </div>
                  <div className="homepage__container__actions">
                    <div className="homepage__container__actions__input">
                      <input onChange={e => this.ChangedUrl(e)} id="url_input" className="homepage__container__actions__input--input" placeholder="Enter article to simplify" />
                      <button onClick={e => this.ClearURLField()} className={`homepage__container__actions__input--clear ${this.state.url != null && 'active'}`}>X</button>
                    </div>
                    <button onClick={() => this.Simplify(this.state.url)} className={`homepage__container__actions--button ${this.state.url ? 'active' : 'hidden'}`}>SIMPLIFY</button>
                    <button onClick={() => this.Simplify("https://www.nytimes.com/live/2020/george-floyd-protests-today-06-01")} className="homepage__container__actions--example">See an example</button>
                  </div>
                </div>
              )}

            <div className={`error ${this.state.error ? 'active' : 'hidden'}`} id="error_popup">
              <div className="error__container">
                <button onClick={() => (
                  this.setState({ error: false })
                )} className="error__container__close">X</button>

                <div className="error__container__logo">
                  <img src={mug} className="error__container__logo--img" alt="Cute MUG" />
                </div>
                <div className="error__container__header">
                  <h1 className="error__container__header--title">
                    Uh, oh
                </h1>
                </div>
                <div className="error__container__description">
                  <span className="error__container__description--text">We're sorry, but something went wrong.</span>
                </div>
              </div>
            </div>
          </div>

        ) : (
            <Article data={this.state.data} />
          )}
      </div>
    );
  }
}

export default Homepage;