import React from 'react';
import {Layout} from 'antd';
import TopHeader from '../header';
import HomePage from '../homepage';
import { Route, Switch, Redirect } from 'react-router-dom';

import {HOME_PAGE, INDEX_PAGE} from '../../utils/urls';

interface IndexPageProps {}

const IndexPage = (props: IndexPageProps) => {
    const {Header, Content} = Layout;
    return (
        <Layout>
            <Header>
            <TopHeader />
            </Header>
            <Content>
                <Route 
                render={({ location }) => (
                    <Switch location={location}>
                    <Redirect exact path={INDEX_PAGE} to={HOME_PAGE} />
                    <Route exact path={HOME_PAGE} component={HomePage} />
                    </Switch>    
                 )}
                />
            </Content>
        </Layout>
    )
}

export default IndexPage;