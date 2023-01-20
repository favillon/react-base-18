const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

export function getGreeting(name) {
    return 'Hola ' + name;
}

export const getUser = () => ({
    uid : 'ABC123',
    username: 'chamo'
})

export const getUserActive = (name) => ({
    uid : 'ABC123' + name,
    username: name
})

export const returnArray = () => {
    return ['ABCD', 123]
}

export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

export const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () =>  {
            const p1 = getHeroeById( id );
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( 'No se pudo encontrar el héroe ' + id);
            }
        }, 500 )
    });
}


export const getImagen = async() => {

    try {

        const apiKey = 'xwMITpgwEovEJ9ZnwxrsC8SaNFH00fg9';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();

        const { url } = data.images.original;
        return url

    } catch (error) {
        return `No se encontro imagen`
    }
}