import React from "react";
import Item from "./Item";
import { Container, Grid, GridItem, Heading } from "@chakra-ui/react";

const ItemList = ({paseadores}) => {
    
    return (
        <>
            <Container maxWidth="container.xl" my="5">
                <Grid
                    templateColumns="repeat(auto-fill, minmax(18rem, 1fr))"
                    templateRows="repeat(minmax(33rem, 1fr))"
                    gap="6">
                    {paseadores.length > 0 ? paseadores.map((el) =>
                        <GridItem>
                            <Item key={el.id} paseador={el}> a</Item>
                        </GridItem>) : <Heading textAlign={"center"}>Cargando ...</Heading>}
                </Grid>
            </Container>
        </>
    );
}

export default ItemList;