import React, { useEffect, useState } from 'react';

function EasterEgg() {
    const [inputSequence, setInputSequence] = useState('');

    useEffect(() => {
        // Funktion för att återställa sidans stilar
        const resetStyles = () => {
            document.body.style.backgroundColor = '';
            document.querySelector('header').style.backgroundColor = '';
            document.querySelector('footer').style.backgroundColor = '';
        };

        // Funktion för att ändra bakgrundsfärgen
        const changeBackground = () => {
            document.body.style.backgroundColor = 'yellow';
            document.querySelector('header').style.backgroundColor = 'purple';
            document.querySelector('footer').style.backgroundColor = 'purple';
        };

        
        const dinUddaDel = document.createElement('div');
        dinUddaDel.id = 'din-udda-del-id';
        dinUddaDel.style.position = 'absolute';
        dinUddaDel.style.bottom = '0';
        dinUddaDel.style.left = '0';
        dinUddaDel.style.width = '50px';
        dinUddaDel.style.height = '50px';
        dinUddaDel.style.opacity = '0'; 
        document.body.appendChild(dinUddaDel);

        // Lägg till eventlyssnare för klick och tangenttryckningar
        dinUddaDel.addEventListener('click', changeBackground);

        // Kontrollera hemligt tangentbordstryck
        const checkSecretCode = (event) => {
            setInputSequence((prevSequence) => {
                const updatedSequence = prevSequence + event.key;
                if (updatedSequence.slice(-4) === '1337') {
                    alert('All your base belong to us!');
                    resetStyles(); // Återställ stilar när påskägget aktiveras, orkar inte implemnetera det bättre
                }
                return updatedSequence.slice(-4);
            });
        };

        document.addEventListener('keydown', checkSecretCode);

       
        return () => {
            document.body.removeChild(dinUddaDel);
            document.removeEventListener('keydown', checkSecretCode);
        };
    }, []);

    return null; 
}

export default EasterEgg;