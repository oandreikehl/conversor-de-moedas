

const convertButton = document.querySelector(".convert-button");
const selectConverted = document.querySelector(".select-converted");
const selectFrom = document.querySelector(".select-from");

function convertCurrency() {
    const inputCurrencyValue = document.querySelector(".value-input").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    const dolarToday = 5.20;
    const euroToday = 6.20;
    const realToday = 1;
    const libraToday = 7.30;
    const bitcoinToday = 600000;

    if (selectFrom.value == "real") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue);

    }

    if (selectFrom.value == "dolar") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue);

    }

    if (selectFrom.value == "euro") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue);

    }

    if (selectFrom.value == "libra") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue);

    }

    if (selectFrom.value == "bitcoin") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(inputCurrencyValue) + " BTC";

    }

    // Conversion logic

    if (selectFrom.value == "real" && selectConverted.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);
    }

    if (selectFrom.value == "real" && selectConverted.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);
    }

    if (selectFrom.value == "dolar" && selectConverted.value == "real") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * dolarToday);
    }

    if (selectFrom.value == "euro" && selectConverted.value == "real") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * euroToday);

    }

    if (selectFrom.value == "dolar" && selectConverted.value == "euro") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format((inputCurrencyValue * dolarToday) / euroToday);

    }

    if (selectFrom.value == "euro" && selectConverted.value == "dolar") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format((inputCurrencyValue * euroToday) / dolarToday);

    }

    if (selectFrom.value == "real" && selectConverted.value == "libra") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday);

    }

    if (selectFrom.value == "libra" && selectConverted.value == "real") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * libraToday);

    }

    if (selectFrom.value == "dolar" && selectConverted.value == "libra") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format((inputCurrencyValue * dolarToday) / libraToday);

    }

    if (selectFrom.value == "libra" && selectConverted.value == "dolar") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format((inputCurrencyValue * libraToday) / dolarToday);

    }

    if (selectFrom.value == "euro" && selectConverted.value == "libra") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format((inputCurrencyValue * euroToday) / libraToday);

    }

    if (selectFrom.value == "libra" && selectConverted.value == "euro") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format((inputCurrencyValue * libraToday) / euroToday);

    }

    if (selectFrom.value == "bitcoin" && selectConverted.value == "real") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * bitcoinToday);

    }

    if (selectFrom.value == "real" && selectConverted.value == "bitcoin") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(inputCurrencyValue / bitcoinToday) + " BTC";

    }

    if (selectFrom.value == "dolar" && selectConverted.value == "bitcoin") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format((inputCurrencyValue * dolarToday) / bitcoinToday) + " BTC";

    }

    if (selectFrom.value == "bitcoin" && selectConverted.value == "dolar") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format((inputCurrencyValue * bitcoinToday) / dolarToday);

    }

    if (selectFrom.value == "euro" && selectConverted.value == "bitcoin") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format((inputCurrencyValue * euroToday) / bitcoinToday) + " BTC";

    }

    if (selectFrom.value == "bitcoin" && selectConverted.value == "euro") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format((inputCurrencyValue * bitcoinToday) / euroToday);

    }

    if (selectFrom.value == "libra" && selectConverted.value == "bitcoin") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format((inputCurrencyValue * libraToday) / bitcoinToday) + " BTC";

    }

    if (selectFrom.value == "bitcoin" && selectConverted.value == "libra") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format((inputCurrencyValue * bitcoinToday) / libraToday);

    }
}

function changeFromCurrency() {
    const currencyNameToConvert = document.querySelector(".currency-name-to-convert");
    const currencyImgToConvert = document.querySelector(".currency-img-to-convert");

    if (selectFrom.value == "dolar") {
        currencyNameToConvert.innerHTML = "Dólar";
        currencyImgToConvert.src = "./assets/flag-of-usa-in-circle-shape-american-round-flag-png.webp";
    }

    if (selectFrom.value == "euro") {
        currencyNameToConvert.innerHTML = "Euro";
        currencyImgToConvert.src = "./assets/euro-img.png";
    }

    if (selectFrom.value == "real") {
        currencyNameToConvert.innerHTML = "Real";
        currencyImgToConvert.src = "./assets/circular-icon-of-the-brazil-flag-png.webp";
    }

    if (selectFrom.value == "libra") {
        currencyNameToConvert.innerHTML = "Libra";
        currencyImgToConvert.src = "./assets/libra-currency.png";
    }

    if (selectFrom.value == "bitcoin") {
        currencyNameToConvert.innerHTML = "Bitcoin";
        currencyImgToConvert.src = "./assets/bitcoin.svg.webp";
    }

    convertCurrency()
}

function changeCurrency() {
    const currencyNameConverted = document.querySelector(".currency-name-converted");
    const currencyImgConverted = document.querySelector(".currency-img-converted");

    if (selectConverted.value == "dolar") {
        currencyNameConverted.innerHTML = "Dólar";
        currencyImgConverted.src = "./assets/flag-of-usa-in-circle-shape-american-round-flag-png.webp";
    }

    if (selectConverted.value == "euro") {
        currencyNameConverted.innerHTML = "Euro";
        currencyImgConverted.src = "./assets/euro-img.png";
    }

    if (selectConverted.value == "real") {
        currencyNameConverted.innerHTML = "Real";
        currencyImgConverted.src = "./assets/circular-icon-of-the-brazil-flag-png.webp";
    }

    if (selectConverted.value == "libra") {
        currencyNameConverted.innerHTML = "Libra";
        currencyImgConverted.src = "./assets/libra-currency.png";
    }

    if (selectConverted.value == "bitcoin") {
        currencyNameConverted.innerHTML = "Bitcoin";
        currencyImgConverted.src = "./assets/bitcoin.svg.webp";
    }   

    convertCurrency()
}

selectConverted.addEventListener("change", changeCurrency);
selectFrom.addEventListener("change", changeFromCurrency);
convertButton.addEventListener("click", convertCurrency);


