//---------------------------- File button.js -------------------------------------
'use strict';

//--------->Import stylesheet
import './button.styles.scss';

//---------> Import React
import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        id: PropTypes.string,
        text: PropTypes.string,
        clickHandler: PropTypes.func,
        colorTheme: PropTypes.string,
        type: PropTypes.string,
        href: PropTypes.string,
    };

    handleClick = () => {
        this.props.clickHandler(this.props.id);
    };

    render() {
        const className = ['btn', this.props.colorTheme];
        const btnType =
            this.props.type === 'link' ? (
                <a
                    id={this.props.id}
                    onClick={this.handleClick}
                    href={this.props.href}
                >
                    {this.props.text}
                </a>
            ) : (
                <span id={this.props.id} onClick={this.handleClick}>
                    {this.props.text}
                </span>
            );
        return <div className={className.join(' ').trim()}>{btnType}</div>;
    }
}
