import React, { useEffect, useState } from 'react';

const Report = ({ match }) => {
    var markdown = require( "markdown" ).markdown;
    const kmom = match.params.kmom ;
    const [text, setText] = useState([]);

    useEffect(() => {
    fetch(`http://localhost:1337/reports/week/kmom0${kmom}`, {cache: "no-store"})
        .then(res => res.json())
        .then(res => setText(res.data.content));

    }, [kmom]);
    if (kmom == 1){
        return (
        <main>
            <h2>{ "kmom0" + kmom }</h2>
            <div style={{ whiteSpace: 'pre-wrap' }} >
               <p><b> Setup</b></p>

               <p>1. Clone the repo with `git clone https://github.com/corgisout/jsramverk`</p>
               <p>2. install dependencies with  `npm install`</p>
               <p>3. start the application with `npm start`</p>
               <p>4. go to  `http://localhost:3000/` too view the page</p>
         </div>
        </main>
        );
    }
    else if(kmom == 2){
        return (
        <main>
            <h2>{ "kmom0" + kmom }</h2>
            <div style={{ whiteSpace: 'pre-wrap' }} >
               <p><b> Setup</b></p>

               <p>1. Clone the repo with `git clone https://github.com/corgisout/api-jsramverk`</p>
               <p>2. install dependencies with  `npm install`</p>
               <p>3. add a secret key by typing JWT_SECRET='longsecret' in your cmd</p>
               <p>4. in the db folder use migrate.sql to setup texts.sqlite</p>
               <p>5. run npm start</p>
               <p>4. the api now runs on `http://localhost:1337/`</p>

         </div>
        </main>
        );
    }
    else{
    return (
    <main>
        <h2>{ "kmom0" + kmom }</h2>
        <div style={{ whiteSpace: 'pre-wrap' }} >
           <p>{ text }</p>
     </div>
    </main>
    );
    }
    };

export default Report;
