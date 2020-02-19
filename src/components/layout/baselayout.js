import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.css';
import SEO from '../common/site-metadata';
import Header from '../common/header/header';
import Footer from '../common/footer/footer';
import { withPrefix } from 'gatsby';
import './base.scss';

const TemplateWrapper = ({ children }) => {
  //const { title } = SEO()
  return (
    <Fragment>
      <SEO />
      <Header />
      <div className="mainbody">
        {children}
      </div>
      <Footer />
    </Fragment>
  )
}

export default TemplateWrapper
