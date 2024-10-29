// Sélectionne tous les éléments ayant la classe "box" (chaque produit)
var produits = document.getElementsByClassName("box");

for (let i = 0; i < produits.length; i++) {
    let bntPlus = produits[i].getElementsByClassName("plus")[0];
    let bntMoins = produits[i].getElementsByClassName("moins")[0];
    let like = produits[i].getElementsByClassName("btn")[0];
    let del = produits[i].getElementsByClassName("faSolid")[0];
    let nombre = produits[i].getElementsByClassName("num")[0];
    let prixTotalElement = produits[i].getElementsByClassName("price")[0];
    let prixUnit = parseInt(produits[i].getElementsByTagName("span")[1].innerText);
    let qty = parseInt(nombre.innerText);

// Gère le clic sur le bouton plus
    bntPlus.addEventListener("click", function() {
        qty++;
        nombre.innerText = qty;
        prixTotalElement.innerText = prixUnit * qty;
        calculerTotalCommande();
    });

// Gère le clic sur le bouton moins
    bntMoins.addEventListener("click", function() {
        qty--;
        if (qty < 1) {
            qty = 0;
        } 
        nombre.innerText = qty;
        prixTotalElement.innerText = prixUnit * qty;
        calculerTotalCommande();
    });

// Gère le clic sur le bouton j'aime
    like.addEventListener("click", function(){
        if (like.style.color === "red"){
            like.style.color = "black" ;
        }else {
            like.style.color = "red" ;
        }
        });

// Gère le clic sur le bouton de suppression
    del.addEventListener("click", function() {
        let box = produits[i];
        box.remove();
    });
}

// Fonction qui calcule la somme de tous les prix totaux unitaires
function calculerTotalCommande() {
    let total = 0;
    for (let i = 0; i < produits.length; i++) {
        let prixTotalElement = produits[i].getElementsByClassName("price")[0];
        let prixTotal = parseInt(prixTotalElement.innerText) || 0;
        total += prixTotal;
    }
    document.getElementById("tyu").innerText = total;
}
