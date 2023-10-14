import { Container, Image, Input, Menu } from "semantic-ui-react"
import { IoWalletOutline } from "react-icons/io5"

export const AppMenu = () => {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src='https://assets.grams.dev/subjektify/logo/logo.png' style={{ marginRight: '1.5em' }} />
          Blueprints
        </Menu.Item>
        <Menu.Item as='a'>Namespaces</Menu.Item>
        <Menu.Item as='a'>Compositions</Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item as='a'><IoWalletOutline size={24} className="connect-wallet" />Connect Wallet</Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}
