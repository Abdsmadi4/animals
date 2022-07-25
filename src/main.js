import React from "react";
import HornedBeast from "./hornedbeast";




class Main extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            
          }
    }


    render(){
        return (
            <div>
                <HornedBeast h2Value="Markhor" src="https://www.science.org/cms/10.1126/science.abn0745/asset/2bf2ecea-277e-4e73-92e3-97b6245b94a8/assets/images/large/science.abn0745-f1.jpg" alt="Markhor" title="Markhor" pValue=" The markhor is the national animal of Pakistan, where it is also known as the screw horn or screw-horned goat."/>
                <HornedBeast h2Value="Saiga " src="https://cdn.britannica.com/71/227471-050-A1E23E6D/Saiga-tatarica-in-the-wild.jpg" alt="Saiga" title="Saiga" pValue="is a large migratory herbivore of Central Asia found in Kazakhstan, Mongolia, the Russian Federation, Turkmenistan, and Uzbekistan."/>
                <HornedBeast h2Value="Nubian Ibex" src="https://www.worldlifeexpectancy.com/images/a/w/b/capra-nubiana/capra-nubiana.jpg" alt="Nubian Ibex" title="Nubian Ibex" pValue=" is a desert-dwelling goat species found in mountainous areas of northern and northeast Africa, and the Middle East."/>
                <HornedBeast h2Value="Bharal " src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Bharal_-_Shreeram_M_V_-_Kibber%2C_Spiti_Valley%2C_Himachal_Pradesh%2C_India.jpg" alt="Bharal " title="Bharal " pValue=" The bharal (Pseudois nayaur), also called the blue sheep, is a caprine native to the high Himalayas. "/>
            </div>
        );
    }
}

export default Main;