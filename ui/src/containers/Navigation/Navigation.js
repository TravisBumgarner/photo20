import React, { Component, Fragment } from 'react'
import { FaInstagram, FaFlickr } from 'react-icons/fa'

import { NatGeoIcon } from 'Resources'
import { Header } from 'Components'

import {
    NavigationWrapper,
    SubNavigationWrapper,
    InternalLink,
    ExternalLink,
    LinkListItem,
    IconWrapper,
    EmptySpaceCloseNavigation
} from './Navigation.styles.js'

class Navigation extends Component {
    render() {
        const { galleries, toggleNavigation, locations, categories } = this.props

        const projectLinks = []
        const snapshotLinks = []
        galleries.map(({ id, title, content_type }) => {
            const link = (
                <LinkListItem key={id} onClick={toggleNavigation}>
                    <InternalLink to={`/portfolio/${content_type}/${id}`}>{title}</InternalLink>
                </LinkListItem>
            )
            if (content_type === 'Project') {
                projectLinks.push(link)
            } else if (content_type === 'Snapshot') {
                snapshotLinks.push(link)
            } else {
                throw new Error('Invalid gallery type')
            }
        })

        const locationLinks = []
        locations.map(({ id, title }) => {
            const link = (
                <LinkListItem key={id} onClick={toggleNavigation}>
                    <InternalLink to={`/portfolio/locations/${title}`}>{title}</InternalLink>
                </LinkListItem>
            )
            locationLinks.push(link)
        })

        const categoriesLinks = []
        categories.map(({ id, title }) => {
            const link = (
                <LinkListItem key={id} onClick={toggleNavigation}>
                    <InternalLink to={`/portfolio/categories/${title}`}>{title}</InternalLink>
                </LinkListItem>
            )
            categoriesLinks.push(link)
        })

        const socialSectionContent = [
            {
                title: 'Instagram',
                route: 'https://www.instagram.com/esafoto/',
                icon: <FaInstagram size="2em" />
            },
            {
                title: 'Your Shot National Geographic',
                route: 'https://yourshot.nationalgeographic.com/profile/778640/',
                icon: <NatGeoIcon size="2em" />
            },
            {
                title: 'Flickr',
                route: 'https://www.flickr.com/people/esa_foto/',
                icon: <FaFlickr size="2em" />
            }
        ]

        const socialLinks = socialSectionContent.map(m => {
            return (
                <IconWrapper key={m.title} title={m.title}>
                    <ExternalLink href={m.route} target="_blank">
                        {m.icon}
                    </ExternalLink>
                </IconWrapper>
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
                    <InternalLink to={m.route}>{m.title}</InternalLink>
                </LinkListItem>
            )
        })

        return (
            <Fragment>
                <NavigationWrapper>
                    <SubNavigationWrapper>
                        <Header size="medium">Main</Header>
                        <ul>{miscLinks}</ul>
                    </SubNavigationWrapper>

                    <SubNavigationWrapper>
                        <Header size="medium">Photo Essays</Header>
                        <ul>{projectLinks}</ul>
                    </SubNavigationWrapper>

                    <SubNavigationWrapper>
                        <Header size="medium">Snapshots</Header>
                        <ul>
                            <LinkListItem key={'all'} onClick={toggleNavigation}>
                                <InternalLink to={`/portfolio/snapshots/all`}>All</InternalLink>
                            </LinkListItem>
                            {snapshotLinks}
                        </ul>
                    </SubNavigationWrapper>

                    <SubNavigationWrapper>
                        <Header size="medium">Categories</Header>
                        <ul>{categoriesLinks}</ul>
                    </SubNavigationWrapper>

                    <SubNavigationWrapper>
                        <Header size="medium">Locations</Header>
                        <ul>{locationLinks}</ul>
                    </SubNavigationWrapper>

                    <SubNavigationWrapper>{socialLinks}</SubNavigationWrapper>
                </NavigationWrapper>
            </Fragment>
        )
    }
}

export default Navigation
