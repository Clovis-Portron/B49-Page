import React from 'react';

import db from './../links.json';

import Header from './Header/Header.jsx';
import Item from './Item/Item.jsx';

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="text-center pt-4">
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