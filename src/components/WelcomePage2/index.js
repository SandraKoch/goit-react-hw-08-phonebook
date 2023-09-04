/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
// import { Box, Container } from '@mui/system';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Container from '@mui/joy/Container';
import { useNavigate } from 'react-router';
// import { typographyClasses } from '@mui/joy/Typography';
// import { NavLink } from 'react-router-dom';
// import TwoSidedLayout from '../components/TwoSidedLayout';

export const WelcomePage2 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register', { replace: true });
  };
  return (
    <Container
      sx={theme => ({
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        // flexDirection: reversed ? 'column-reverse' : 'column',
        alignItems: 'center',
        py: 10,
        gap: 4,
        [theme.breakpoints.up(834)]: {
          flexDirection: 'row',
          gap: 6,
        },
        [theme.breakpoints.up(1199)]: {
          gap: 12,
        },
      })}
    >
      <Box
        sx={theme => ({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          maxWidth: '50ch',
          textAlign: 'center',
          flexShrink: 999,
          [theme.breakpoints.up(834)]: {
            minWidth: 420,
            alignItems: 'flex-start',
            textAlign: 'initial',
          },
          //   [`& .${typographyClasses.root}`]: {
          //     textWrap: 'balance',
          //   },
        })}
      >
        <Typography color="primary" fontSize="lg" fontWeight="lg">
          Keep your contacts close
        </Typography>
        <Typography
          level="h1"
          fontWeight="xl"
          fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
        >
          Welcome to Semplice Phonebook App
        </Typography>
        <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
          The list of important contacts always right at hand
        </Typography>
        <Button
          onClick={handleClick}
          size="lg"
          endDecorator={<ArrowForward fontSize="xl" />}
        >
          Get Started
        </Button>
        <Typography>
          Already a member? <Link fontWeight="lg">Sign in</Link>
        </Typography>
      </Box>
      <AspectRatio
        ratio={600 / 520}
        variant="outlined"
        maxHeight={300}
        sx={theme => ({
          minWidth: 300,
          alignSelf: 'stretch',
          [theme.breakpoints.up(834)]: {
            alignSelf: 'initial',
            flexGrow: 1,
            '--AspectRatio-maxHeight': '520px',
            '--AspectRatio-minHeight': '400px',
          },
          borderRadius: 'sm',
          bgcolor: 'grey',
          flexBasis: '50%',
        })}
      >
        <img src="./train-track-2507499_1280.jpg" alt="" />
      </AspectRatio>
    </Container>
  );
};
