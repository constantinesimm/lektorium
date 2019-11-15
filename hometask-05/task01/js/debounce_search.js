//online sandbox preview – https://codesandbox.io/s/frosty-worker-6xozj

(function () {
    //source data array
    const source = [
        "0671111111", "0671111112", "0671111113", "0671111114", "0671111115",
        "0671111116", "0671111117", "0671111118", "0671111119", "0671111110",
        "0671111121", "0671111122", "0671111133", "0671111144", "0671111155",
        "0671111166", "0671111177", "0671111188", "0671111199", "0671111100"
    ];

    //create paragraph element
    let paragraph = document.createElement("p");
    //format source array to string
    paragraph.textContent = JSON.stringify(source).replace(/(\[)|(\])/g, "").split(",").join(", ");
    //render source data array on page
    document.querySelector(".source_group").append(paragraph);

    //debounce decorator
    let debounced = function debounce(fn, ms) {
        let isCooldown = false;             //state -> ready to run

        return function () {
            if (isCooldown) return;         //while isCooldown true - ignore other fn calls

            isCooldown = true;              //state -> waiting for ends of timeout
            setTimeout(() => {
                isCooldown = false;         //setting state -> ready to run
                fn.apply(this, arguments);  //run func with current context
            }, ms);
        }
    };

    //render result func with formatted data
    function renderResult(items) {
        return document.querySelector(".search_result").innerHTML = !items.length ? "Phone number not found" : JSON.stringify(items).replace(/(\[)|(\])/g, "").split(",").join(", ");
    }

    //main func -> searching item in source arr
    function search() {
        let resultData = [];

        //if input value is false - render default string
        if (this.value.length < 1) {
            return renderResult("Here will be displayed search data");
        }
        //checking each source item for contains data from input
        source.forEach(item => {
            if (item.indexOf(this.value) !== -1) {
                resultData.push(item);
            }

            return renderResult(resultData);
        });
    };

    //run debounce on input
    document.querySelector("input").oninput = debounced(search, 1500);
})();
