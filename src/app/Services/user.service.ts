import { Injectable } from '@angular/core';
import { User } from '../Models/user.model';
import { con } from 'src/app/server.js';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User ={
    username:'',
    password:'',
    email:'',
    profileImage: null
  }
  
  constructor() { }

  ngInit(){
    
  }
  
  getUsers(){
    var users: User[];
    users = con.query('Select * From User'),
      (err, rows) =>{
        if (err) {
          throw err;
        }
        console.log(rows);
      }
    console.log("getUsers function is launched");
    return users;
  }

  loginUser( loginName, loginPass){
    /*
    
    */
  }

  registerUser(registerName, registerPass, registerEmail){
    var doesUserExist = this.findUser(registerName);
    if(doesUserExist = true){
      console.log("Username is taken");
    }
    else{
      con.query('Insert Into User Values ('+registerName+','+registerEmail+','+registerPass+')'),
      (err)=>{
        if(err){
         throw err;
        }
       else{
         console.log("User: "+registerName+" is registered");
       }
      } 
    }
  }

 findUser(loginName){
   var userFound :User[]
   userFound = con.query('Select username From User Where username = '+loginName),
     (err) => {
       if(err){
         throw err;
       }
     }
     if(userFound != null){
       console.log("Username not found");
       return false;
     }
     else{
       console.log("Username found");
       return true;
     }

  }
}

