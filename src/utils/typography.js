import Typography from 'typography'
import bootstrapTheme from 'typography-theme-bootstrap'

bootstrapTheme.overrideThemeStyles = (options, styles) => ({
    'a': {
        textDecoration: `none`,
        color: 'inherit'
    },
    '.post a': {
        color: `blue`
    },
    '.post .gatsby-highlight': {
        wordWrap: `normal`
    },
    'pre code': {
        display: `block`,
        maxWidth: `100%`,
        overflowY: `scroll`,
        padding: `10px 14px`,
        border: `solid 1px darkgrey`,
        borderRadius: `4px`,
        backgroundColor: `rgba(227, 227, 227, 0.2)`
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
