import React, { Component } from 'react';
import {Scene, Router, Actions, Stack} from 'react-native-router-flux';
import Home from "../screens/Home";
import Music from "../screens/music";

const App = () => (
    <Router>
        <Stack key="root">
            <Scene key="Music" component={Music} title="Album" />
            <Scene key="Home" component={Home} title="Login"/>
        </Stack>
    </Router>
);

export default App;