'use strict';

//--------->Import stylesheet
import './TODOItem.styles.scss';

//---------> Import React
import React from 'react';
import PropTypes from 'prop-types';
//---------> Import components
import { IconButton } from '@components/common/IconButton';
import { CheckBox } from '@components/common/CheckBox';
import { TextField } from '@components/common/TextField';

export class TODOItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTaskValue: props.children,
            inputTaskValue: props.children,
            isEditing: false,
        };
        this.taskInputRef = React.createRef();
    }
    handleDelete = (buttonId) => this.props.deleteHandler(buttonId);
    handleComplite = (event) => this.props.compliteHandler(event);
    handleEdit = (buttonId) => {
        this.taskInputRef.current.disabled = false;
        this.taskInputRef.current.focus();
        this.setState((state) => {
            return { inputTaskValue: state.currentTaskValue, isEditing: true };
        });
    };
    handleInputBlur = (event) => {
        this.taskInputRef.current.disabled = true;
        this.setState({
            isEditing: false,
        });
    };

    handleInputChange = (event) => {
        this.setState({ inputTaskValue: event.target.value });
    };
    handleUpdate = (event) =>
        this.props.updateHandler(event, (todo) => {
            this.setState({ currentTaskValue: todo });
            this.taskInputRef.current.blur();
        });

    render() {
        return (
            <li id={this.props.id}>
                <div className='todo-list__item'>
                    <div className='todo-list__item__task'>
                        <CheckBox
                            id={'check_' + this.props.id}
                            label={this.props.children}
                            checked={this.props.complited ? 'checked' : ''}
                            changeHandler={this.handleComplite}
                        >
                            <form
                                id={'formInput_' + this.props.id}
                                onSubmit={this.handleUpdate}
                            >
                                <TextField
                                    id={'task_' + this.props.id}
                                    value={
                                        this.state.isEditing
                                            ? this.state.inputTaskValue
                                            : this.state.currentTaskValue
                                    }
                                    isDisabled={true}
                                    inputRef={this.taskInputRef}
                                    focusHandler={this.handleInputFocus}
                                    blurHandler={this.handleInputBlur}
                                    changeHandler={this.handleInputChange}
                                />
                            </form>
                        </CheckBox>
                    </div>
                    <div className='todo-list__item__btn-panel'>
                        <IconButton
                            id={'editBtn_' + this.props.id}
                            type='Edit'
                            size='25px'
                            color='#5c8bf0'
                            clickHandler={this.handleEdit}
                        />
                        <IconButton
                            id={'deleteBtn_' + this.props.id}
                            type='Delete'
                            size='25px'
                            color='red'
                            clickHandler={this.handleDelete}
                        />
                    </div>
                </div>
            </li>
        );
    }
}

TODOItem.propTypes = {
    id: PropTypes.string,
    complited: PropTypes.bool,
    deleteHandler: PropTypes.func,
    compliteHandler: PropTypes.func,
    updateHandler: PropTypes.func,
};
