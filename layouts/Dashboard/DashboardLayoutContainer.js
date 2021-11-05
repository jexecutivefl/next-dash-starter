import DashboardLayout from "./DashboardLayout";

function DashboardLayoutContainer(props) {
    return (
        <DashboardLayout>
            {props.children}
        </DashboardLayout>
    );
}

export default DashboardLayoutContainer;