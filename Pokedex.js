const fetchPokemon = () =>{
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();        
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if(res.status != "200"){
            console.log(res);
            document.getElementById("estadisticas").style.color = "#9BFA86";
            document.getElementById("Hp1").style.color = "#9BFA86";
            document.getElementById("Hp2").style.color = "#9BFA86";
            document.getElementById("Attack").style.color = "#9BFA86";
            document.getElementById("Deffense").style.color = "#9BFA86";
            document.getElementById("SAttack").style.color = "#9BFA86";
            document.getElementById("SDeffense").style.color = "#9BFA86";
            document.getElementById("Speed").style.color = "#9BFA86";
            document.getElementById("Tipo").style.color = "#9BFA86";
            pokeImage("pokeimagenes/pokemonNoEncontrado.png");
            pokeType('');
            pokeStats('');
            pokeMoves('');
        }
        else{
            return res.json();
        }

        
    }).then((data) => {
        if(data){
        console.log(data);
        document.getElementById("estadisticas").style.color = "black";
        document.getElementById("Hp1").style.color = "black";
        document.getElementById("Hp2").style.color = "black";
        document.getElementById("Attack").style.color = "black";
        document.getElementById("Deffense").style.color = "black";
        document.getElementById("SAttack").style.color = "black";
        document.getElementById("SDeffense").style.color = "black";
        document.getElementById("Speed").style.color = "black";
        document.getElementById("Tipo").style.color = "black";
        pokeImage(data.sprites.front_default);
        pokeType(data.types);
        pokeStats(data.stats);
        pokeMoves(data.moves);
        /* pokeImageBackground(typeColors[data.types[0].type.name]); */
        }
    });
}
                
const pokeImage = (url) => {
const pokeImg = document.getElementById("pokeImg");
    pokeImg.src=url;
}
                
const pokeType = (types) => {
    const pokeType = document.getElementById("pokeTipos");
    pokeType.innerHTML='';
    if(types!=''){
        types.forEach(type => {
        const typeTextElement = document.createElement("div");
        /* typeTextElement.style.backgroundColor = typeColors[type.type.name]; */
        typeTextElement.textContent = type.type.name;
        pokeType.appendChild(typeTextElement);
        typeTextElement.style.position = "absolute"
        typeTextElement.style.left = "1100px"
        typeTextElement.style.marginTop = "350px"
        typeTextElement.style.zIndex = "20"

        });
    }
}
                
const pokeStats = (stats) => {
const pokeStats = document.getElementById("pokeStat");
pokeStats.innerHTML='';
    if(stats!=''){
        stats.forEach(stat => {
            const statElement = document.createElement("div");
            const statName = document.createElement("div");
            const statValue = document.createElement("div");
            statName.textContent = stat.stat.name;
            statValue.textContent = stat.base_stat;
            statElement.appendChild(statName);
            statElement.appendChild(statValue);
            pokeStats.appendChild(statElement);
            statValue.style.position = "absolute"
            statValue.style.zIndex = "15"
            statValue.style.right = "450px"
            statValue.style.marginTop = "270px"
            statName.style.color = "white"
        });
    }
}