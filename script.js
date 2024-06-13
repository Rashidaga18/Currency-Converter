const dropList = document.querySelectorAll(".drop-list select"),
 fromCurrency = document.querySelector(".from select"),
 toCurrency = document.querySelector(".to select"),
getButton = document.querySelector("form button");

for( let i = 0 ; i < dropList.length; i++) {
    for(currency_code in country_code){
        //selecting USD by default as FROM currency and NPR as TO currency
        let selected;
        if(i == 0){
            selected = currency_code == "USD" ? "selected" : "";
        }else if (i==1){
            selected = currency_code == "NPR" ? "selected" : "";
        }
        //creating option tag with passing currency code as a text and a value
        let optionTag = `<option value ="${currency_code}"${selected}>${currency_code}</option>`;
        //inserting options tag inside select tag
        dropList[i].insertAdjacentHTML("beforeend" , optionTag);
    }
}
getButton.addEventListener("click",e =>{
    e.preventDefault(); //preventing form from sumbitting
    getExchangeRate();
});

function getExchangeRate(){
    const amount = document.querySelector(".amount input");
    let amountVal = amount.value;
    //if user don't enter any value or enter 0 then we'll put 1 value by default in the input field
    if(amountVal == "" || amountVal == "0"){
        amount.value = "1";
        amountVal = 1;
    }
    let url =`: https://v6.exchangerate-api.com/v6/c119e034a940b4457dff7ea9/latest/${fromCurrency.value}`;
    //fetching api response and returning it with parsing into js obj and in another then method receiving that obj
    fetch(url).then(response => response.json()).then (result =>{
        let exchangeRate = result.conversion_rates
        console.log(result);
    })
}