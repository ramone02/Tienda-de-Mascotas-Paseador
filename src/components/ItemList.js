import React from "react";
import Item from "./Item";
import { Container, Grid, GridItem, Heading } from "@chakra-ui/react";

const ItemList = ({data}) => {

    data.forEach(e => {
        console.log(e);
    });
    
    return (
        <>
            <Container maxWidth="container.xl" my="5">
                <Heading my={5}></Heading>
                <Grid
                    templateColumns="repeat(auto-fill, minmax(18rem, 1fr))"
                    templateRows="repeat(minmax(33rem, 1fr))"
                    gap="6">
                    {data && data.map((el) =>
                        <GridItem key={el.id}>
                            <Item key={el.id} data={el}></Item>
                        </GridItem>) }
                </Grid>
            </Container>
        </>
    );
}

export default ItemList;