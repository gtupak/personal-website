import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { 
	Box,
	Typography,
	Button,
	Paper,
	Slide
} from '@material-ui/core';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image'

const useStyles = makeStyles({
  verticalCenterRight: {
    margin: 0,
    right: '4vw',
    top: '45%',
    transform: 'translateY(-50%)'
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

const PhotoPaper = ({ isMobile=false }) => (
	<StaticQuery
		query={ graphql`
			query {
		    file(relativePath: { eq: "io_picture.jpg" }) {
		      childImageSharp {
		        fluid {
		          ...GatsbyImageSharpFluid
		        }
		      }
		    }
		  }
		`}
		render={data => (
			<div style={{ transform: 'rotate(-16deg)' }} >
				<Slide 
					direction='up' 
					in 
					mountOnEnter 
					timeout={1250}
				>
					<Paper elevation={5} >
						<Box width='27vw' p={3}>
							<Img fluid={data.file.childImageSharp.fluid} />
						</Box>
					</Paper>
				</Slide>
			</div>
		)}
	/>
);

const CallToAction = ({ bgImage }) => {
  const classes = useStyles();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
  	if (window.innerWidth < 900) setIsMobile(true);
  }, []);

  const onChatBtnPressed = (event) => {
		window.location = 'mailto:hello@neappoli.com';
  };

	return(
		<BackgroundImage
			fluid={bgImage}
		>
			<Box height='100vh' position='relative' >
		    <Box position='absolute' className={classes.verticalCenterRight}>
		      <Typography color='textSecondary' align='right' className={classes.lightHeadeText} variant='h4'>
		        Hi,
		      </Typography>
		      <div className={classes.rightText}>
		        <Typography color='textSecondary' display='inline' className={classes.lightHeaderText} variant='h4'>I'm </Typography>
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
		    <Box position='absolute' top='6vw' left='9vw'>
		    	<PhotoPaper />
		    </Box>
		  </Box>
		</BackgroundImage>
	);
};

export default CallToAction;