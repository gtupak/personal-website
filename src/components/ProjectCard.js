import React, { useState } from 'react';
import {
	makeStyles,
	Typography,
	Box,
	Card, CardActionArea, CardMedia, CardContent, CardActions,
	Button,
	Divider,
	Dialog, DialogTitle, DialogContent, DialogActions,
	List, ListItem, ListItemIcon, ListItemText
} from '@material-ui/core';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import Img from 'gatsby-image';

const useStyles = makeStyles({
	card: {
		width: 345,
	},
	media: {
		height: 200
	}
});

const ProjectCard = ({ projectEntry, fluidImage }) => {
	const [openCardInfo, setOpenCardInfo] = useState(false);
	const classes = useStyles();

	const onCardClicked = () => {
		setOpenCardInfo(true);
	};

	const handleClose = () => {
		setOpenCardInfo(false);
	};

	const onVisitSiteClicked = (link) => {
		window.open(link, '_newtab');
	};

	return(
		<React.Fragment>
			<Card className={classes.card} >
				<CardActionArea onClick={onCardClicked}>
					<CardMedia
						className={classes.media}
						image={projectEntry.image}
						title={projectEntry.title}
					/>
					<CardContent>
						<Typography gutterBottom variant='h5' component='h3'>
							{projectEntry.title}
						</Typography>
						<Typography variant='body2' component='p'>
							{projectEntry.description}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size='small' onClick={() => onVisitSiteClicked(projectEntry.link)} color='secondary'>
						Visit Site
					</Button>
					<Button size='small' onClick={onCardClicked} color='primary'>
						Details
					</Button>
				</CardActions>
			</Card>
			<Dialog 
				onClose={handleClose} 
				open={openCardInfo}
				fullWidth
				maxWidth='md'
				scroll='paper'
			>
				<DialogTitle onClose={handleClose}>
					<Box align='center'>
						<div>
							<Typography variant='h3'>
								{projectEntry.title}
							</Typography>
						</div>
						<div>
							<Typography variant='subtitle1'>
								{projectEntry.description}
							</Typography>
						</div>
					</Box>
				</DialogTitle>
				<DialogContent>
					<Box mb={4} display='flex' justifyContent='center' width='100%'>
						<Box align='center' height='50%' width='50%'>
							<Img fluid={fluidImage} />
						</Box>
					</Box>
					<Divider />
					<Box mt={2} align='center'>
						<Typography variant='h6'>
							Features
						</Typography>
						<Box display='flex' justifyContent='center'>
							<List>
								{
									projectEntry.features.map((feature, index) => (
										<ListItem key={index}>
											<ListItemIcon>
												<LocalCafeIcon />
											</ListItemIcon>
											<ListItemText primary={feature} />
										</ListItem>
									))
								}
							</List>
						</Box>
					</Box>
				</DialogContent>
				<DialogActions>
					<Button size='small' onClick={() => onVisitSiteClicked(projectEntry.link)} color='secondary'>
						Visit Site
					</Button>
					<Button size='small' onClick={() => setOpenCardInfo(false)} color='primary'>
						Dismiss
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
};

export default ProjectCard;