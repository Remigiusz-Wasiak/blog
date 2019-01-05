import Typography from 'typography'
import bootstrapTheme from 'typography-theme-bootstrap'

bootstrapTheme.overrideThemeStyles = (options, styles) => ({
  a: {
    textDecoration: `none`,
    color: 'inherit',
  },
  '.post a': {
    color: `blue`,
  },

  '.gatsby-highlight': {
    backgroundColor: `#2d2d2d`,
    borderRadius: `0.3em`,
    margin: `0.5em 0`,
    padding: `0.5em`,
    overflow: `auto`,
  },

  '.gatsby-highlight pre[class*="language-"].line-numbers': {
    padding: `0`,
    paddingLeft: `2.8em`,
    overflow: `initial`,
  },

  ':not(pre) > code.language-text': {
    backgroundColor: `#eee !important`,
    fontWeight: `bold`,
    color: `inherit`,
  },

  '.post .gatsby-highlight': {
    wordWrap: `normal`,
  },
})

const typography = new Typography(bootstrapTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
