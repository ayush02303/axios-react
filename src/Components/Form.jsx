import React, { useState } from 'react';
import { postData } from '../api/PostApi';


const Form = ( { data , setData }) => {
     const [ addData , setAddData ] = useState( {
        title : "", 
        body : ""

    })

   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const addPostData =  async ()=>{
        const res = await postData( addData)
        console.log("res" , res) 
        if( res.status === 201){
            setData([ ...data , res.data])
            setAddData({ title : "" , body : ""})
        }
  }
  const handleFormData = (e)=>{
    e.preventDefault(); 
    addPostData()

  }

  return (
    <div className="form">
      <h2>Simple Form</h2>
      <form onSubmit={ handleFormData }>
        <input type="text" placeholder="Enter title" name = "title" value={ addData.title} onChange={ handleInputChange } />
        <input type="text" placeholder="Enter body" name = "body"  value={ addData.body } onChange={ handleInputChange }/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
