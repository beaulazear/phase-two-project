const dogs = [
    {
      "id": 1,
      "name": "Ralph T.",
      "image": "../images/ralph.jpg",
      "bio": "Pees when you leash him up, but only because he loves you. Gets along great with other dogs, very playful.",
      "address": "368 Warren St",
      "walkTime": "12pm",
      "walkDuration": "30 minutes",
      "days": {
        "1": true,
        "2": true,
        "3": true,
        "4": true,
        "5": true,
        "6": false,
        "0": false
      }
    },
    {
      "id": 2,
      "name": "Ruth G.",
      "image": "..images/Ruth.jpg",
      "bio": "Sometimes eats trash, but gives the best snuggles. Does not get along with other dogs... will attack, be careful!",
      "address": "1664 Hancock St",
      "walkTime": "10am",
      "walkDuration": "30 minutes",
      "days": {
        "1": true,
        "2": true,
        "3": true,
        "4": true,
        "5": true,
        "6": false,
        "0": false
      }
    },
    {
      "id": 3,
      "name": "Harlem L.",
      "image": "images/Harlem.jpg",
      "bio": "Will try to bite you at first... but the biggest sweetheart once you win over her heart! Not nice to other dogs.",
      "address": "58 Clark St",
      "walkTime": "4:30m",
      "walkDuration": "30 minutes",
      "days": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "0": false
      }
    },
    {
      "id": 4,
      "name": "Polly P.",
      "image": "images/Polly.jpg",
      "bio": "Timid at first but the sweetest girl ever once she gets to know you :) walks well with other dogs, just prefers some space!",
      "address": "371 President St",
      "walkTime": "12:30 pm",
      "walkDuration": "30 minutes",
      "days": {
        "1": false,
        "2": true,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "0": false
      }
    },
    {
      "id": 5,
      "name": "Java H.",
      "image": "images/Java.jpg",
      "bio": "Sweet old lady. Needs to be carried down 4th floor walk up. Needs encouraged to walk a bit but eventually she'll get going!",
      "address": "289 Union St",
      "walkTime": "11:30am & 3:30pm",
      "walkDuration": "30 minutes",
      "days": {
        "1": false,
        "2": true,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "0": false
      }
    },
    {
      "id": 6,
      "name": "Moose Z.",
      "image": "images/Moose2.jpg",
      "bio": "Best boy in the world! Might try to eat garbage so be on the lookout... gives amazing hugs",
      "address": "249 Bond St",
      "walkTime": "12:30pm",
      "walkDuration": "60 minutes",
      "days": {
        "1": false,
        "2": true,
        "3": false,
        "4": true,
        "5": true,
        "6": false,
        "0": false
      }
    },
    {
      "id": 7,
      "name": "Reyka S.",
      "image": "images/Reyka.jpg",
      "bio": "BFF's with Ru! Likes other dogs but prefers humans. Will gladly let a dog know when she wants her space!",
      "address": "67 2nd Place",
      "walkTime": "2:30pm",
      "walkDuration": "30 minutes",
      "days": {
        "1": false,
        "2": true,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "0": false
      }
    },
    {
      "id": 8,
      "name": "Henry C.",
      "image": "images/Henry.jpg",
      "bio": "Loves other dogs... a little too much! Will try to play the whole time. Definitely lacking manners. Beware, will eat poop!",
      "address": "279 Union St",
      "walkTime": "1:30pm",
      "walkDuration": "60 minutes",
      "days": {
        "1": true,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      }
    },
    {
      "id": 9,
      "name": "Ruby - Ru L.",
      "image": "images/Ru.jpg",
      "bio": "BFF's with Reyka! Loves the dog park. Gets along with everyone. Really long walks to try to tire her out.",
      "address": "98 Clinton Ave",
      "walkTime": "2:30pm",
      "walkDuration": "90 minutes",
      "days": {
        "1": true,
        "2": true,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "0": false
      }
    },
    {
      "id": 10,
      "name": "Cholula H.",
      "image": "images/Cholula.jpg",
      "bio": "Loves the dog park, kind of a weirdo, but the best weirdo ever. Blueberries are her favorite treat.",
      "address": "1066 Tompkins St",
      "walkTime": "5pm",
      "walkDuration": "30 minutes",
      "days": {
        "1": true,
        "2": true,
        "3": true,
        "4": true,
        "5": true,
        "6": true,
        "0": true
      }
    },
    {
      "id": 11,
      "name": "River S.",
      "image": "images/River.jpg",
      "bio": "Sweet boy, can be walked with all dogs! Loves to go to DiMattina dog park. Gets treat after walk.",
      "address": "79 Woodhull St",
      "walkTime": "11am",
      "walkDuration": "60 minutes",
      "days": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "0": false,
        "Unscheduled": true
      }
    },
    {
      "id": 12,
      "name": "Morty L.",
      "image": "src/images/Morty.jpg",
      "bio": "Has separation anxiety, so really long walks while mom is running errands! Loves his ball.",
      "address": "794 Clinton Ave",
      "walkTime": "when requested",
      "walkDuration": "120 minutes",
      "days": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "0": false,
        "Unscheduled": true
      }
    },
    {
      "id": 13,
      "name": "Misha C.",
      "image": "images/Misha.jpg",
      "bio": "Owners request that he be walked solo! Misha is not neutered so be weary! Will try to eat trash on sidewalk.",
      "address": "289 Union St",
      "walkTime": "6:30pm",
      "walkDuration": "30 minutes",
      "days": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "0": false,
        "Unscheduled": true
      }
    },
    {
      "id": 14,
      "name": "Mauve W",
      "image": null,
      "bio": "Mom buzzes you in, no key. Harness and leash hanging as you enter. Collar comes off after walk, paws wiped as well.",
      "address": "240 President St apt 6",
      "walkTime": "1/2pm",
      "walkDuration": "30 minutes",
      "days": {
        "1": true,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "0": false,
        "Unscheduled": false
      }
    },
    {
      "id": 15,
      "name": "Eliza B",
      "image": null,
      "bio": "Eliza walks pretty slow, good match with Java! Must carry down stairs, but will run up them herself!",
      "address": "97 1st place apt 2",
      "walkTime": "11:45am",
      "walkDuration": "30 minutes",
      "days": {
        "1": false,
        "2": true,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "0": false,
        "Unscheduled": false
      }
    },
    {
      "id": 16,
      "name": "Crouton K",
      "image": null,
      "bio": "Crouton walks well with smaller dogs! IS leash reactive to large dogs. (Already aquainted with Moose Z. though) Will try to eat trash, very quick at it too!",
      "address": "398 Warren st apr 1R",
      "walkTime": "12/3pm",
      "walkDuration": "30 minutes",
      "days": {
        "1": false,
        "2": true,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "0": false,
        "Unscheduled": false
      }
    },
    {
      "id": 17,
      "name": "Bellini",
      "image": null,
      "bio": "Select which day you would like to view from the dropbox below. All scheduled dogs will then be uploaded, along with the",
      "address": "280 President St apt 12",
      "walkTime": "1/2pm",
      "walkDuration": "30 minutes",
      "days": {
        "Monday": false,
        "Tuesday": false,
        "Wednesday": false,
        "Thursday": false,
        "Friday": false,
        "Saturday": true,
        "Sunday": true
      }
    }
  ]

  export { dogs }