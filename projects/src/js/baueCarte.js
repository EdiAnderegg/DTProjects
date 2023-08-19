import { BaueMd } from "./parseMd/bauemd.js";

export class BaueCarte extends BaueMd {

    constructor(tabName,tabState,navId,bodyId,mdFile)
    {
        super();
        this.tabName = tabName;
        this.tabState = tabState;
        this.navId = navId;
        this.bodyId = bodyId;
        this.mdFile = mdFile;
        this.createCard(this.tabName,this.tabState,this.navId,this.bodyId,this.mdFile);
    }

    //Creating Card

    createCard = (tabName,tabState,navId,bodyId,mdFile)=>{

        let tabstatus = '';
        //-------DOM----------

        //Gettig Parent Element
        const ul = document.getElementById(navId);
        const body = document.getElementById(bodyId);

        //Creating DOM elements
        const li = document.createElement('li');
        const button = document.createElement('button');

        //Adding classes to Elements
        li.classList.add('nav-item');

        //Setting the active button
        if(tabState){
            tabstatus = 'active'
            button.classList.add('nav-link', `${tabstatus}`);
        }else{
            button.classList.add('nav-link');
        }
        //Adding attribiutes to Elements
        li.setAttribute('role','presentation');
        button.setAttribute('data-bs-toggle','tab');
        button.setAttribute('type','button');
        button.setAttribute('role','tab');
        button.setAttribute('aria-controls',`${tabName}-tab-pane`);
        button.setAttribute('aria-selected',`${tabState}`);
        //Adding Text to the Elements
        button.innerText = `${tabName}`;

        //Adding Eventlistener to the button
        button.addEventListener('click', ()=>{
            body.innerHTML = '';
            this.renderMd(bodyId,mdFile);
        })

        //--------------------

        // Binding ChildElement to ParentElement
        li.appendChild(button);
        ul.appendChild(li);

        //CHecking active Tab for rendering Md in first launch
        if(tabState) this.renderMd(bodyId,mdFile);
    }
    //-------------------End--------------
}