// console.log('hi');

let accordionExample = document.getElementById('accordionExample');


const xhr = new XMLHttpRequest();


xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=74893552a6ad442ebea6c31d3f1603f7', true);
// xhr.getResponseHeader('Content-type', 'application/json');


xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles
        // console.log(articles);
        let newsHTML = "";

        articles.forEach(element => {
            console.log(element);
            let news = `<div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <i>Breaking News --> <i/> ${element.title} 
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                             ${element.content} .. <a href="${element.url}" target = _blank>Read More</a> 
                            </div>
                        </div>
                    </div>`;
            newsHTML = newsHTML + news;
        });
        accordionExample.innerHTML = newsHTML;
    }
    else {
        console.log("Some error occured")
    }
}

// send the request
xhr.send();



