function videoPlay(id){
    const urlSecreta = "https://flñksdjkgfñljgnsolafkd.com" + id
    console.log("se esta reproduciendo desde la url secreta" + urlSecreta)
}
function videoStop(id){
    const urlSecreta = "https://flñksdjkgfñljgnsolafkd.com" + id
    console.log("pausamos la url" + urlSecreta)
}

export class PlatziClass{           //--nos permite definir cuales son las unicas clases, prototipos, funciones, etc que se puede ejecutar desde otro script
    constructor({
        name,
        videoID,
    }){
        this.name = name
        this.videoID = videoID
    }

    reproducir(){
        videoPlay(this.videoID)
    }
    pausar(){
        videoStop(this.videoID)
    }
}










class Course{
    constructor({name, classes = []}){
        this._name = name;
        this.classes = classes;
    }

    get name(){
        return this._name
    }

    set name(nuevoNombresito){
        if(nuevoNombresito === "curso malo de programador"){
            console.error("WEB... No")
        }else{
            this._name = nuevoNombresito
        } 
    }
}

const cursoProgramacionBasico = new Course({
    name:"curso gratis de programacion basica"
})