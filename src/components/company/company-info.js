import React from 'react';
import Content from '../common/content';
import PreviewCompatibleImage from '../common/preview-compatible-image';
import './company-info.scss';
import ProjectInfo from './project-info';

const CompanyInfo = ({
  companyInfo,
  companyImg,
  projectInfo
}) => {

  return(
    <div className="company-info section1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-4 position-relative">
            <PreviewCompatibleImage
              imageInfo={{
                image: companyImg,
                alt: `company info image`,
              }}
            />
          </div>
          <div className="col-lg-7 col-md-8 description text-white">
            <p>{companyInfo}</p>
          </div>
        </div>

        <ProjectInfo 
          InfoItems={projectInfo}
        />
      </div>
    </div>
  );
}
export default CompanyInfo;