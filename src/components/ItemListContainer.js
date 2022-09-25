import { Heading, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Loader from "./Loader";
import Message from "./Message";
import { getAllDoscs, getDocsCategory } from '../helpers/helpfirebase.js';
import { useParams } from "react-router-dom";


const ItemListContainer = ({ titulo }) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const params = useParams();

    useEffect(() => {
        setLoading(true);
        if (params.categoryId) {
            const getData = getDocsCategory(params.categoryId);
            getData.then((res) => {
                setData(res);
                setLoading(false);
            });
        } else {
            const getData = getAllDoscs();
            getData.then((res) => {
                setData(res);
                setLoading(false);
            });
        }
    }, [params.categoryId]);



    return (
        <>
            <Box w="100%" my={5}>
                <Heading>{titulo}</Heading>
                {loading && <Loader></Loader>}
                {!loading && data && <ItemList data={data}></ItemList>}
                {error && <Message msg={`Error : ${error.status}:${error.statusText}`}
                    bgColor="#dc3545"></Message>}
            </Box>
        </>
    );
}

export default ItemListContainer;