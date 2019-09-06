import React from 'react';
import {
	makeStyles,
	Box,
	Typography,
	Grid,
	List, ListItem, ListItemIcon, ListItemText,
	Button
} from '@material-ui/core';
import LaptopIcon from '@material-ui/icons/Laptop';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles({
	connectButton: {
		height: 60,
		width: 200,
		fontSize: 'large'
	}
});

const SkillsSection = () => {
	const classes = useStyles();

	const onChatBtnPressed = (event) => {
		window.location = 'mailto:hello@neappoli.com';
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
				<Grid item sm={6}>
					<Box mr={2}>
						<Typography variant='h5' align='right'>
							My skills include:
						</Typography>
					</Box>
				</Grid>
				<Grid item sm={6}>
					<Box display='flex' justifyContent='left' align='center'>
						<List>
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