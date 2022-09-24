//*=================================================
//*              ASYNC-AWAIT
//*=================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asenkron hale getirmek icin fonksiyon keyword'nun onune
//* async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayı mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durudurulmasini saglar. Yapilan istek yerine getirilip sonuc
//* degerlerinin dondurulmesine ile kodun calismasi devam eder.
let isError = false;
const getNews = async function () {
  const API_KEY = "c0180d3f34234b9a8e58dca47ef87c47";

  const url =
    "https://newsapi.org/v2/top-headlines?country=tr&apiKey=" + API_KEY;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      isError = true;
      //   throw new Error(`Someting went wrong ${res.status} `);
    }
    const data = await res.json();
    console.log(data.articles);
    renderNews(data.articles);
  } catch (error) {
    console.log(error);
  }
};

const renderNews = (news) => {
  const newList = document.getElementById("news-list");
  if (isError) {
    newList.innerHTML += `
    <div class="alert alert-danger" role="alert">
    News can not be fatched!!
        </div>
   
    <img src="./img/404.png"/>
    `;

    return;
  }

  news.forEach((item) => {
    const { title, description, urlToImage, url } = item; //! dest
    newList.innerHTML += `
    <div class=" col-md-6 col-lg-4 col-xl-3 ">
        <div class="card" style="width: 18rem;">
            <img src="${urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${description}</p>
                    <a href="${url}" target="_blank" class="btn btn-danger">Details</a>
                </div>
        </div>
    </div>
   `;
  });
};

window.addEventListener("load", getNews);
