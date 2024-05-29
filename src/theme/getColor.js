const colors = {
    purple: {
        background: "#EEEAFF", 
        middleBackground: "#7c6ec02b" ,
        driver: "#7C6EC0",
        icon: "#6a5ab6"
    },
    cyan:{
        background: "#D8F9F5", 
        middleBackground: "#6598982b" ,
        driver: "#659898",
        icon: "#002b36"
    },
    orange:{
        background:"#FFEDDD",
        middleBackground: "#9884652b" ,
        driver: "#987040",
        icon: "#b6955a"
    },
    pink:{
        background:"#f9d8f3",
        middleBackground: "#c06ea72b" ,
        driver: "#986588",
        icon: "#360025"
    },
    yellow:{
        background: "#f8f9d8", 
        middleBackground: "#9798652b" ,
        driver: "#989665",
        icon: "#363400"
    }
};

export const getEventColor = (color)=>{

    var c = color ? color: "purple"
    
    return colors[c] ? colors[c] : colors.purple;
}