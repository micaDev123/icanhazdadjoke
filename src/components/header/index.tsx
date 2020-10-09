import React from 'react';
import './styles.scss';
import { Drawer, Button } from 'antd';
import { NavLink, Link } from 'react-router-dom';


const TopHeader = (Props: any) => {
    return(
        <div id="header">
            <div id="logo-cont">
                <img
                 id="dadjoke-logo"
                 src="/assets/smile.svg"
                 alt="PriceLOCQ"
                />
            </div>
            <Drawer
                className="ant-drawer-custom"
                placement="left"
                closable={false}
                getContainer={`.ant-layout-content`}
                bodyStyle={{ padding: '24px 0' }}
                width={300}
                key="left"
            >
            </Drawer>
        </div>
    )
}

export default TopHeader;