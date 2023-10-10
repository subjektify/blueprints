import { Button, Container, Divider, Header, Icon } from "semantic-ui-react"

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
            <Container className="home-view-create">
                <Button icon primary labelPosition='left'>
                    <Icon name='rocket' />Create your own</Button>
            </Container>
            <Divider horizontal>
                <Header as='h4'>
                    Namespaces
                </Header>
            </Divider>
            <Divider horizontal>
                <Header as='h4'>
                    Subjects
                </Header>
            </Divider>
            <Divider horizontal>
                <Header as='h4'>
                    Contracts
                </Header>
            </Divider>
        </div>
    )
}
