import React from 'react';

export function withTitle(Component, title) {
    const DEFAULT_TITLE = 'Matthieu Fallourd';

    return class extends React.Component {
        componentWillMount() {
            document.title = (title ? title + " | " : "") + DEFAULT_TITLE;
        }

        render() {
            return <Component titlePage={ title } { ...this.props } />;
        }
    }
}