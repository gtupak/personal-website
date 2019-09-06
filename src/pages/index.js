import React from 'react';
import { graphql } from 'gatsby';
import CallToAction from '../components/CallToAction';
import ProjectsSection from '../components/ProjectsSection';
import ValuesSection from '../components/ValuesSection';
import SkillsSection from '../components/SkillsSection';

const App = ({ data }) => (
  <div>
    <CallToAction bgImage={data.file.childImageSharp.fluid} />
    <ProjectsSection />
    <ValuesSection />
    <SkillsSection />
  </div>
);

export default App;
export const query = graphql`
  query {
    file(relativePath: { eq: "calltoaction-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;