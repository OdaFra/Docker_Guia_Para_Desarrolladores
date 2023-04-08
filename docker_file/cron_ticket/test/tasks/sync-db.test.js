const { syncDB } = require("../../tasks/sync-db");

describe('Pruebas en Sync-DB', () => { 

    test('Debe de ejecutar el proceso 2 veces', () => { 
        
        syncDB();
        const times = syncDB();
        console.log('Se ha ejecutado dos veces: ', times);
        
        expect(times).toBe(2);
    })

 });