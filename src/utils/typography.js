import Typography from 'typography'
import bootstrapTheme from 'typography-theme-bootstrap'

bootstrapTheme.overrideThemeStyles = (options, styles) => ({
    'a': {
        textDecoration: `none`,
        color: 'inherit'
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
