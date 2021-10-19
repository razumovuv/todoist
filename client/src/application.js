//------------------------- File application.js  ----------------------------------
'use strict';

//--------->Import stylesheet
import './application.styles.scss';

//---------> Import React
import React from 'react';

//---------> Import components
import { TODOForm } from '@components/TODO/TODOForm';

export default class Application extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='main-conteiner'>
                <TODOForm />
            </div>
        );
    }
}
//------------------------ End of application.js ----------------------------------
