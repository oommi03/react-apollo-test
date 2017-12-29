import React,{Component} from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
const query = gql`
query userageQurey($id: Int,$gender:String,$age:String,$first_name:String,$last_name:String,$email:String){
	user(id:$id,gender:$gender,age:$age,first_name:$first_name,last_name:$last_name,email:$email){
  id,
  age,
  email,
  first_name,
  last_name
  }

}
`
const array = (user)=>user.map((data,i)=>{
  return  <li key={i}>
  ID: {data.id} NAME: {data.fist_name}  {data.last_name}  AGE: {data.age} EMAIL: {data.email}
</li>
})



const App1 =({error,loading,user})=>{
    if(error) return(<div>error</div>)
    if(loading) return(<div>loading...</div>)
    
   
    return(
      <div>
{(user) && array(user)}
      </div>
    )
  
}
const App2 = graphql(query,{
  options:({id,gender,email,first_name,last_name,age})=>({
    variables:{id,gender,email,first_name,last_name,age}
  }),
  props:({data})=>({...data})
})
export const App = App2(App1)
