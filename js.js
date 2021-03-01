
let url="http://localhost:90/gsb/praticien";
 let vo=true;
 let vn=false;
fetch(url)
.then(response => response.json())
.then((data)=>{
    data.forEach((element) => {
        //Afficher dans la console tous les praticiens de Marseille
   if (element.adresse=='Marseille') {
    console.log(element);
    }
   //Afficher dans la console tous les dentistes de Paris
   if((element.specialite ='dentiste') && (element.adresse ='paris')){
       console.log(element)
     }
      //Afficher dans la console tous les praticiens qui ont été visité
     if( element.specialite ==1)  {
         console.log(true)
     }else if(element.specialite==0){
              console.log(false);
     }

     //Afficher dans la console tous les dentistes de Marseille qui ont été visité
    if((element.specialite == 'dentiste') &&(element.adresse=='Marseille')){
         console.log(true)
      }
      
     
    });
});
