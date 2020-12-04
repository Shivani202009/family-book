var names=["family name",
    "Murali Tangirala",
"Padma Tangirala",
"Shivani Tangirala",
"Anjeneulu Tangirala",
"Indumathy Tangirala"]
var images=["https://images-na.ssl-images-amazon.com/images/I/61zTGIEvQoL.jpg",
"https://image.shutterstock.com/image-vector/happy-young-father-holding-his-260nw-731506243.jpg",
"https://static.toiimg.com/thumb/69251964.cms?width=804&height=603&resizemode=4&imgsize=298724",
"https://cdn5.vectorstock.com/i/1000x1000/84/74/cartoon-happy-mother-hugging-her-daughter-vector-24838474.jpg",
"https://i.pinimg.com/originals/d4/1f/09/d41f094d518ebe9738f8eb1392ce31a5.jpg",
"https://image.shutterstock.com/image-illustration/cartoon-old-woman-cane-260nw-1376524529.jpg"
]

  var x=0;
function next(){
  document.getElementById("names").innerHTML=names[x];
  document.getElementById("familyimage").src=images[x];
  x++;
}
   
 

