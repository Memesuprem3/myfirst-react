import React, { useEffect, useState } from 'react';

function EasterEgg() {
    const [inputSequence, setInputSequence] = useState('');

    useEffect(() => {
        // Påskägg 1: Bakgrundsfärgändring
        const changeBackground = () => {
            document.body.style.backgroundColor = 'yellow';
            document.querySelector('header').style.backgroundColor = 'purple';
            document.querySelector('footer').style.backgroundColor = 'purple';
        };

        // ruta för att aktivera påsägg
        const dinUddaDel = document.createElement('div');
        dinUddaDel.id = 'din-udda-del-id';
        dinUddaDel.style.position = 'absolute';
        dinUddaDel.style.top = '0';
        dinUddaDel.style.left = '0';
        dinUddaDel.style.width = '50px';
        dinUddaDel.style.height = '50px';
        dinUddaDel.style.opacity = '0'; 
        document.body.appendChild(dinUddaDel);
        
        dinUddaDel.addEventListener('click', changeBackground);

        // Påskägg 2: 1337 event
        const checkSecretCode = (event) => {
            setInputSequence((prevSequence) => {
                const updatedSequence = prevSequence + event.key;
                if (updatedSequence.slice(-4) === '1337') {
                    alert('Du har hittat påskägget!');
                }
                return updatedSequence.slice(-4); // Håller bara de sista fyra tecknen
            });
        };

        document.addEventListener('keydown', checkSecretCode);

        // Rensar EL och element när komponenten är klar
        return () => {
            document.body.removeChild(dinUddaDel);
            document.removeEventListener('keydown', checkSecretCode);
        };
    }, []);

    return null;
}

export default EasterEgg;