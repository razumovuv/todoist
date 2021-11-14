//--------------------------- File todo-form.js -----------------------------------
'use strict';

//--------->Import stylesheet
import './TODOForm.styles.scss';

//---------> Import React
import React from 'react';
import PropTypes from 'prop-types';

//---------> Import components
import { TextField } from '@components/common/TextField';
import { Button } from '@components/common/Button';

export class TODOForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inputValue: '' };
    }
    handleSubmit = (event, cb) =>
        this.props.submitHandler(event, () => {
            this.setState({ inputValue: '' });
        });
    handleChange = (event) => {
        this.setState({ inputValue: event.target.value });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} id={this.props.id}>
                <div className='todo-wrapper todo-wrapper_flex'>
                    <div className='text-field-box'>
                        <TextField
                            id='todoInput'
                            value={this.state.inputValue}
                            customStyle='text-field-custom'
                            changeHandler={this.handleChange}
                        />
                    </div>
                    <div className='button-box'>
                        <Button
                            id='todoAdd'
                            colorClass='blue'
                            text='Добавить'
                            type='submit'
                        />
                    </div>
                </div>
            </form>
        );
    }
}

TODOForm.propTypes = {
    id: PropTypes.string,
    inputValue: PropTypes.string,
    submitHandler: PropTypes.func,
};
