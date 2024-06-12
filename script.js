const dropList = document.querySelectorAll(".drop-list select");

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