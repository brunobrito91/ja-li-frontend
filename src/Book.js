import React, {Component} from 'react';
import {Card} from "antd";
import {withRouter} from "react-router-dom";

const {Meta} = Card;

const shelves = [
    {id: 1, title: 'Book 1', subtitle: "Subtitle 1", style: 'Fiction', description: "Description 1"},
    {id: 2, title: 'Book 2', subtitle: "Subtitle 2", style: 'Suspense', description: "Description 2"},
    {id: 3, title: 'Book 3', subtitle: "Subtitle 3", style: 'Policial', description: "Description 3"},
    {id: 4, title: 'Book 4', subtitle: "Subtitle 4", style: 'Fiction', description: "Description 4"},
    {id: 1, title: 'Book 1', subtitle: "Subtitle 1", style: 'Fiction', description: "Description 1"},
    {id: 2, title: 'Book 2', subtitle: "Subtitle 2", style: 'Suspense', description: "Description 2"},
    {id: 3, title: 'Book 3', subtitle: "Subtitle 3", style: 'Policial', description: "Description 3"},
    {id: 4, title: 'Book 4', subtitle: "Subtitle 4", style: 'Fiction', description: "Description 4"},
    {id: 1, title: 'Book 1', subtitle: "Subtitle 1", style: 'Fiction', description: "Description 1"},
    {id: 2, title: 'Book 2', subtitle: "Subtitle 2", style: 'Suspense', description: "Description 2"},
    {id: 3, title: 'Book 3', subtitle: "Subtitle 3", style: 'Policial', description: "Description 3"},
    {id: 4, title: 'Book 4', subtitle: "Subtitle 4", style: 'Fiction', description: "Description 4"},
    {id: 1, title: 'Book 1', subtitle: "Subtitle 1", style: 'Fiction', description: "Description 1"},
    {id: 2, title: 'Book 2', subtitle: "Subtitle 2", style: 'Suspense', description: "Description 2"},
    {id: 3, title: 'Book 3', subtitle: "Subtitle 3", style: 'Policial', description: "Description 3"},
    {id: 4, title: 'Book 4', subtitle: "Subtitle 4", style: 'Fiction', description: "Description 4"},
];

class Book extends Component {

    render() {
        const { location } = this.props;
        console.log('Book location', location);

        const id = this.props.match.params.id;
        const shelf = shelves[id-1];
        return (
            <div className="site-card-wrapper">
                <Card title={shelf.title} bordered={true} hoverable
                      style={{width: 240}}
                      cover={<img alt="example"
                                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
                >
                    <Meta title={shelf.subtitle} description={shelf.description}/>
                </Card>
            </div>
        )
    }
}

export default withRouter(Book);