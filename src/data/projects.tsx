import * as projectImageImports from "./projectImageImports";

export interface ProjectDetails {
  name: string;
  // To be replaced by summary/roles/responsibilities
  descriptionSummaryExtra?: string;
  descriptionSummary: string;
  descriptionRole: string;
  descriptionResponsibilities: string[];
  // Positive value. Higher values will be priorotised.
  weight: number;
  role?: string;
  platform?: string;
  engine?: string;
  genre?: string;
  link?: string;
  linkText?: string;
  linkNote?: string;
  images: ProjectImage[];
  accoladeImage?: ProjectImage;
  videoLink?: string;
}

export interface ProjectImage {
  imageSrc: string;
  imageAlt: string;
  displayOnCard?: boolean;
  displayOnModal?: boolean;
}

export const projectArray: ProjectDetails[] = [
  {
    name: "Blossom",
    descriptionSummaryExtra: 'The last world tree in existence is dying. You are a friendly gardener that is on a mission to heal it with your flowers. Maintain the status quo of the soil so your seeds can grow and bloom. As you complete levels more seeds and flowers become available to you.',
    descriptionSummary: 'Blossom is a casual strategy puzzle game made during the Global Game Jam over 48 hours in a small team of 4. The theme of the game jam was \'Repair\'. Players are tasked with helping heal the withering world tree by accumulating points earned by growing different flowers. Players must manage the soil\'s water retention as well as each flower\'s preferred light level as some will only grow either at day or at night.',
    descriptionRole: 'During the project I acted as an all rounder, helping out wherever needed. I assisted in mechanic design, mechanic implementation, asset sourcing and asset implementation.',
    descriptionResponsibilities: [
      'Tutorial implementation',
      'Level management',
      'Flower asset implementation',
    ],
    weight: 30,
    role: 'Generalist',
    platform: 'PC',
    engine: 'Unity',
    genre: 'Casual Puzzle Stategy',
    link: 'https://globalgamejam.org/2020/games/blossom-0',
    linkText: 'Download here',
    linkNote: 'Username on the GGJ website is \'Epidemic\'.',
    images: [
      {
        imageAlt: "A world tree in the middle of a scorched landscape, slowly healing the environment. The game title, Blossom, is overlayed on top.",
        imageSrc: projectImageImports.blossomFeatureImage,
        displayOnCard: true,
        displayOnModal: false,
      },
      {
        imageAlt: "A still of the world tree healing the environment.",
        imageSrc: projectImageImports.blossomProgressImage,
        displayOnCard: false,
        displayOnModal: true,
      },
      {
        imageAlt: "A blue flower in the middle of it's effect.",
        imageSrc: projectImageImports.blossomEffectImage,
        displayOnCard: false,
        displayOnModal: true,
      },
      {
        imageAlt: "A zoomed out shot of the island before the player begins healing it.",
        imageSrc: projectImageImports.blossomStartImage,
        displayOnCard: false,
        displayOnModal: true,
      },
      {
        imageAlt: "A zoomed out shot of the island, now healed and green.",
        imageSrc: projectImageImports.blossomHealedImage,
        displayOnCard: false,
        displayOnModal: true,
      },
    ],
    accoladeImage: {
      imageAlt: 'Made during the Global Game Jam.',
      imageSrc: projectImageImports.ggjLogo,
    },
  },
  {
    name: "Briefcase Mystery Demo",
    descriptionSummary: 'Briefcase Mystery Demo is a VR escape room style puzzle game. The game was developed by a team of 3 as a way to showcase a snippet of what a full escape room game may be. Players follow environmental clues in order to solve puzzles and open the briefcase abandoned in their train cart. The puzzles in this game are a simple lock, a game of "Simon says" and a water pipe puzzle.',
    descriptionRole: 'As the sole programmer of the project, I implemented teleportation movement as well as improved hand hitboxes. Mechanically, I contributed all puzzle implementations, victory conditions and level management.',
    descriptionResponsibilities: [
      'Improved hand hitboxes',
      '4 distinct puzzles with their own win conditions',
      'Object snapping with predefined orientations based on object angle',
    ],
    weight: 80,
    role: 'Developer',
    platform: 'Meta Quest (VR)',
    engine: 'Unity',
    genre: 'Puzzle',
    link: 'https://drive.google.com/file/d/1byoBKOIQpcOA3eRaVlLOG-xFfDp518Bp/view',
    linkText: 'Download here',
    images: [
      {
        imageAlt: "A briefcase with a three number input on top.",
        imageSrc: projectImageImports.briefcaseMysteryDemoFeatureImage,
        displayOnCard: true,
        displayOnModal: false,
      },
      {
        imageAlt: "A door with a glass window into the puzzle room. There are instructions written on the glass.",
        imageSrc: projectImageImports.briefcaseMysteryDemoStartRoomImage,
        displayOnCard: false,
        displayOnModal: true,
      },
      {
        imageAlt: "A briefcase with a three number input on top.",
        imageSrc: projectImageImports.briefcaseMysteryDemoBriefcaseImage,
        displayOnCard: false,
        displayOnModal: true,
      },
      {
        imageAlt: "A radio next to six numbered buttons.",
        imageSrc: projectImageImports.briefcaseMysteryDemoSimonSaysImage,
        displayOnCard: false,
        displayOnModal: true,
      },
      {
        imageAlt: "A overview of the puzzle room. Visible are teh briefcase, the radio, and the pipe puzzle frame.",
        imageSrc: projectImageImports.briefcaseMysteryDemoRoomOverviewImage,
        displayOnCard: false,
        displayOnModal: true,
      },
    ],
  },
  {
    name: "Bumble Bots",
    descriptionSummary: 'This VR game was created during a week long game jam. The design of the game aimed to explore interesting new ideas, specifically the feeling of inertia. The main highlight of the game is the rope swing mechanic that players use to traverse the floating environment to chase down flying robots. Catching robots adds time for the player.',
    descriptionRole: 'During the project I assisted in creating and implementing the level design.',
    descriptionResponsibilities: [
      'Asset sourcing',
      'Level design',
    ],
    weight: 50,
    role: 'Level Designer',
    platform: 'Meta Quest (VR)',
    engine: 'Unity',
    genre: 'Arcade',
    videoLink: 'https://youtu.be/9nHEGI6T5-M?si=j1KsZtTTtPreqh4v',
    images: [
      {
        imageAlt: "The view from a circular cage. The floor is covered in lava and mechanical debrise is floating in the air.",
        imageSrc: projectImageImports.bumbleBotsFeatureImage,
        displayOnCard: true,
        displayOnModal: true,
      },
      {
        imageAlt: "The player looks down at an island in the center of the lava pool. They are surrounded by debrise.",
        imageSrc: projectImageImports.bumbleBotsFlight1Image,
        displayOnCard: false,
        displayOnModal: true,
      },
      {
        imageAlt: "The player looks up at the level boundary. On the near by floating islands are large towers and machines.",
        imageSrc: projectImageImports.bumbleBotsFlight2Image,
        displayOnCard: false,
        displayOnModal: true,
      },
      {
        imageAlt: "An overview from above of the game level. There is a large circle of lava in the middle with small islands and debrise floating round it.",
        imageSrc: projectImageImports.bumbleBotsLevelImage,
        displayOnCard: false,
        displayOnModal: true,
      },
    ],
  },
  {
    name: "Charge Rider",
    descriptionSummary: 'Charge Rider is an arcade platformer focused on movement and made in collaboration with The Brisbane Powerhouse. The player skates across different areas of the Powerhouse, jumping between walls and railings, in order to power all of the lights. New power-ups are unlocked which completing levels, giving players new ways to tackle past challenges while going for a high score.',
    descriptionRole: 'As a programmer on the project, I focused on the scoring mechanic, allowing the player to achieve and maintain combos.',
    descriptionResponsibilities: [
      'Scoreing mechanics',
      'Level end sequence'
    ],
    weight: 60,
    role: 'Developer',
    platform: 'PC',
    genre: 'Arcade Platformer',
    engine: 'Unity',
    images: [
      {
        imageAlt: "A dark view of the inside of The Brisbane Powerhouse. There is neon lighting on walls and behind the skater moving across the image.",
        imageSrc: projectImageImports.chargeRiderFeatureImage,
        displayOnCard: true,
        displayOnModal: true,
      },
    ],
    accoladeImage: {
      imageAlt: 'Made in collaboration with The Brisbane Powerhouse.',
      imageSrc: projectImageImports.brisbanePowerhouseLogo,
    },
  },
  {
    name: "Stranded",
    descriptionSummary: 'Stranded is a puzzle adventure game focused on crafting and trading. After a boat crash, the player finds themselves on an island having to fix up their boat and trade with the locals in order to leave.',
    descriptionRole: 'As a programmer working on this project, I was in charge of the crafting system in the game.',
    descriptionResponsibilities: [
      'Different sized crafting grids',
      'Viewable and craftable recipes',
      'Machines used for crafting can break/jam and then can be fixed',
    ],
    weight: 70,
    role: 'Developer',
    platform: 'PC',
    engine: 'Unity',
    genre: 'Adventure',
    images: [
      {
        imageAlt: "A market square at sunset. The game title, Stranded, is overlayed on top.",
        imageSrc: projectImageImports.strandedFeatureImage,
        displayOnCard: true,
        displayOnModal: true,
      },
      {
        imageAlt: "A rocky beach. A floating island with a waterfall is ahead.",
        imageSrc: projectImageImports.strandedWaterfallImage,
        displayOnCard: false,
        displayOnModal: true,
      },
      {
        imageAlt: "A man requesting a polished rock.",
        imageSrc: projectImageImports.strandedNPCImage,
        displayOnCard: false,
        displayOnModal: true,
      },
      {
        imageAlt: "A workbench crafting menu. Shows a list of possible recipes and an inventory.",
        imageSrc: projectImageImports.strandedCraftingImage,
        displayOnCard: false,
        displayOnModal: true,
      },
      {
        imageAlt: "A trading menu and an inventory.",
        imageSrc: projectImageImports.strandedTradingImage,
        displayOnCard: false,
        displayOnModal: true,
      },
    ],
  },
  {
    name: "Wizard Cat",
    descriptionSummaryExtra: 'Disaster! Wizard Cat has been thrown from their home world into a strange new land. Luckily, they\'ve stumbled across a tower that must have also belonged to a mystical being. Search the tower for items and complete puzzles to activate the portal and find your way home! Search the tower for clues on which items in what combination will lead you back home!',
    descriptionSummary: 'Wizard Cat is a short puzzle game made during the Global Game Jam over 48 hour game jam in a small team of 5. The game jam theme was \'Lost and Found\'. Players explore a small tower environment, collecting clues and solving short puzzles in order to identify the three items needed to escape.',
    descriptionRole: 'As the sole programmer for the project, I was responsible for player movement, object interaction and puzzle implementation.',
    descriptionResponsibilities: [
      'Dynamic 5 object inventory',
      'Using and dropping items found in inventory to interact with the world',
      'Mirroring puzzle',
    ],
    weight: 40,
    role: 'Developer',
    platform: 'PC',
    engine: 'Unity',
    genre: 'Casual Puzzle',
    link: 'https://v3.globalgamejam.org/2021/games/wizard-cat-0',
    linkText: 'Download here',
    linkNote: 'Username on the GGJ website is \'Epidemic\'.',
    images: [
      {
        imageAlt: "A brightly lit surface with scrolls, books and candles. The game title, Wizard Cat, is overlayed on top.",
        imageSrc: projectImageImports.wizardCatFeatureImage,
        displayOnCard: true,
        displayOnModal: false,
      },
      {
        imageAlt: "Wizard cat sits in their kitchen. You can see the inventory bar on the left, as well as multiple points of interest indicated by sparkles.",
        imageSrc: projectImageImports.wizardCatKitchenImage,
        displayOnCard: false,
        displayOnModal: true,
      },
      {
        imageAlt: "A drawn image of a fish is enlarged and shown above Wizard Cat who is sitting in the kitchen.",
        imageSrc: projectImageImports.wizardCatFishImage,
        displayOnCard: false,
        displayOnModal: true,
      },
      {
        imageAlt: "Three different shapes are projected into the air in various colours as a puzzle.",
        imageSrc: projectImageImports.wizardCatMirrorImage,
        displayOnCard: false,
        displayOnModal: true,
      },
      {
        imageAlt: "A room with a large fireplace and a table full of candles. There is a puzzle here...",
        imageSrc: projectImageImports.wizardCatCandleImage,
        displayOnCard: false,
        displayOnModal: true,
      },
      {
        imageAlt: "Wizard Cat walks towards a magic cirlce made of stone on a rooftop. The circle is surrounded by three pillars. Two of them have items on top.",
        imageSrc: projectImageImports.wizardCatRoofImage,
        displayOnCard: false,
        displayOnModal: true,
      },
    ],
    accoladeImage: {
      imageAlt: 'Made during the Global Game Jam.',
      imageSrc: projectImageImports.ggjLogo,
    },
  },
];
