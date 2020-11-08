import React from 'react';

export default class Item extends React.Component {
    render() {
        return (
            <a href={this.props.link.href} target="_blank">
                <div className="component-item m-2 text-normal">
                    <div className="image" style={{backgroundImage: `url(${this.props.link.image})`}}>
                    </div>
                    <div className="p-2 text-left">
                        <div className="text-muted by">
                            <a href={this.props.link.by.href}>{ this.props.link.by.name }</a>
                        </div>
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