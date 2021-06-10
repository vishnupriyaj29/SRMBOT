import React, { Component } from 'react';
import ChatBot from 'react-chatbot-kit';
import Post from './Post';


class chatbot extends Component {
    render() {
        return (
          <ChatBot 
           steps={[
             {
              id:'q-name', 
              message:'Hello. What is your name?', 
              trigger:'name',
             },
             {
              id:'name', 
              user:true, 
              validator: (value) => {
                 if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value))
                   {
                     return true;
                   }
                 else
                   {
                     return'Please input alphabet characters only.';
                   }
              },
              end:true,
             },

            {
             id:'q-email', 
             message:'Hello. What is your email?', 
             trigger:'email',
            },
            {
             id:'email', 
             user:true, 
             validator: (value) => {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
                  {
                    return true;
                  }
                else
                  {
                    return'Please enter a valid email.';
                  }
             },
             end:true,
            },
               {
                id:'q-phone', 
                message:'Hello. What is your phone number?', 
                trigger:'phone',
               },
               {
                id:'phone', 
                user:true, 
                validator: (value) => {
                   if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value))
                     {
                       return true;
                     }
                   else
                     {
                       return'Please enter a valid phone number.';
                     }
                },
                end:true,
               },
               {
                id:'q-submit', 
                message:'Do you wish to submit?', 
                trigger:'submit'
              },
              {
                id:'submit', 
                options:[
                {value:'y', label:'Yes', trigger:'end-message'},
                {value:'n', label:'No', trigger:'no-submit'},
                ] 
              },
              {
                      id: 'no-submit',
                      message:'Your information was not submitted.', 
                      end: true,
                   },
                        {
                      id: 'end-message',
                      component: <Post />,
                      asMessage: true,
                      end: true,
                   },
            ]}
          />
        );
      }
    }
    

export default SimpleForm;