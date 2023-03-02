/*
class List{
    constructor(...values) {
        this.values = values;
    }

    printList(){
        let list = this.values.sort();
        console.log(list);

        let html = "" + '<ul>';
        for (let i = 0; i < this.values.length; i++){
            html += '<li>' + this.values[i] + '</li>';
        }
        html += '</ul>';
        return html;
    }
    add(object){
        this.values.push(object);
    }
    clear(){
        this.values.splice(0);
    }
}
let list = new List("dragonfruit", "pineapple", "apple", "strawberry", "chery");
document.write(list.printList());
list.add("cucumber");
document.write(list.printList());
list.clear();
list.add("watermelon");
list.add("melon");
list.add("orange");
document.write(list.printList());
*/

class MyButton{
    constructor(text) {
        this.text = text;
    }

    show(){
        document.write(
            '<div style="width: 100px;'+
            'height: 50px;'+
            'background-color: salmon;'+
            'vertical-align: middle;' +
            'display: table-cell;'+
            'text-align: center;'+
            '" id="div"><button id="btn">' +
            this.text +
            '</button></div>'
        );
    }

}
class ColorButton extends MyButton{
    constructor(text, color) {
        super(text);
        this.color = color;
    }
    show() {
        document.write(
            '<div style="width: 100px;'+
            'height: 50px;'+
            'background-color: salmon;'+
            'vertical-align: middle;' +
            'display: table-cell;'+
            'text-align: center;'+
            '" id="div"><button style="background-color: ' + this.color + '" id="btn">' +
            this.text +
            '</button></div>'
        );
    }
}
class ActionButton extends ColorButton{
    constructor(text, color, action) {
        super(text, color);
        this.action = action;
        this.element = document.createElement('button');
        this.element.innerText = text;
        this.element.addEventListener('click', this.action);
    }
    show() {
        document.write(
            '<div style="width: 100px;'+
            'height: 50px;'+
            'background-color: salmon;'+
            'vertical-align: middle;' +
            'display: table-cell;'+
            'text-align: center;'+
            '" id="div"><button style="background-color: ' + this.color + '" id="btn">' +
            this.text +
            '</button></div>'
        );
    }
}

let myButton = new MyButton("Button 1");
myButton.show();
let myButton2 = new ColorButton("Button 2", "red");
myButton2.show();
let myButton3 = new ActionButton("Button 3", "blue", () => {
    alert('Вы нажали на кнопку!');
})
myButton3.show();


