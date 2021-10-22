//------------------------- File application.js  ----------------------------------
'use strict';

//--------->Import stylesheet
import './application.styles.scss';

//---------> Import React
import React from 'react';

//---------> Import components
import { TODOist } from '@components/TODOist';

export default class Application extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <TODOist />;
    }
}
//------------------------ End of application.js ----------------------------------
