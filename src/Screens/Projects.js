import styled, { keyframes } from "styled-components"
import { useState } from "react"
import { Link } from 'react-router-dom';
import Sidebar from "Components/Sidebar";
import Card from "Components/Card"

export default function Projects(params) {
    return (
            <Card face={'top'}>
                {/* <img src={"https://cdn1.i-scmp.com/sites/default/files/styles/1200x800/public/images/methode/2017/04/06/0a2ae706-1a94-11e7-b4ed-ac719e54b474_1280x720_145124.jpg?itok=1PDxSxTA"}></img> */}

                <Sidebar path={'/about'} title={'About me'} direction={'down'}/>
                <Sidebar path={'/home'} title={'Home'} direction={'left'}/>
                <Sidebar path={'/contact'} title={'Contact'} direction={'right'}/>

                <Content>
                Projects
                </Content>

            </Card>
        )
};

const Content = styled.section`
    display:flex;
    width:60%;
    height:60%;
    font-size:4em;
    justify-content:center;
    align-items:center;
    text-align:center;
`
