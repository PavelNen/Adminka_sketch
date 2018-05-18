import React, { Component } from 'react';
import TabsProps from './../../components/Apps/TabsProps';

//Menu with additional props menu 

class TabsPropsCnt extends Component {

    constructor(props){
        super(props);
        this.state = {
            propCnts : {}
        }
    }

    loadCntCascade(activeTab) {
        let cnts = {};
        this.props.titlesProps.forEach((el, index) => {
            console.log('start fetch')

            fetch('***API_SERVER***'+activeTab+'&type='+el.Link,
            {'mode': 'cors',
            'credentials': 'include'})
            .then(cnt => {
                cnt.text().then(
                    resolved => {
                        return resolved
                        //console.log(resolved)
                    },
                    error => {
                        console.log('reject: ' +error)
                        return "-"
                    }
                ).then((res)=> {
                    cnts[el.Link] = res
                    this.setState(
                        {propCnts:  cnts}
                    );
                })
            })
            .catch(function(err) {  
                console.log('Fetch Error :-C', err)
            })

        })
    }

    loadCntOnce(activeTab){
        let cnts = {};
        const cntPromise = new Promise((resolve,reject) => {
            const len = this.props.titlesProps.length
            let doneFetch = 0;
            this.props.titlesProps.forEach((el, index) => {
            console.log('start fetch')

            fetch('***API_SERVER***'+activeTab+'&type='+el.Link,
            {'mode': 'cors',
            'credentials': 'include'})
            .then(cnt => {
                
                cnt.text().then(
                    resolved => {
                        cnts[el.Link] = resolved

                        //console.log(resolved)
                    },
                    error => {
                        cnts[el.Link] = "-"
                        console.log('reject: ' +error)
                    }
                )

                doneFetch++
                if (doneFetch === len) {
                    resolve('fetch end')
                }
            })
            .catch(function(err) {  
                reject('Fetch Error :-C', err)
            })

            })

        });

        cntPromise.then((resolvedValue) => {
            this.setState( 
                    {propCnts: cnts}
            );
        }, (error) => {
            console.log(error)
        })
        
    }

    componentDidMount(){
        this.loadCntCascade(this.props.activeTab);
    }

    componentWillReceiveProps(nextProps){
        if (this.props.activeTab !== nextProps.activeTab ) {
            this.loadCntCascade(nextProps.activeTab);
        }
    }

    render() {
        return (
            <TabsProps 
                    activeTab={this.props.activeTab}
                    activeProp={this.props.activeProp}
                    handleTab={this.props.handleTab}
                    handleProp={this.props.handleProp}
                    //handleTab={this.handleClickApp}
                    //handleProp={this.handleClickProp}
                    titlesTabs={this.props.titlesTabs}
                    titlesProps={this.props.titlesProps}
                    cntProps={this.state.propCnts}
                />
        );
    }
}

export default TabsPropsCnt;