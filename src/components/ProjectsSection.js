import React from 'react';
import {
	Typography,
	Box,
	Grid,
} from '@material-ui/core';
import { useStaticQuery, graphql } from 'gatsby';
import ProjectCard from './ProjectCard';
import neappoliImg from '../images/neappoli-screenshot.jpg';
import sfMateiImg from '../images/sfmatei-screenshot.jpg';

const projectData = {
	neappoli: {
		title: 'Neappoli',
		image: neappoliImg,
		description: 'A 3-1-1 mobile reporting app and website.',
		features: [
			'Hybrid mobile app done in Flutter',
			'Serverless back-end with Firebase Functions',
			'Responsive website in React',
			'A dynamic map page pulling service requests from the database in real time'
		],
		link: 'https://www.neappoli.com'
	},
	sfmatei: {
		title: 'St. Matthew Romanian Orthodox Parish',
		description: "The official church's website",
		image: sfMateiImg,
		features: [
			'Responsive website in React',
			'A photo gallery with a mechanism that makes it easy to upload new albums',
			'Various events and posts pages which content is easy to add/remove and update'
		],
		link: 'https://sfmatei.ca'
	}
};



const ProjectsSection = () => {

	const data = useStaticQuery(graphql`
		query {
			neappoli: file(relativePath: { eq: "neappoli-screenshot.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1200) {
						...GatsbyImageSharpFluid
					}
				}
			}
			sfmatei: file(relativePath: { eq: "sfmatei-screenshot.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1200, quality: 75) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return(
		<Box my={3}>
			<Typography gutterBottom style={{ fontWeight: 500 }} align='center' variant='h5'>COMPLETED PROJECTS</Typography>
			<Grid
				container
				direction='row'
				justify='space-around'
				alignItems='center'
				style={{ marginTop: '20px' }}
			>
				<Grid item>
					<ProjectCard 
						projectEntry={projectData.neappoli}
						fluidImage={data.neappoli.childImageSharp.fluid}
					/>
				</Grid>
				<Grid item>
					<ProjectCard
						projectEntry={projectData.sfmatei}
						fluidImage={data.sfmatei.childImageSharp.fluid}
					/>
				</Grid>
			</Grid>
		</Box>
	);
};

export default ProjectsSection;