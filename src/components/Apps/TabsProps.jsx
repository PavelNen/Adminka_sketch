import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './../scss/TabsProps.scss';

//Menu with additional props menu 

class Props extends Component {
    render(){
        return(
            <nav className="props">
            <ul className="props__menu">
            
                {this.props.items.map((item, i) =>
                <li
                key={i}
                className={"props__menu-item" + (this.props.isActive === item.Link ? " active" : '')}
                onClick={() => this.props.handle(item.Link)}
                //onClick={() => this.props.handle( item.Link )}
                >
                 <span className="label">{item.Label}</span>
                 <span className="appCnt">{this.props.cnts[item.Link] || '-'}</span>
                 {console.log(this.props.cnts.moderation)}
            </li>
                ) }
                
            </ul>
            </nav>
        );
    }
        
}

class Tabs extends Component {
    render(){
        return(
            <ul className="tabs__menu">
                {this.props.items.map((item, i) =>
                <li
                    key={i}
                    className={"tabs__menu-item" + (this.props.isActive === item.Link ? " active" : '')}
                    //onClick={() => {this.props.handle( item.Link ); this.props.handleTab( item.Link )}}
                    onClick={() => this.props.handle( item.Link )}
                    >
                     <span>{item.Label}</span>
                </li>) }
            </ul>
        );
    }
        
}

class TabsProps extends Component {
    render() {
        return (
            <div className="tabsBar">
                <nav className="tabs">
                    <Tabs
                        isActive={this.props.activeTab}
                        handle={this.props.handleTab}
                        items={this.props.titlesTabs}
                    />
                    
                    
                </nav>
                
                <CSSTransition
                    in={this.props.activeTab !== 'all'}
                    classNames="props_animation"
                    unmountOnExit
                    timeout={500}>
                        <Props
                            isActive={this.props.activeProp}
                            handle={this.props.handleProp}
                            items={this.props.titlesProps}
                            cnts={this.props.cntProps}
                        />
                </CSSTransition>
            </div>
            
        );
    }
}

export default TabsProps;