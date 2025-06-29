import { Stack } from '@mui/material';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import RestoreRoundedIcon from '@mui/icons-material/RestoreRounded';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import AsideBarSection from '../AsideBarSection';
import Logo from '../../../../shared/ui/Logo';

const AsideBar = () => {
  const menu = {
    home: {
      icon: <HomeOutlinedIcon />,
      path: '/',
    },
    movies: {
      icon: <MovieOutlinedIcon />,
      path: 'movies',
    },
    shows: {
      icon: <LiveTvRoundedIcon />,
      path: 'shows',
    },
    history: {
      icon: <RestoreRoundedIcon />,
      path: '/history',
    },
  };

  const tools = {
    watchBoard: {
      icon: <DashboardOutlinedIcon />,
      path: 'watch-board',
    },
    dashBoard: {
      icon: <InsertChartOutlinedOutlinedIcon />,
      path: 'dashboard',
    },
    profile: {
      icon: <PersonOutlineOutlinedIcon />,
      path: 'profile',
    },
  };

  const general = {
    settings: {
      icon: <SettingsOutlinedIcon />,
      path: 'settings',
    },
    logout: {
      icon: <LoginOutlinedIcon />,
      path: 'logout',
    },
  };

  return (
    <Stack gap={10}>
      <Logo />
      <Stack gap={6} pr={4}>
        <AsideBarSection tabs={menu} title="Menu" />
        <AsideBarSection tabs={tools} title="Library" />
        <AsideBarSection tabs={general} title="General" />
      </Stack>
    </Stack>
  );
};

export default AsideBar;
