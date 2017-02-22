import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

const { object, string } = PropTypes;

class Html extends Component {
    static defaultProps = {
        children: '',
        initialState: {}
    };

    static propTypes = {
        children: string.isRequired,
        initialState: object.isRequired
    };

    render() {
        const { base, htmlAttributes, link, meta, script, style, title } = Helmet.rewind();

        return (
            <html {...htmlAttributes.toComponent()}>
                <head>
                    {base.toComponent()}
                    {link.toComponent()}
                    {meta.toComponent()}
                    {script.toComponent()}
                    {style.toComponent()}
                    {title.toComponent()}
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
        );
    }
}

export default Html;
