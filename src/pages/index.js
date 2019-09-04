import React from 'react';
import CallToAction from '../components/CallToAction';
import { graphql } from 'gatsby';

const App = ({ data }) => (
  <div>
    <CallToAction bgImage={data.file.childImageSharp.fluid} />
  </div>
);

export default App;
export const query = graphql`
  query {
    file(relativePath: { eq: "calltoaction-bg.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;