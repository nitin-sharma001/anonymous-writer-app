import axios from "axios";
import { createContext, useState } from "react";


export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [form, setFrom ] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const [singleForm, setSingleForm] = useState({});
    const [like, setLike] = useState(false);
    const [hit, setHit] = useState(0);
    const [loading, setLoading] = useState(false);
    const [comment, setComment] = useState('');
    const [commentData, setCommentData] = useState([]);
    // console.log(form);

    async function fetchData(){
        try{
             await axios.get("http://localhost:5174/getForms")
            .then((res) =>{
                // console.log(res);
                setFrom(res.data.reverse());
                setFilteredData(res.data);
            })
            
       
        }catch(err){
            console.log(err);
        }
    }

    async function fetchFormById(id){
        // let id "65db0d88abf615fb74ccfa1e";
        let url = `http://localhost:5174/getFormById/${id}`;
        try{
            await axios.get(url)
            .then( (res) => {
                setSingleForm(res.data);
                // console.log("comments data in form");
                // console.log(res.data.comments);

                if(res.data.comments.length > 0){
                    res.data.comments.map((id) => {
                        // console.log(id);
                        getCommentsById(id);
                      })
            
                }else{
                    setComment(["No Comments found !"]);
                }



            })
        }catch(err){
            console.log(err);
        }
    }
    let data = [];
    
    async function getCommentsById(id){
        // let id "65db0d88abf615fb74ccfa1e";
        let url = `http://localhost:5174/getComments/${id}`;
        try{
            
            const commentResponse = await axios.get(url)
            .then( (comment) => {
            console.log("ye raha data ");
                
                console.log(comment.data.comment);

                data.push(comment.data.comment);
                
            })

            // console.log(data);

            setComment(data);
            
        }catch(err){
            console.log(err);
        }
    }
    
    const values = {
        fetchData, form, setFrom, fetchFormById,
        singleForm, setSingleForm, like, setLike, hit, setHit, 
         loading, setLoading,comment, setComment, getCommentsById, commentData, setCommentData,
         filteredData, setFilteredData
    }


    return <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
}


