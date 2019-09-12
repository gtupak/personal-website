import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
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
	},
	bold: {
		fontWeight: 500
	}
});

const NewTabLink = ({ href, children }) => (
	<Link 
		href={href}
		target='_blank'
		rel='noopener'
	>
		{children}
	</Link>
);

const SkillsSection = () => {
	const classes = useStyles();
  const showDesktopVersion = useMediaQuery('(min-width: 600px)');

	const onChatBtnPressed = (event) => {
		window.location = 'mailto:gabriel@neappoli.com';

		// From google ads; guard against do not track
		if (window.gtag !== 'undefined') {
			window.gtag('event', 'conversion', {
				'send_to': 'AW-800491324/BAP1CN_g26oBELyO2v0C',
				'event_callback': null
			});
		}
  };

	return(
		<Box my={3}>
			<Container>
			<Typography
				gutterBottom
				align='center'
				variant='h4'
				style = {{ fontWeight: 500 }}
			>
				DIGITALIZE YOUR BUSINESS
			</Typography>
			</Container>
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
								<Typography className={classes.bold} variant='h5'>
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
											<Typography className={classes.bold} variant='h5'>
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
										<NewTabLink href='https://reactjs.org/'>
											React <b>(web)</b>
										</NewTabLink>
									</Typography>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<PhoneIphoneIcon color='secondary' />
								</ListItemIcon>
								<ListItemText>
									<Typography variant='h5' color='primary'>
										<NewTabLink href='https://flutter.dev'>
											Flutter & Swift <b>(mobile apps)</b>
										</NewTabLink>
									</Typography>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<SettingsIcon color='secondary' />
								</ListItemIcon>
								<ListItemText>
									<Typography variant='h5' color='primary'>
										<NewTabLink href='https://nodejs.org/en/'>
											Node.JS
										</NewTabLink>
										{` + `}
										<NewTabLink href='https://firebase.google.com/'>
											Firebase
										</NewTabLink>
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