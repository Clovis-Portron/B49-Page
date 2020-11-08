import React from 'react';

import db from './../links.json';

import Header from './Header/Header.jsx';
import Item from './Item/Item.jsx';
import Footer from './Footer/Footer.jsx';

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="d-flex flex-column">
                    <Header />
                    <div className="text-center pt-4 flex-grow-1">
                        {
                            db.links.map((link) => <Item 
                                key={link.href}
                                link={link}
                            />)
                        }
                    </div>
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}