import { Heading, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Loader from "./Loader";
import Message from "./Message";
import asyncGetData from "../helpers/helpdb.js";


const ItemListContainer = ({ titulo }) => {

    const [paseadores, setPaseadores] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    /* const endpoint = "../src/api/db.json"; */

    /* useEffect(() => {
        setLoading(true);
        getData(endpoint)
        .then((res)=> {
            //Si la respuesta no tiene obj Error seteo la "data" sino seteo el obj "Error"
            if(!res.error){
                setPasedores(res);
                setError(null)
                console.log(res);
            }else{
                setPasedores(null);
                setError(res);
                console.log(res);
            }
            setLoading(false);
        });
    }, []); */

    /* const getData = async() => {
            //GET
            const res = await fetch("../src/api/db.json");
            return await res.json();      
    }; */

    useEffect(() => {
        setLoading(true);
        asyncGetData.then((data) => {
            setPaseadores(data);
            setLoading(false);
        });
    }, []);

    return (
        <>
            <Box w="100%" my={5}>
                <Heading>{titulo}</Heading>
                <ItemList paseadores={paseadores}></ItemList>
                {loading && <Loader></Loader>}
                {error && <Message msg={`Error : ${error.status}:${error.statusText}`}
                    bgColor="#dc3545"></Message>}
            </Box>
        </>
    );
}

export default ItemListContainer;