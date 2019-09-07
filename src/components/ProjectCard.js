import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/styles';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import Img from 'gatsby-image';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
  const isMobile = useMediaQuery('(max-width: 960px)');
  const dialogScreenshotPercent = isMobile ? '100%' : '85%';

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
						<Box 
							align='center' 
							height={dialogScreenshotPercent} 
							width={dialogScreenshotPercent}
						>
							<div onClick={() => onVisitSiteClicked(projectEntry.link)}>
								<Img fluid={fluidImage} />
							</div>
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