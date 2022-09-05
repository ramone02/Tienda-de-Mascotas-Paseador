import React, { useEffect, useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import {getProductsId} from "../helpers/helpdb.js";
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail.js";
import Loader from "./Loader.js";
import Message from "./Message.js";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const getData = getProductsId(parseInt(id));
        getData.then((res) => {
            setItem(res);
            setLoading(false);
        });
        
    }, [id]);

    return (
        <>
            <Box w="100%" my={5}>
                <Heading>Item ItemDetailContainer</Heading>
                {loading ? <Loader /> : <ItemDetail item={item}></ItemDetail>}
                {error && <Message msg={`Error : ${error.status}:${error.statusText}`}
                    bgColor="#dc3545"></Message>}
            </Box>
        </>);
}

export default ItemDetailContainer;