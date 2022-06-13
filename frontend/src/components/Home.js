import React, {Component} from "react";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import {render} from "react-dom";

export default class Home extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/"><p>this is the homepage</p></Route>
                        <Route path="/join" exact component={<RoomJoinPage/>}></Route>
                        <Route path="/create" exact component={<CreateRoomPage/>}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

