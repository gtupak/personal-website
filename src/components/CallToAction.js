import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BackgroundImage from 'gatsby-background-image'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PhotoPaper from './PhotoPaper';
import Img from 'gatsby-image';
import './CallToAction.css';

const useStyles = makeStyles({
  verticalCenterRight: {
    margin: 0,
    right: '4vw',
    top: '45%',
    transform: 'translateY(-50%)'
  },
  horizontalCenter: {
  	transform: 'translateX(-50%)',
  	left: '50%'
  },
  rightText: {
    textAlign: 'right'
  },
  boldHeaderText: {
    fontWeight: 400
  },
  lightHeaderText: {
    fontWeight: 100
  }
});


const CallToAction = ({ bgImage, logo, photo }) => {
  const classes = useStyles();
  const showDesktopVersion = useMediaQuery('(min-width: 600px)');
  const [screenHeight, setScreenHeight] = useState('100vh');

  useEffect(() => {
		if (window.innerHeight < 670) {
			setScreenHeight(670);
		}
  }, []);

  const onChatBtnPressed = (event) => {
		window.location = 'mailto:gabriel@neappoli.com';
  };

  const desktopVersion = (
  	<BackgroundImage
			fluid={bgImage}
		>
			<Box height='100vh' position='relative' >
				<Box position='absolute' top='6vw' left='9vw'>
		    	<PhotoPaper fluidImg={photo} rotateDegrees='-16' />
		    </Box>
		    <Box position='absolute' height={67} width={67} top={20} right={20}>
		    	<Img fluid={logo} />
		    </Box>
		    <Box position='absolute' className={classes.verticalCenterRight}>
		      <Typography color='textSecondary' align='right' className={classes.lightHeaderText} variant='h4'>
		        Hi, my name is
		      </Typography>
		      <div className={classes.rightText}>
		        <Typography color='textSecondary' display='inline' className={classes.boldHeaderText} variant='h1'>Gabriel</Typography>
		      </div>
		      <div className={classes.rightText}>
		        <Typography color='textSecondary' display='inline' className={classes.lightHeaderText} variant='h4'>and I build </Typography>
		        <Typography color='textSecondary' display='inline' className={classes.boldHeaderText} variant='h1'>web</Typography>
		      </div>
		      <div className={classes.rightText}>
		        <Typography color='textSecondary' display='inline' className={classes.lightHeaderText} variant='h4'>and </Typography>
		        <Typography color='textSecondary' display='inline' className={classes.boldHeaderText} variant='h1'>mobile apps.</Typography>
		      </div>
		    </Box>
		    <Box position='absolute' bottom='6vh' display='flex' alignItems='center' justifyContent='center' width='100vw' >
		      <Typography color='textSecondary' className={classes.lightHeaderText} variant='h3'>
		        Need a freelancer?
		      </Typography>
		      <Box ml={2}>
		        <Button onClick={onChatBtnPressed} variant='contained' color='secondary'>
		          Let's chat
		        </Button>
		      </Box>
		    </Box>
		  </Box>
		</BackgroundImage>
	);

	const mobileVersion = (
		<BackgroundImage
			fluid={bgImage}
		>
			<Box position='relative' height={screenHeight}>
				<Box display='flex' justifyContent='center' alignItems='center' pt={5}>
		    	<PhotoPaper fluidImg={photo} width='65vw' padding={2} />
		    </Box>
		    <Box pt={2} display='flex' flexDirection='column' justifyContent='center' >
		    	<Box pt={1}>
			      <Typography 
			      	align='center' 
			      	color='textSecondary' 
			      	className={classes.lightHeaderText}
			      	variant='h4'
		      	>
			        Hi, my name is
			      </Typography>
		      </Box>
		      <Box align='center'>
		        <Typography color='textSecondary' display='inline' className={classes.boldHeaderText} variant='h2'>Gabriel</Typography>
	        </Box>
		      <Box align='center'>
		        <Typography 
			        color='textSecondary' 
			        display='inline' 
			        className={classes.lightHeaderText} 
			        variant='h4'
		        >
	        		{`and I build `}
        		</Typography>
		      </Box>
		      <Box align='center'>
		        <Typography 
		        	color='textSecondary' 
		        	display='inline' 
		        	className={classes.boldHeaderText} 
		        	variant='h2'
	        	>
		        	web and mobile
	        	</Typography>
		      </Box>
		      <Box align='center'>
		      	<Typography 
			        color='textSecondary' 
			        display='inline' 
			        className={classes.lightHeaderText} 
			        variant='h4'
		        >
	        		apps.
        		</Typography>
		      </Box>
		    </Box>
		    <Box
		    	position='absolute'
		    	bottom={24}
		    	display='flex'
		    	flexDirection='column'
		    	alignItems='center' 
		    	justifyContent='center'
		    	pt={2}
		    	className={classes.horizontalCenter}
		    	width='100vw'
	    	>
		      <Typography gutterBottom color='textSecondary' variant='h3'>
		        Need a freelancer?
		      </Typography>
	        <Button onClick={onChatBtnPressed} variant='contained' color='secondary'>
	          Let's chat
	        </Button>
		    </Box>
		  </Box>
		</BackgroundImage>
	);

	return(
		<React.Fragment>
			{
				showDesktopVersion
				? (
					<div className='desktopCTA'>
						{desktopVersion}
					</div>
				)
				: (
					<div className='mobileCTA'>
						{mobileVersion}
					</div>
				)
			}
		</React.Fragment>
	);
};

export default CallToAction;