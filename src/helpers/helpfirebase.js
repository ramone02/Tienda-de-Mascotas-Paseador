import { async } from '@firebase/util';
import { collection, getDocs, doc, getDoc, query, where, addDoc } from 'firebase/firestore';
import { db } from "../utils/firebase";

//Obtener todos los documentos
export const getAllDoscs = async () => {
    const query = collection(db, "items");
    const res = await getDocs(query);
    const data = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
    });
    return data;
}

//Obtener Documento por Id
export const getDocById = async (id) => {
    const query = doc(db, "items", id);
    const res = await getDoc(query);
    const product = {
        ...res.data(),
        id: res.id
    };
    return product;
}

//Obtener Documentos por categoria
export const getDocsCategory = async (categoryId) => {
    const productsCollection = collection(db, 'items');
    const categoryQuery = query(productsCollection, where("category", "==", categoryId));
    const data = await getDocs(categoryQuery)
        .then(result => {
            const itemList = result.docs.map(item => {
                return {
                    id: item.id,
                    ...item.data()
                }
            })
            return itemList;
        })
    return data;
}

//
export const sendOrder = async(order)=>{    
    const queryRef = collection(db, 'orders');
    const idOrder = await addDoc(queryRef, order).then((e)=> e);
    return idOrder;
}

// get docs by search




