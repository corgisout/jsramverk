import React, { useEffect, useState } from 'react';

const Me = () => {
  const [message, setMessage] = useState('');


  return (
    <main>
      <h1>Me</h1>
      <p>Hej jag heter simon och kommer från Uppsala. Jag är 21 år och gick ut gymnasiet från IT-G gymnasiets tekniska utbildning 2017. . Jag har alltid varit väldigt intreserad av datorer och internet. Därför har jag valt att jag ska bli webutvecklare. dettta värkade då som ett bra ställe att börja min karriärs plan på.
      </p>
      <p>
        jag är uppväxt i uppsala och har bott här i hela mitt liv. min fritid har mest spenderats med olika datorspel från cs till
        wow till starcraft och allt där i mellan.
    </p>
    </main>
  );
};

export default Me;
