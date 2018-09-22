import styled from 'styled-components'

import { PAGE_THEME } from 'Theme'

const AboutWrapper = styled(PAGE_THEME)`
    display: flex;
    align-items: center;
    justify-content: center;
`

const TextWrapper = styled.div`
    margin: 0px 2vw;
    max-width: 800px;
`

export { AboutWrapper, TextWrapper }
