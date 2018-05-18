import React, { Component } from 'react';
import './scss/Content.scss';
import catLoading from './media/CatLoader.gif';


//import cat from "../../catLoader.gif";
//import axios from 'axios';
 
class Content extends Component {
    render() {
        return(
            <div id="Content" role="main">
                {
                    this.props.loading ? 
                    <div id="loading" >
                        <img src={catLoading} alt="Loading..." />
                    </div>
                    : ''
                }
                <div id="contentApp" dangerouslySetInnerHTML={{ __html: this.props.content }} />
            </div>
            //<div>{this.load_set_of_application(this.props.activeProp, 0, 0)}</div>

        );
    }
}

export default Content;