const formJS = document.querySelectorAll("form")[0];
//*jQUERY === $
//const formJquery = jQuery("form").eq(0);
const formJquery = $("form").eq(0);
const inputJQ = $(".top-banner input").eq(0);
const msgJQ = $(".top-banner span").eq(0);
const listJQ = $(".cities").eq(0);

//*console.log(formJS);
//*console.log(formJquery);
//*console.log(inputJQ);

//* get(index) ==> toArray(get()) , eq(index)

//*load VS DOMContentLoaded
//*DOMContentLoaded ==> means page rendered, DOM is ready
//*window load ==> (all content (e.g. images, styles etc) also loaded)

//*window.onload = () =>{} ===> JS
//* addEventListener ===> on

$(window).on("load", () => {
  console.log("window.load");
});

//* document.addEventListener("DOMContentLoaded", ()=>{}) ==> JS

//* $(document).on("DOMContentLoaded", ()=>{
//*     console.log("DOMContentLoaded");
//* });

$(document).ready(() => {
  console.log("DOMContentLoaded");
  localStorage.setItem(
    "apiKey",
    EncryptStringAES("09f64283148ea6369c6273dbf953a101")
  );
});

//* formJquery.on("submit", (e)=>{
//*     e.preventDefault();
//*     getWeatherDataFromApi();
//* });

formJquery.submit((e) => {
  e.preventDefault();
  getWeatherDataFromApi();
});

const getWeatherDataFromApi = () => {
  //*console.log("AJAX Func. is called");
  const apiKey = DecryptStringAES(localStorage.getItem("apiKey"));

  //* JS.value == JQUERY.val()
  const cityName = inputJQ.val();
  console.log(cityName);
  const units = "metric";
  const lang = "tr";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang} `;
};

//* XMLHTTPREQUEST(xhr) vs. fetch() vs. axios vs. $.ajax

$.ajax({
    type : 
});
