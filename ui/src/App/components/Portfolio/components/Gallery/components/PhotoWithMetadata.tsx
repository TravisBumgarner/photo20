import React, { Fragment } from 'react'
import styled, { keyframes } from 'styled-components'
import { FaCamera, FaExclamationTriangle } from 'react-icons/fa'

import { Text, Header } from 'sharedComponents'
import { PhotoType } from 'sharedTypes'
import { MEDIA, CONTENT_SPACING } from 'theme'
import { RACE_CONDITION_MAGIC_NUMBER } from '../Gallery.styles'

const FILM = 'Film'


const StyledPhoto = styled.img`
    max-width: 100%;
    max-height: 90%;
    z-index: ${RACE_CONDITION_MAGIC_NUMBER + 1};
`

const colorChange = keyframes`
  0% {
    fill: #fff;
  }

  50% {
    fill: rgb(74, 207, 160);
  }

  100% {
      fill: #fff;
  }
`

const LoadingIcon = styled(FaCamera)`
    animation: ${colorChange} 2s linear infinite;
    position: fixed;
    top: calc(50vh - 2.5em);
    left: calc(50vw - 2.5em);
    z-index: ${RACE_CONDITION_MAGIC_NUMBER};
`

const PhotoWithMetadataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0;
    height: 100vh;
    box-sizing: border-box;
`

const Spacer = styled(({ className }) => <span className={className}>//</span>)`
    padding: 0 20px;
    display: inline-block;
    font-weight: 700;
`

const PhotoWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    margin: 0;
`

const MetadataWrapper = styled.div`
    width: 100%;
    height: 10%;
    text-align: center;
`

const Metadata = ({ details }: { details: PhotoType }) => {
    const {
        make,
        model,
        aperture,
        shutter_speed,
        iso,
        lens,
        focal_length,
        location,
        camera_type
    } = details

    const gearString = make || model || lens ? `${make} ${model} ${lens}` : 'N/A'
    const statsString =
        aperture || shutter_speed || iso || focal_length
            ? `F${aperture} ${shutter_speed}" ${iso}ISO ${focal_length}mm`
            : 'N/A'

    return (
        <MetadataWrapper>
            <Text>
                {camera_type === FILM ? (
                    'Film Camera, N/A'
                ) : (
                        <Fragment>
                            <Header size="inline">Location </Header>
                            {location}
                            <Spacer />
                            <Header size="inline">Gear </Header>
                            {camera_type.toLowerCase() === 'film' ? 'Film Camera' : gearString}
                            <Spacer />
                            <Header size="inline">Conditions </Header>
                            {camera_type.toLowerCase() === 'film' ? 'N/A' : statsString}
                        </Fragment>
                    )}
            </Text>
        </MetadataWrapper>
    )
}

const PhotoWithMetadata = ({ details }: { details: PhotoType }) => {
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        setIsLoading(true)
    }, [])

    return (
        <PhotoWithMetadataWrapper>
            {isLoading ? <LoadingIcon size="5em" /> : null}
            <PhotoWrapper>
                <StyledPhoto
                    onLoad={() => setIsLoading(false)}
                    src={`https://storage.googleapis.com/photo21/photos/large/${details.src}`}
                />
                {isLoading ? null : <Metadata details={details} />}
            </PhotoWrapper>
        </PhotoWithMetadataWrapper>
    )
}

export default PhotoWithMetadata
