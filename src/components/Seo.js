import React from 'react';
import { Helmet } from "react-helmet";

const title = 'Gabriel Tapuc | Web and Mobile App Freelancer';
const description = 'Build quality web and mobile applications, stress-free.'
const siteName = 'https://gabrieltapuc.com/';

// Todo images
const Seo = () => (
  <Helmet>
    <title>{title}</title>
    <meta name='description' content={description} />

    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={siteName + 'ogImage.jpg'} />

    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={siteName + 'ogImage.jpg'} />
    <meta name="twitter:image:alt" content={description} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:site" content="@gtupak" />
    <meta name="twitter:card" content="summary_large_image" />
  </Helmet>
);

export default Seo;