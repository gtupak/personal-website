import React from 'react';
import {
	makeStyles,
	Container,
	Typography,
	Box,
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Grid
} from '@material-ui/core';
import neappoliImg from '../images/neappoli-screenshot.jpg';
import sfMateiImg from '../images/sfmatei-screenshot.jpg';

const useStyles = makeStyles({
	card: {
		width: 345,
		height: 320
	},
	media: {
		height: 200
	}
});

const ProjectCard = ({ title, image, description, classes }) => (
	<Card className={classes.card} onClick={() => console.log('dis clicked')} >
		<CardActionArea>
			<CardMedia
				className={classes.media}
				image={image}
				title={title}
			/>
			<CardContent>
				<Typography gutterBottom variant='h5' component='h3'>
					{title}
				</Typography>
				<Typography variant='body2' component='p'>
					{description}
				</Typography>
			</CardContent>
		</CardActionArea>
	</Card>
);

const ProjectsSection = () => {
	const classes = useStyles();

	return(
		<Box my={3}>
			<Container>
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
							image={neappoliImg}
							title='Neappoli'
							description='A 3-1-1 mobile reporting app and website.'
							classes={classes}
						/>
					</Grid>
					<Grid item>
						<ProjectCard
							image={sfMateiImg}
							title='St. Matthew Romanian Orthodox Parish'
							description="The official church's website"
							classes={classes}
						/>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default ProjectsSection;