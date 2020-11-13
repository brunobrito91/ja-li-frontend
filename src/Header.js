import { Component } from 'react';
import {Layout, Col, Row} from "antd";
import Bookshelf from "./bookshelf.png";
import Menu from "antd/lib/menu";
import React from "react";
import {Link, withRouter} from "react-router-dom";

const {Header} = Layout;

class HeaderApp extends Component{

    render() {
        const { current, handleClick } = this.props;
        const { location } = this.props;
        console.log('Header location', location);

        return <Header>
            <Row>
                <Col span={6}>
                    <Link to="/" onClick={handleClick}>
                        <img src={Bookshelf} alt={"bookshelf"} align="left" height={90}/>
                    </Link>
                </Col>
                <Col span={6}>
                    <Link to="/" onClick={handleClick}>
                        <h1 className="header-title">Esse Eu Ja Li!</h1>
                    </Link>
                </Col>
                <Col span={6}>
                    <Menu theme="dark" mode="horizontal" onClick={handleClick} selectedKeys={[current]}>
                        <Menu.Item key="1"><Link to="/books">Livros</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/ranking">Ranking</Link></Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </Header>
    }
}

export default withRouter(HeaderApp);