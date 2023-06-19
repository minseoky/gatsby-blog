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
        <div>제 이름은 최민석이고, 프로그래머로서의 열정과 경험을 가진 대학교 3학년 학생입니다. 여기에 제 소개를 남겨봅니다.<br/><br/>

            프론트엔드 개발에는 주로 리액트와 Vue를 사용하여 다양한 프로젝트를 수행해왔습니다. 이를 통해 사용자 친화적인 인터페이스를 구축하고, 적응력과 창의력을 통해 문제를 해결하는 능력을 향상시켰습니다. 웹사이트나 애플리케이션을 개발함으로써 사용자 경험을 향상시키는 것에 큰 관심을 가지고 있습니다.<br/><br/>

            또한 백엔드 개발에도 관심을 가지고 Spring 프레임워크를 사용하여 백엔드를 구현해보았습니다. 데이터베이스 관리를 위해 MySQL을 사용하고, 클라우드 서비스인 AWS를 통해 애플리케이션을 배포하고 관리하는 경험도 있습니다. 또한 GraphQL을 사용하여 효율적인 데이터 요청과 응답을 처리하는 경험도 있습니다.<br/><br/>

            제가 개발을 선택한 이유는 언제나 새로운 도전을 추구하고, 문제를 해결하는 것에 흥미를 느끼기 때문입니다. 프로그래밍은 저에게 끊임없는 학습과 발전의 기회를 제공하며, 협업을 통해 큰 가치를 창출할 수 있다고 믿습니다.<br/><br/>

            저는 꾸준히 학습을 이어가며 새로운 기술과 도구에 대한 관심을 갖고 있습니다. 문제 해결 능력과 창의적인 사고를 바탕으로 팀의 목표를 달성하는 데에 도움이 될 것입니다.</div>
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
