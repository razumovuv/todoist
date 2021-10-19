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
        this.inputFielsRef = React.createRef();
    }

    render() {
        return (
            <div className='todo-form'>
                <TextField
                    id='todoInput'
                    width='80%'
                    ref={this.inputFielsRef}
                />
                <Button
                    id='todoAdd'
                    colorClass='blue'
                    text='Добавить'
                    clickHandler={() => {
                        const inputfield = this.inputFielsRef.current;
                        alert(inputfield.state.value);
                    }}
                />
            </div>
        );
    }
}
