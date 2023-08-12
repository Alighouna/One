function verfier(){ 

	let nome     =   document.querySelector("#nome").value;
	let prenome  =   document.querySelector("#prenome").value;
	let email    =   document.querySelector("#email").value;
	let mdp      =   document.querySelector("#mdp").value;
	let homme    =   document.querySelector("#h");
	let femme    =   document.querySelector("#f");
	let op1      =   document.querySelector("#op1");
	let op2      =   document.querySelector("#op2");
	let op3      =   document.querySelector("#op3");
	let op4      =   document.querySelector("#op4");
	let slct      =   document.querySelector("#slct");
	let btn = document.querySelector("#btn2");
	
	function op (){
	    alert("heyyy");
	}

	// funnction de alphabatique
	function alpha(ch){
		for (let i = 0;i<ch.length;i++){
			if ((ch.charAt(i).toUpperCase()<"A" )||( ch.charAt(i).toUpperCase()>"Z")){
				return false;
			}
		}
		return true;
	}

    // verification de nome
	if (nome==""){
		alert("saisir un nome");
		document.querySelector("#nome").focus();
		return false;
	}
	if(!alpha(nome)){
		alert("le nome est composer a des lettres");
		document.querySelector("#nome").focus();
		return false;
	}
	
	// verification de prénome
	if (prenome==""){
		alert("saisir un prenome");
		document.querySelector("#prenome").focus();
		return false;
	}
	if(!alpha(prenome)){
		alert("le prenom est composer a des lettres");
		document.querySelector("#prenome").focus();
		return false;
	}
	
	// verification de email
	let at = email.indexOf("@");
	let p = email.indexOf(".",at+6);
	if ((at==-1) || (p==-1)){
		alert("saisir un email vrai");
		document.querySelector("#email").select();
		return false;
	}
	
	// verification de mot de passse
	if (mdp.length<6){
		alert("le mot de passe est superiure a 6 nombre");
        document.querySelector("#mdp").focus();
		return false;
	}
	
	// verification de genre
	if(!(homme.checked) && !(femme.checked)){
		alert("choisis genre un d'entre eux");
		return false;
	}
	
	// verification de la classe
	let slctoption = slct.options[slct.selectedIndex];
	if (slctoption){
		
	}
	else{
		alert("choisie la classe");
		return false;
	}
	
	// verification de l'options
	let np = 0;
	if (op1.checked){
		np+=1;
	}      
	if (op2.checked){
		np+=1;
	}      
	if (op3.checked){
		np+=1;
	}     
	if (op4.checked){
		np+=1;
	}
	if ((np==0) || (np>1)){
		alert("choisie un seule Option");
		return false;
		
	}
	let a = confirm("Êtes-vous sûr de cette information ");
	if ( a == false){
		return false;		
	}
	else{
		return true;
	}


	
	

}			