import React, { Component } from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux';
import Music from "../screens/music";

const App = () => (
    <Router>
        <Stack key="root">
            <Scene key="Music" component={Music} title="Album" />
        </Stack>
    </Router>
);

export default App;