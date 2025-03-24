

export const increaseCountQuickly = (target) => {
    // Check if the target is a valid number
    if (typeof target !== "number" || isNaN(target)) {
      throw new Error("The target value must be a valid number.");
    }
  
    let count = 0;
    
    // Perform a rapid increment with quick updates
    return new Promise((resolve) => {
      const incrementSpeed = 10; // This determines how many times to increment per second
      const totalIncrements = target * incrementSpeed;
      
      const interval = setInterval(() => {
        if (count < target) {
          count += Math.ceil(target / totalIncrements);  // Increment quickly
          console.log(count); // Log the current count (remove this if unnecessary)
        } else {
          clearInterval(interval);
          resolve(count); // Resolve once the count reaches or exceeds the target
        }
      }, 1000 / incrementSpeed); // Speed up the increment: 10 times per second
    });
  };
  