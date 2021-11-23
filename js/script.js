Vue.config.devtools = true;

new Vue({
    el: `#app`,
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        search:[],
    
        Chatter: [],
        keyword:"",
        chooseTheList:true,
        openChat:[],
    },
    mounted() { 


    },
    methods: {
 
        ricerca: function () {
            const valore=document.getElementById('search').value;
            this.chooseTheList= true
            this.search=[];

           for (let x = 0; x < this.contacts.length; x++) {
                    if (valore.length > 0 && valore.toUpperCase() === this.contacts[x].name.toUpperCase().slice(0,valore.length)) {

                        if (!this.search.includes(this.contacts[x])) {

                            this.search.push(this.contacts[x]);
                        
                        }
                    }
                }
        },

        cavolo: function(chat){
            valore="";
            this.search=[];
            this.keyword="";
            if( !this.Chatter.includes(chat)){
                this.Chatter.push(chat)
            }
            this.chooseTheList= false
        },


        // FUNZIONE CHE SERVE PER ELIMINARE UN ELEMENTO ALL'INTERNO DI LIST POSIZIONATO IN DATA
        deleteChat: function(index){  
            if(index===false){
                this.openChat.splice(0,1);
            }else{
            if(this.openChat[0].name===this.Chatter[index].name &&this.openChat[0].avatar===this.Chatter[index].avatar ){
                this.openChat.splice(0,1);
            }
            this.Chatter.splice(index,1);
        }
        },

        open:function(selectChat){

            this.openChat=[selectChat];
            this.valaa=true
        },



    }
})
