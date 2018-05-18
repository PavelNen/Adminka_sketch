import React, { Component } from 'react';
import $ from "jquery";
import Content  from './../../components/Content';

//import cat from "../../catLoader.gif";
//import axios from 'axios';
 
class AppTable extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            table: null,
            loading: true
        };
    }

    load_content(urlarg){

        //this.load_set_of_application(this.props.activeProp, 0, 0);
        this.setState({loading:true});

        fetch('***API_SERVER***' + urlarg,
        {'mode': 'cors',
        'credentials': 'include',
        //'headers':{
        //    'Access-Control-Allow-Origin':'*',
        //}
        })
        .then(res => {
            console.log('results: ', res);
            if (res.status !== 200) {  
                console.log('Looks like there was a problem. Status Code: ' +  
                  res.status);  
                return res;  
              }
            return res.text();
        }).then(html => {
            this.setState({table: html, loading: false});
        })
        .catch(function(err) {  
            console.log('Fetch Error :-C', err);  
        });
        
    }

    load_set_of_application(type, left_app_id, right_app_id, wo_change_active, left_updated, right_updated, action) {
        if (action === undefined) {
            action = this.props.activeApp;
        }
        console.log("load_set_of_application(type="+type+", left_app_id="+left_app_id+", right_app_id="+right_app_id+", wo_change_active="+wo_change_active+", left_updated="+left_updated+", right_updated="+right_updated+", action="+action+")");
        if (!wo_change_active || wo_change_active < 1) {
            // снимем класс активности кнопки
            $("ul[name~='set_of_application_switcher'] > li[class~='active']").each(function( index ) { $(this).removeClass('active') });
            // подсвечиваем новую кнопку
            $("ul[name~='set_of_application_switcher'] > li > a > span[name~='"+type+"']").parent('a').parent('li').addClass('active');
        }
        // лоадим контенn
        var urlarg = '?method=admin.set_of_application&action='+action+'&type='+type+'&left_app_id='+left_app_id+'&right_app_id='+right_app_id+'&left_updated='+left_updated+'&right_updated='+right_updated;
        //content_loader('set_of_application', urlarg, 1);
        this.load_content(urlarg);

    }

    
    
    componentDidMount(){
        this.load_set_of_application(this.props.activeProp, 0, 0, undefined, undefined, undefined, this.props.activeApp );
    }
    componentWillReceiveProps(nextProps) {
        this.load_set_of_application(nextProps.activeProp, 0, 0, undefined, undefined, undefined, nextProps.activeApp );
    }

    render() {
        return(
            <Content loading={this.state.loading} content={this.state.table} />
            //<div>{this.load_set_of_application(this.props.activeProp, 0, 0)}</div>

        );
    }
}


export default AppTable;

