import React, {Component} from 'react';
import {Table} from "antd";
import {withRouter} from "react-router-dom";

const ranking = [
    {username: "User 1", score: 200},
    {username: "User 2", score: 300},
    {username: "User 3", score: 100},
    {username: "User 4", score: 250},
    {username: "User 5", score: 350},
    {username: "User 6", score: 150},
    {username: "User 7", score: 230},
    {username: "User 8", score: 270},
    {username: "User 9", score: 201},
    {username: "User 10", score: 300}
];

const columns = [
    {
        title: 'Position',
        dataIndex: 'position',
        key: 'position',
    },
    {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: 'Score',
        dataIndex: 'score',
        key: 'score',
    }
];

class Ranking extends Component {

    render() {
        const { location } = this.props;
        console.log('Ranking location', location);

        const datasource = ranking.sort((a,b) => {
            return b.score - a.score;
        }).map( (r, index) => {
            return {...r,position:index+1};
        });
        return (
            <div className="site-card-wrapper">
                <Table dataSource={datasource} columns={columns}/>;
            </div>
        )
    }
}

export default withRouter(Ranking);