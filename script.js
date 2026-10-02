// ---------- Science questions (add more here!) ----------
// Each question: { emoji, q, options, fact }
// IMPORTANT: put the CORRECT answer FIRST in "options".
// The game shuffles the choices automatically.
const TOPICS = {
  animals: {
    name: "Animals",
    emoji: "🐾",
    color: "#e17055",
    questions: [
      {
        emoji: "🐬",
        q: "Which of these animals is a mammal?",
        options: ["Dolphin", "Shark", "Frog"],
        fact: "Mammals breathe air and feed milk to their babies. Dolphins are mammals, not fish!",
      },
      {
        emoji: "🐛",
        q: "What does a caterpillar turn into?",
        options: ["A butterfly", "A spider", "A bee"],
        fact: "A caterpillar makes a chrysalis, and inside it changes into a butterfly.",
      },
      {
        emoji: "🐔",
        q: "Which animal hatches from an egg?",
        options: ["Chicken", "Dog", "Cat"],
        fact: "Birds, most fish, and reptiles all hatch from eggs.",
      },
      {
        emoji: "🐜",
        q: "How many legs does an insect have?",
        options: ["6", "4", "8"],
        fact: "All insects have 6 legs. Spiders have 8 legs, so they are not insects.",
      },
      {
        emoji: "🦒",
        q: "Which is the tallest animal in the world?",
        options: ["Giraffe", "Elephant", "Horse"],
        fact: "A giraffe can be more than 4 meters tall. Its long neck helps it reach leaves high in the trees.",
      },
      {
        emoji: "🐟",
        q: "What do fish use to breathe underwater?",
        options: ["Gills", "Lungs", "Nose"],
        fact: "Gills take oxygen from the water so the fish can breathe.",
      },
      {
        emoji: "🦇",
        q: "Which animal rests hanging upside down?",
        options: ["Bat", "Duck", "Pig"],
        fact: "Bats sleep upside down. They are the only mammals that can truly fly.",
      },
      {
        emoji: "🐰",
        q: "Animals that eat only plants are called...",
        options: ["Herbivores", "Carnivores", "Predators"],
        fact: "Rabbits, cows, and elephants are herbivores. Lions are carnivores, which means they eat meat.",
      },
      {
        emoji: "🐝",
        q: "What do bees make?",
        options: ["Honey", "Milk", "Butter"],
        fact: "Bees collect sweet nectar from flowers and turn it into honey.",
      },
      {
        emoji: "🐸",
        q: "What is a baby frog called?",
        options: ["Tadpole", "Puppy", "Cub"],
        fact: "Tadpoles live in water. They grow legs and slowly change into frogs.",
      },
      {
        emoji: "🐄",
        q: "Which animal gives us milk?",
        options: ["Cow", "Chicken", "Fish"],
        fact: "Cows are mammals. Farmers collect their milk for us to drink.",
      },
      {
        emoji: "🐧",
        q: "Which bird cannot fly but is a great swimmer?",
        options: ["Penguin", "Eagle", "Parrot"],
        fact: "Penguins use their wings like flippers to swim fast.",
      },
      {
        emoji: "🐙",
        q: "How many arms does an octopus have?",
        options: ["8", "6", "10"],
        fact: "An octopus has 8 arms. It also has 3 hearts!",
      },
      {
        emoji: "🐊",
        q: "A crocodile is a...",
        options: ["Reptile", "Mammal", "Insect"],
        fact: "Reptiles have dry, scaly skin. Snakes, lizards, and turtles are reptiles too.",
      },
      {
        emoji: "🐪",
        q: "Which animal lives in the desert and has a hump?",
        options: ["Camel", "Horse", "Pig"],
        fact: "A camel's hump stores fat. The camel uses it for energy when food is hard to find.",
      },
      {
        emoji: "🦉",
        q: "Which bird is awake mostly at night?",
        options: ["Owl", "Chicken", "Duck"],
        fact: "Owls hunt at night. They have very good eyesight and hearing.",
      },
      {
        emoji: "🏠",
        q: "Where do many bees live together?",
        options: ["In a hive", "In a burrow", "In a pond"],
        fact: "A bee hive can have thousands of bees working together.",
      },
      {
        emoji: "🕷️",
        q: "Which animal spins a web?",
        options: ["Spider", "Ant", "Fish"],
        fact: "Spiders make silk threads to build webs and catch insects.",
      },
      {
        emoji: "🐜",
        q: "Which tiny animal lives in a colony and carries food back home?",
        options: ["Ant", "Frog", "Snail"],
        fact: "Ants work as a team. Some find food, and others carry it to the nest.",
      },
      {
        emoji: "🐌",
        q: "Which animal carries its home on its back?",
        options: ["Snail", "Dog", "Bird"],
        fact: "A snail's shell protects its soft body.",
      },
      {
        emoji: "🦎",
        q: "Which animal can change its color?",
        options: ["Chameleon", "Elephant", "Cow"],
        fact: "Chameleons change color to show their mood and to help hide.",
      },
      {
        emoji: "🐋",
        q: "What is the biggest animal in the world?",
        options: ["Blue whale", "Elephant", "Giraffe"],
        fact: "The blue whale is the biggest animal that has ever lived. It is even bigger than the dinosaurs!",
      },
      {
        emoji: "🐻",
        q: "Which animal sleeps through the cold winter in a cave?",
        options: ["Bear", "Dolphin", "Parrot"],
        fact: "Sleeping through winter is called hibernation. It helps bears save energy.",
      },
      {
        emoji: "🐍",
        q: "Which animal is a reptile?",
        options: ["Snake", "Frog", "Whale"],
        fact: "Snakes are reptiles. They have scales and are cold-blooded.",
      },
      {
        emoji: "🍖",
        q: "Animals that eat both plants and meat are called...",
        options: ["Omnivores", "Herbivores", "Carnivores"],
        fact: "Humans, bears, and pigs are omnivores.",
      },
      {
        emoji: "🦅",
        q: "What covers a bird's body?",
        options: ["Feathers", "Fur", "Scales"],
        fact: "Feathers keep birds warm and help many of them fly.",
      },
      {
        emoji: "🐠",
        q: "A group of fish swimming together is called a...",
        options: ["School", "Herd", "Pack"],
        fact: "Fish swim in a school to stay safe from bigger animals.",
      },
      {
        emoji: "🦈",
        q: "A shark is a...",
        options: ["Fish", "Mammal", "Bird"],
        fact: "Sharks breathe with gills and swim with fins. They are fish.",
      },
      {
        emoji: "🐞",
        q: "Which little insect is red with black spots?",
        options: ["Ladybug", "Bee", "Ant"],
        fact: "Ladybugs eat tiny insects called aphids that harm plants.",
      },
      {
        emoji: "🐢",
        q: "Which animal has a hard shell and can live a very long time?",
        options: ["Turtle", "Dog", "Rabbit"],
        fact: "Some turtles and tortoises can live for more than 100 years.",
      },
    ],
  },

  plants: {
    name: "Plants",
    emoji: "🌱",
    color: "#00b894",
    questions: [
      {
        emoji: "🌻",
        q: "What do plants need to grow?",
        options: ["Sunlight and water", "Candy and soda", "Only darkness"],
        fact: "Plants need sunlight, water, and air to grow healthy and strong.",
      },
      {
        emoji: "🥕",
        q: "Which part of a plant takes in water from the soil?",
        options: ["Roots", "Leaves", "Flower"],
        fact: "Roots drink water from the soil and hold the plant in place.",
      },
      {
        emoji: "🍃",
        q: "What do leaves make using sunlight?",
        options: ["Food for the plant", "Rocks", "Plastic"],
        fact: "Leaves use sunlight, water, and air to make food. This is called photosynthesis.",
      },
      {
        emoji: "🌸",
        q: "Which part of a plant makes seeds?",
        options: ["Flower", "Root", "Stem"],
        fact: "Flowers make seeds. Many fruits grow from flowers and hold the seeds inside.",
      },
      {
        emoji: "💨",
        q: "Which gas do plants take in from the air to make food?",
        options: ["Carbon dioxide", "Helium", "Smoke"],
        fact: "Plants take in carbon dioxide through tiny holes in their leaves.",
      },
      {
        emoji: "🌳",
        q: "Which gas do plants give out that we need to breathe?",
        options: ["Oxygen", "Steam", "Dust"],
        fact: "Plants give out oxygen. That is why trees are so good for our planet!",
      },
      {
        emoji: "🌿",
        q: "What does the stem of a plant do?",
        options: ["Holds the plant up and carries water", "Makes the smell of rain", "Catches fish"],
        fact: "The stem is like a straw. It lifts the plant up and moves water to the leaves.",
      },
      {
        emoji: "🥕",
        q: "Which of these is a root that we eat?",
        options: ["Carrot", "Apple", "Banana"],
        fact: "A carrot is a root. It grows underground.",
      },
      {
        emoji: "🌵",
        q: "Which plant can live in a hot, dry desert?",
        options: ["Cactus", "Water lily", "Seaweed"],
        fact: "A cactus stores water inside its thick stem, so it can live for a long time without rain.",
      },
      {
        emoji: "🌰",
        q: "What can grow into a new plant when you put it in soil?",
        options: ["A seed", "A pebble", "A feather"],
        fact: "A seed has a tiny baby plant inside. With water and warmth, it begins to grow.",
      },
      {
        emoji: "🐝",
        q: "What do bees collect from flowers?",
        options: ["Nectar", "Milk", "Sand"],
        fact: "Bees also carry pollen from flower to flower, which helps plants make seeds.",
      },
      {
        emoji: "🌲",
        q: "Which tree has needle-like leaves and makes cones?",
        options: ["Pine tree", "Mango tree", "Banana tree"],
        fact: "Pine trees keep their seeds safe inside cones.",
      },
      {
        emoji: "🥥",
        q: "Which tree gives us coconuts?",
        options: ["Coconut tree", "Pine tree", "Apple tree"],
        fact: "A coconut tree gives us coconut water, coconut meat, and oil.",
      },
      {
        emoji: "🍂",
        q: "What happens to the leaves of many trees in autumn?",
        options: ["They change color and fall", "They turn into flowers", "They grow bigger"],
        fact: "In places with autumn, leaves turn red, yellow, or brown before they fall.",
      },
      {
        emoji: "🌾",
        q: "Rice grows best in...",
        options: ["Fields with water", "Snowy mountains", "Dry deserts"],
        fact: "Rice is often planted in flooded fields called rice paddies.",
      },
      {
        emoji: "🍌",
        q: "A banana is which part of a plant?",
        options: ["Fruit", "Root", "Leaf"],
        fact: "A fruit grows from a flower and usually holds seeds.",
      },
      {
        emoji: "🫘",
        q: "Which of these is a seed that we eat?",
        options: ["Beans", "Carrot", "Spinach"],
        fact: "Beans are seeds. A carrot is a root, and spinach is a leaf.",
      },
      {
        emoji: "🍄",
        q: "Is a mushroom a plant?",
        options: ["No, it is a fungus", "Yes, it is a tree", "Yes, it is a flower"],
        fact: "Mushrooms are fungi. They cannot make food from sunlight like plants do.",
      },
      {
        emoji: "🌱",
        q: "What usually comes out of a seed first?",
        options: ["A root", "A flower", "A fruit"],
        fact: "The root grows down first to find water.",
      },
      {
        emoji: "🦋",
        q: "Why do flowers have bright colors and sweet smells?",
        options: ["To attract bees and butterflies", "To scare the clouds", "To make noise"],
        fact: "Insects visit flowers and carry pollen, which helps plants make seeds.",
      },
      {
        emoji: "🥀",
        q: "What happens to a plant that gets no water for a long time?",
        options: ["It wilts and may die", "It grows faster", "It turns into a rock"],
        fact: "Plants need water to stay strong and make food.",
      },
      {
        emoji: "🌹",
        q: "Which part of a rose can prick your finger?",
        options: ["Thorns", "Petals", "Roots"],
        fact: "Thorns help protect the plant from animals that want to eat it.",
      },
      {
        emoji: "🍋",
        q: "Which fruit tastes very sour?",
        options: ["Lemon", "Banana", "Watermelon"],
        fact: "Lemons have a lot of citric acid, which makes them sour.",
      },
      {
        emoji: "🥬",
        q: "Which part of the lettuce plant do we eat?",
        options: ["Leaves", "Roots", "Seeds"],
        fact: "Lettuce and spinach are leafy vegetables.",
      },
      {
        emoji: "🌻",
        q: "Which flower follows the Sun across the sky when it is young?",
        options: ["Sunflower", "Cactus", "Orchid"],
        fact: "Young sunflowers turn their faces to face the Sun all day.",
      },
      {
        emoji: "🌳",
        q: "Which is the biggest kind of plant?",
        options: ["Tree", "Grass", "Moss"],
        fact: "Trees have strong woody trunks that can grow very tall.",
      },
      {
        emoji: "🥭",
        q: "What is inside a mango that can grow into a new tree?",
        options: ["A seed", "The skin", "The juice"],
        fact: "If you plant the seed in soil, it can grow into a new mango tree.",
      },
      {
        emoji: "🪵",
        q: "What can the rings inside a tree trunk tell us?",
        options: ["How old the tree is", "How heavy it is", "What color it is"],
        fact: "A tree usually grows one new ring every year.",
      },
      {
        emoji: "🌊",
        q: "Which plant-like living thing grows in the sea?",
        options: ["Seaweed", "Cactus", "Pine tree"],
        fact: "Seaweed grows in the sea and gives food and shelter to many sea animals.",
      },
      {
        emoji: "🪱",
        q: "What can we add to soil to help plants grow well?",
        options: ["Compost", "Plastic", "Paint"],
        fact: "Compost is made from old leaves and food scraps. It gives plants nutrients.",
      },
    ],
  },

  body: {
    name: "My Body",
    emoji: "🧍",
    color: "#e84393",
    questions: [
      {
        emoji: "❤️",
        q: "Which organ pumps blood around your body?",
        options: ["Heart", "Stomach", "Lungs"],
        fact: "Your heart is about the size of your fist. It beats all day and all night.",
      },
      {
        emoji: "👃",
        q: "Which part of the body do we use to smell?",
        options: ["Nose", "Ears", "Hands"],
        fact: "Your nose can smell flowers, food, and even smoke to keep you safe.",
      },
      {
        emoji: "🖐️",
        q: "How many senses do we usually count?",
        options: ["5", "3", "10"],
        fact: "The 5 senses are sight, hearing, smell, taste, and touch.",
      },
      {
        emoji: "🫁",
        q: "Which organs help you breathe?",
        options: ["Lungs", "Kidneys", "Elbows"],
        fact: "Your lungs take in oxygen from the air and push out carbon dioxide.",
      },
      {
        emoji: "💀",
        q: "Which part of the body protects your brain?",
        options: ["Skull", "Skin only", "Hair"],
        fact: "Your skull is a hard bone that works like a helmet for your brain.",
      },
      {
        emoji: "🦴",
        q: "What are the hard parts inside your body that hold you up?",
        options: ["Bones", "Muscles only", "Blood"],
        fact: "Adults have 206 bones. Babies have even more when they are born!",
      },
      {
        emoji: "🦷",
        q: "How often should you brush your teeth?",
        options: ["Every morning and night", "Once a month", "Never"],
        fact: "Brushing twice a day takes away germs and keeps your teeth strong.",
      },
      {
        emoji: "🍽️",
        q: "Where does food go after you swallow it?",
        options: ["Stomach", "Lungs", "Brain"],
        fact: "Your stomach mixes food with special juices to break it down.",
      },
      {
        emoji: "💪",
        q: "What helps you move your arms and legs?",
        options: ["Muscles", "Hair", "Nails"],
        fact: "Muscles pull on your bones to make your body move.",
      },
      {
        emoji: "🧼",
        q: "What helps stop germs from spreading?",
        options: ["Washing hands with soap", "Touching your face often", "Never taking a bath"],
        fact: "Washing your hands with soap and water for 20 seconds takes away germs.",
      },
      {
        emoji: "👀",
        q: "Which body part helps you see?",
        options: ["Eyes", "Ears", "Elbows"],
        fact: "Your eyes take in light so your brain can make a picture.",
      },
      {
        emoji: "👂",
        q: "Which body part helps you hear?",
        options: ["Ears", "Eyes", "Knees"],
        fact: "Sounds make tiny parts inside your ear shake, and your brain understands them.",
      },
      {
        emoji: "👅",
        q: "Which body part helps you taste food?",
        options: ["Tongue", "Teeth", "Hair"],
        fact: "Your tongue has tiny taste buds for sweet, sour, salty, and bitter.",
      },
      {
        emoji: "🧠",
        q: "Which organ controls your whole body and helps you think?",
        options: ["Brain", "Heart", "Lungs"],
        fact: "Your brain sends messages to every part of your body.",
      },
      {
        emoji: "🩸",
        q: "What color is human blood?",
        options: ["Red", "Blue", "Green"],
        fact: "Blood is red. It carries oxygen to every part of your body.",
      },
      {
        emoji: "💤",
        q: "About how many hours of sleep does a school-age child need each night?",
        options: ["9 to 11 hours", "2 hours", "20 hours"],
        fact: "Sleep helps your body grow and helps your brain remember what you learned.",
      },
      {
        emoji: "🥦",
        q: "Which foods help you grow strong and healthy?",
        options: ["Fruits and vegetables", "Candy", "Chips"],
        fact: "Fruits and vegetables give your body vitamins and fiber.",
      },
      {
        emoji: "💧",
        q: "What should you drink a lot of every day?",
        options: ["Water", "Soda", "Coffee"],
        fact: "Your body needs water to stay cool and work well.",
      },
      {
        emoji: "🦵",
        q: "Which joint lets your leg bend in the middle?",
        options: ["Knee", "Elbow", "Wrist"],
        fact: "Your knee joint lets you walk, run, and jump.",
      },
      {
        emoji: "🖐️",
        q: "How many fingers do you have on both hands?",
        options: ["10", "8", "12"],
        fact: "You have 5 fingers on each hand, so 10 in all.",
      },
      {
        emoji: "🦷",
        q: "What do we call the first set of teeth that fall out when you grow?",
        options: ["Baby teeth", "Old teeth", "Fake teeth"],
        fact: "Baby teeth fall out, and bigger adult teeth grow in their place.",
      },
      {
        emoji: "🤧",
        q: "What should you do when you sneeze?",
        options: ["Cover your nose and mouth with a tissue or elbow", "Sneeze on your friend", "Hold your breath"],
        fact: "Covering your sneeze stops germs from flying to other people.",
      },
      {
        emoji: "🏃",
        q: "What helps make your heart and muscles strong?",
        options: ["Exercise", "Sitting all day", "Skipping meals"],
        fact: "Running, dancing, and playing outside are great exercise.",
      },
      {
        emoji: "🦠",
        q: "What can germs do to us?",
        options: ["Make us sick", "Make us taller", "Make us faster"],
        fact: "Germs are tiny living things. Washing your hands helps keep them away.",
      },
      {
        emoji: "🌞",
        q: "What does sunlight help your skin make?",
        options: ["Vitamin D", "Sugar", "Hair"],
        fact: "Vitamin D helps your bones. But do not stay too long in strong sun.",
      },
      {
        emoji: "🫀",
        q: "What can you feel on your wrist that shows your heart is beating?",
        options: ["Pulse", "Hiccup", "Sneeze"],
        fact: "Each beat of your heart pushes blood, and you can feel it as a pulse.",
      },
      {
        emoji: "🧒",
        q: "What is the covering on the outside of your body called?",
        options: ["Skin", "Bones", "Brain"],
        fact: "Skin is your body's largest organ. It protects you from germs.",
      },
      {
        emoji: "😉",
        q: "What do your eyelids do when you blink?",
        options: ["Keep your eyes clean and wet", "Help you hear", "Help you smell"],
        fact: "Blinking spreads moisture over your eyes and cleans away dust.",
      },
      {
        emoji: "🤲",
        q: "Which part of your body helps you pick up and hold things?",
        options: ["Hands and fingers", "Ears", "Teeth"],
        fact: "Your thumbs and fingers work together to grip things.",
      },
      {
        emoji: "🧘",
        q: "What is a healthy way to calm down when you feel upset?",
        options: ["Take slow, deep breaths", "Shout loudly", "Hit something"],
        fact: "Slow breathing helps your body relax. You can also talk to someone you trust.",
      },
    ],
  },

  space: {
    name: "Space",
    emoji: "🚀",
    color: "#6c5ce7",
    questions: [
      {
        emoji: "🌍",
        q: "What is the name of the planet we live on?",
        options: ["Earth", "Mars", "Venus"],
        fact: "Earth is the only planet we know that has living things.",
      },
      {
        emoji: "☀️",
        q: "What is the closest star to Earth?",
        options: ["The Sun", "The Moon", "Mars"],
        fact: "The Sun is a star. It gives us light and heat.",
      },
      {
        emoji: "🔴",
        q: "Which planet is called the Red Planet?",
        options: ["Mars", "Jupiter", "Earth"],
        fact: "Mars looks red because its dust has a lot of iron, like rust.",
      },
      {
        emoji: "🌙",
        q: "What travels around the Earth?",
        options: ["The Moon", "The Sun", "A cloud"],
        fact: "The Moon takes about one month to go around the Earth.",
      },
      {
        emoji: "🪐",
        q: "How many planets are in our solar system?",
        options: ["8", "5", "12"],
        fact: "The 8 planets are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.",
      },
      {
        emoji: "🌌",
        q: "Which is the biggest planet?",
        options: ["Jupiter", "Earth", "Mars"],
        fact: "Jupiter is so big that more than 1,000 Earths could fit inside it!",
      },
      {
        emoji: "👩‍🚀",
        q: "What do we call a person who travels to space?",
        options: ["Astronaut", "Farmer", "Pilot only"],
        fact: "Astronauts wear special suits and train for a long time before going to space.",
      },
      {
        emoji: "🌗",
        q: "What gives us day and night?",
        options: ["The Earth spinning", "The Sun moving around us", "Clouds"],
        fact: "The Earth spins once about every 24 hours. When your side faces the Sun, it is day.",
      },
      {
        emoji: "🌠",
        q: "What is a shooting star really?",
        options: ["A small space rock burning up", "A star falling down", "A flying airplane"],
        fact: "A shooting star is a meteor. It glows as it burns up when it enters the air around Earth.",
      },
      {
        emoji: "🛰️",
        q: "What goes around the Earth and helps us see weather pictures from space?",
        options: ["A satellite", "A kite", "A cloud"],
        fact: "Satellites orbit the Earth. They help with weather, maps, and TV signals.",
      },
      {
        emoji: "🌙",
        q: "How does the Moon shine?",
        options: ["It reflects sunlight", "It makes its own light", "It has lamps"],
        fact: "The Moon does not make its own light. It bounces back light from the Sun.",
      },
      {
        emoji: "🌑",
        q: "Which planet is closest to the Sun?",
        options: ["Mercury", "Neptune", "Earth"],
        fact: "Mercury is the closest planet to the Sun and the smallest one.",
      },
      {
        emoji: "🪐",
        q: "Which planet has big, beautiful rings?",
        options: ["Saturn", "Mars", "Mercury"],
        fact: "Saturn's rings are made of pieces of ice and rock.",
      },
      {
        emoji: "🧊",
        q: "Which planet is the farthest from the Sun?",
        options: ["Neptune", "Venus", "Mars"],
        fact: "Neptune is very cold and windy.",
      },
      {
        emoji: "☄️",
        q: "What is a comet mostly made of?",
        options: ["Ice, dust, and rock", "Gold", "Fire only"],
        fact: "When a comet comes near the Sun, it grows a glowing tail.",
      },
      {
        emoji: "🚀",
        q: "How does a rocket go up into space?",
        options: ["Its engines push hot gas downward", "It flaps big wings", "It uses sails"],
        fact: "The hot gas goes down, so the rocket goes up.",
      },
      {
        emoji: "🌍",
        q: "What is the shape of the Earth?",
        options: ["Round like a ball", "Flat like a plate", "Square like a box"],
        fact: "The Earth is almost a perfect ball.",
      },
      {
        emoji: "🌓",
        q: "What do we call the changing shapes of the Moon?",
        options: ["Phases", "Seasons", "Waves"],
        fact: "The Moon goes through all its phases in about one month.",
      },
      {
        emoji: "👨‍🚀",
        q: "Who was the first person to walk on the Moon?",
        options: ["Neil Armstrong", "Isaac Newton", "Thomas Edison"],
        fact: "Neil Armstrong walked on the Moon in 1969.",
      },
      {
        emoji: "🔭",
        q: "What do we use to see faraway stars and planets?",
        options: ["Telescope", "Microscope", "Ruler"],
        fact: "A telescope makes faraway things look closer. A microscope is for tiny things.",
      },
      {
        emoji: "☀️",
        q: "What is the Sun made of?",
        options: ["Hot glowing gas", "Rock", "Water"],
        fact: "The Sun is a giant ball of very hot gas.",
      },
      {
        emoji: "🌌",
        q: "What is the name of the galaxy where we live?",
        options: ["Milky Way", "Sunny Way", "Star Road"],
        fact: "The Milky Way has hundreds of billions of stars.",
      },
      {
        emoji: "🌡️",
        q: "Which planet is the hottest?",
        options: ["Venus", "Mercury", "Neptune"],
        fact: "Venus is even hotter than Mercury because its thick clouds trap heat.",
      },
      {
        emoji: "✨",
        q: "A group of stars that makes a picture in the sky is called a...",
        options: ["Constellation", "Planet", "Comet"],
        fact: "The Big Dipper and Orion are famous constellations.",
      },
      {
        emoji: "🗓️",
        q: "How long does the Earth take to go around the Sun?",
        options: ["One year", "One day", "One hour"],
        fact: "It takes about 365 days for the Earth to go around the Sun.",
      },
      {
        emoji: "🌃",
        q: "Why is it night time where you live?",
        options: ["Your side of Earth faces away from the Sun", "The Sun turns off", "Clouds eat the Sun"],
        fact: "The Earth spins, so each place gets day and night.",
      },
      {
        emoji: "⬇️",
        q: "What force keeps us on the ground?",
        options: ["Gravity", "Wind", "Magic"],
        fact: "Gravity pulls things toward the Earth. On the Moon, gravity is weaker, so you can jump higher.",
      },
      {
        emoji: "🧑‍🚀",
        q: "Why do astronauts float inside a space station?",
        options: ["They feel weightless", "The air is very strong", "The room is very small"],
        fact: "The space station and the astronauts are falling around the Earth together, so they feel weightless.",
      },
      {
        emoji: "🛸",
        q: "What is the name of the space home where astronauts live and work?",
        options: ["International Space Station", "Moon house", "Star hotel"],
        fact: "The space station goes around the Earth about every 90 minutes.",
      },
      {
        emoji: "🔥",
        q: "Which is bigger, the Sun or the Earth?",
        options: ["The Sun", "The Earth", "They are the same size"],
        fact: "More than one million Earths could fit inside the Sun!",
      },
    ],
  },

  weather: {
    name: "Weather & Earth",
    emoji: "🌦️",
    color: "#0984e3",
    questions: [
      {
        emoji: "🧊",
        q: "What do we call water when it freezes?",
        options: ["Ice", "Steam", "Smoke"],
        fact: "Water freezes into ice when it gets very, very cold.",
      },
      {
        emoji: "🌈",
        q: "What can you see in the sky after rain, when the sun comes out?",
        options: ["A rainbow", "A volcano", "A comet"],
        fact: "A rainbow shows up when sunlight passes through tiny drops of water.",
      },
      {
        emoji: "☁️",
        q: "Clouds are made of tiny drops of...",
        options: ["Water", "Cotton", "Sand"],
        fact: "Clouds are made of tiny drops of water or ice floating in the sky.",
      },
      {
        emoji: "🌬️",
        q: "What do we call air that moves?",
        options: ["Wind", "Rain", "Snow"],
        fact: "Wind can turn windmills and help kites fly.",
      },
      {
        emoji: "⚡",
        q: "In a storm, what do you notice first?",
        options: ["The lightning", "The thunder", "They come at the same time"],
        fact: "Light travels faster than sound, so we see lightning before we hear thunder.",
      },
      {
        emoji: "♨️",
        q: "When water is heated a lot, it turns into...",
        options: ["Steam", "Ice", "Sand"],
        fact: "Hot water changes into steam, which is a gas called water vapor.",
      },
      {
        emoji: "🌋",
        q: "What is a mountain that can shoot out hot lava called?",
        options: ["Volcano", "Island", "Desert"],
        fact: "Lava is melted rock from deep inside the Earth.",
      },
      {
        emoji: "🌊",
        q: "Which is the largest ocean on Earth?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Arctic Ocean"],
        fact: "The Pacific Ocean is the largest and the deepest ocean in the world.",
      },
      {
        emoji: "💧",
        q: "When a puddle dries up in the sun, where does the water go?",
        options: ["Into the air as water vapor", "Into the ground only", "It disappears forever"],
        fact: "The Sun heats the water and turns it into water vapor. This is called evaporation.",
      },
      {
        emoji: "🌍",
        q: "What covers most of the Earth's surface?",
        options: ["Water", "Sand", "Ice"],
        fact: "About 7 out of every 10 parts of the Earth's surface are covered by water.",
      },
      {
        emoji: "🌧️",
        q: "What do we call the water that falls from clouds?",
        options: ["Rain", "Sand", "Smoke"],
        fact: "Rain forms when tiny drops in clouds join together and become heavy.",
      },
      {
        emoji: "❄️",
        q: "What falls from the sky as soft white flakes in very cold places?",
        options: ["Snow", "Sand", "Leaves"],
        fact: "Snowflakes are tiny ice crystals. Each one has its own shape.",
      },
      {
        emoji: "🌡️",
        q: "What do we use to measure temperature?",
        options: ["Thermometer", "Ruler", "Clock"],
        fact: "A thermometer tells us how hot or cold something is.",
      },
      {
        emoji: "🌪️",
        q: "What do we call a spinning column of wind that touches the ground?",
        options: ["Tornado", "Rainbow", "Wave"],
        fact: "A tornado is very strong. People should go to a safe shelter.",
      },
      {
        emoji: "🌀",
        q: "What do we call a very strong storm with heavy rain and wind that forms over the ocean?",
        options: ["Typhoon", "Breeze", "Fog"],
        fact: "In the Philippines, a typhoon is called a bagyo. Listen to weather news to stay safe.",
      },
      {
        emoji: "🌫️",
        q: "What is fog?",
        options: ["A cloud close to the ground", "Smoke from a fire", "Frozen rain"],
        fact: "Fog is made of tiny water drops floating near the ground.",
      },
      {
        emoji: "🏔️",
        q: "What is the highest mountain in the world?",
        options: ["Mount Everest", "Mount Fuji", "Mount Apo"],
        fact: "Mount Everest is about 8,849 meters tall.",
      },
      {
        emoji: "🌍",
        q: "Which layer of the Earth do we live on?",
        options: ["The crust", "The core", "The mantle"],
        fact: "The crust is the thin outer layer of rock on the Earth.",
      },
      {
        emoji: "🗺️",
        q: "How many continents are there?",
        options: ["7", "3", "12"],
        fact: "The 7 continents are Asia, Africa, North America, South America, Antarctica, Europe, and Australia.",
      },
      {
        emoji: "🏝️",
        q: "What do we call land that is surrounded by water?",
        options: ["Island", "Desert", "Valley"],
        fact: "The Philippines is made of more than 7,000 islands.",
      },
      {
        emoji: "🏜️",
        q: "Which place gets very little rain?",
        options: ["Desert", "Rainforest", "Swamp"],
        fact: "Deserts are very dry. Only special plants and animals can live there.",
      },
      {
        emoji: "🌴",
        q: "Which place has many tall trees and lots of rain?",
        options: ["Rainforest", "Desert", "Beach"],
        fact: "Rainforests are home to millions of kinds of plants and animals.",
      },
      {
        emoji: "🌊",
        q: "What makes the sea rise and fall along the shore each day?",
        options: ["Tides", "Clouds", "Volcanoes"],
        fact: "The Moon's gravity pulls on the sea and makes the tides.",
      },
      {
        emoji: "💦",
        q: "What is the name of the journey of water going up as vapor and coming down as rain?",
        options: ["The water cycle", "The bike cycle", "The wind cycle"],
        fact: "The same water is used again and again in the water cycle.",
      },
      {
        emoji: "🔆",
        q: "What kind of energy comes from the Sun?",
        options: ["Solar energy", "Magnet energy", "Ice energy"],
        fact: "Solar panels turn sunlight into electricity.",
      },
      {
        emoji: "♻️",
        q: "What helps keep our Earth clean?",
        options: ["Recycling and using the trash bin", "Throwing trash in rivers", "Burning plastic"],
        fact: "Recycling saves energy and keeps trash out of nature.",
      },
      {
        emoji: "🥶",
        q: "Which season is the coldest?",
        options: ["Winter", "Summer", "Spring"],
        fact: "In the Philippines, we mostly have two seasons: the dry season and the rainy season.",
      },
      {
        emoji: "🌐",
        q: "What is the layer of air around the Earth called?",
        options: ["Atmosphere", "Ocean", "Crust"],
        fact: "The atmosphere gives us air to breathe and protects us from too much heat from the Sun.",
      },
      {
        emoji: "🌅",
        q: "In which direction does the Sun rise?",
        options: ["East", "West", "South"],
        fact: "The Sun rises in the east and sets in the west.",
      },
      {
        emoji: "🫨",
        q: "What do we call the shaking of the ground?",
        options: ["Earthquake", "Rainbow", "Snowfall"],
        fact: "During an earthquake, remember: drop, cover, and hold on.",
      },
    ],
  },
};

const MAX_QUESTIONS = 30; // how many questions the child answers in one round
const TIME_PER_QUESTION = 20; // seconds for each question
const AUTO_NEXT_DELAY = 1200; // milliseconds to wait before the next question (correct answer)

// ---------- Game state ----------
let topicKey = "mix";
let round = [];
let current = 0;
let score = 0;
let answered = false;
let timeLeft = TIME_PER_QUESTION;
let timerId = null;

// ---------- Page elements ----------
const $ = (id) => document.getElementById(id);
const menuEl = $("menu");
const gameEl = $("game");
const endEl = $("end");
const topicsEl = $("topics");
const emojiEl = $("emoji");
const questionEl = $("question");
const choicesEl = $("choices");
const factEl = $("fact");
const nextBtn = $("next");
const timeEl = $("time-left");
const timerBar = $("timer-bar");

// ---------- Helpers ----------
function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function show(section) {
  menuEl.hidden = section !== "menu";
  gameEl.hidden = section !== "game";
  endEl.hidden = section !== "end";
}

// ---------- Menu ----------
function buildMenu() {
  topicsEl.innerHTML = "";

  const mixBtn = document.createElement("button");
  mixBtn.className = "mix";
  mixBtn.style.background = "#fdcb6e";
  mixBtn.style.color = "#2d3436";
  mixBtn.innerHTML = "<span>🎲</span>Mix of everything";
  mixBtn.addEventListener("click", () => startRound("mix"));
  topicsEl.appendChild(mixBtn);

  Object.entries(TOPICS).forEach(([key, topic]) => {
    const btn = document.createElement("button");
    btn.style.background = topic.color;
    btn.innerHTML = `<span>${topic.emoji}</span>${topic.name}`;
    btn.addEventListener("click", () => startRound(key));
    topicsEl.appendChild(btn);
  });
}

// ---------- Round ----------
function startRound(key) {
  topicKey = key;
  const pool =
    key === "mix"
      ? Object.values(TOPICS).flatMap((t) => t.questions)
      : TOPICS[key].questions;

  round = shuffle(pool).slice(0, MAX_QUESTIONS); // random questions
  current = 0;
  score = 0;

  $("question-total").textContent = round.length;
  show("game");
  showQuestion();
}

function showQuestion() {
  const item = round[current];
  answered = false;

  $("question-number").textContent = current + 1;
  $("score").textContent = score;
  emojiEl.textContent = item.emoji;
  questionEl.textContent = item.q;
  factEl.hidden = true;
  nextBtn.hidden = true;

  // the correct answer is always the first option, so we remember it
  const correct = item.options[0];
  choicesEl.innerHTML = "";
  shuffle(item.options).forEach((text) => {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.addEventListener("click", () => checkAnswer(btn, text === correct));
    choicesEl.appendChild(btn);
  });

  startTimer();
}

function checkAnswer(btn, isCorrect) {
  if (answered) return;
  answered = true;
  stopTimer();

  const item = round[current];
  const buttons = [...choicesEl.querySelectorAll("button")];
  buttons.forEach((b) => {
    b.disabled = true;
    if (b.textContent === item.options[0]) b.classList.add("right");
  });

  if (isCorrect) {
    score++;
    $("score").textContent = score;
    factEl.textContent = `🎉 Great job! ${item.fact}`;
    factEl.hidden = false;
    // correct answer: go to the next question automatically
    setTimeout(nextQuestion, AUTO_NEXT_DELAY);
    return;
  }

  // wrong answer: show the right answer and the fun fact, then wait for "Next"
  btn.classList.add("wrong");
  factEl.textContent = `Nice try! The answer is "${item.options[0]}". ${item.fact}`;
  factEl.hidden = false;
  nextBtn.textContent = current + 1 < round.length ? "Next ➡" : "See my score 🏆";
  nextBtn.hidden = false;
}

// ---------- Timer ----------
function startTimer() {
  stopTimer();
  timeLeft = TIME_PER_QUESTION;

  // reset the bar to full without animation
  timerBar.style.transition = "none";
  timerBar.style.width = "100%";
  timerBar.offsetWidth; // force the browser to apply it
  timerBar.style.transition = "";

  updateTimer();
  timerId = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) timeUp();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerId);
  timerId = null;
}

function updateTimer() {
  timeEl.textContent = timeLeft;
  timerBar.style.width = `${(timeLeft / TIME_PER_QUESTION) * 100}%`;
  timerBar.classList.toggle("warning", timeLeft <= 10 && timeLeft > 5);
  timerBar.classList.toggle("danger", timeLeft <= 5);
  timeEl.parentElement.classList.toggle("danger", timeLeft <= 5);
}

// The child ran out of time: show the answer and the fun fact
function timeUp() {
  if (answered) return;
  answered = true;
  stopTimer();

  const item = round[current];
  choicesEl.querySelectorAll("button").forEach((b) => {
    b.disabled = true;
    if (b.textContent === item.options[0]) b.classList.add("right");
  });

  factEl.textContent = `⏰ Time is up! The answer is "${item.options[0]}". ${item.fact}`;
  factEl.hidden = false;
  nextBtn.textContent = current + 1 < round.length ? "Next ➡" : "See my score 🏆";
  nextBtn.hidden = false;
}

function nextQuestion() {
  speechSynthesis.cancel();
  current++;
  if (current < round.length) {
    showQuestion();
  } else {
    finish();
  }
}

// ---------- Result ----------
function finish() {
  const ratio = score / round.length;
  const trophy = ratio >= 0.9 ? "🏆🏆🏆" : ratio >= 0.6 ? "🥈🥈" : "🌱";
  const message =
    ratio >= 0.9 ? "Wow! You are a science star!" :
    ratio >= 0.6 ? "Great work! Keep learning!" :
    "Good try! Play again and learn more facts.";

  show("end");
  endEl.innerHTML = `
    <div class="emoji">${trophy}</div>
    <h2>You got ${score} out of ${round.length}!</h2>
    <p>${message}</p>
    <div class="end-buttons">
      <button class="primary" id="again">Play again 🔁</button>
      <button class="primary" id="menu-btn">Choose topic 🏠</button>
    </div>
  `;
  $("again").addEventListener("click", () => startRound(topicKey));
  $("menu-btn").addEventListener("click", () => show("menu"));
}

// ---------- Listen (read the question out loud) ----------
$("listen").addEventListener("click", () => {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const item = round[current];
  const utter = new SpeechSynthesisUtterance(item.q);
  utter.lang = "en-US";
  utter.rate = 0.85;
  speechSynthesis.speak(utter);
});

nextBtn.addEventListener("click", nextQuestion);

// ---------- Start ----------
buildMenu();
show("menu");