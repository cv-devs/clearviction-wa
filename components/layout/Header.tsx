import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import React, { useState } from 'react';

import navItems from '../../content/navItems.ts';
import EligibilityButton from '../helper/EligibilityButton.tsx';
import NavigationLogo from './NavigationLogo.tsx';

export default function Header() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Box>
        <IconButton
          aria-label="Close navigation"
          sx={{
            marginRight: 'auto',
          }}
        >
          <ArrowForwardIosIcon
            fontSize="large"
            sx={{
              color: theme.palette.text.light,
            }}
          />
        </IconButton>
      </Box>
      <List className="nav-mobile" sx={{ transform: 'translateY(-20px)' }}>
        {navItems.map(({ href, text, sublist }) => (
          <>
            <ListItem key={text}>
              <ListItemButton
                component={Link}
                href={href}
              >
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{ style: { fontSize: '16px', fontWeight: '700' } }}
                />
              </ListItemButton>
            </ListItem>
            <List sx={{ paddingLeft: '32px' }}>
              {sublist?.map((item) => (
                <ListItem key={item} disablePadding>
                  <ListItemButton sx={{ paddingTop: '8px', paddingBottom: '8px', paddingLeft: '8px' }}>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        style: { fontSize: '16px', fontWeight: '500' },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </>
        ))}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <EligibilityButton />
        </Box>
      </List>
    </Box>
  );

  return (
    <AppBar id="main-header" className="nav-desktop" color="primary" elevation={0} component="nav" position="sticky">
      <Box
        component="nav"
        sx={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px', position: 'relative', px: 10.5,
        }}
      >
        <Drawer
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          anchor="right"
        >
          {drawer}
        </Drawer>
        <Box sx={{ width: '100%' }}>
          {matches && (
            <IconButton aria-label="open sidebar menu" onClick={handleDrawerToggle} sx={{ display: 'flex', width: '100%' }}>
              <MenuIcon
                sx={{
                  color: theme.palette.text.light, marginLeft: 'auto',
                }}
                fontSize="large"
              />
            </IconButton>
          )}
          {!matches && (
            <Box
              className="desktop-nav-list"
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                width: '450px',
                paddingRight: '32px',
              }}
            >
              {navItems.map((item, index) => (
                <Box
                  key={item.text}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Button
                    href={item.href}
                    aria-label={`${item.text.toLowerCase()}`}
                    size="small"
                    className="nav-list__item"
                    sx={{
                      whiteSpace: 'nowrap',
                      marginLeft: { md: 0 },
                      px: { md: 2, lg: 3 },
                      py: 1,
                      '&:hover': {
                        color: theme.palette.text.secondary,
                        backgroundColor: theme.palette.primary.main,
                      },
                      '&:active': {
                        color: theme.palette.text.light,
                        backgroundColor: '#002138',
                      },
                      '&:focus': {
                        color: theme.palette.text.light,
                        backgroundColor: theme.palette.primary.dark,
                        boxShadow: '0 0 0 4px #0000EE99',
                      },
                    }}
                  >
                    {item.text}
                  </Button>
                  {hoveredIndex === index && (
                    <Box
                      className="dropdown-content"
                      sx={{
                        display: 'block',
                        position: 'absolute',
                        backgroundColor: '#f1f1f1',
                        minWidth: '160px',
                        boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
                        zIndex: 1,
                      }}
                    >
                      {item.sublist?.map((link) => (
                        <Link key={link} href="/" passHref>
                          <Box
                            component="a"
                            sx={{
                              color: 'black',
                              padding: '12px 16px',
                              textDecoration: 'none',
                              display: 'block',
                              '&:hover': { backgroundColor: '#ddd' },
                            }}
                          >
                            {link}
                          </Box>
                        </Link>
                      ))}
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          )}
        </Box>
        <NavigationLogo sx={{ position: 'absolute', left: '50%', transform: 'translate(-50%, 0)' }} />
        {!matches && (
          <Box>
            <EligibilityButton />
          </Box>
        )}
      </Box>
    </AppBar>
  );
}
