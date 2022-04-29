class sequenciaDna{
    constructor(sequencial){
    this.sequencial = sequencial
    this.rna = []
} 
    transcreverDna (){
        if(typeof(this.sequencial) == "string"){
   
        let arrayDeDados = this.sequencial.toUpperCase().split("")

            arrayDeDados.forEach(elemento => {                          //Início do forEach
                if (elemento == "G"){
                    elemento = "C"
                    this.rna.push(elemento)
                } else if (elemento == "C"){
                    elemento = "G"
                    this.rna.push(elemento)
                } else if (elemento == "T"){
                    elemento = "A"
                    this.rna.push(elemento)
                } else if (elemento == "A"){
                    elemento = "U"
                    this.rna.push(elemento)
                } 
        });                                                             //final do forEach
        
        let tranformandoArrayRna = this.rna.join("")
        console.log(`A sequência do DNA: ${this.sequencial}, foi convertido para sequencia do RNA: ${tranformandoArrayRna}.`)
       
        }   else {
            console.log(`O sequencial digitado não é válido`)
        }
    }
}

const dna = new sequenciaDna("atgccgaaatttgcg");
dna.transcreverDna()