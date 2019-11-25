import React, { Fragment } from 'react'

import { Text, Header } from 'Components'

import {
    StyledPhoto,
    MetadataWrapper,
    PhotoWrapper,
    PhotoWithMetadataWrapper,
    Spacer,
    LoadingIcon,
} from './PhotoWithMetadata.styles'

import { PhotoType } from '../../views/App/App.types'

const FILM = 'Film'


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

    const locationString = `${location.title}`
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
                            {locationString}
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
    }, [details.id])

    return (
        <PhotoWithMetadataWrapper>
            <LoadingIcon isloading={isLoading} />
            <PhotoWrapper>
                <StyledPhoto
                    isLoading={isLoading}
                    onLoad={() => setIsLoading(false)}
                    src={details.src}
                />
                {isLoading ? null : <Metadata details={details} />}
            </PhotoWrapper>
        </PhotoWithMetadataWrapper>
    )
}

export default PhotoWithMetadata