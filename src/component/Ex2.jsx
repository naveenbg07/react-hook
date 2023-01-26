import React,{useEffect, useState} from "react";

//useState -> is use to always store the date


const url = 'https://jsonplaceholder.typicode.com'


function Ex2(props){

    const [posts, setPosts] =useState([])
    // mount
        // useEffect(()=>{

        // },[]);
    
     // update
        //     useEffect(()=>{
        //         handler
        //     },[handler, state]);

    // unmount
        // useEffect(()=>{
        //     return ()=> {
        //         };    
        // },[]);

        const getPosts = async () => {
            fetch(`${url}/posts`)
            .then(res => res.json())
            .then(out => {
                console.log('posts =', out)
                setPosts(out)
            }).catch(err => console.log(err.message))
            
        }

        useEffect(()=>{
            getPosts()
        },[])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3">UseEffect Hook</h3>   
                </div>
            </div>

            <div className="row">
                {
                    posts.map((item,index) =>{
                        return(

                    <div className="col-md-4 mt-2" key={index}>
                        <div className="card">
                            <div className="card-header">
                                <h3> {item.id} {item.title}</h3>
                            </div>
                            <div className="card-body">
                                <p>{item.body}</p>
                            </div>
                        </div>
                    </div>
                     )
                    })
                }
                
            </div>
        </div>
    )
}
export default Ex2