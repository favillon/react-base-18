describe('Puebas en <DemoComponent />', () => { 

    test('esta prueba no falla' , ()=>{
        //Inicializacion
        const  msg = 'Hola Mundo';
        // Estimulo
        const msg2= msg.trim()
        // Observar el comportamiento
        expect(msg2).toBe(msg)
    })
})