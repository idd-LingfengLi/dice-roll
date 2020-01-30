
        function changeImage() {
            var image = document.getElementById('diceimage');
            if (image.src.match("img/dice6.svg")) {
                image.src = "img/dice1.svg";
            }
            else {
                image.src = "img/dice6.svg";
            }
        }
