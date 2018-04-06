const backgroundColor = '#122c33'
const foregroundColor = '#839496'
const cursorColor = 'rgba(181, 137, 0, 0.6)'
const borderColor = 'transparent'

const colors = {
  lightBlack:     '#586e75',
  black:          '#073642',
  lightGreen:     '#759496', // user@machine, files in folders
  lightYellow:    '#657b83', 
  lightBlue:      '#78b8bc', // directory text after user@machine
  lightCyan:      '#93a1a1', 
  white:          '#eee8d5',
  lightWhite:     '#fdf6e3',
  yellow:         '#b58900',
  lightRed:       '#cb4b16',
  red:            '#dc322f', // red text in terminal (ex. git)
  magenta:        '#d33682',
  lightMagenta:   '#6c71c4',
  blue:           '#b3c1c9', // text colour, typing, cating files, file colour
  cyan:           '#2aa198',
  green:          '#4f839b' // directory highlight colour / tmux colour
}



exports.decorateConfig = config => {

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
      ${config.css || ''}
      * {
      	text-rendering: optimizeLegibility;
        font-weight: 500;
      }
      .tabs_list {
      	border: 0;
      }
      .tabs_nav {
      	background-color: #001f27;
      }
      .tab_tab {
        color: ${foregroundColor};
        background-color: ${backgroundColor}; 
				border-color: ${borderColor};
      }
      .tab_tab:before {
      	border: 0;
      }
      .tab_tab.tab_active {
        border: transparent;
        font-weight: bold;
        color: #b3b3b3;
        background-color: #001f27;
      }
      .splitpane_divider {
      	background-color: #001f27;
      }
    `
  })
}
