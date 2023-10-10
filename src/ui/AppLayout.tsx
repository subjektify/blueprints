import { Container } from "semantic-ui-react"
import { AppMenu } from "./AppMenu"
import { HomeView } from "./views"

export const AppLayout = () => {
    return (
        <div>
            <AppMenu />
            <Container className="app-layout">
                <HomeView />
            </Container>
        </div>
    )
}
