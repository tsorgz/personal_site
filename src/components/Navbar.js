import React from 'react';
import './Navbar.css';


export class Navbar extends React.Component {
    constructor(props) {
        super(props) 
    }

    render() {
        return (
            <div class="navigation">
                <input type="checkbox" class="navigation__button" id="navi-toggle"/>
                <label for="navi-toggle" class="navigation__button">Menu</label>
                <div class="navigation__background">&nbsp;</div>
                <nav class="navigation__nav">
                    <ul class="navigation__list">
                        <li class="navigation__item">
                            <a href="#" class="navigation__link"></a>
                            COMING SOON
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}