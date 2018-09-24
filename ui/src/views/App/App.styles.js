import styled from 'styled-components'

import { TRANSITION_SPEED, MEDIA } from 'Theme'

import { FaCaretRight, FaCaretLeft } from 'react-icons/fa'

const NavigationOpen = styled(FaCaretRight)`
    position: absolute;
    right: 0;
    top: 50vh;
    transition: opacity ${TRANSITION_SPEED / 2}s;
    opacity: ${props => (props.isNavigationVisible ? 0 : 1)};
    z-index: 999;
`

const NavigationClose = styled(FaCaretLeft)`
    position: absolute;
    right: 0;
    top: 50vh;
    transition: opacity ${TRANSITION_SPEED / 2}s;
    opacity: ${props => (props.isNavigationVisible ? 1 : 0)};
    z-index: 999;
`

const AppWrapper = styled.div`
    display: flex;
`

const ContentWrapper = styled.div`
    height: 100vh;
    /* transition: left ${TRANSITION_SPEED}s, width ${TRANSITION_SPEED}s; */
    /* position: absolute; */
    box-sizing: border-box;
    /* right: 0; */
    /* top: 0; */
    margin: 0 2vw;
    flex: 1;
    /* width: ${props => (props.isNavigationVisible ? `79vw` : `96vw`)}; */
    width: 96vw;
`

const NavigationWrapper = styled.div`
    box-sizing: border-box;
    height: 100vh;
    display: flex;
    align-items: center;
    margin-left: 2vw;
    width: 220px;
    position: fixed;
    left: 0;
    top: 0;
    transition: left ${TRANSITION_SPEED}s;
    left: ${props => (props.isNavigationVisible ? '0' : `-210px`)};
    background-color: white;
`

export { AppWrapper, NavigationWrapper, ContentWrapper, NavigationOpen, NavigationClose }
