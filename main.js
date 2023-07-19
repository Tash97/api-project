async function api(){
    document.getElementById('pokedex-entry').style.visibility = 'visible';
let search = document.querySelector('#search').value;
let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}/`);
let response2 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${search}/`);
let data = await response.json();
let data2 = await response2.json();
let rightid = data.id.toString();
if(rightid.length < 3){
    rightid = rightid.split('');
    for(let i = rightid.length; i < 3; i++){
        rightid.unshift("0");
    }
    rightid = rightid.join('');
}
document.querySelector('#dex-title').innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1);
document.querySelector('#dex-number').innerHTML = '#' + rightid;
document.querySelector('#height').innerHTML = 'Height: ' + Math.floor((data.height / .254) / 12) + "'" + Math.ceil(data.height / .254) % 12 + '"';
document.querySelector('#weight').innerHTML = 'Weight: ' + Math.floor(data.weight / 4.536) + ' lbs';
if(data.types.length == 2){
    document.querySelector('#type1').innerHTML = 'Type 1: ' + data.types[0].type.name;
    document.querySelector('#type2').innerHTML = 'Type 2: ' + data.types[1].type.name;
} else {
    document.querySelector('#type1').innerHTML = 'Type: ' + data.types[0].type.name;

}
if(data){
document.querySelector('#pic').src = data.sprites.front_default;
}
for(i = 0; i < data2.flavor_text_entries.length; i++){
    if(data2.flavor_text_entries[i].version.name == 'x' && data2.flavor_text_entries[i].language.name == 'en'){
        document.querySelector('#info').innerHTML = 'Description<br>' + data2.flavor_text_entries[i].flavor_text;
        break;
    }
}
}
