import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import { alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import GridViewIcon from '@mui/icons-material/GridView';
import { Link } from 'react-router-dom';
import { MinusOutlined } from '@ant-design/icons'
import { PlusOutlined } from '@ant-design/icons'
import { Collapse } from 'antd';
import { AppRegistration, Email, Error, Login, People, QuestionMarkRounded } from '@mui/icons-material';
const items = [
    {

        key: '1',
        label: <div className='text-secondary fs-5'>Components</div>,
        children: <div className='text-primary ms-3'>
            <div>
                <h6>Alerts</h6>
                <h6>Accordions</h6>
                <h6>Badges</h6>
                <h6>Breadcrumbs</h6>
                <h6>Buttons</h6>
                <h6>Cards</h6>
                <h6>Carousel</h6>
                <h6>List groups</h6>
            </div>
        </div>,
    },
]
const item = [
    {
        key: '1',
        label: <div className='text-secondary fs-5'>Tables</div>,
        children: <div className='text-primary ms-3'>
            <div>
                <h6>General tables</h6>
                <h6>Data tables</h6>
            </div>
        </div>,
    },
]

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>   <img src="images/hii.PNG" alt="heyyyy" width={'39px'} /> <b className='ms-3'>My Account</b></MenuItem>

        </Menu>
    );
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );



    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar style={{ background: '#F5F5F5' }}>
                    <Typography variant="h6" noWrap component="div" className='me-5 text-dark'>
                        Persistent
                    </Typography>
                    <IconButton
                        color="dark"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Search className='bg-dark'>
                        <SearchIconWrapper className='text-warning'>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…" className='text-warning'
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>


                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static">
                            <Toolbar className='bg-white'>

                                <Box sx={{ flexGrow: 1 }} />
                                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                    <IconButton size="large" aria-label="show 4 new mails" color="dark">
                                        <Badge badgeContent={4} color="error">
                                            <MailIcon />
                                        </Badge>
                                    </IconButton>
                                    <IconButton
                                        size="large"
                                        aria-label="show 17 new notifications"
                                        color="dark"
                                    >
                                        <Badge badgeContent={17} color="error">
                                            <NotificationsIcon />
                                        </Badge>
                                    </IconButton>

                                    <IconButton

                                        edge="end"
                                        aria-label="account of current user"
                                        aria-controls={menuId}
                                        aria-haspopup="true"
                                        onClick={handleProfileMenuOpen}
                                        color="dark"
                                    >
                                        <AccountCircle />
                                    </IconButton>
                                </Box>

                                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                    <IconButton
                                        size="large"
                                        aria-label="show more"
                                        aria-controls={mobileMenuId}
                                        aria-haspopup="true"
                                        onClick={handleMobileMenuOpen}
                                        color="dark"
                                    >
                                        <MoreIcon />
                                    </IconButton>
                                </Box>
                            </Toolbar>
                        </AppBar>
                        {renderMobileMenu}
                        {renderMenu}
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >

                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>

                <div style={{ marginLeft: '1.7rem' }}>
                    <div className='d-flex gap-2'>
                        <GridViewIcon style={{ color: "#BACDDB" }} />
                        <Link style={{ textDecoration: 'none', color: "#03346E" }} to={'/dashboard'}>Dashboard</Link>
                    </div>

                    <div>
                        <Collapse accordion defaultActiveKey={['6']} ghost items={items}
                            expandIconPosition='right'
                            expandIcon={({ isActive }) => isActive ? <MinusOutlined style={{ background: 'purple', color: 'white', borderRadius: '50%', height: '95%', width: '100%' }} /> : <PlusOutlined style={{ background: 'purple', color: 'white', borderRadius: '50%', height: '95%', width: '100%' }} />}
                        />
                    </div>

                    <div>
                        <Collapse accordion defaultActiveKey={['6']} ghost items={item}
                            expandIconPosition='right'
                            expandIcon={({ isActive }) => isActive ? <MinusOutlined style={{ background: 'purple', color: 'white', borderRadius: '50%', height: '95%', width: '100%' }} /> : <PlusOutlined style={{ background: 'purple', color: 'white', borderRadius: '50%', height: '95%', width: '100%' }} />}
                        />
                    </div>

                    <div className='d-flex gap-2 mt-2'>
                        <People style={{ color: "#BACDDB" }} />
                        <Link style={{ textDecoration: 'none', color: "#03346E" }} to={'/profile'}>Profile</Link>
                    </div>

                    <div className='d-flex gap-2 mt-4'>
                        <QuestionMarkRounded style={{ color: "#BACDDB" }} />
                        <Link style={{ textDecoration: 'none', color: "#03346E" }} to={'/faq'}>FAQ</Link>
                    </div>

                    <div className='d-flex gap-2 mt-4'>
                        <Email style={{ color: "#BACDDB" }} />
                        <Link style={{ textDecoration: 'none', color: "#03346E" }} to={'/contact'}>CONTACT</Link>
                    </div>

                    <div className='d-flex gap-2 mt-4'>
                        <AppRegistration style={{ color: "#BACDDB" }} />
                        <Link style={{ textDecoration: 'none', color: "#03346E" }} to={'/register'}>REGISTER</Link>
                    </div>

                    <div className='d-flex gap-2 mt-4'>
                        <Login style={{ color: "#BACDDB" }} />
                        <Link style={{ textDecoration: 'none', color: "#03346E" }} to={'/login'}>LOGIN</Link>
                    </div>

                    <div className='d-flex gap-2 mt-4'>
                        <Error style={{ color: "#BACDDB" }} />
                        <Link style={{ textDecoration: 'none', color: "#03346E" }} to={'/notfound'}>Error 404</Link>
                    </div>

                    <div className='d-flex gap-2' style={{ marginTop: '3rem' }}>
                        <Error style={{ color: "#BACDDB" }} />
                        <Link style={{ textDecoration: 'none', color: "#03346E" }} to={'/blank'}>Blank</Link>
                    </div>
                </div>

            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <Typography paragraph>


                    {/* Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                    eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                    neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                    tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                    sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                    tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                    gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                    et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                    tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                    eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                    posuere sollicitudin aliquam ultrices sagittis orci a. */}
                </Typography>
            </Main>
        </Box>
    );
}
