import {
  getGreeting,
  getHeroeById,
  getHeroeByIdAsync,
  getHeroesByOwner,
  getImagen,
  getUser,
  getUserActive,
  returnArray,
  } from '../../base/function'

describe('Test function', () => {
    test('getGreeting return "Hola Andres"', () => {
        const name = 'Andres'
        const msg = getGreeting(name)
        expect(msg).toBe(`Hola ${name}`)
    })

    test('should getUser', () => {
        const testUser = {
            uid : 'ABC123',
            username: 'chamo'
        }
        const user = getUser()
        expect(testUser).toEqual(user)
    })

    test('should getUserActive', () => {
        const testUser = {
            uid : 'ABC123chamito',
            username: 'chamito'
        }
        const user = getUserActive(testUser.username)
        expect(testUser).toStrictEqual(user)
    })

    test('should returnArray', () => {
        const  [letters, number] = returnArray();
        expect(letters).toEqual(expect.any(String));
        expect(number).toBe(123);

        expect(typeof letters).toBe('string');
        expect(typeof number).toBe('number');
    })

    test('should  getHeroeById return heroe por Id', () => {
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    })
    test('should getHeroeById return undefined id no existe', () => {
        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBe(undefined);
        expect(hero).toBeFalsy()
        // expect(false).toBeFalsy() // Cuidado con este
    })

    test('should getHeroesByOwner return owner', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner))
        // expect(false).toBeFalsy() // Cuidado con este
    })

    test('should getHeroeByIdAsync return hero', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then( hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })
                done();
            });
    })

    test('should getHeroeByIdAsync catch', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
            .catch( error => {
                expect(error).toBe(`No se pudo encontrar el héroe ${id}`)
                done();
            });
    })

    test('should getImagen', async() => {
        const url = await getImagen();
        expect(typeof url).toBe('string')
    })
})