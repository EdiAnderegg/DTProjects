
export class SortiereNummer {

    constructor(){}
    /*Sortieren einer Nummer und dabei 0 und 5 weglassen */
    sortNumber(number, p){

        let aktuellerZiffer = 1;
        let ersterZiffer = 0;
        let num = number;
    
        while(aktuellerZiffer <= 9){
            num = number;
            if(aktuellerZiffer == 5){
                aktuellerZiffer++;
            }
            while(num>0){
                ersterZiffer = num%10;
                if(aktuellerZiffer == ersterZiffer){
                  p. innerText += `${ersterZiffer} `;
                }
                num = Math.floor(num/10);
           }
           aktuellerZiffer++;
       }
    }
}