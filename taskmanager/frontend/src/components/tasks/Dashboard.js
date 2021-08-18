import React, { Fragment } from 'react';
import Form from './Form.js';

import { FAQ } from './FAQ';

const dashComponentStyle = {
    'text-align': 'center',
   }
const formComponentStyle = {
    'text-align': 'center',
    'width': '50rem'
   }

export default function Dashboard() {
    return (
        <Fragment>
            <div className="center dashboard"  style={dashComponentStyle}>
                <div className="center" style={formComponentStyle}>
                <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Create New Request
                </button>
                </div>
                <div style={formComponentStyle}>
                    <Form></Form>
                </div>
                <div>
                    <FAQ></FAQ>
                 </div>
            </div>
        </Fragment>
    )
}
