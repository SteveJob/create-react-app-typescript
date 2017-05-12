import * as React from 'react';
import '../../styles/components/header.css';

export declare interface HeaderProp {
    hasUser: string;
}

export default class Header extends React.Component<HeaderProp, undefined> {

    render() {
        return (
            <div className="header">
                <div>{this.props.hasUser}</div>
                <div className="baidu">百度首页</div>
                <button>fetch</button>
            </div>
        );
    }

    fetchBaidu() {
        fetch('http://baidu.com').then(function (response) {
            console.log(response);
        });
    }
}