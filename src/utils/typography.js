import Typography from 'typography'
import noriega from 'typography-theme-noriega'
// import bootstrap from 'typography-theme-bootstrap'
// import lawton from 'typography-theme-lawton'
// import fairyGates from 'typography-theme-fairy-gates'
// import morage from 'typography-theme-moraga'
// import sternGrove from 'typography-theme-stern-grove'

// CUSTOMIZE THE THEME
// noriega.overrideThemeStyles = ({ adjustFontSizeTo, rhythm }, options, styles) => ({
// })

const typography = new Typography(noriega)

// CREATE MY OWN
// const typography = new Typography({
//     baseFontSize: '18px',
//     baseLineHeight: 1.666,
//     googleFonts: [
//         {
//             name: '',
//             styles: ['']
//         },
//         {
//             name: '',
//             styles: ['']
//         },
//         {
//             name: '',
//             styles: ['']
//         },
//     ],
//     headerFontFamily: [],
//     bodyFontFamily: [],
// });

export default typography;