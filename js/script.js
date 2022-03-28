console.log('JS ok');

/*Rifare l'esercizio della to do list.
ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)*/

// Creo oggetto con due propietà che conterrà le cose da fare
const todoList = [
    {
        text: 'cosa da fare 1',
        done: 'true'
    },
    {
        text: 'cosa da fare 2',
        done: 'true'
    },
    {
        text: 'cosa da fare 3',
        done: 'flase'
    },
    {
        text: 'cosa da fare 4',
        done: 'true'
    },
    {
        text: 'cosa da fare 5',
        done: 'false'
    },

];

// Creo app vue che ha come dati todo
const app = new Vue({
    el: '#todo',
    data: {
        todoList
    },
});



//console.log(app);