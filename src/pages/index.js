import React from 'react';
import { graphql } from 'gatsby';
import CallToAction from '../components/CallToAction';
import ProjectsSection from '../components/ProjectsSection';
import ValuesSection from '../components/ValuesSection';
import SkillsSection from '../components/SkillsSection';
import AboutSection from '../components/AboutSection';
import Seo from '../components/Seo';

const App = ({ data }) => (
  <div>
    <Seo />
    <CallToAction logo={data.logo.childImageSharp.fluid} photo={data.callToActionProfilePic.childImageSharp.fluid} bgImage={data.file.childImageSharp.fluid} />
    <ProjectsSection />
    <ValuesSection />
    <SkillsSection />
    <AboutSection photo={data.aboutProfilePic.childImageSharp.fluid} />
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
    callToActionProfilePic: file(relativePath: { eq: "io_picture.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aboutProfilePic: file(relativePath: { eq: "profile-pic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logo: file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 512, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;