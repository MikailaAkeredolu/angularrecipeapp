

//Model blueprint for objects we create - creating a recipe class
export class Recipe{
    //ivars
    public name: string;
    public description: string;
    public imagePath: string;
    
    //constructor
    constructor(name: string, description: string, imagePath: string){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }


}