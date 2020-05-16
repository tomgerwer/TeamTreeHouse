let inStock = [
    'apples', 
    'eggs', 
    'milk', 
    'cookies', 
    'cheese', 
    'bread', 
    'lettuce', 
    'carrot', 
    'broccoli', 
    'pizza', 
    'potato', 
    'crackers', 
    'onion', 
    'tofu', 
    'frozen dinner', 
    'cucumber'
];
let search;

function print(message) {
    document.write('<p>' + message + '</p>');
}

while (true) {
    search = prompt("search for a product in our store. Type 'list' to show all of the produce and 'quit' to exit");
    if (search === 'quit') {
        break;
    } else if ( search === 'list') {
        print( inStock.join(', ') );
    } else {
        if ( inStock.indexOf(search) > -1) {
            print('Yes, we have ' + search + ' in the store.');
        } else {
            print (search + ' is no in stock.');
        }
    }
}