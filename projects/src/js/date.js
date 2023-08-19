export class CalenderDate{
    constructor()
    {
        this.date = new Date();
        this.displayDate(this.date);
    }
    displayDate =(date)=>{
    
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        let h = document.getElementById('date');
        return h.innerText = ` ${day}/${month+1}/${year}`;
    }
}