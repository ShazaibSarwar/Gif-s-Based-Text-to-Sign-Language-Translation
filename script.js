function voice() {

    const dic = ['dangerous', 'true', 'where', 'hello', 'child', 'tea', 'food', 'attack',
        'yes', 'moon', 'mother', 'good', 'congratulations', 'car', 'birthday', 'thank you',
        'friend', 'goodbye', 'good bye', 'bye', 'angry', 'america', 'alter', 'act', 'acer', 'accomplish', 'able'];

    const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";

    recognition.onresult = function (event) {
        console.log(event);
        var text = event.results[0][0].transcript;

        var ar_b = text.split(" ");

        const ar = ar_b.map(element => {
            return element.toLowerCase();
        });

        document.getElementById("textarea").value = text;

        var imgArray = new Array();
        var k = 0;
        for (let i = 0; i < ar.length; i++) {

            if (dic.includes(ar[i])) {

                imgArray[k] = new Image();
                imgArray[k].src = 'PSL_Gifs\\' + ar[i] + '.gif';
                k++;

            } else {

                var c = ar[i].split("");

                const chars = c.map(element => {
                    return element.toLowerCase();
                });

                for (let j = 0; j < chars.length; j++) {
                    if (alphabets.includes(chars[j])) {
                        imgArray[k] = new Image();
                        imgArray[k].src = 'letters\\' + chars[j] + '.png';
                        k++;
                    }
                }
            }
        }


        im = new Image();
        im.src = 'signlang.png';

        imgArray.push(im);

        console.log("=====================================================");
        console.log(imgArray);
        console.log("=====================================================");

        for (let i = 0; i < imgArray.length; i++) {
            console.log(imgArray[i].src)
        }



        var i = 0;
        function myLoop() {
            setTimeout(function () {
                console.log(imgArray[i].src);
                document.getElementById("gif").src = imgArray[i].src;   //  your code here
                i++;
                if (i < imgArray.length) {
                    myLoop();
                }

            }, 2000)
        }
        myLoop();


    }


    recognition.start();
    document.getElementById("gif").src = 'signlang.png'
}

function text_play() {
    const dic = ['dangerous', 'true', 'where', 'hello', 'child', 'tea', 'food', 'attack',
        'yes', 'moon', 'mother', 'good', 'congratulations', 'car', 'birthday', 'thank you',
        'friend', 'goodbye', 'good bye', 'bye', 'angry', 'america', 'alter', 'act', 'acer', 'accomplish', 'able'];

    const alphabets = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    ];

    var text = document.getElementById("textarea").value;

    var ar_b = text.split(" ");

    const ar = ar_b.map((element) => {
        return element.toLowerCase();
    });


    var imgArray = new Array();
    var k = 0;
    for (let i = 0; i < ar.length; i++) {
        if (dic.includes(ar[i])) {
            imgArray[k] = new Image();
            imgArray[k].src = "PSL_Gifs\\" + ar[i] + ".gif";
            k++;
        } else {
            var c = ar[i].split("");

            const chars = c.map((element) => {
                return element.toLowerCase();
            });

            for (let j = 0; j < chars.length; j++) {
                if (alphabets.includes(chars[j])) {
                    imgArray[k] = new Image();
                    imgArray[k].src = "letters\\" + chars[j] + ".png";
                    k++;
                }
            }
        }
    }

    im = new Image();
    im.src = "signlang.png";

    imgArray.push(im);

    console.log("=====================================================");
    console.log(imgArray);
    console.log("=====================================================");

    for (let i = 0; i < imgArray.length; i++) {
        console.log(imgArray[i].src);
    }

    var i = 0;
    function myLoop() {
        setTimeout(function () {
            console.log(imgArray[i].src);
            document.getElementById("gif").src = imgArray[i].src; //  your code here
            i++;
            if (i < imgArray.length) {
                myLoop();
            }
        }, 1800);
    }
    myLoop();

    document.getElementById("gif").src = "signlang.png";
}

function show(value) {
    document.querySelector(".text-box").value = value;
    document.getElementById("textarea").value += " " + value;
}

let dropdown = document.querySelector(".dropdown")
dropdown.onclick = function () {
    dropdown.classList.toggle("active")
}

window.onload = function () {
    var select = document.getElementById("options");



    const dic = ['Shazaib', 'Sarwar', 'dangerous', 'true', 'where', 'hello', 'child', 'tea', 'food', 'attack',
        'yes', 'moon', 'mother', 'good', 'congratulations', 'car', 'birthday', 'thank you',
        'friend', 'goodbye', 'good bye', 'bye', 'angry', 'america', 'alter', 'act', 'acer', 'accomplish', 'able', 'Ahmad', 'Faizan'];


    var element = new Array();
    for (var i = 0; i < dic.length; i++) {
        var opt = dic[i].toLocaleUpperCase();
        var el = document.createElement("div");
        el.textContent = opt;
        el.value = opt;
        el.id = i;
        el.classList = "dictionary"
        select.appendChild(el);
        element.push(el);
    }

    const btns = document.querySelectorAll('.dictionary');
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function (e) {
            document.getElementById("textarea").value += " " + element[i].value;
        });
    }


};
function Clear() {
    document.getElementById("textarea").value = "";
}

