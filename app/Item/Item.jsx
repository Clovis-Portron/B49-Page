import React from 'react';

export default class Item extends React.Component {
    render() {
        return (
            <a href={this.props.link.href}>
                <div className="component-item m-2 text-normal">
                    <img src={this.props.link.image} />
                    <div className="p-2 text-left">
                        <h3 className="mb-1">{this.props.link.title}</h3>
                        <p className="mb-0">
                            {this.props.link.description}
                        </p>
                    </div>
                </div>
            </a>
        );
    }
}