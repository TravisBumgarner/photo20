import styled from 'styled-components'
import React from 'react'

import { TRANSITION_SPEED, ICON_COLOR } from 'Theme'

import { FaCaretRight } from 'react-icons/fa'

const NavigationClose = styled(({ isNavigationVisible, ...rest }) => <FaCaretRight {...rest} />)`
    position: absolute;
    top: 20px;
    left: 7px;
    transition: opacity ${TRANSITION_SPEED}s;
    opacity: ${props => (props.isNavigationVisible ? 1 : 0)};
    z-index: 999;
    fill: ${ICON_COLOR.initial};

    &:hover {
        fill: ${ICON_COLOR.hover};
    }
`

const NavigationGutter = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width 100vw;
    height 100vh;
    z-index: 998;
`

const AppWrapper = styled.div``

const NavigationWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    position: fixed;
    bottom: 0;
    transition: right ${TRANSITION_SPEED}s;
    right: ${props => (props.isNavigationVisible ? '0' : `-100vw`)};
`

export { AppWrapper, NavigationWrapper, NavigationClose, NavigationGutter }
