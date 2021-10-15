var customerName = 'bob'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

function setBestCustomer() {
    bestCustomer = 'not bob'
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}


const leastFavoriteCustomer = 'sally'
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'sam'
}
//above function does not work because you cannot change a variable that was declared in global scope (i.e. 'sally').