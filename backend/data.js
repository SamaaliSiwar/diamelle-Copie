import bcryptjs from "bcryptjs";
const data ={
    users:[
        {
         name:'Admin',
         email:'Admin@admin.com',
         password:bcryptjs.hashSync('Admin123',8),
         isAdmin:true,
        },
        {
            name:'Siwar',
            email:'siwarsamaali7@gmail.com',
            password:bcryptjs.hashSync('testuser123',8),
            isAdmin:false,
           }
    ],
    baguestest:[
      {
      
      name:'Solitaire Buutterfly',
      price:'3290 ',
      categorie:'fiançailles',
      image:'/images/bague1.jpg',
      countInStock: 12,
      brand: 'diamelle',
      masse:'7',
      nbrpiere:'1',
      rating: 4.5,
      numReviews: 15,
      description: ' disponible en or blanc / jaune / rose 18K Bague Solitaire Buutterfly ',
      displayhome:true, 
      choicecarat:true,
      simpleproduct:false,

  },
  {
      
    name:'Collier Princesse',
    price:'7290 ',
    categorie:'Colorie',
    image:'/images/p3.jpg',
    countInStock: 12,
    brand: 'diamelle',
    rating: 4.5,
    numReviews: 15,
    description: ' disponible en or blanc / jaune / rose 18K Bague Solitaire Buutterfly ',
    choicecarat:false,
    simpleproduct:false,

},
  {
    
      name:'Bague Solitaire Buutterfly',
      price:'1760 ',
      categorie:'fiançailles',
      image:'/images/bague2.jpg',
      countInStock: 10,
      brand: 'diamelle',
      masse:'5',
      nbrpiere:'1',
      rating: 4.5,
      numReviews: 15,
      description: ' Bague Solitaire Buutterfly Avec Double Diamants sur les cotés',
      displayhome:true, 
      choicecarat:true,
      simpleproduct:false,

  },{
      
      name:' solitaire Trilogie',
      price:'9080 ',
      categorie:'fiançailles',
      image:'/images/bague3.jpg',
      countInStock: 12,
      brand: 'diamelle',
      masse:'8',
      nbrpiere:'3',
      rating: 4.5,
      numReviews: 15,
      description: 'Bague de Fiançailles  Trilogie',
      displayhome:true, 
      choicecarat:true,
      simpleproduct:false,


  },{

      name:' Solitaire Only LOVE ',
      price:'1500 ',
      categorie:'fiançailles',
      image:'/images/bague4.jpg',
      countInStock: 0,
      brand: 'diamelle',
      masse:'4',
      nbrpiere:'1',
      rating: 4.5,
      numReviews: 15,
      description: ' Bague Solitaire Only LOVE Avec Double Diamants Sur Les Cotés',
      displayhome:true, 
      choicecarat:true,
      simpleproduct:false,

  },
  {

    name:' TOCCATA',
    price:'2625',
    categorie:'Horogie',
    image:'/images/RaymondWeil/toctoca.png',
    countInStock: 5,
    brand: 'Raymond Weil',
   
    rating: 4.5,
    numReviews: 15,
    description: ' Montre à quartz Toccata classique pour homme en acier avec cadran bleu et date, 42 mm acier inoxydable, cadran bleu, index argentés',
    displayhome:false, 
    choicecarat:false,
    simpleproduct:true,

},
{

    name:' MAESTRO',
    price:'4455',
    categorie:'Horogie',
    image:'/images/RaymondWeil/Maestro.png',
    countInStock: 5,
    brand: 'Raymond Weil',
   
    rating: 4.5,
    numReviews: 15,
    description: ' Montre automatique en cuir bleu Maestro phase de lune pour homme, 40 mm bleu foncé galvanique décoré d’un motif reprenant le mouvement des vagues, guichet phase de lune à 6 heures',
    displayhome:false, 
    choicecarat:false,
    simpleproduct:true,

},
{

    name:' PARSIFAL',
    price:'4775',
    categorie:'Horogie',
    image:'/images/RaymondWeil/parsifal.png',
    countInStock: 8,
    brand: 'Raymond Weil',
   
    rating: 4.5,
    numReviews: 15,
    description: ' Montre Parsifal Homme Classique Quartz Cadran Noir, 41mm acier inoxydable, cadran noir, chiffres romains argent',
    displayhome:false, 
    choicecarat:false,
    simpleproduct:true,

},
{

    name:' NOEMIA',
    price:'4595',
    categorie:'Horogie',
    image:'/images/RaymondWeil/noemia.png',
    countInStock: 8,
    brand: 'Raymond Weil',
   
    rating: 4.5,
    numReviews: 15,
    description: ' Montre à quartz noire Noemia pour femme avec 12 diamants, 32 mm acier inoxydable, cadran noir, 12 diamants',
    displayhome:false, 
    choicecarat:false,
    simpleproduct:true,

},
  ],
 diamants:[
    
     {
        price:'5632',
        carat:'0.6',
        cut:'ideal',
        couleur:'E',
        clarity:'VS2',  
        shape:'Round',
        image:'../images/diamants/round.jpg',
        countInStock: 10,
    },
    {
        price:'5532',
        carat:'0.6',
        cut:'very',
        couleur:'E',
        clarity:'VS2',  
        shape:'Round',
        image:'../images/p6.jpg',
        countInStock: 10,
    },
    {
        price:'8737',
        carat:'1.22',
        cut:'good',
        couleur:'D',
        clarity:'SI2',  
        shape:'Emerald',
        image:'../images/diamants/Emerald.png',
        countInStock: 12,
    },
    {
        price:'7247',
        carat:'1.02',
        cut:'very good',
        couleur:'E',
        clarity:'SI2',  
        shape:'Princess',
        image:'../images/diamants/princesse.jpg',
        countInStock: 5,
    },

 ],
 
  
  }
  
  
    export default data;