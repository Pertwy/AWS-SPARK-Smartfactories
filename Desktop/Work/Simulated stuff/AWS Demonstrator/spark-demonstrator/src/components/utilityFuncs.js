export function dateFormat(date){
    let newDate = new Date(date)
    return(newDate.toISOString().substring(0, 19).replace("T", " "))
}

export function sortString(a, b) {
    let nameA = dateFormat(a); // ignore upper and lowercase
    let nameB = dateFormat(b); // ignore upper and lowercase
    if (nameA < nameB) {
        return +1;
    }
    if (nameA > nameB) {
        return -1;
    }
    return 0;
}