addEventListener("load", main)

function main() {
    btCalcSales.addEventListener("click", calculateSales)
}

function calculateSales() {
    Price=parseFloat(txPrice.value)
    TaxRate=parseFloat(txTaxRate.value)/100 //finding out the tax rate by dividing it by 100
    Tax=Price*TaxRate
    Total=Price+Tax //formula to calculate the total price after tax
    spTotal.innerHTML=Total.toFixed(2)
}

