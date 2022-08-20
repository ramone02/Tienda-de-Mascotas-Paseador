import { Stack, Heading } from "@chakra-ui/react";
import React from "react";


const ItemListContainer = ({titulo}) => {
    return(
        <>
            <Stack>
                <Heading>{titulo}</Heading>
            </Stack>
        </>
    );
}

export default ItemListContainer;