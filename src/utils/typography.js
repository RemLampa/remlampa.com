import Typography from 'typography';
import SternGrove from 'typography-theme-stern-grove';

SternGrove.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
  };
};

delete SternGrove.googleFonts;

const typography = new Typography(SternGrove);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const { rhythm } = typography;
export const { scale } = typography;
