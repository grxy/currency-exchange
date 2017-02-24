import React, { Component, PropTypes } from 'react';

const { object, string } = PropTypes;

class Html extends Component {
    static defaultProps = {
        children: '',
        initialState: {}
    }

    static displayName = 'Html'

    static propTypes = {
        children: string.isRequired,
        initialState: object.isRequired
    }

    render = () => (
        <html>
            <head>
                <title>Currency Exchange</title>
            </head>
            <body>
                <div dangerouslySetInnerHTML={{ __html: this.props.children }} id="app" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.__INITIAL_STATE__ = ${JSON.stringify(this.props.initialState)}`
                    }}
                    id="initial-state"
                />
                <script src="/public/app.js" type="text/javascript"></script>
            </body>
        </html>
    )
}

export default Html;
