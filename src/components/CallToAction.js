import React from 'react';
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
  },
  horizontalCenter: {
    margin: 0,
    left: '50%',
    transform: 'translateX(-50%)'
  }
});

const PhotoPaper = () => (
	<StaticQuery
		query={ graphql`
			query {
		    file(relativePath: { eq: "io_picture.jpg" }) {
		      childImageSharp {
		        # Specify the image processing specifications right in the query.
		        # Makes it trivial to update as your page's design changes.
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
						{console.log(data)}
						<Box width={350} p={4}>
							<Img fluid={data.file.childImageSharp.fluid} />
						</Box>
					</Paper>
				</Slide>
			</div>
		)}
	/>
);

const CallToAction = ({ bgImage }) => {
  const styles = useStyles();

  const onChatBtnPressed = (event) => {
		window.location = 'mailto:hello@neappoli.com';
  };

	return(
		<Box bgcolor='#09172F' overflow='hidden' height='100vh' position='relative' >
	    <Img fluid={bgImage} />
	    <Box position='absolute' className={styles.verticalCenterRight}>
	      <Typography color='textPrimary' align='right' className={styles.lightHeadeText} variant='h4'>
	        Hi,
	      </Typography>
	      <div className={styles.rightText}>
	        <Typography color='textPrimary' display='inline' className={styles.lightHeaderText} variant='h4'>I'm </Typography>
	        <Typography color='textPrimary' display='inline' className={styles.boldHeaderText} variant='h1'>Gabriel</Typography>
	      </div>
	      <div className={styles.rightText}>
	        <Typography color='textPrimary' display='inline' className={styles.lightHeaderText} variant='h4'>and I build </Typography>
	        <Typography color='textPrimary' display='inline' className={styles.boldHeaderText} variant='h1'>web</Typography>
	      </div>
	      <div className={styles.rightText}>
	        <Typography color='textPrimary' display='inline' className={styles.lightHeaderText} variant='h4'>and </Typography>
	        <Typography color='textPrimary' display='inline' className={styles.boldHeaderText} variant='h1'>mobile apps.</Typography>
	      </div>
	    </Box>
	    <Box position='absolute' bottom='7vh' display='flex' alignItems='center' className={styles.horizontalCenter} >
	      <Typography color='textPrimary' className={styles.lightHeaderText} variant='h3'>
	        Need a freelancer?
	      </Typography>
	      <Box ml={2}>
	        <Button onClick={onChatBtnPressed} variant='contained' color='secondary'>
	          Let's chat
	        </Button>
	      </Box>
	    </Box>
	    <Box position='absolute' top='8vw' left='10vw'>
	    	<PhotoPaper />
	    </Box>
	  </Box>
	);
};

export default CallToAction;