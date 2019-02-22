import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitterSquare,
  faMedium,
  faFacebookSquare,
  faLinkedin,
  faGithubSquare,
  faTwitch,
  fa500px,
  faYoutubeSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

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
          instagram
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

const SocialLinks = styled.p`
  font-size: 1.3em;
  opacity: 0.8;

  a {
    margin-right: 0.5em;
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
              <SocialLinks>
                <a href={`https://twitter.com/${social.twitter}`}>
                  <FontAwesomeIcon icon={faTwitterSquare} />
                </a>
                <a href={`https://medium.com/@${social.medium}`}>
                  <FontAwesomeIcon icon={faMedium} />
                </a>
                <a href={`https://facebook.com/${social.facebook}`}>
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
                <a href={`https://linkedin.com/in/${social.linkedin}`}>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href={`https://github.com/${social.github}`}>
                  <FontAwesomeIcon icon={faGithubSquare} />
                </a>
                <a href={`https://twitch.tv/${social.twitch}`}>
                  <FontAwesomeIcon icon={faTwitch} />
                </a>
                <a href={`https://youtube.com/${social.youtube}`}>
                  <FontAwesomeIcon icon={faYoutubeSquare} />
                </a>
                <a href={social.photography}>
                  <FontAwesomeIcon icon={fa500px} />
                </a>
                <a href={`https://instagram.com/${social.instagram}`}>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href={`mailto:${social.email}`}>
                  <FontAwesomeIcon icon={faEnvelopeSquare} />
                </a>
              </SocialLinks>
            </Text>
          </Wrapper>
        );
      }}
    />
  );
}

export default Bio;
