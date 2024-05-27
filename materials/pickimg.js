let datlaiBtn = document.getElementById("dat-lai-button");

        datlaiBtn.addEventListener("click", () => {
            countBau.innerHTML = 0;
            countCua.innerHTML = 0;
            countTom.innerHTML = 0;
            countCa.innerHTML = 0;
            countHuou.innerHTML = 0;
            countGa.innerHTML = 0;
            localStorage.setItem("counterBau", 0)
            localStorage.setItem("counterCua", 0)
            localStorage.setItem("counterTom", 0)
            localStorage.setItem("counterCa", 0)
            localStorage.setItem("counterHuou", 0)
            localStorage.setItem("counterGa", 0)

        })

        let counterBau = 0;
        let counterCua = 0;
        let counterTom = 0;
        let counterCa = 0;
        let counterHuou = 0;
        let counterGa = 0;

        localStorage.setItem("counterBau", counterBau);
        localStorage.setItem("counterCua", counterCua);
        localStorage.setItem("counterTom", counterTom);
        localStorage.setItem("counterCa", counterCa);
        localStorage.setItem("counterHuou", counterHuou);
        localStorage.setItem("counterGa", counterGa);

        let countBau = document.getElementById("count-bau");
        let countCua = document.getElementById("count-cua");
        let countTom = document.getElementById("count-tom");
        let countCa = document.getElementById("count-ca");
        let countHuou = document.getElementById("count-huou");
        let countGa = document.getElementById("count-ga");

        countBau.innerHTML = counterBau;
        countCua.innerHTML = counterCua;
        countTom.innerHTML = counterTom;
        countCa.innerHTML = counterCa;
        countHuou.innerHTML = counterHuou;
        countGa.innerHTML = counterGa;

        let pickBau = document.getElementById("img-bau");
        let pickCua = document.getElementById("img-cua");
        let pickTom = document.getElementById("img-tom");
        let pickCa = document.getElementById("img-ca");
        let pickHuou = document.getElementById("img-huou");
        let pickGa = document.getElementById("img-ga");

        pickBau.addEventListener("click", () => {
            let totalCount = parseInt(localStorage.getItem("counterBau")) + parseInt(localStorage.getItem("counterCua")) + parseInt(localStorage.getItem("counterTom")) + parseInt(localStorage.getItem("counterCa")) + parseInt(localStorage.getItem("counterHuou")) + parseInt(localStorage.getItem("counterGa"));
            counterBau = parseInt(localStorage.getItem("counterBau"))
            if (counterBau < 3 && totalCount < 3) {
                counterBau++;
                countBau.innerHTML = counterBau;
            }
            localStorage.setItem("counterBau", counterBau);
        })

        pickCua.addEventListener("click", () => {
            let totalCount = parseInt(localStorage.getItem("counterBau")) + parseInt(localStorage.getItem("counterCua")) + parseInt(localStorage.getItem("counterTom")) + parseInt(localStorage.getItem("counterCa")) + parseInt(localStorage.getItem("counterHuou")) + parseInt(localStorage.getItem("counterGa"));
            counterCua = parseInt(localStorage.getItem("counterCua"))
            if (counterCua < 3 && totalCount < 3) {
                counterCua++;
                countCua.innerHTML = counterCua;
            }
            localStorage.setItem("counterCua", counterCua);
        })

        pickTom.addEventListener("click", () => {
            let totalCount = parseInt(localStorage.getItem("counterBau")) + parseInt(localStorage.getItem("counterCua")) + parseInt(localStorage.getItem("counterTom")) + parseInt(localStorage.getItem("counterCa")) + parseInt(localStorage.getItem("counterHuou")) + parseInt(localStorage.getItem("counterGa"));
            counterTom = parseInt(localStorage.getItem("counterTom"));
            if (counterTom < 3 && totalCount < 3) {
                counterTom++;
                countTom.innerHTML = counterTom;
            }
            localStorage.setItem("counterTom", counterTom);
        })

        pickCa.addEventListener("click", () => {
            let totalCount = parseInt(localStorage.getItem("counterBau")) + parseInt(localStorage.getItem("counterCua")) + parseInt(localStorage.getItem("counterTom")) + parseInt(localStorage.getItem("counterCa")) + parseInt(localStorage.getItem("counterHuou")) + parseInt(localStorage.getItem("counterGa"));
            counterCa = parseInt(localStorage.getItem("counterCa"));
            if (counterCa < 3 && totalCount < 3) {
                counterCa++;
                countCa.innerHTML = counterCa;
            }
            localStorage.setItem("counterCa", counterCa);
        })

        pickHuou.addEventListener("click", () => {
            let totalCount = parseInt(localStorage.getItem("counterBau")) + parseInt(localStorage.getItem("counterCua")) + parseInt(localStorage.getItem("counterTom")) + parseInt(localStorage.getItem("counterCa")) + parseInt(localStorage.getItem("counterHuou")) + parseInt(localStorage.getItem("counterGa"));
            counterHuou = parseInt(localStorage.getItem("counterHuou"))
            if (counterHuou < 3 && totalCount < 3) {
                counterHuou++;
                countHuou.innerHTML = counterHuou;
            } 
            localStorage.setItem("counterHuou", counterHuou);
        })

        pickGa.addEventListener("click", () => {
            let totalCount = parseInt(localStorage.getItem("counterBau")) + parseInt(localStorage.getItem("counterCua")) + parseInt(localStorage.getItem("counterTom")) + parseInt(localStorage.getItem("counterCa")) + parseInt(localStorage.getItem("counterHuou")) + parseInt(localStorage.getItem("counterGa"));
            counterGa = parseInt(localStorage.getItem("counterGa"))
            if (counterGa < 3 && totalCount < 3) {
                counterGa++;
                countGa.innerHTML = counterGa;
            } 
            localStorage.setItem("counterGa", counterGa);
        })