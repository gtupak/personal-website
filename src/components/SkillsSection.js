import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import LaptopIcon from '@material-ui/icons/Laptop';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import SettingsIcon from '@material-ui/icons/Settings';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
	connectButton: {
		height: 60,
		width: 200,
		fontSize: 'large'
	}
});

const SkillsSection = () => {
	const classes = useStyles();
  const showDesktopVersion = useMediaQuery('(min-width: 600px)');

	const onChatBtnPressed = (event) => {
		window.location = 'mailto:gabriel@neappoli.com';
  };

	return(
		<Box my={3}>
			<Typography
				gutterBottom
				align='center'
				variant='h4'
				style = {{ fontWeight: 500 }}
			>
				NEED ANYTHING DIGITALIZATION?
			</Typography>
			<Grid
				container
				justify='center'
				alignItems='center'
			>
				{
					showDesktopVersion 
					? (
						<Grid item sm={6}>
							<Box mr={2} align='right'>
								<Typography variant='h5'>
									My skills include:
								</Typography>
							</Box>
						</Grid>
					) : null
				}
				<Grid item sm={6}>
					<Box display='flex' justifyContent='left' align='center'>
						<List>
							{
								!showDesktopVersion
								? (
									<ListItem>
										<ListItemText>
											<Typography variant='h5'>
												My skills include:
											</Typography>
										</ListItemText>
									</ListItem>
								) : null
							}
							<ListItem>
								<ListItemIcon>
									<LaptopIcon color='secondary' />
								</ListItemIcon>
								<ListItemText>
									<Typography variant='h5' color='primary'>
										React (web)
									</Typography>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<PhoneIphoneIcon color='secondary' />
								</ListItemIcon>
								<ListItemText>
									<Typography variant='h5' color='primary'>
										Flutter & Swift (mobile apps)
									</Typography>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<SettingsIcon color='secondary' />
								</ListItemIcon>
								<ListItemText>
									<Typography variant='h5' color='primary'>
										Node.JS + Firebase
									</Typography>
								</ListItemText>
							</ListItem>
						</List>
					</Box>
				</Grid>
			</Grid>
			<Box align='center'>
				<Button className={classes.connectButton} onClick={onChatBtnPressed} variant='contained' color='secondary'>
	        LET'S CONNECT
	      </Button>
      </Box>
		</Box>
	);
};

export default SkillsSection;