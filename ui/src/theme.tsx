import styled, { createGlobalStyle, css } from 'styled-components'

const TRANSITION_SPEED = 1
const CONTENT_SPACING = {
    xs: '0.125rem',
    s: '0.25rem',
    m: '0.5rem',
    l: '1rem',
    xl: '2rem',
    xxl: '4rem',
    xxxl: '8rem',
    xxxxl: '16rem'
}

const HEADER_FONT_SIZES = {
    s: '1.0rem',
    m: '1.2rem',
    l: '1.5rem'
}

const TEXT_FONT_SIZES = {
    m: '1.0rem'
}

const ICON_COLOR = {
    initial: '#000',
    hover: 'rgb(74, 207, 160)'
}

const ICON_FONT_SIZES = {
    s: '1.0rem',
    m: '1.2rem',
    l: '1.5rem'
}

const FONT_FAMILY_HEADER = "'Raleway', sans-serif;"
const FONT_FAMILY_TEXT = "'Montserrat', sans-serif"

const FONT_SIZE_INPUTS_AND_BUTTONS = 14

const sizes = {
    desktop: 992,
    tablet: 768,
    phone: 576
}

const PAGE_THEME = styled.div`
`

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 18px;
        font-weight: 400;
    }

    body {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
    }
`

export {
    GlobalStyle,
    PAGE_THEME,
    FONT_FAMILY_TEXT,
    FONT_FAMILY_HEADER,
    FONT_SIZE_INPUTS_AND_BUTTONS,
    TRANSITION_SPEED,
    CONTENT_SPACING,
    HEADER_FONT_SIZES,
    TEXT_FONT_SIZES,
    ICON_FONT_SIZES,
    ICON_COLOR
}
