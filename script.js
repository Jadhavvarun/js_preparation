function printsPattern(rows) {
    let stars = '';
    
    for (let i = 1; i <= rows; i++){
        stars+= '*';
        console.log(stars);
    }

    for (let i = rows - 1; i >=1; i--){
        stars = stars.slice(0, i);
        console.log(stars);
    }
}

printsPattern(3);
