function bandFactory(name, lyricsSongs) {
  return {
    name,
    lyricsSongs,
    get image() {
      let imageName = this.name.toLowerCase().split(" ").join("-")
      return "./images/" + imageName + ".jpeg"
    },
  }
}
// 100 best rock songs of 2000's
const bands = [
  bandFactory("System of a Down", [
    [
      "Wake up (wake up) grab a brush and put a little make-up Hide the scars to fade away the (hide the scars to fade away the shake-up)",
      "Chop Suey!",
    ],
    [
      "La,la,la,la,la,la,la,la,la,la,ooh-ooh Everybody's going to the party, have a real good time Dancing in the desert, blowing up the sunshine",
      "B.Y.O.B",
    ],
  ]),
  bandFactory("Slipknot", [
    [
      "I push my fingers into my eyes It's the only thing that slowly stops the ache But it's made of all the things I have to take",
      "Duality",
    ],
  ]),
  bandFactory("Rise Against", [
    [
      "I don't hate you boy I just want to save while there's still something left to save.",
      "Savior",
    ],
  ]),
  bandFactory("Red Hot Chili Peppers", [
    [
      "California, rest in peace simultaneous release California, show your teeth",
      "Dani California",
    ],
  ]),
  bandFactory("Evanescence", [
    [
      "Wake me up inside (save me) Call my name and save me from the dark (wake me up)",
      "Bring Me To Life",
    ],
  ]),
  bandFactory("Linkin Park", [
    [
      "I tried so hard and got so far But in the end, it doesn't even matter",
      "In the End",
    ],
    [
      "I've become so numb I can't feel you there Become so tired So much more aware",
      "Numb",
    ],
    [
      "Crawling in my skin These wounds, they will not heal Fear is how I fall",
      "Crawling",
    ],
  ]),
  bandFactory("Paramore", [
    [
      "They taped over your mouth Scribbled out the truth with their lies Your little Spies",
      "crushcrushcrush",
    ],
  ]),
  bandFactory("Breaking Benjamin", [
    [
      "Show me how it ends, it's alright Show me how denfenseless you really are Satisfied and empty inside",
      "So Cold",
    ],
  ]),
  bandFactory("Incubus", [
    [
      "Whatever tommorrow brings, I'll be there With open arms and eyes, yeah Whatever tommorrow brings, I'll be there",
      "Drive",
    ],
  ]),
  bandFactory("Trapt", [
    [
      "Back off, I'll take you on Headstrong to take on any one I know that you are wrong",
      "Headstrong",
    ],
  ]),
  bandFactory("Limp Bizkit", [
    [
      "Now move in, now move out, hands up, nows hands down Back up, back up, tell me what ya gonna do now Breathe in, now Breathe in, now breathe out, hands up, now hands down",
      "Rollin'",
    ],
    [
      "It's all about the he says, she says bullshit I think you better quit, let the shit slip Or you'll be leaving with a fat lip",
      "Break Stuff",
    ],
  ]),
  bandFactory("Skillet", [
    [
      "I feel it deep within, it's just beneath the skin I must confess that I feel like a monster I hate what I've become, the nightmare's just begun",
      "Monster",
    ],
  ]),
  bandFactory("Foo Fighters", [
    [
      "What if I say I'm not like the others? What if I say I'm not just another one of your plays? You're the pretender",
      "The Pretender",
    ],
    [
      "Is something getting the best, the best, the best The best of you? Is someone getting the best, the best, the best",
      "Best of You",
    ],
  ]),
  bandFactory("Three Days Grace", [
    [
      "So what if you can see the darkest side of me? No one would ever change this animal I have become Help me believe it's not the real me",
      "Animal I Have become",
    ],
  ]),
  bandFactory("Stone Sour", [
    [
      "I'm looking at you through the glass Don't know how much time has passed Oh God, it feels like forever",
      "Through Glass",
    ],
  ]),
  bandFactory("Disturbed", [
    [
      "If this disturbs you then walk way You will remember the night you were struck by the sight of Ten thousand fists in the air",
      "Ten Thousands Fists",
    ],
  ]),
  bandFactory("Papa Roach", [
    [
      "Cut my life into pieces I've reached my last resort Suffocation, no breathing",
      "Last Resort",
    ],
  ]),
  bandFactory("Thirty Seconds To Mars", [
    ["Come, break me down Bury me, bury me I am finished with you", "The Kill"],
  ]),
  bandFactory("Audioslave", [
    [
      "In your house, I long to be Room by room, patiently I'll wait for you there Like a Stone",
      "Like a Stone",
    ],
  ]),
  bandFactory("3 Doors Down", [
    [
      "If I go crazy, then will you still call me Superman? If I'm alive and well, will you be there and holding my hand? I'll keep you by my side with my superhuman might Kryptonite",
      "Kryptonite",
    ],
    [
      "So hold me when I'm here, right me when I'm wrong Hold me when I'm scared and love me when I'm gone Everything I am and everything in me",
      "When I'm gone",
    ],
  ]),
  bandFactory("Static-X", [
    [
      "You're trying to take me You're trying to make me This is the only Give me the only thing",
      "The Only",
    ],
  ]),
  bandFactory("Drowning Pool", [
    [
      "Let the bodies hit the floor Let the bodies hit the floor Let the bodies hit the floor",
      "Bodies",
    ],
  ]),
]

export { bands }

// const bands = [
//   bandFactory("System of a Down", [
//     [
//       "Wake up (wake up) grab a brush and put a little make-up Hide the scars to fade away the (hide the scars to fade away the shake-up)",
//       "Chop Suey!",
//     ],
//     [
//       "La,la,la,la,la,la,la,la,la,la,ooh-ooh Everybody's going to the party, have a real good time Dancing in the desert, blowing up the sunshine",
//       "B.Y.O.B",
//     ],
//   ]),
//   bandFactory("Slipknot", [
//     [
//       "I push my fingers into my eyes It's the only thing that slowly stops the ache But it's made of all the things I have to take",
//       "Duality",
//     ],
//   ]),
//   bandFactory("Rise Against", [
//     [
//       "I don't hate you boy I just want to save while there's still something left to save.",
//       "Savior",
//     ],
//   ]),
//   bandFactory("Red Hot Chili Peppers", [
//     [
//       "California, rest in peace simultaneous release California, show your teeth",
//       "Dani California",
//     ],
//   ]),
//   bandFactory("Evanescence", [
//     [
//       "Wake me up inside (save me) Call my name and save me from the dark (wake me up)",
//       "Bring Me To Life",
//     ],
//   ]),
//   bandFactory("Linkin Park", [
//     [
//       "I tried so hard and got so far But in the end, it doesn't even matter",
//       "In the End",
//     ],
//     [
//       "I've become so numb I can't feel you there Become so tired So much more aware",
//       "Numb",
//     ],
//     [
//       "Crawling in my skin These wounds, they will not heal Fear is how I fall",
//       "Crawling",
//     ],
//   ]),
//   bandFactory("Paramore", [
//     [
//       "They taped over your mouth Scribbled out the truth with their lies Your little Spies",
//       "crushcrushcrush",
//     ],
//   ]),
//   bandFactory("Breaking Benjamin", [
//     [
//       "Show me how it ends, it's alright Show me how denfenseless you really are Satisfied and empty inside",
//       "So Cold",
//     ],
//   ]),
//   bandFactory("Incubus", [
//     [
//       "Whatever tommorrow brings, I'll be there With open arms and eyes, yeah Whatever tommorrow brings, I'll be there",
//       "Drive",
//     ],
//   ]),
//   bandFactory("Trapt", [
//     [
//       "Back off, I'll take you on Headstrong to take on any one I know that you are wrong",
//       "Headstrong",
//     ],
//   ]),
//   bandFactory("Limp Bizkit", [
//     [
//       "Now move in, now move out, hands up, nows hands down Back up, back up, tell me what ya gonna do now Breathe in, now Breathe in, now breathe out, hands up, now hands down",
//       "Rollin'",
//     ],
//     [
//       "It's all about the he says, she says bullshit I think you better quit, let the shit slip Or you'll be leaving with a fat lip",
//       "Break Stuff",
//     ],
//   ]),
//   bandFactory("Skillet", [
//     [
//       "I feel it deep within, it's just beneath the skin I must confess that I feel like a monster I hate what I've become, the nightmare's just begun",
//       "Monster",
//     ],
//   ]),
//   bandFactory("Foo Fighters", [
//     [
//       "What if I say I'm not like the others? What if I say I'm not just another one of your plays? You're the pretender",
//       "The Pretender",
//     ],
//     [
//       "Is something getting the best, the best, the best The best of you? Is someone getting the best, the best, the best",
//       "Best of You",
//     ],
//   ]),
//   bandFactory("Three Days Grace", [
//     [
//       "So what if you can see the darkest side of me? No one would ever change this animal I have become Help me believe it's not the real me",
//       "Animal I Have become",
//     ],
//   ]),
//   bandFactory("Stone Sour", [
//     [
//       "I'm looking at you through the glass Don't know how much time has passed Oh God, it feels like forever",
//       "Through Glass",
//     ],
//   ]),
//   bandFactory("Disturbed", [
//     [
//       "If this disturbs you then walk way You will remember the night you were struck by the sight of Ten thousand fists in the air",
//       "Ten Thousands Fists",
//     ],
//   ]),
//   bandFactory("Papa Roach", [
//     [
//       "Cut my life into pieces I've reached my last resort Suffocation, no breathing",
//       "Last Resort",
//     ],
//   ]),
//   bandFactory("Thirty Seconds To Mars", [
//     ["Come, break me down Bury me, bury me I am finished with you", "The Kill"],
//   ]),
//   bandFactory("Audioslave", [
//     [
//       "In your house, I long to be Room by room, patiently I'll wait for you there Like a Stone",
//       "Like a Stone",
//     ],
//   ]),
//   bandFactory("3 Doors Down", [
//     [
//       "If I go crazy, then will you still call me Superman? If I'm alive and well, will you be there and holding my hand? I'll keep you by my side with my superhuman might Kryptonite",
//       "Kryptonite",
//     ],
//     [
//       "So hold me when I'm here, right me when I'm wrong Hold me when I'm scared and love me when I'm gone Everything I am and everything in me",
//       "When I'm gone",
//     ],
//   ]),
//   bandFactory("Static-X", [
//     [
//       "You're trying to take me You're trying to make me This is the only Give me the only thing",
//       "The Only",
//     ],
//   ]),
//   bandFactory("Drowning Pool", [
//     [
//       "Let the bodies hit the floor Let the bodies hit the floor Let the bodies hit the floor",
//       "Bodies",
//     ],
//   ]),
// ]

// export { bands }
