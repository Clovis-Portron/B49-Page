import React from 'react';

import db from './../links.json';

import Header from './Header.jsx';
import Item from './Item.jsx';

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div>
                    {
                        db.links.map((link) => <Item 
                            link={link}
                        />)
                    }
                </div>
            </React.Fragment>
        );
    }
}