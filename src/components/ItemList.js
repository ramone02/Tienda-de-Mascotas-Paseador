import React from "react";
import Item from "./Item";
import { Container, Heading, Box, SimpleGrid } from "@chakra-ui/react";

const ItemList = ({ data }) => {

    return (
        <>
            <Container maxWidth={"80%"} color='#262626' mt={10} mb={10}>                
                <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={"60px"}>
                    {data && data.map((el) =>
                        <Box key={el.id}>
                            <Item key={el.id} data={el}></Item>
                        </Box>)}
                </SimpleGrid>
            </Container>
            <Heading my={5}></Heading>
        </>
    );
}

export default ItemList;