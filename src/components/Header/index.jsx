import { IconAvatar } from "../Icons"
import { Container, StyledHeader, List, ListItem } from "./styles"

export const Header = () => {
    return (<StyledHeader>
        <Container>
            <List>
                <ListItem>
                    Joana da Silva Oliveira
                </ListItem>
                <ListItem>
                    <IconAvatar />
                </ListItem>
            </List>
        </Container>
    </StyledHeader>)
}