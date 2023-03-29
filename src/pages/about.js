import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import Seo from '../components/seo';
import Bio from '../components/bio';
import TimeStampSection from '../components/timestamp-section';
import ProjectSection from '../components/project-section';
import MainImage1 from "../../assets/main1.jpeg";
import MainImage2 from "../../assets/main2.jpeg";

function AboutPage({ data }) {
  const metaData = data.site.siteMetadata;
  const { author, about, language } = metaData;
  const { timestamps, projects } = about;
  return (
    <Layout>
      <Seo title="About" />
      <Bio author={author} language={language} />
        <div
            style={{backgroundColor: 'transparent',
                    margin: '20px'
        }}
        >
            <img style={{ width: 250, height: 280, margin: '20px' }} src={MainImage1} alt="thumbnail" />
            <img style={{ width: 250, height: 280, margin: '20px' }} src={MainImage2} alt="thumbnail" />
        </div>
      <TimeStampSection timestamps={timestamps} />
      <ProjectSection projects={projects} />
    </Layout>
  );
}

export default AboutPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        language
        author {
          name
          bio {
            role
            description
            thumbnail
          }
          social {
            github
            linkedIn
            email
          }
        }

        about {
          timestamps {
            date
            activity
            links {
              post
              github
              demo
              googlePlay
              appStore
            }
          }

          projects {
            title
            description
            techStack
            thumbnailUrl
            links {
              post
              github
              demo
              googlePlay
              appStore
            }
          }
        }
      }
    }
  }
`;
