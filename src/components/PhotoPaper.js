import React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import Img from 'gatsby-image';

const PhotoPaper = ({ slide=false, rotateDegrees='0', fluidImg, width='27vw', padding=3 }) => {
	return(
		<div style={{ transform: `rotate(${rotateDegrees}deg)` }} >
			{
				slide
				? (
					<Slide 
						direction='down' 
						in
						mountOnEnter 
						timeout={1250}
					>
						<Paper elevation={5} >
							<Box width={width} p={padding}>
								<Img fluid={fluidImg} />
							</Box>
						</Paper>
					</Slide>
				) : (
					<Paper elevation={5} >
						<Box width={width} p={padding}>
							<Img fluid={fluidImg} />
						</Box>
					</Paper>
				)
			}
		</div>
	);
};

export default PhotoPaper;