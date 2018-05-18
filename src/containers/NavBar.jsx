import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SubMenu extends Component {
    render(){
        return (
            <ul className="nav__submenu">
                {this.props.items.map((item, i) => <li key={i} className="nav__submenu-item"><Link to={item.Link}>{item.Label}</Link></li>) }
            </ul>
        );
    }
}

class ItemMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showAboutMenu: false
        }
    }

    handleHover = () => {
        this.setState({ showAboutMenu: true });
      };
      
      handleLeave = () => {
        this.setState({ showAboutMenu: false });
      };

    render() {
        return (
            <li id={this.props.id} className="nav__menu-item" onMouseLeave={this.handleLeave}>
                    {this.props.items ? 
                        <span onMouseEnter={this.handleHover}>{this.props.itemName}</span>
                        : <Link to={this.props.items ? '/' : ("/" + this.props.id)}>
                            {this.props.itemName}
                          </Link>
                    }

                    {this.state.showAboutMenu && this.props.items && <SubMenu items={this.props.items} />}
            </li>
        )
    }
}

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: '',
        };

        this.closeMenu = this.closeMenu.bind(this);
    }

    handleHover(id) {
        this.setState(
            prevState => ({
                active: prevState.active === id ? '' : id
            }), 
            );
        //console.log("this is: ", this.state.active);
    }

    handleLeave(id) {
        this.setState(
            prevState => ({
                active: prevState.active === id ? '' : id
            }), 
            );
        //console.log("this is: ", this.state.active);
    }

    closeMenu() {
        this.setState({ active: '' }, () => {
          document.removeEventListener('click', this.closeMenu);
        });
      }

    render(){
        return (
            <nav className="nav">
                <ul
                    className="nav__menu"
                    //className="nav navbar-nav"
                >
                    <ItemMenu
                        id="apps"
                        itemName="Приложения"
                    />
                    <ItemMenu
                        id="fltrs"
                        itemName="Фильтры"
                    />
                    <ItemMenu
                        id="rfs"
                        itemName="Справочники"
                        items={[{Label:"Редактор тэгов", Link:"#"},{Label:"Пользовательские тэги", Link:"#"},{Label:"Визиты пользователей", Link:"#"}]}
                    />
                    <ItemMenu 
                        id="prms"
                        itemName="Акции"
                        items={[{Label:"Раз", Link:"#"},{Label:"Два", Link:"#"},{Label:"Три", Link:"#"}]}
                    />
                    <ItemMenu 
                        id="smpls"
                        itemName="Выборки"
                        items={[{Label:"Калькуляция по списку пользователей", Link:"#"}]}
                    />
                </ul>
            </nav>
        );
    }
}

class NavBar extends Component {
    render(){
        return (
            <div
                className="NavBar"
                //className="nav navbar-nav"
            >
                <Menu />
                <div
                    className="SearchAppID"
                    //className="navbar-form navbar-right"
                >
                    <input type="text" placeholder="AppID"/>
                    <button type="submit"></button>
                </div>
            </div>
        );
    }
}

export default NavBar;