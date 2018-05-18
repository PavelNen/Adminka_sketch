import React, { Component } from 'react';
import './../components/scss/Apps.scss';
import TabsPropsCnt from './../containers/Apps/TabsProps';
import AppTable from './Apps/AppsTable';

class Apps extends Component {

    constructor (props) {
        super(props);
        this.state = {
            actApp: 'bigweb',
            actProp: 'moderation',
        }

        this.handleApp = this.handleApp.bind(this);
        this.handleProp = this.handleProp.bind(this);
    }

    handleApp(app){
        this.setState(
            {actApp: app,
             actProp: app === 'all' ? 'all' : this.state.actProp}
        );
        //console.log('TabsProps, handleApp. activeApp: ', this.state.actApp);
    }

    handleProp(prop){
        this.setState(
            {actProp: prop}
        );
        //console.log('TabsProps, handleProp. activeProp: ', this.state.actProp);
    }

    render() {
        return (
            <div id="AppsWindow">
                <TabsPropsCnt
                    activeTab={this.state.actApp}
                    activeProp={this.state.actProp}
                    handleTab={this.handleApp}
                    handleProp={this.handleProp}
                    //handleTab={this.handleClickApp}
                    //handleProp={this.handleClickProp}
                    titlesTabs={[{Label:"Все", Link:"all"},{Label:"Мой Мир", Link:"bigweb"},
                                {Label:"Внешние", Link:"oauth"},{Label:"Мобильные", Link:"mobweb"},
                                {Label:"Почта чтение", Link:"postread"},{Label:"Почта запись", Link:"postwrite"}]}
                    titlesProps={[{Label:"Все", Link:"all"},{Label:"На модерации", Link:"moderation"},{Label:"В разработке", Link:"develop"},
                                {Label:"Публичные", Link:"public"},{Label:"В каталоге", Link:"catalog"},
                                {Label:"Скрытые", Link:"hidden"}]}
                />
                
                <AppTable
                    activeApp={this.state.actApp}
                    activeProp={this.state.actProp}
                />
        </div>
        );
    }
}

export default Apps;