import React from 'react';
import { Navigation } from '../common';
import { VehiclesList } from '../components';

function Main() {
    return <main role="main" className="page page--main container">
        <Navigation />
        <VehiclesList />
    </main>
}

export default Main;