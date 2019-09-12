import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image'

const useStyles = makeStyles({
	lightText: {
		fontWeight: 300
	},
});

const ValuesSection = () => {
	const sectionHeight = '75vh';
	const minSectionHeight = 342;
	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "value-section-bg.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1200, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	const classes = useStyles();

	return(
			<BackgroundImage
				style={{ height: sectionHeight, minHeight: minSectionHeight }}
				fluid={data.file.childImageSharp.fluid}
			>
				<Box 
					height={sectionHeight} 
					minHeight={minSectionHeight}
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
									Custom Features
								</Typography>
								<Typography style={{ color: '#afb0b3' }} variant='subtitle2'>
									Full Stack Development (back-end and front-end)
								</Typography>
							</Box>
						</Box>
					</Box>
				</Box>
			</BackgroundImage>
	);
};

export default ValuesSection;