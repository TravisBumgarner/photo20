import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'

import { Home, Contact, About, Portfolio } from 'Views'
import { Navigation } from 'Containers'

import { AppWrapper, NavigationWrapper } from './App.styles.js'
import { generateTheme } from '../../theme.js'

const Theme = React.createContext()

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: {
                backgroundSrc: '',
                primaryColor: 'rgb(0,0,0)',
                secondaryColor: 'rgb(0,0,0)'
            },
            metadata: {
                years: [],
                projects: []
            },
            allPhotos: []
        }
    }

    getThemeDetails = () => {
        axios.get('http://localhost:8000/get_random_photo').then(response => {
            const { src, color_sample_1, color_sample_2 } = response.data

            this.setState({
                theme: {
                    backgroundSrc: src,
                    primaryColor: color_sample_1,
                    secondaryColor: color_sample_2
                }
            })
        })
    }

    getPhotos = () => {
        axios
            .get('http://localhost:8000/photos/')
            .then(response => {
                const metadataYears = new Set([])
                const metadataProjects = new Set([])

                response.data.map(photo => {
                    metadataProjects.add(photo.project.title)
                    metadataYears.add(photo.year)
                })

                this.setState({
                    isLoading: false,
                    allPhotos: response.data,
                    visiblePhotos: response.data,
                    metadata: {
                        projects: [...metadataProjects].sort(),
                        years: [...metadataYears].sort((a, b) => b > a)
                    }
                })
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    isLoading: false
                })
            })
    }

    componentWillMount() {
        this.getThemeDetails()
        this.getPhotos()
    }

    render() {
        const { metadata, allPhotos, isLoading, theme } = this.state

        return isLoading ? null : (
            <AppWrapper backgroundSrc={theme.backgroundSrc}>
                <NavigationWrapper>
                    <Navigation metadata={metadata} />
                </NavigationWrapper>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/about" component={About} />
                    <Route
                        path="/portfolio/:projectType/:projectTitle"
                        render={rest => (
                            <Portfolio allPhotos={allPhotos} {...rest} />
                        )}
                    />
                </Switch>
            </AppWrapper>
        )
    }
}

App.propTypes = {}

export default App
export { Theme }
