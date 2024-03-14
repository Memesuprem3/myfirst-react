import React, { useState, useEffect } from 'react';

export default function GitHubDemo() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Lägg till en state för att hålla koll på laddningsstatus

    useEffect(() => {
        fetch('https://api.github.com/users/Memesuprem3/repos')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setIsLoading(false); // Uppdatera laddningsstatus när data har hämtats
            })
            .catch(error => {
                console.error('Kunde inte läsa data', error);
                setIsLoading(false); // Uppdatera även laddningsstatus vid fel
            });
    }, []);

    return (
        <div>
            <p>My PUBLIC projects from GitHub:</p>
            {isLoading ? (
                <p>Laddar projekt...</p> // Visar detta medan innehållet laddas
            ) : (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {posts.map(post => (
                        <li key={post.id}>
                            <h3>{post.name}</h3>
                            <p>{post.description || 'Ingen beskrivning tillgänglig.'}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}