import React, { useEffect, useState } from 'react';

const Me = () => {
    const [intro, setIntro] = useState('');
    useEffect(() => {
        fetch("http://localhost:1337/")
            .then(res => res.json())
            .then(res => setIntro(res.data.text));
    }, []);

    return (
    <div>
      <h1>Me</h1>
      <p>{intro}</p>
    </div>
    );
};

export default Me;
