import Typography from 'typography'
import bootstrapTheme from 'typography-theme-bootstrap'

bootstrapTheme.overrideThemeStyles = (options, styles) => ({
  // links default styles
  a: {
    textDecoration: `none`,
    color: 'inherit',
  },
  '.post a': {
    color: `blue`,
  },

  // code blocks default styles
  '.gatsby-highlight': {
    backgroundColor: `#2d2d2d`,
    margin: `0.5em 0`,
    padding: `0.7em`,
    overflow: `auto`,
  },

  '.gatsby-highlight pre[class*="language-"].line-numbers': {
    padding: `0`,
    paddingLeft: `2.8em`,
    overflow: `initial`,
  },

  '.post code[class*="language-"], .post pre[class*="language-"]': {
    fontFamily: 'Andale Mono, Ubuntu Mono, Consolas, Monaco',
  },

  '.post :not(pre) > code.language-text': {
    backgroundColor: `#fff`,
    fontWeight: `bold`,
    color: `inherit`,
    wordBreak: `break-word`,
  },

  '.post .gatsby-highlight': {
    wordWrap: `normal`,
    margin: `0 -${typography.rhythm(1)} ${typography.rhythm(1)}`,
  },

  // imgs inside posts
  '.post p img': {
    display: `block`,
    margin: `0 auto`,
  },

  // text - font-size, line height

  p: {
    fontSize: typography.rhythm(0.6),
    lineHeight: typography.rhythm(1),
  },

  li: {
    fontSize: typography.rhythm(0.6),
    lineHeight: typography.rhythm(1),
    marginBottom: `calc(${typography.rhythm(0.35)} / 2)`,
  },

  //headers default styles
  h2: {
    fontSize: typography.rhythm(1.1),
  },

  h3: {
    fontSize: typography.rhythm(0.95),
    lineHeight: typography.rhythm(1.1),
    marginBottom: typography.rhythm(0.9),
    marginTop: typography.rhythm(2),
  },

  h4: {
    fontSize: typography.rhythm(0.75),
    lineHeight: typography.rhythm(0.9),
    marginBottom: typography.rhythm(0.75),
  }
})

const typography = new Typography(bootstrapTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
