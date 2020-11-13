import React from "react";
import {Link, Route, Switch, withRouter} from "react-router-dom";
import {Breadcrumb, Layout} from 'antd';
import BookShelves from './BookShelves';
import Book from "./Book";
import HeaderApp from "./Header";
import Ranking from "./Ranking";
import Home from "./Home";

const {Footer, Content} = Layout;

const breadcrumbNameMap = {
    '/books': 'Books',
    '/books/{id}': '{id}',
    '/ranking': 'Ranking'
};

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {current: ''};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({current: e.key});
    };

    render() {
        const {location} = this.props;

        const pathSnippets = location.pathname.split('/').filter(i => i);
        const extraBreadcrumbItems = pathSnippets.map((_, index) => {
            const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
            const map = breadcrumbNameMap[url.match('/books/') ? '/books/{id}' : url];
            const breadcrumbName = map.replace('{id}', url.split('/')[2]);

            return (
                <Breadcrumb.Item key={url}>
                    <Link to={url}>{breadcrumbName}</Link>
                </Breadcrumb.Item>
            );
        });
        const breadcrumbItems = [
            <Breadcrumb.Item key="home" onClick={this.handleClick}>
                <Link to="/">Home</Link>
            </Breadcrumb.Item>,
        ].concat(extraBreadcrumbItems);

        return (
            <Switch>
                <Layout>
                    <HeaderApp handleClick={this.handleClick} current={this.state.current}/>
                    <Content>
                        <Breadcrumb className="breadcrumb">
                            {breadcrumbItems}
                        </Breadcrumb>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/books" render={(props) => (
                            <BookShelves {...props} handleClick={this.handleClick}/>)}
                        />
                        <Route exact path="/books/:id" component={Book}/>
                        <Route exact path="/ranking" component={Ranking}/>
                    </Content>
                    <Footer>Esse Eu Ja Li! ©2020 Created by Bruno Abreu</Footer>
                </Layout>
            </Switch>
        )
    };
}

export default withRouter(App);
