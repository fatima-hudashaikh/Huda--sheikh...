function generateColor() {
      var hexcode = "0123456789ABCDEF";
      var color = "#";
      
      for (var i = 0; i < 6; i++) {
        var hexIndex = Math.floor(Math.random() * 16);
        color += hexcode[hexIndex];
      }

      
      document.getElementById("colorBox").innerText = color;
      
      document.body.style.backgroundColor = color;
    }