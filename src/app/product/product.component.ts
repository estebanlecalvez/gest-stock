import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products = [
    {
      name: "Quiche Lorraine",
      fournisseur: "marmiton",
      mail_fournisseur: "marmiton@marmiton.org",
      ingredients_list: ["1 pâte brisée", "200g de lardons", "4 oeufs", "20cl de crème fraiche", "20cl de lait", "1 pincée de poivre", "1 pincée de noix de muscade"],
      description: "Selon la tradition lorraine, une quiche est une tarte salée composée d’une pâte brisée garnie d’un appareil, appelé migaine, et de lardons fumés. La migaine est constitués d’œufs et de crème fraîche.",
      age: 3,
      conservation_conditions: "Au frigo",
      price: 3.90
    },
    {
      name: "Tarte aux thon",
      fournisseur: "marmiton",
      mail_fournisseur: "marmiton@marmiton.org",
      ingredients_list: ["1 pâte brisée", "200g de thon", "2 oeufs", "100cl de crème liquide", "1/2 oignons", "1 pincée de poivre", "1 pincée de noix de muscade"],
      description: "A déguster en plat unique (avec une salade verte), en entrée ou encore à l’apéritif si vous la coupez en cubes !", age: "3",
      conservation_conditions: "Au frigo",
      price: 5.00
    },
    {
      name: "Pavé à l'ananas",
      fournisseur: "marmiton",
      mail_fournisseur: "marmiton@marmiton.org",
      ingredients_list: ["1 sachet de crème vanillée", "1/2 l de lait", "30 boudoirs", "1 conserve d'ananas (sans la sauce)", "20cl de lait", "1 sachet de sucre vanillé"],
      description: "Délicieuse recette mariant vanille et ananas, reveillant vos papilles gustatives et votre âme d'enfant.",
      age: 3,
      conservation_conditions: "Au frigo",
      price: 2.90
    },
    {
      name: "Gateau au chocolat",
      fournisseur: "marmiton",
      mail_fournisseur: "marmiton@marmiton.org",
      ingredients_list: ["1 tablette de chocolat noir déssert nestle", "250g de beurre", "200g de sucre", "1/2 sachet de levure chimique"],
      description: "Très bon gateau au chocolat bonne maman",
      age: 3,
      conservation_conditions: "Au frigo",
      price: 7.50
    },
    {
      name: "Tarte aux poires/chocolat blanc",
      fournisseur: "marmiton",
      mail_fournisseur: "marmiton@marmiton.org",
      ingredients_list: ["1 pâte feuilletée", "1 sachet de sucre vanillé", "100g de sucre", "100g de farine", "5 poires", "1/2 tablette de chocolat blanc nestle",],
      description: "Un gateau alliant poire et chocolat blanc (faisant ressortir tout l'arôme de la poire)",
      age: 3,
      conservation_conditions: "Au frigo",
      price: 7.50
    }

  ];

  showForm=false;
  delete(product) {
    this.products.forEach((item, index) => {
      if (item === product) this.products.splice(index, 1);
    });
  }


  addProduct(product){
    this.products.push(product);
  }
  showFormAddProduct(){
    this.showForm = !this.showForm;
  }

  constructor() { }

  ngOnInit() {
  }

}
