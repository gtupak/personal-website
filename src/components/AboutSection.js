import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby';
import { LocationOn } from '@material-ui/icons';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import FavoriteIcon from '@material-ui/icons/Favorite';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TwitterIcon from './icons/TwitterIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import './AboutSection.css';
import PhotoPaper from './PhotoPaper';

const AboutSection = ({ photo }) => {
  const [isLandscapeMode, setIsLandscapeMode] = useState(false);
  const showDesktopVersion = useMediaQuery('(min-width: 600px)');
	const sectionHeight = showDesktopVersion ? '75vh' : '100vh';
	const data = useStaticQuery(graphql`
		query {
			bgImage: file(relativePath: { eq: "about-me-bg.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1200, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
			portrait: file(relativePath: { eq: "profile-pic.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1200, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	useEffect(() => {
		function updateLandscapeModeState() {
			setIsLandscapeMode(!window.matchMedia('(orientation: landscape)').matches);
		}
		setIsLandscapeMode(window.matchMedia('(orientation: landscape)').matches);

		window.addEventListener('orientationchange', updateLandscapeModeState);
		return () => {
			window.removeEventListener('orientationchange', updateLandscapeModeState);
		};
	}, []);

	const infoList = (
		<List>
			<InfoItem
				icon={<LocationOn fontSize='large' className='icon' />}
				title='Ottawa,Canada'
				category='LOCATION'
			/>
			<InfoItem
				icon={<SchoolIcon fontSize='large' className='icon' />}
				title='BSc Computer Science, University of Ottawa'
				category='EDUCATION'
			/>
			<InfoItem
				icon={<WorkIcon fontSize='large' className='icon' />}
				title='3.5 years of work experience across various companies'
				category='WORK EXPERIENCE'
				link
			/>
			<InfoItem
				icon={<FavoriteIcon fontSize='large' className='icon' />}
				title='Startups, Sports, Travel & Coffee'
				category='PASSIONS'
			/>
		</List>
	);

	const mobileVersion = (
		<BackgroundImage
			fluid={data.bgImage.childImageSharp.fluid}
		>
			<Box
				minHeight={sectionHeight}
				alignItems='center'
				flexDirection='column'
			>
				<Box pt={4} align='center'>
					<Typography className='bold' variant='h3' color='textSecondary'>
						ABOUT ME
					</Typography>
				</Box>
				<Box display='flex' justifyContent='center' pt={2}>
					<PhotoPaper fluidImg={photo} style={{ maxWidth: 208 }} width={isLandscapeMode ? '30vw' : '75vw'} padding={2} />
				</Box>
				<Box pt={2} width='95vw'>
					<Divider className='divider' variant='middle'/>
				</Box>
				<Box py={2}>
					{infoList}
				</Box>
			</Box>
		</BackgroundImage>
	);

	const desktopVersion = (
		<BackgroundImage
			fluid={data.bgImage.childImageSharp.fluid}
		>
			<Box
				height={sectionHeight}
				display='flex'
				justifyContent='center'
				alignItems='center'
				flexDirection='column'
			>
				<Grid
					container
					justify='center'
					alignItems='center'
				>
					<Grid item xs>
						<Box
							flexDirection='column'
							display='flex'
							alignItems='center'
							justifyContent='center'
						>
							<Typography className='bold' variant='h3' color='textSecondary'>
								ABOUT ME
							</Typography>
							<Box my={2}>
								<PhotoPaper fluidImg={photo} width='40vh' padding={2} />
							</Box>
							<Box display='flex'>
								<Link 
									href='https://bit.ly/gabriel-tapuc-twitter' 
									target='_blank'
									rel='noopener'
								>
									<TwitterIcon fontSize='large' className='icon' />
								</Link>
								<Box pl={2}>
									<Link 
										href='https://bit.ly/gabriel-tapuc-linkedin' 
										target='_blank'
										rel='noopener'
									>
										<LinkedInIcon fontSize='large' className='icon' />
									</Link>
								</Box>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={1}>
						<Box height='60vh'>
							<Divider 
								className='divider' 
								orientation='vertical'
							/>
						</Box>
					</Grid>
					<Grid item xs>
						{infoList}
					</Grid>
				</Grid>
			</Box>
		</BackgroundImage>
	);

	return showDesktopVersion ? desktopVersion : mobileVersion;
};

const InfoItem = ({ icon, title, category, link=false }) => (
	<ListItem>
		<ListItemIcon>
			{ icon }
		</ListItemIcon>
		<ListItemText>
			{
				link
				? (
					<Link 
						href='https://bit.ly/gabriel-tapuc-linkedin' 
						variant='h5' 
						className='bold link' 
						color='textSecondary'
						target='_blank'
						rel='noopener'
					>
						{ title }
					</Link>
				) : (
					<Typography variant='h5' color='textSecondary' className='bold infoText' >
						{ title }
					</Typography>
				)
			}
			<Typography style={{ color: '#afb0b3' }} variant='subtitle2'>
				{ category }
			</Typography>
		</ListItemText>
	</ListItem>	
);

export default AboutSection;