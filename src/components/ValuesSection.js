import React from 'react';
import {
	makeStyles,
	Box,
	Typography,
} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image'

const sectionHeight = '75vh';

const useStyles = makeStyles({
	bgImage: {
		height: sectionHeight
	},
	lightText: {
		fontWeight: 300
	},
});

const ValuesSection = () => {
	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "value-section-bg.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1200) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	const classes = useStyles();

	return(
			<BackgroundImage
				className={classes.bgImage}
				fluid={data.file.childImageSharp.fluid}
			>
				<Box 
					height={sectionHeight} 
					justifyContent='center' 
					display='flex' 
					alignItems='center'
					flexDirection='column'
				>
					<Typography gutterBottom variant='h3' align='center' style={{ fontWeight: 500}} color='textSecondary'>
						I value customer satisfaction above everything else.
					</Typography>
					<Box mt={7} display='flex' flexDirection='column' justifyContent='flex-start'>
						<Box mb={2} display='flex' alignItems='center'>
							<CheckCircleIcon color='secondary' fontSize='default' />
							<Box pl={2}>
								<Typography className={classes.lightText} variant='h4' color='textSecondary'>
									Excellent Code Quality
								</Typography>
							</Box>
						</Box>
						<Box mb={2} display='flex' alignItems='center'>
							<CheckCircleIcon color='secondary' fontSize='default' />
							<Box pl={2}>
								<Typography className={classes.lightText} variant='h4' color='textSecondary'>
									Clean Design
								</Typography>
							</Box>
						</Box>
						<Box mb={2} display='flex' alignItems='center'>
							<CheckCircleIcon color='secondary' fontSize='default' />
							<Box pl={2}>
								<Typography className={classes.lightText} variant='h4' color='textSecondary'>
									Full Stack Development
								</Typography>
								<Typography variant='subtitle2' color='textSecondary'>
									Server logic & custom features
								</Typography>
							</Box>
						</Box>
					</Box>
				</Box>
			</BackgroundImage>
	);
};

export default ValuesSection;