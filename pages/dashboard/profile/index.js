import {AmplifySignOut} from "@aws-amplify/ui-react";
import {Auth} from 'aws-amplify'
import {useState, useEffect} from 'react'
import {List, ListItem, Typography} from "@mui/material";
import DashboardLayoutContainer from "../../../layouts/Dashboard/DashboardLayoutContainer";

function Profile(){
    const [user, setUser] = useState(null)
    useEffect(()=>{
        checkUser()
    }, [])
    async function checkUser() {
        const user = await Auth.currentAuthenticatedUser()
        setUser(user)
    }
    if(!user) return null

    return (
        <DashboardLayoutContainer>
            <List>
                <ListItem>
                    <Typography variant={'h5'}>Profile</Typography>
                </ListItem>
                <ListItem>
                    <Typography variant={'h6'}>{user.attributes.email}</Typography>
                </ListItem>
                <ListItem>
                    <AmplifySignOut />
                </ListItem>
            </List>
        </DashboardLayoutContainer>
    )
}

export default Profile