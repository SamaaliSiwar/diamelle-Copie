import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import alanBtn from '@alan-ai/alan-sdk-web';

export default function Support()
{
const navigate = useNavigate();
const alankey='a101c4dd6e1d54196c7a0c2aa3de296b2e956eca572e1d8b807a3e2338fdd0dc/stage';
useEffect(()=>{
  alanBtn({
    key:alankey,
    onCommand :({command})=>{
      if(command === 'testcommand'){
        navigate('/search/categorie/:categorie')
      }
      if(command === 'testcommand2'){
        navigate('search/categorie/fiançailles')
      }
      if(command === 'testcommand3'){
        navigate('/')
      }
    }

  })

},[])
return(
    <div></div>
)
}