import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { rhythm, scale } from 'utils/typography';

const Contents = styled.main`
  margin-bottom: 6em;

  a {
    transition: color 1s;
  }

  .gatsby-highlight {
    margin: 2rem 0;
  }

  hr {
    margin-top: 5rem;
  }
`;

const Footer = styled.footer`
  text-align: center;
  font-size: 0.75em;
  opacity: 0.5;
  transition: opacity 1s;

  &:hover {
    opacity: 1;
  }

  a {
    transition: color 1s;
  }
`;

const Layout = ({ location, title, children }) => {
  // eslint-disable-next-line no-undef
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to="/"
        >
          {title}
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to="/"
        >
          {title}
        </Link>
      </h3>
    );
  }

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <Contents>{children}</Contents>
      <Footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> &amp;{' '}
        <a href="https://reactjs.org">React</a>
      </Footer>
    </div>
  );
};

export default Layout;
