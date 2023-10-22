const pets = [
  {
    id: 1,
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    imageUrl:
      "https://pbs.twimg.com/profile_images/684095287720325121/mdHN09OY_400x400.jpg",
  },
  {
    id: 2,
    name: "Trouble",
    color: "Brown",
    specialSkill:
      "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "dino",
    imageUrl:
      "https://images.vexels.com/media/users/3/293984/isolated/lists/36e69f2873ebfb7de7abb5473fa5333a-cute-self-esteem-dino-character.png",
  },
  {
    id: 3,
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "dino",
    imageUrl:
      "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg",
  },
  {
    id: 4,
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    type: "dog",
    imageUrl:
      "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg",
  },
  {
    id: 5,
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "cat",
    imageUrl:
      "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
  },
  {
    id: 6,
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "dog",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg",
  },
  {
    id: 7,
    name: "Oreo",
    color: "Yellow",
    specialSkill: "Able to stop chewing ice or whistling on request.",
    type: "cat",
    imageUrl:
      "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg",
  },
  {
    id: 8,
    name: "Ginger",
    color: "Grey",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "dino",
    imageUrl:
      "https://icons.iconarchive.com/icons/fasticon/dino/256/Dino-orange-icon.png",
  },
  {
    id: 9,
    name: "Sassy",
    color: "Brown",
    specialSkill: "Adept at talking self and others out of fights.",
    type: "cat",
    imageUrl:
      "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg",
  },
  {
    id: 10,
    name: "Sammy",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "cat",
    imageUrl:
      "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg",
  },
  {
    id: 11,
    name: "Coco",
    color: "Orange",
    specialSkill: "Can be around food without staring creepily at it.",
    type: "dino",
    imageUrl:
      "https://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/dino-icon.png",
  },
  {
    id: 12,
    name: "Buster",
    color: "Green",
    specialSkill: "Does not use excessive acronyms.",
    type: "dog",
    imageUrl:
      "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg",
  },
  {
    id: 13,
    name: "Chester",
    color: "Red",
    specialSkill:
      "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
    type: "dog",
    imageUrl:
      "https://i.pinimg.com/474x/f2/58/07/f2580700dac7cd90b26be940638c17f3.jpg",
  },
  {
    id: 14,
    name: "Samantha",
    color: "Brown",
    specialSkill: "Always up for dessert.",
    type: "cat",
    imageUrl:
      "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg",
  },
  {
    id: 15,
    name: "Coco",
    color: "Red",
    specialSkill: "Burps minimally.",
    type: "cat",
    imageUrl:
      "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg",
  },
  {
    id: 16,
    name: "Smokey",
    color: "Brown",
    specialSkill: "Drives at a safe rate of speed in snow or rain.",
    type: "dino",
    imageUrl:
      "https://cdn.paleo.gg/games/jwpo/images/dino/tyrannosaurus_rex.png",
  },
  {
    id: 17,
    name: "Muffin",
    color: "Yellow",
    specialSkill:
      "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
    type: "cat",
    imageUrl:
      "https://i.pinimg.com/474x/51/41/c3/5141c3ae269e4382846ac3067cbbf9a9.jpg",
  },
  {
    id: 18,
    name: "Salem",
    color: "Brown",
    specialSkill: "Proficient in air guitar",
    type: "dino",
    imageUrl:
      "https://cdn.paleo.gg/games/jwpo/images/dino/tyrannosaurus_rex.png",
  },
  {
    id: 19,
    name: "Callie",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "dog",
    imageUrl:
      "https://res.cloudinary.com/everydotorg/image/upload/f_auto,c_limit,w_256,q_auto/faja_profile/oovkuautvjurvb0gkku5",
  },
  {
    id: 20,
    name: "Spooky",
    color: "Black",
    specialSkill: "Uses litter box at appropriate hours.",
    type: "cat",
    imageUrl:
      "https://i.pinimg.com/474x/74/94/da/7494da32cf94655355b9334f95fd7dfe.jpg",
  },
  {
    id: 21,
    name: "Miss kitty",
    color: "Red",
    specialSkill: "Owns a Nintendo Power Glove.",
    type: "dino",
    imageUrl:
      "https://cdn.pixabay.com/photo/2012/04/30/11/08/brown-44833_960_720.png",
  },
  {
    id: 22,
    name: "Snuggles",
    color: "Orange",
    specialSkill: "Is comfortable with jokes about his receding hairline.",
    type: "cat",
    imageUrl:
      "https://styles.redditmedia.com/t5_3fvdo5/styles/communityIcon_d99w7zbgzdo71.png?width=256&s=a39f78f98da5370c2b427adbf70db3cdbd701d46",
  },
  {
    id: 23,
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine.",
    type: "dog",
    imageUrl:
      "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg",
  },
  {
    id: 24,
    name: "George",
    color: "Brown",
    specialSkill:
      "Participates in karaoke but does not force others to go out to karaoke.",
    type: "dog",
    imageUrl:
      "https://i.pinimg.com/474x/88/25/21/882521a6c1fc9b389949700558a1ab25.jpg",
  },
  {
    id: 25,
    name: "Salem",
    color: "Red",
    specialSkill: "Knows the words to 4 rap songs.",
    type: "cat",
    imageUrl:
      "https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/2b/46/49/2b464997-a414-6956-7975-0968fda28fce/source/256x256bb.jpg",
  },
  {
    id: 26,
    name: "Bubba",
    color: "Yellow",
    specialSkill: "Cleans himself.",
    type: "dog",
    imageUrl:
      "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg",
  },
  {
    id: 27,
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    type: "dino",
    imageUrl:
      "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg",
  },
  {
    id: 28,
    name: "Nala",
    color: "Purple",
    specialSkill: "Dances when he has to.",
    type: "cat",
    imageUrl:
      "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg",
  },
  {
    id: 29,
    name: "Oscar",
    color: "Green",
    specialSkill:
      "Gives hugs with appropriate pressure and for the right length of time.",
    type: "cat",
    imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg",
  },
  {
    id: 30,
    name: "Lucy",
    color: "Red",
    specialSkill: "Doesn't get weirded out by the word 'moist.'",
    type: "dino",
    imageUrl:
      "https://ih1.redbubble.net/image.1974503408.9538/st,small,507x507-pad,600x600,f8f8f8.jpg",
  },
];

// FUNCTION TO RENDER CARDS TO DOM THAT TAKES AN ARRAY
const renderToDom = (pets) => {
  //THIS IS DOMSTRING SO WE CAN PUSH CARDS TO IT
  let domString = "";
  //FOR EACH LOOP TO LOOP OVER ARRAY AND CREAT PET CARDS
  pets.forEach((pet) => {
    domString += `<div class="card" style="width: 18rem;">
  <div class="card-header">${pet.name}</div>
  <img src="${pet.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${pet.color}</h5>
    <p class="card-text">${pet.specialSkill}</p>
    <div class="card-footer">${pet.type}</div>
  </div>
</div>`;
  });
  
  const app = document.querySelector("#app");
  //NOW SET CARDS TO OUR APP DIVS INNER HTML**********
  app.innerHTML = domString;
};
//RENDER AKA PUT CARDS ON THE PAGE
renderToDom(pets);
// THERE IS NO NEED TO REPASTE THE CODE ABOVE. THIS IS SIMPLY TO RENDER PETS TO DOM AND IF YOU PASTE IT, ITS GLOBAL SCOPE AND WILL CAUSE AN ERROR

//NEED FILTER BUTTON FOR CATS ONLY
//FIRST SELECT THAT HTML BUTTON?
const catButton = document.querySelector("#cat-button");

//CREATE FUNCTION TO FILTER OUT THE CATS
// const filter = (stuff, type) => { ?

const filter = () => {
  // empty array to hold our cats ?********
  let catArray = [];

  // for of loop to loop over that cat array..
  for (pet of pets) {
    // if pet type is a cat
    if (pet.type === "cat") {
      // if it is then push it into the catarray
      catArray.push(pet);
    }
  }

  // now let's use the function we just made above to render our new cat array to the page
  renderToDom(catArray);
};

//event listener stuff. will LISTEN to us to CLICK the button. Upon CLICK it will invoke filter function!
catButton.addEventListener("click", filter);

//
// DOGFILTER BUTTON

//NEED FILTER BUTTON FOR DOGS ONLY
//FIRST SELECT THAT HTML BUTTON?
const dogButton = document.querySelector("#dog-button");

//CREATE FUNCTION TO FILTER OUT THE CATS
// const filter = (stuff, type) => { ?

const dogfilter = () => {
  // empty array to hold our dogs ?********
  let dogArray = [];

  // for of loop to loop over that dog array..
  for (pet of pets) {
    // if pet type is a dog
    if (pet.type === "dog") {
      // if it is then push it into the dog array
      dogArray.push(pet);
    }
  }

  // now let's use the function we just made above to render our new dog array to the page
  renderToDom(dogArray);
};

//event listener stuff. will LISTEN to us to CLICK the button. Upon CLICK it will invoke filter function!
dogButton.addEventListener("click", dogfilter);

//
// DINO BUTTON

//NEED FILTER BUTTON FOR DINOS ONLY
//FIRST SELECT THAT HTML BUTTON?
const dinoButton = document.querySelector("#dino-button");

//CREATE FUNCTION TO FILTER OUT THE DINOS
// const filter = (stuff, type) => { ?

const dinofilter = () => {
  // empty array to hold our dino ?********
  let dinoArray = [];

  // for of loop to loop over that dino array..
  for (pet of pets) {
    // if pet type is a dino
    if (pet.type === "dino") {
      // if it is then push it into the dog array
      dinoArray.push(pet);
    }
  }

  // now let's use the function we just made above to render our new dino array to the page
  renderToDom(dinoArray);
};

//event listener stuff. will LISTEN to us to CLICK the button. Upon CLICK it will invoke filter function!
dinoButton.addEventListener("click", dinofilter);

//select show button IM STILL WORKING ON THIS
const showAllButton = document.querySelector("#show-button");

// 2. Add click event to show all pets
showAllButton.addEventListener("click", () => {

  renderToDom(pets);
});




// const form = document.querySelector("form");

// const createPet = (event) => {
//   event.preventDefault();
//   // create object to hold these
//   const newPetObj = {
//     id: pets.length + 1,
//     name: document.querySelector("#petName").value,
//     color: document.querySelector("#petColor").value,
//     specialSkill: "Track star",
//     type: document.querySelector("#petType").checked,
//     imageUrl:
//       "https://as2.ftcdn.net/v2/jpg/02/14/22/43/1000_F_214224389_3g7pWLOnL3zRMBiArR4skEyeLtym0MGt.jpg",
//   };

//   pets.push(newPetObj);
//   console.log(pets.length);
//   rendertoDom(pets);
//   form.reset();
//   //  clear form out
// };

// form.addEventListener("submit", createPet);

// // DELETE BUTTON

// //SELECT HTML app DIV
const app = document.querySelector("#app");
// // add event listener to listen to each of delete button/function
// const deletePet = (event) => {
//   if (event.target.id.includes("delete")) {
//     // do our delete logic
//     // determine which object I'm deleting by the id
//     // id="delete" "--x" oh ok
//     const [, id] = event.target.id.split("--");
//     // identify where in the array that object is
//     const index = pets.findIndex((obj) => obj.id === Number(id));
//     // remove object from array
//     pets.splice(index, 1);
//     console.log(pets.length);
//     // rerender w/ the array
//     rendertoDom(pets);
//   }
// };

// app.addEventListener("click", deletePet);

console.log(app);
