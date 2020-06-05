import React, { Component } from "react";
import "../../styles/components/_loading.scss";

class LoadingArticle extends Component {
    constructor() {
        super();
        this.state = {
            url: null,
            loading: false
        };
    }

    render () {
        return (
            <div className="loading">
                <div className="loading__container">
                    <div className="loading__container__dummy">
                        <div className="loading__container__dummy--placeholder"></div>
                    </div>
                    <div className="loading__container__dummy first">
                        <div className="loading__container__dummy--placeholder"></div>
                    </div>
                    <div className="loading__container__dummy">
                        <div className="loading__container__dummy--placeholder"></div>
                    </div>
                    <div className="loading__container__dummy">
                        <div className="loading__container__dummy--placeholder"></div>
                    </div>
                    <div className="loading__container__dummy">
                        <div className="loading__container__dummy--placeholder"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoadingArticle;