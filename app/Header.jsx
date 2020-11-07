import React from 'react';

export default class Header extends React.Component {

    render() {
        return (
            <div className="component-header">
                <div className="row no-gutters">
                    <div className="col-auto" onClick={ (e) => alert('coucou yann')}>
                        Logo
                    </div>
                    <div className="col">
                        B49
                    </div>
                </div>
            </div>
        );
    }
}