export class Todo {
    public id: number;
    public text: string;
    public completed: boolean;

    constructor(text: string){
        this.id = Math.floor(Math.random() * 100);
        this.text = text;
        this.completed = false;
    }
}