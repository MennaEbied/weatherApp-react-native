
export const getWeatherImage = (condition: string,temperature: number) =>{
        if(condition.includes("Sunny") || condition.includes("Clear")){
            if(temperature>=25){
                return require("../assets/sunny.webp");
            }else if(temperature<20){
                return require("../assets/snowy.webp")
            }
        }
        if (condition.includes('Cloudy')||condition.includes("Partly cloudy")||condition.includes("Overcast")) {
          return require('../assets/cloudy.webp');
        }
        if (condition.includes('Rain')||condition.includes("Light rain")) {
          return require('../assets/rainy.webp');
        }
        if (condition.includes('Snow')) {
          return require('../assets/snowy.webp');
        }
        return require('../assets/default.webp'); // Default image if no match
      };
      
  
  
