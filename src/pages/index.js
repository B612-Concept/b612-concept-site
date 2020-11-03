import React from 'react';
import './index.css';

const HomePage = ({ data }) => {
  const scenes = data.allMarkdownRemark.edges[0].node;
  const scenesArray = Object.values(scenes.frontmatter);

  return (
    <div>
      {scenesArray.map((value, index) => {
        if (typeof value === 'string' && value !== '') {
          return <div className="question">{value}</div>;
        } else if (typeof value.title === 'string') {
          return (
            <div key={index} className="scene">
              {value.title}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default HomePage;

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            question
            calm_scene {
              body
              title
            }
            getaway_scene {
              body
              title
            }
            imagine_scene {
              body
              title
            }
            journey_scene {
              body
              title
            }
            reflection_scene {
              body
              title
            }
            safe_scene {
              body
              title
            }
            senses_scene {
              body
              title
            }
          }
        }
      }
    }
  }
`;
