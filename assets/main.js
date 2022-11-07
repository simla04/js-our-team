const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

  // stampare tutti i nomi
  //document.getElementById('dipendentiName').innerHTML =

  
  //a ogni singolo giro ottengo l'oggetto
  for( let i = 0; i < team.length; i++) {
    let elemntoCorrente = team[i];
    console.log(elemntoCorrente.name)//elemento.chiave
    console.log(elemntoCorrente.role)
    console.log(elemntoCorrente.image)


    document.getElementById('dipendentiName').innerHTML += 
    
    `

    <div class="card" style="width: 18rem;">
        <img src=".${elemntoCorrente.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${elemntoCorrente.name}</h5>
            <p class="card-text">${elemntoCorrente.role}</div>

    

    `;









  }

  