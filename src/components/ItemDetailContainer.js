import React, { useEffect, useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail.js";
import Loader from "./Loader.js";
import Message from "./Message.js";
import {getDocById} from '../helpers/helpfirebase.js';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const getData = getDocById((id));
        getData.then((res) => {
            setItem(res);
            setLoading(false);
        });        
    }, [id]);

    return (
        <>
            <Box w="100%" my={5}>
                <Heading>ItemDetailContainer</Heading>
                {loading ? <Loader /> : <ItemDetail item={item}></ItemDetail>}
                {error && <Message msg={`Error : ${error.status}:${error.statusText}`}
                    bgColor="#dc3545"></Message>}
            </Box>
        </>);
}

export default ItemDetailContainer;