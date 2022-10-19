import { Component } from "@angular/core";

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})

export class MiComponente{

    public titulo: string;
    public comentario: string;
    public year: number;

    constructor(){

        this.titulo = "Hola Mundo, este es Mi Componenete";
        this.comentario = "Este es mi primer componente";
        this.year = 2022;

        console.log(this.titulo, this.comentario, this.year);
    }

}