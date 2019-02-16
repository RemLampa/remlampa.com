import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Obfuscate from 'react-obfuscate';
import styled from 'styled-components';

import { rhythm } from 'utils/typography';

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
          medium
          facebook
          linkedin
          github
          twitch
          youtube
          photography
          email
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: ${rhythm(2.5)};
`;

const Text = styled.div`
  font-size: 0.85em;
  opacity: 0.7;
  transition: opacity 1s;

  :hover {
    opacity: 1;
  }

  p {
    margin-bottom: 0.5em;
  }

  a {
    text-decoration: none;
    transition: color 1s;
  }
`;

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata;
        return (
          <Wrapper>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <Text>
              <p>
                Written and maintained by <strong>{author}</strong>.
              </p>
              <p>
                JavaScript Developer, Live Coder, Community Manager, Startup
                Founder, Film Photographer
              </p>
              <p>
                <a href={`https://twitter.com/${social.twitter}`}>twt</a>{' '}
                <a href={`https://medium.com/@${social.medium}`}>med</a>{' '}
                <a href={`https://facebook.com/${social.facebook}`}>fb</a>{' '}
                <a href={`https://linkedin.com/in/${social.linkedin}`}>in</a>{' '}
                <a href={`https://github.com/${social.github}`}>gh</a>{' '}
                <a href={`https://twitch.tv/${social.twitch}`}>tv</a>{' '}
                <a href={`https://youtube.com/${social.youtube}`}>yt</a>{' '}
                <a href={social.photography}>foto</a>{' '}
                <span>
                  <Obfuscate email={social.email}>mail</Obfuscate>
                </span>
              </p>
            </Text>
          </Wrapper>
        );
      }}
    />
  );
}

export default Bio;
