let grid = create(2);
let prepro = "";
let size = 0;
let key = "";
let text_cif = "";
function preprocesar() {
    var text = document.getElementById("rejillaInput").value;
    prepro =  text.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); 
    prepro = prepro.replace(/[^\w\s]|_/g, '').replace(/\s/g, '').toUpperCase();
    size = getSqrt(prepro.length);
    for(let i = prepro.length; i < size*size; i++) prepro += "X";
    document.getElementById("rejillaPre").innerHTML = prepro;
    document.getElementById("rejillaKey").innerHTML = ""; key = "";
    document.getElementById("rejillaCifrado").innerHTML = ""; text_cif = "";
    document.getElementById("rejillaDescifrado").innerHTML = "";
}

function genKey() {
    if(prepro == "" || document.getElementById("rejillaInput").value == "") {
        document.getElementById("rejillaKey").innerHTML = ""; key = "";
        document.getElementById("rejillaPre").innerHTML = ""; prepro = "";
        document.getElementById("errorInfo").innerHTML = "Primero tienes que preprocesar";
        document.getElementById("rejillaCifrado").innerHTML = ""; text_cif = "";
        return;
    }
    grid = generateGrid(size);
    key = extract(grid, size);
    document.getElementById("rejillaKey").innerHTML = key;
    document.getElementById("errorInfo").innerHTML = "";
    document.getElementById("rejillaCifrado").innerHTML = ""; text_cif = "";
    document.getElementById("rejillaDescifrado").innerHTML = "";
}

function rejillaCipher(){
    if(key == ""){
        document.getElementById("errorInfo2").innerHTML = "Falta generar clave!";
        return;
    }
    let block = (size*size)/4;
    let cifrado = create(size);
    for(let i = 0; i < 4; i++){
        cifrado = fill(cifrado, grid, prepro.substring(i*block, (i+1)*block));
        grid = rotate(grid);
    }
    let ans = extract(cifrado, size);
    document.getElementById("rejillaCifrado").innerHTML = ans; text_cif = ans;
    document.getElementById("rejillaDescifrado").innerHTML = "";
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateGrid(size){
    let grid = create(size);
    let mid = size/2;
    for(let i = 0; i < mid; i++){
        for(let j = 0; j < mid; j++){
            let rnd = getRandomInt(4);
            grid[i][j] = '.';
            grid[j][size-1-i] = '.';
            grid[size-1-i][size-1-j] = '.';
            grid[size-1-j][i] = '.';
            if(rnd == 0) grid[i][j] = 'X';
            if(rnd == 1) grid[j][size-1-i] = 'X';
            if(rnd == 2) grid[size-1-i][size-1-j] = 'X';
            if(rnd == 3) grid[size-1-j][i] = 'X';
        }
    }
    return grid;
}

function extract(grid, size){
    let ans = "";
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            ans += grid[i][j];
        }
    }
    return ans;
}

function fill(result, grid, text){
    let cnt = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid.length; j++){
            if(grid[i][j] == 'X') result[i][j] = text[cnt++];
        }
    }
    return result;
}

function getSqrt(value){
    let sq =  Math.ceil(Math.sqrt(value));
    if(sq%2 != 0) sq++;
    return sq;
}

function create(size){
    let grid = new Array(size);
    for (var i = 0; i < size; i++) {
        grid[i] = new Array(size);
    }
    return grid;
}

function rotate(grid){
    let sz = grid.length;
    let aux = create(sz);
    for(let i = 0; i < sz; i++){
        for(let j = 0; j < sz; j++){
            aux[j][sz - 1- i] = grid[i][j];
        }
    }
    return aux;
}

function rejillaDecifrar(){
    if(text_cif == ""){
        document.getElementById("errorInfo3").innerHTML = "Falta terminar el proceso de cifrado!";
        return;
    }

    let sq = getSqrt(key.length);
    let _grid = create(sq);
    let _key = create(sq);
    let idx = 0;
    for(let i = 0; i < sq; i++){
        for(let j = 0; j < sq; j++){
            _grid[i][j] = text_cif[idx];
            _key[i][j] = key[idx];
            idx++;
        }
    }
    let text_ori = "";
    for(let k = 0; k < 4; k++){
        for(let i = 0; i < sq; i++){
            for(let j = 0; j < sq; j++){
                if(_key[i][j] == 'X') text_ori += _grid[i][j];
            }
        }
        _key = rotate(_key);
    }
    document.getElementById("rejillaDescifrado").innerHTML = text_ori;
}