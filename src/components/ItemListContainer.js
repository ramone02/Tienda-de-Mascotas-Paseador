import { Heading, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Loader from "./Loader";
import Message from "./Message";
import asyncGetData from "../helpers/helpdb.js";
import { useParams } from "react-router-dom";


const ItemListContainer = ({ titulo }) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const {productos} = useParams();

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
        if (productos == "productos") {
            console.log(productos + "productos");
            asyncGetData.then((data) => {
                console.log(data + "productos");
                console.log(data.productos + "productos");
                setData(data.productos);
                setLoading(false);
            });
        }else{
            console.log(productos + "paseadores");
            asyncGetData.then((data) => {
                console.log(data.paseadores + "paseadores")
                setData(data.paseadores);
                setLoading(false);
            });
        }
    }, []);

    return (
        <>
            <Box w="100%" my={5}>
                <Heading>{titulo}</Heading>
                <ItemList data={data}></ItemList>
                {loading && <Loader></Loader>}
                {error && <Message msg={`Error : ${error.status}:${error.statusText}`}
                    bgColor="#dc3545"></Message>}
            </Box>
        </>
    );
}

export default ItemListContainer;