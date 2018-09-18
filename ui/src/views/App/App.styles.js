import styled from 'styled-components'

const AppWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;

    &:after {
        content: '';
        background-image: ${props => `url(${props.backgroundSrc});`};
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        opacity: 0.2;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
    }
`

const NavigationWrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    margin-left: 2vw;
    margin-right: 2vw;
`

export { AppWrapper, NavigationWrapper }
