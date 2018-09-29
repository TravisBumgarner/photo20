import styled from 'styled-components'

import { CONTENT_SPACING, TRANSITION_SPEED } from 'Theme'

const ContactFormWrapper = styled.div``

const AlertWrapper = styled.div`
    width: 100%;
    position: fixed;
    left: 0;
    height: ${CONTENT_SPACING * 2}vw;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: bottom ${TRANSITION_SPEED / 2}s;
    bottom: ${props => (props.isNotification ? '0' : `${-CONTENT_SPACING * 2}vw`)};
`

export { ContactFormWrapper, AlertWrapper }
