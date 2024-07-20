function SummerOutfit(params) {
  const Degrees = Number(params[0]);
  const Time = params[1];
  let range 

  const Recommendations = {
    "Morning": {
        "10-18": { outfit: "Sweatshirt", shoes: "Sneakers" }, // Morning
        "19-24": { outfit: "Shirt", shoes: "Moccasins" }, // Afternoon
        "25-42": { outfit: "T-Shirt", shoes: "Sandals" } // Evening
    },
    "Afternoon": {
        "10-18": { outfit: "Shirt", shoes: "Moccasins" },
        "19-24": { outfit: "T-Shirt", shoes: "Sandals" },
        "25-42": { outfit: "Swim Suit", shoes: "Barefoot" }
    },
    "Evening": {
        "10-18": { outfit: "Shirt", shoes: "Moccasins" },
        "19-24": { outfit: "Shirt", shoes: "Moccasins" },
        "25-42": { outfit: "Shirt", shoes: "Moccasins" }
    }
};

  if (Degrees >= 10 && Degrees <= 18) {
    range = "10-18";
  } else if (Degrees >= 19 && Degrees <= 24) {
    range = "19-24";
  } else if (Degrees >= 25 && Degrees <= 42) {
    range = "25-42";
  }

  if (Recommendations[Time] && Recommendations[Time][range]) {
    const {outfit, shoes} = Recommendations[Time][range];
    console.log(`It's ${Degrees} degrees, get your ${outfit} and ${shoes}.`);
  }
}

SummerOutfit(["16", "Morning"]);   // Output: It's 16 degrees, get your Sweatshirt and Sneakers.
SummerOutfit(["22", "Afternoon"]); // Output: It's 22 degrees, get your T-Shirt and Sandals.
SummerOutfit(["28", "Evening"]);   // Output: It'