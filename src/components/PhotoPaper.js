import React from 'react';
import { 
	Box,
	Paper,
	Slide
} from '@material-ui/core';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const PhotoPaper = ({ rotateDegrees='0', width='27vw', padding=3 }) => (
	<StaticQuery
		query={ graphql`
			query {
		    file(relativePath: { eq: "io_picture.jpg" }) {
		      childImageSharp {
		        fluid {
		          ...GatsbyImageSharpFluid
		        }
		      }
		    }
		  }
		`}
		render={data => (
			<div style={{ transform: `rotate(${rotateDegrees}deg)` }} >
				<Slide 
					direction='down' 
					in
					mountOnEnter 
					timeout={1250}
				>
					<Paper elevation={5} >
						<Box width={width} p={padding}>
							<Img fluid={data.file.childImageSharp.fluid} />
						</Box>
					</Paper>
				</Slide>
			</div>
		)}
	/>
);

export default PhotoPaper;