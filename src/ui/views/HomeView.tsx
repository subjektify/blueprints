import { Container, Divider, Header, Icon } from "semantic-ui-react"
import { FeaturedBlueprints } from "../components"

export const HomeView = () => {
    return (
        <div>
            <Container className="home-view-hero" text>
                <Header
                    as='h1'
                    content='Discover, Reuse, Innovate.'
                />
                <Header
                    as='h1'
                    color="blue"
                    content='Build dApps in minutes, not months'
                />
            </Container>
            <Divider horizontal>
                <Header as='h4'>
                    <Icon name='paper plane' />
                    Featured Blueprints
                </Header>
            </Divider>
            <FeaturedBlueprints />
        </div>
    )
}
