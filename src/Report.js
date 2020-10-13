import React, { useEffect, useState } from 'react';

const Report = ({ match }) => {
    const kmom = match.params.kmom ;
    const [text, setText] = useState([]);


    useEffect(() => {
    fetch(`http://localhost:1337/reports/week/kmom0${kmom}`, {cache: "no-store"})
        .then(res => res.json())
        .then(res => setText(res.data.content));

    }, [kmom]);

  return (
    <main>
      <h2>{ "kmom0" + kmom }</h2>
      <div style={{ whiteSpace: 'pre-wrap' }} >
        <p>{ text }</p>
     </div>
    </main>
  );
};

export default Report;
