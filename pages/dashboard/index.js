import React from 'react';
import DashboardLayoutContainer from "../../layouts/Dashboard/DashboardLayoutContainer";
import DashboardView from "../../views/Dashboard/DashboardView";

function Index(props) {
    return (
        <DashboardLayoutContainer>
            <DashboardView />
        </DashboardLayoutContainer>
    );
}

export default Index;