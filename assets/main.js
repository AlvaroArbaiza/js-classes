//creazione classe per creare diversi oggetti in base al costruttore interno
class Person {

    //funzione constructor per definire quali saranno le chiavi dell'oggetto realizzato dalla classe
    //i parametri  dato1, dato2, dato3 definisco le posizioni per i valori che verranno associate alle chiavi
    //this ci permette di utilizzare le chiavi all'interno della classe e anche i metodi
    constructor( dato1, dato2, dato3 ){
        this.nome = dato1
        this.altezza = dato2
        this.colore_occhi = dato3
    }

    //metodo invocabile da un oggetto per salutare in modo dinamico
    saluto(){
        console.log( `Ciao sono ${ this.nome } e sono alto: ${this.altezza} cm` )
    }

}  

//new Person => creare l'oggetto tramite il costruttore
let oggetto1 = new Person( 'michele', 180 )
let oggetto2 = new Person( 'federico', 175 )

//invochiamo i metodi tramite l'oggetto 1 o 2
oggetto1.saluto()
oggetto2.saluto()

//array vuoto dove pushare i nostri oggetti
let classe = []

classe.push( oggetto1, oggetto2 )

console.log( classe )


/*--------------------------------------------------------------*/
//salvataggio iniziale dei value vuoti dei campi input
let nomeBiciHtml = document.getElementById('nomeBici').value //undefinded
let pesoBiciHtml = parseInt(document.getElementById('pesoBici').value) //undefinded

//selezione del bottone per attivare la funzione
let button = document.querySelector('button')

console.log( nomeBiciHtml, pesoBiciHtml )

class Bici{
    constructor( dato1, dato2, dato3 ){
        this.name = dato1
        this.peso = dato2
        this.possessore = dato3
    }

    //metodo static della classe, static permette di invocare il metodo richiamando tramite il nome della classe
    static trovaPeso( array, biciLeggera ){

        //controllo se all'interno dell'array ci sono gia degli elementi
        if( array.length >= 0 ) {

            //inizializzo la varibaile con il peso di riferimento 
            biciLeggera = array[0]

            //ciclo tutti gli elementi dell'array
            array.forEach( element => {
                //console.log( element.peso, biciLeggera.peso )
                //controllo se il peso dell'elemento analizzato dal ciclo è minore del peso della bici salvata nella varibiale iniziale di controlllo
                 if( element.peso < biciLeggera.peso ){
                    biciLeggera = element
                 }
            });
        }

        //salvo nel return l'oggetto con peso inferiore recuperato dalla condizione
        return biciLeggera
    }
}

//inizilizzo l'array vuoto dove pusherò le bici
let newArrayBici = []
//inizializzo la varibaile in modo globale
let biciLeggera = null

//console.log( newArrayBici[0] ) //undefined

//funzione al click del bottone nel dom
button.addEventListener('click', function(){
    //aggiorno le varibiali globali per il value dell'input
    nomeBiciHtml = document.getElementById('nomeBici').value
    pesoBiciHtml = parseInt(document.getElementById('pesoBici').value)

    //pusho i dati nell'array vuoto
    // aggiunta come 3° dato del costruttore della persona per pushare un oggetto all'interno di un altro
    newArrayBici.push( new Bici( nomeBiciHtml, pesoBiciHtml, new Person('pippo', 20) ) )

    console.log( newArrayBici )

    //stampo l'oggetto con peso inferiore con la funzione static della classe
    console.log( Bici.trovaPeso( newArrayBici, biciLeggera ) )

})
