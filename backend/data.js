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
  }
         
  ]
  
  }
  
  
    export default data;