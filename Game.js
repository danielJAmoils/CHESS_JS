class Game{
    constructor(){

    }
    createBoard(){
        //function for creating chess board layout
        let count = 0,
        row = 1,
        startColor = 0
        //startColor:0 is black,1 is white
        while (count < 64){
            if (count % 8 == 0){
                row++
                if(row%2==0){
                    //white start row
                    document.write('<br/><div style="background-color:##FFFFFF;float:left;">&nbsp</div>')
                    for(let i = 0;i<=7;i++){
                        if(i%2==1){
                            document.write('<div style="background-color:##FFFFFF;float:left;">&nbsp</div>') 
                        }else{
                            document.write('<div style="background-color:#000000;float:left;">&nbsp</div>')
                        }
                    }
                }else{
                     //black start row
                    document.write('<br/><div style="background-color:#000000;float:left;">&nbsp</div>')
                    for(let i = 0;i<=7;i++){
                        if(i%2==1){
                            document.write('<div style="background-color:#000000;float:left;">&nbsp</div>') 
                        }else{
                            document.write('<div style="background-color:##FFFFFF;float:left;">&nbsp</div>')
                        }
                    }
                }
            }
            count++
        }
    }
}
