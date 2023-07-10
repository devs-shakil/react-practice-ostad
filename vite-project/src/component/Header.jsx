
const Header = () => {
    let marks = 75;
    return (
        // immidietly invocked function
        <div>
            {(()=>{ 
                if(marks >= 80 && marks <= 100){
                    return "A+"
                }else if(marks >= 70 && marks <80){
                    return "A"
                }else if(marks >= 60 && marks <70){
                    return "A-"
                }else if(marks >= 50 && marks <60){
                    return "B"
                }else if(marks >= 40 && marks <50){
                    return "C"
                }else if(marks >= 33 && marks <40){
                    return "D"
                }else if(marks < 33){
                    return "F"
                }


            })()}            
        </div>
    );
};

export default Header;