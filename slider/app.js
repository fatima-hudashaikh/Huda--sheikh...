var dishImg = document.getElementById("dishImg");
    var dishName = document.getElementById("dishName");
    var dishBio = document.getElementById("dishBio");

    var dishes = [
      {
        name: "Chocolate Cakes",
        bio: "Chocolate cake is a rich, moist, and fluffy dessert made with layers of cocoa and chocolate, often topped with creamy frosting. Loved worldwide, it is the perfect treat for celebrations and sweet cravings.",
        img: "download (2).jpeg"
      },
      {
        name: "Macarons",
        bio: "Macarons are delicate French confections made with almond flour, egg whites, and sugar, featuring a crisp shell with a soft, chewy center. They come in a variety of flavors and colors, often filled with buttercream, ganache, or jam.",
        img: "download (4).jpeg"
      },
      {
        name: "Donuts",
        bio: "Donuts are soft, fluffy, and sweet deep-fried treats, usually shaped in a ring or filled with cream or jam. Coated with sugar, glaze, or colorful toppings, they are loved worldwide as a delightful snack or dessert.",
        img: "download (1).jpeg"
      },
      {
        name: "Pancake",
        bio: "Pancakes are soft, fluffy flat cakes made from a simple batter of flour, eggs, and milk, cooked on a hot pan. Often served with syrup, butter, fruits, or chocolate, they are a favorite breakfast treat worldwide.",
        img: "download (3).jpeg"
      },
      {
        name: "Biscuits",
        bio: "Biscuits are crisp, baked snacks made from flour, butter, and sugar, enjoyed for their crunchy texture and light sweetness. They are perfect with tea or coffee and loved in different varieties around the world.",
        img: "images.jpeg"
      },
      {
        name: "Mithai",
        bio: "Mithai is a traditional South Asian sweet, made with milk, sugar, nuts, and aromatic flavors like cardamom and saffron. Served on festivals, weddings, and celebrations, it symbolizes joy, love, and sharing. ",
        img: "download.jpeg"
      }
    ];

    
    let count = 0;

    function showData(index) {
      dishImg.src = dishes[index].img;
      dishName.textContent = dishes[index].name;
      dishBio.textContent = dishes[index].bio;
    }

    function nextHandler() {
      count = (count + 1) % dishes.length;
      showData(count);
    }

    function previousHandler() {
      count = (count - 1 + dishes.length) % dishes.length;
      showData(count);
    }

    
    document.getElementById("next").addEventListener("click", nextHandler);
    document.getElementById("prev").addEventListener("click", previousHandler);

  
    showData(count);