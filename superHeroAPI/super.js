const Name = document.getElementById("Name");
const id = document.getElementById("id");


const intelligenceGold = document.getElementById("intelligenceGold");
const strengthGold = document.getElementById("strengthGold");
const speedGold = document.getElementById("speedGold");
const powerGold = document.getElementById("powerGold");
const CombatGold = document.getElementById("CombatGold");

const intelligence = document.getElementById("intelligence");
const strength = document.getElementById("strength");
const speed = document.getElementById("speed");
const power = document.getElementById("power");
const fightingSkills = document.getElementById("fightingSkills");
const realName = document.getElementById("realName");
const bio = document.getElementById("bio");
const button = document.getElementById("newSuperHero");
const searchButton = document.getElementById("newSearchButton");
const image = document.getElementById("image");
const search = document.getElementById("searchSuperHero");
let intelligencestat;
let intel;
let Random;



const randomHero = () => {
  Random = Math.ceil(Math.random() * 731);
  console.log(Random);
  return Random;
};

const getSuperHero = () => {
  randomHero();
  fetch(`https://www.superheroapi.com/api.php/10158306530580728/${Random}`)
    .then((response) => response.json())
    .then((json) => {
       console.log(json)
      if (json.powerstats.intelligence == "null" ||json.powerstats.strength == "null" || json.powerstats.speed == "null" || json.powerstats.power == "null" || json.powerstats.combat == "null" ) {
        console.log('skip!!')
        getSuperHero();
        }

       else { 
      if (json.powerstats.intelligence == 100) {
        console.log("High Intell");
        intelligenceGold.setAttribute("class", "meterGold")
       }else{ 
        intelligenceGold.setAttribute("class", "meterNormal")  }

      if (json.powerstats.strength == 100) {
        console.log("High strength");
        strengthGold.setAttribute("class", "meterGold")
      }else{ 
        strengthGold.setAttribute("class", "meterNormal")   }
      
      if (json.powerstats.speed == 100) {
        console.log("High Speed");
        speedGold.setAttribute("class", "meterGold")
        }else{ 
          speedGold.setAttribute("class", "meterNormal")   }
      
      if (json.powerstats.power == 100) {
        console.log("High power");
        powerGold.setAttribute("class", "meterGold")
        }else{ 
        powerGold.setAttribute("class", "meterNormal")   }
     
      if (json.powerstats.combat == 100) {
        console.log("High combat");
        CombatGold.setAttribute("class", "meterGold") 
        }else{ 
        CombatGold.setAttribute("class", "meterNormal")  }
     
        

     
       


      
      image.innerHTML = `<img src='${json.image.url}' height=200 width=270 />`;
      // image.innerHTML = `<img src='${json.image.url}' />`;

      intelligenceGold.innerText = `${json.powerstats.intelligence}`
      strengthGold.innerText = `${json.powerstats.strength}`
      speedGold.innerText = `${json.powerstats.speed}`
      powerGold.innerText = `${json.powerstats.power}`
      CombatGold.innerText = `${json.powerstats.combat}`
      
      Name.innerText = `${json.name}`;
      id.innerText = `${json.id}`;
      intelligence.setAttribute(
        "style",
        `width: ${json.powerstats.intelligence}%`
      );
      strength.setAttribute(
        `style`, 
        `width: ${json.powerstats.strength}%`
        );
      speed.setAttribute(
        `style`, 
        `width: ${json.powerstats.speed}%`
        );
      power.setAttribute(
        `style`, 
        `width: ${json.powerstats.power}%`
        );
      fightingSkills.setAttribute(
        `style`, 
        `width: ${json.powerstats.combat}%`
        );
      
      
      
      realName.innerText = `${json.biography["full-name"]}`;
    

      
       }

      
    });
   
};

const searchHero = () => {
  fetch(
    `https://www.superheroapi.com/api.php/10158306530580728/search/${search.value}`
  )
    .then((response) => response.json())
    .then((json) => {
      if (json.results[0].powerstats.intelligence == 100) {
        console.log("High Intell");
        intelligenceGold.setAttribute("class", "meterGold")
       }else{ 
        intelligenceGold.setAttribute("class", "meterNormal")  }

      if (json.results[0].powerstats.strength == 100) {
        console.log("High strength");
        strengthGold.setAttribute("class", "meterGold")
      }else{ 
        strengthGold.setAttribute("class", "meterNormal")   }
      
      if (json.results[0].powerstats.speed == 100) {
        console.log("High Speed");
        speedGold.setAttribute("class", "meterGold")
        }else{ 
          speedGold.setAttribute("class", "meterNormal")   }
      
      if (json.results[0].powerstats.power == 100) {
        console.log("High power");
        powerGold.setAttribute("class", "meterGold")
        }else{ 
        powerGold.setAttribute("class", "meterNormal")   }
     
      if (json.results[0].powerstats.combat == 100) {
        console.log("High combat");
        CombatGold.setAttribute("class", "meterGold") 
        }else{ 
        CombatGold.setAttribute("class", "meterNormal")  }
      console.log(json);
      console.log(search.value);
      image.innerHTML = `<img src='${json.results[0].image.url}' />`;
      // image.innerHTML = `<img src='${json.results[0].image.url}' height=200 width=230/>`;
      Name.innerText = `${json.results[0].name}`;
      id.innerText = `${json.results[0].id}`;
      intelligenceGold.innerText = `${json.results[0].powerstats.intelligence}`
      strengthGold.innerText = `${json.results[0].powerstats.strength}`
      speedGold.innerText = `${json.results[0].powerstats.speed}`
      powerGold.innerText = `${json.results[0].powerstats.power}`
      CombatGold.innerText = `${json.results[0].powerstats.combat}`


      intelligence.setAttribute(
        "style",
        `width: ${json.results[0].powerstats.intelligence}%`
      );
      strength.setAttribute(
        `style`,
        `width: ${json.results[0].powerstats.strength}%`
      );
      speed.setAttribute(
        `style`,
        `width: ${json.results[0].powerstats.speed}%`
      );
      power.setAttribute(
        `style`,
        `width: ${json.results[0].powerstats.power}%`
      );
      fightingSkills.setAttribute(
        `style`,
        `width: ${json.results[0].powerstats.combat}%`
      );
      realName.innerText = `${json.results[0].biography["full-name"]}`;
      


      search.value = ('')
      
    });
};



button.onclick = () => getSuperHero();


searchButton.onclick = () => searchHero();



$(".meter > span").each(function () {
  $(this)
    .data("origWidth", $(this).width())
    .width(0)
    .animate(
      {
        width: $(this).data("origWidth"),
      },
      1200
    );
});