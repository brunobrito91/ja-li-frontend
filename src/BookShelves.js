import React, {Component} from 'react';
import {Card, Divider, List} from "antd";
import CheckOutlined from "@ant-design/icons/es/icons/CheckOutlined";
import InfoCircleOutlined from "@ant-design/icons/es/icons/InfoCircleOutlined";
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
];

class BookShelves extends Component {

    render() {
        const { handleClick } = this.props;

        return (
            <div className="site-card-wrapper">
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 3,
                        lg: 4,
                        xl: 5,
                        xxl: 6
                    }}

                    pagination={{
                        position: "bottom"
                    }}

                    dataSource={shelves}
                    renderItem={shelf => (
                        <List.Item>
                            <Card key={shelf.id} title={shelf.title} bordered={true} hoverable
                                  style={{width: 240}}
                                  cover={<img alt="example"
                                              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
                                  actions={[
                                      <InfoCircleOutlined onClick={(e) => this.viewBookInfo(e, handleClick, shelf.id)}/>,
                                      <CheckOutlined key="check"/>
                                  ]}
                            >
                                <Meta title={shelf.subtitle} description={shelf.description}/>
                            </Card>
                            <Divider/>
                        </List.Item>
                    )}
                />
            </div>
        )
    }

    viewBookInfo(e, handleClick, id) {
        handleClick(e);
        this.props.history.push("/books/"+id);
    };
}

export default withRouter(BookShelves);