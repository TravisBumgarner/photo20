import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Header } from 'Components'

import {
    NavigationWrapper,
    SubNavigationWrapper,
    InternalLink,
    ExternalLink,
    LinkListItem
} from './Navigation.styles.js'

class Navigation extends Component {
    render() {
        const { galleries, theme, toggleNavigation } = this.props

        const projectLinks = []
        const snapshotLinks = []
        console.log(galleries)
        galleries.map(({ id, title, content_type }) => {
            const link = (
                <LinkListItem key={id} onClick={toggleNavigation}>
                    <InternalLink theme={theme} to={`/portfolio/${content_type}/${id}`}>
                        {title}
                    </InternalLink>
                </LinkListItem>
            )
            if (content_type === 'project') {
                projectLinks.push(link)
            } else if (content_type === 'snapshots') {
                snapshotLinks.push(link)
            } else {
                throw new Error('Invalid gallery type')
            }
        })

        const socialSectionContent = [
            { title: 'Instagram', route: 'https://www.instagram.com/esafoto/' },
            {
                title: 'Flickr',
                route: 'https://www.flickr.com/people/esa_foto/'
            },
            {
                title: 'National Geographic',
                route: 'https://yourshot.nationalgeographic.com/profile/778640/'
            }
        ]

        const socialLinks = socialSectionContent.map(m => {
            return (
                <LinkListItem key={m.title}>
                    <ExternalLink theme={theme} href={m.route} target="_blank">
                        {m.title}
                    </ExternalLink>
                </LinkListItem>
            )
        })

        const miscSectionContent = [
            { title: 'Blog', route: '/blog' },
            { title: 'About', route: '/about' },
            { title: 'Contact', route: '/contact' }
        ]

        const miscLinks = miscSectionContent.map(m => {
            return (
                <LinkListItem key={m.title} onClick={toggleNavigation}>
                    <InternalLink theme={theme} to={m.route}>
                        {m.title}
                    </InternalLink>
                </LinkListItem>
            )
        })

        return (
            <NavigationWrapper theme={theme}>
                <SubNavigationWrapper>
                    <InternalLink theme={theme} to={`/`}>
                        <Header size="medium">Main</Header>
                        <ul>{miscLinks}</ul>
                    </InternalLink>
                </SubNavigationWrapper>

                <SubNavigationWrapper>
                    <Header size="medium">Projects</Header>
                    <ul>{projectLinks}</ul>
                </SubNavigationWrapper>

                <SubNavigationWrapper>
                    <Header size="medium">Snapshots</Header>
                    <ul>
                        <LinkListItem key={'all'} onClick={toggleNavigation}>
                            <InternalLink theme={theme} to={`/portfolio/snapshots/all`}>
                                All
                            </InternalLink>
                        </LinkListItem>
                        {snapshotLinks}
                    </ul>
                </SubNavigationWrapper>

                <SubNavigationWrapper>
                    <Header size="medium">Social</Header>
                    <ul>{socialLinks}</ul>
                </SubNavigationWrapper>
            </NavigationWrapper>
        )
    }
}

Navigation.propTypes = {
    // galleries: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    toggleNavigation: PropTypes.func.isRequired
}

export default Navigation
