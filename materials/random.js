    let random3Images = document.getElementsByClassName("img-random");
    let baseImages = [];
    let quayBtn = document.getElementById("quay-button");
    let arrDisable = document.getElementsByClassName("disable");

    baseImages[0] = "./materials/img/bau.png";
    baseImages[1] = "./materials/img/cua.png";
    baseImages[2] = "./materials/img/tom.png";
    baseImages[3] = "./materials/img/ca.png";
    baseImages[4] = "./materials/img/huou.png";
    baseImages[5] = "./materials/img/ga.png";

    quayBtn.addEventListener('click', randomizingImg);
    quayBtn.addEventListener('click', comparingResults);

    function randomizingImg() {
        let counter = 0
        let intervalID = setInterval(() => {
            quayBtn.style.pointerEvents = "none";
            datlaiBtn.style.pointerEvents = "none";
            quayBtn.style.color = "#949494";
            datlaiBtn.style.color = "#949494";
            for (i = 0; i < arrDisable.length; i++) {
                arrDisable[i].style.pointerEvents = "none";
            }
            
            randomizing3Imgs();
            counter++;
            if(counter >= 99) {
                clearInterval(intervalID)
                quayBtn.style.pointerEvents = "";
                quayBtn.style.color = "";
                datlaiBtn.style.pointerEvents = "";
                datlaiBtn.style.color = "";
                for (i = 0; i < arrDisable.length; i++) {
                    arrDisable[i].style.pointerEvents = "";
                }

            }
        }, 25);    
    }

    function randomizing3Imgs() {
        getRandomImage(0);
        getRandomImage(1);
        getRandomImage(2);
    }

    function getRandomImage(indexRandomImg) {
        var number = Math.floor(Math.random() * baseImages.length);
        return (random3Images[indexRandomImg].innerHTML =
          '<img src="' + baseImages[number] + '" style="width:100px; height:100px; position:absolute; top:25px; left:25px">');
    }

    function comparingResults() {
        setTimeout(() => {
            let copyCounterBau = 0;
            let copyCounterCua = 0;
            let copyCounterTom = 0;
            let copyCounterCa = 0;
            let copyCounterHuou = 0;
            let copyCounterGa = 0;

            localStorage.setItem("copyCounterBau", 0);
            localStorage.setItem("copyCounterCua", 0);
            localStorage.setItem("copyCounterTom", 0);
            localStorage.setItem("copyCounterCa", 0);
            localStorage.setItem("copyCounterHuou", 0);
            localStorage.setItem("copyCounterGa", 0);

            for (i = 0; i < random3Images.length; i++) {
            switch (random3Images[i].innerHTML) {
                case '<img src="./materials/img/bau.png" style="width:100px; height:100px; position:absolute; top:25px; left:25px">':
                    copyCounterBau++;
                    localStorage.setItem("copyCounterBau", copyCounterBau);
                    break;

                case '<img src="./materials/img/cua.png" style="width:100px; height:100px; position:absolute; top:25px; left:25px">':
                    copyCounterCua++;
                    localStorage.setItem("copyCounterCua", copyCounterCua);
                    break;

                case '<img src="./materials/img/tom.png" style="width:100px; height:100px; position:absolute; top:25px; left:25px">':
                    copyCounterTom++;
                    localStorage.setItem("copyCounterTom", copyCounterTom);
                    break;

                case '<img src="./materials/img/ca.png" style="width:100px; height:100px; position:absolute; top:25px; left:25px">':
                    copyCounterCa++;
                    localStorage.setItem("copyCounterCa", copyCounterCa);
                    break;

                case '<img src="./materials/img/huou.png" style="width:100px; height:100px; position:absolute; top:25px; left:25px">':
                    copyCounterHuou++;
                    localStorage.setItem("copyCounterHuou", copyCounterHuou);
                    break;

                case '<img src="./materials/img/ga.png" style="width:100px; height:100px; position:absolute; top:25px; left:25px">':
                    copyCounterGa++;
                    localStorage.setItem("copyCounterGa", copyCounterGa);
                    break;
            }}

            let resultNameArr = ['Bầu', 'Cua', 'Tôm', 'Cá', 'Hươu', 'Gà'];
            let resultCountArr = [localStorage.getItem('counterBau'), localStorage.getItem('counterCua'), localStorage.getItem('counterTom'), localStorage.getItem('counterCa'), localStorage.getItem('counterHuou'), localStorage.getItem('counterGa')]
    
            if (localStorage.getItem('counterBau') == localStorage.getItem('copyCounterBau') && localStorage.getItem('counterCua') == localStorage.getItem('copyCounterCua') && localStorage.getItem('counterTom') == localStorage.getItem('copyCounterTom') && localStorage.getItem('counterCa') == localStorage.getItem('copyCounterCa') && localStorage.getItem('counterHuou') == localStorage.getItem('copyCounterHuou') && localStorage.getItem('counterGa') == localStorage.getItem('copyCounterGa')) {
                let result = 'Bạn đã đoán đúng với kết quả: ';
                for (i = 0; i < resultCountArr.length; i++) {
                    if (parseInt(resultCountArr[i]) > 0) {
                        result += resultNameArr[i] + ' ' + resultCountArr[i] + ' ';
                    }
                }
                console.log(result);
            } else {
                let result = 'Bạn đã đoán sai với kết quả: ';
                for (i = 0; i < resultCountArr.length; i++) {
                    if (parseInt(resultCountArr[i]) > 0) {
                        result += resultNameArr[i] + ' ' + resultCountArr[i] + ' ';
                    }
                }
                console.log(result);
            }
        }, 2500)
    }
