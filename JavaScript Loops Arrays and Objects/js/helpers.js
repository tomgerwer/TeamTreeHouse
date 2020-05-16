function printList(list) {
    let listHTML = '<ol>';
    for (let i = 0; i < list.length; i += 1) {
        listHTML += '<li>' + list[i] + '</li>';
    }
    listHTML += '<ol>';
    print(listHTML);
}

function print(html) {
    document.write(html);
}