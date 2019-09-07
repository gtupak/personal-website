import React from 'react';
import {
	Box,
	Typography,
	Grid,
	Divider,
	Paper,
	Link,
	List, ListItem, ListItemIcon, ListItemText
} from '@material-ui/core';
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { LocationOn } from '@material-ui/icons';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TwitterIcon from './icons/TwitterIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import './AboutSection.css';

const sectionHeight = '75vh';

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
					<Typography variant='h5' className='bold infoText' color='textSecondary'>
						{ title }
					</Typography>
				)
			}
			<Typography variant='subtitle2' color='textSecondary'>
				{ category }
			</Typography>
		</ListItemText>
	</ListItem>	
);

const AboutSection = () => {
	const data = useStaticQuery(graphql`
		query {
			bgImage: file(relativePath: { eq: "about-me-bg.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1200, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
			portrait: file(relativePath: { eq: "io_picture.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1200, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return(
		<BackgroundImage
			fluid={data.bgImage.childImageSharp.fluid}
			className='bgImage'
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
								<Paper elevation={5}>
									<Box width='40vh' p={2}>
										<Img fluid={data.portrait.childImageSharp.fluid} />
									</Box>
								</Paper>
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
						<Divider 
							className='divider' 
							orientation='vertical'
							variant='fullWidth'
						/>
					</Grid>
					<Grid item xs>
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
					</Grid>
				</Grid>
			</Box>
		</BackgroundImage>
	);
};

export default AboutSection;