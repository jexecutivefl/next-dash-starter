import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useRouter} from 'next/router';
import Link from "next/link";

export default function ButtonAppBar() {
    const router = useRouter()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar
                    sx={{justifyContent: 'space-between'}}
                >
                    <Box
                        display={"flex"}
                        columnGap={'15px'}
                        alignItems={'center'}
                    >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                        <Link href='/'>
                            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                                EzEHR
                            </Typography>
                        </Link>
                    </Box>
                    <Box
                        display={"flex"}
                        columnGap={'35px'}
                        alignItems={'center'}
                    >
                    <Link href='/'>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            How It Works
                        </Typography>
                    </Link>
                    <Link href='/'>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            How Much
                        </Typography>
                    </Link>
                    <Link href='/'>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Who Qualifies
                        </Typography>
                    </Link>
                        <Button color="inherit" onClick={()=>router.push('/dashboard')}>Login</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
