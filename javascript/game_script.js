var player=1;
var table=[['A','A','A'],['A','A','A'],['A','A','A']];
var game_number=1;
var resul_pc=0;
var resul_player=0;
var result_tie=0;
var game_win=false;


function set_0(id){
    document.getElementById(id).src="imagens/imagem_0.png";   
}
function set_x(id){
    document.getElementById(id).src="imagens/imagem_x.png";   
}
function move(img){
    var piece;
    var array = [];
    var linha;
    var coluna;

    array = img.id.split("-");
    linha = Number(array[0]);
    coluna = Number(array[1]);

    if(player==1){
        set_0(img.id);
        player=0;
        piece="O";
    }
    else{
        player=1;
        set_x(img.id);
        piece="X"
    }

    table[linha][coluna]=piece;
}

/********************** PC VS PLAYER*********************/
function player_move(id){
    var array = [];
    var linha;
    var coluna;

    array = id.split("-");
    linha = Number(array[0]);
    coluna = Number(array[1]);
    
    // Verify if position is empty
    if(table[linha][coluna]=='A'){
        set_x(id);
        table[linha][coluna]="X";
    } 
}

function finish_line(a){
    var str = "";
    var str1 = "A"+a+a, str2 = a+"A"+a, str3 = a+a+"A";

    // Complete line
    for (var i=0;i<3;i++){
        str = "";
        for(var j=0;j<3;j++){
            str+=table[i][j];
            if (str==str1){
                table[i][0]='O';
                set_0(i+"-0");
                return true;
            }
            else if (str==str2){
                table[i][1]='O';
                set_0(i+"-1");
                return true;
            }
            else if (str==str3){
                table[i][2]='O';
                set_0(i+"-2");
                return true;    
            }     
        }
    }
    // Complete column
    for (var i=0;i<3;i++){
        str = "";
        for(var j=0;j<3;j++){
            str+=table[j][i];
            if (str==str1){
                table[0][i]='O';
                set_0("0-"+i);
                return true;
            }
            else if (str==str2){
                table[1][i]='O';
                set_0("1-"+i);
                return true;
            }
            else if (str==str3){
                table[2][i]='O';
                set_0("2-"+i);
                return true;    
            } 
        }
    }

    // Complete diagonal
    str = "";
    str += table[0][0]; 
    str += table[1][1];
    str += table[2][2];
    if (str==str1){
        table[0][0]='O';
        set_0("0-0");
        return true;
    }
    else if (str==str2){
        table[1][1]='O';
        set_0("1-1");
        return true;
    }
    else if (str==str3){
        table[2][2]='O';
        set_0("2-2");
        return true;    
    } 

    str = "";
    str += table[0][2]; 
    str += table[1][1];
    str += table[2][0];
    if (str==str1){
       table[0][2]='O';
        set_0("0-2");
       return true;
    }
    else if (str==str2){
       table[1][1]='O';
        set_0("1-1");
       return true;
    }
     else if (str==str3){
       table[2][0]='O';
         set_0("2-0");
       return true;    
    }        
    return false;    
}

function pc_move(){
    if (finish_line("O"));
    else if (finish_line("X"));
    else{
        if (table[0][0] == 'A' && table[0][1] == 'X' && table[0][2] == 'A'){
            set_0("0-0");
            table[0][0] = 'O'; 
        }
        else if (table[0][2] == 'A' && table[1][2] == 'X' && table[2][2] == 'A'){
            set_0("0-2");
            table[0][2] = 'O';
        }
        else if (table[2][2] == 'A' && table[2][1] == 'X' && table[2][0] == 'A'){
            set_0("2-2");
            table[2][2] = 'O';
        }
        else if (table[2][0] == 'A' && table[1][0] == 'X' && table[0][0] == 'A'){
            set_0("2-0");
            table[2][0] = 'O';
        }
        else if (table[1][1] == 'A'){
            set_0("1-1");
            table[1][1] = 'O';
        }
        else if ((table[0][0] == 'A' && table[0][1] == 'A' && table[0][2] == 'A')|| 
                 (table[0][0] == 'A' && table[0][1] == 'A' && table[0][2] == 'O')){
            set_0("0-0");
            table[0][0] = 'O';
        }
        else if ((table[0][2] == 'A' && table[1][2] == 'A' && table[2][2] == 'A')||
                 (table[0][2] == 'A' && table[1][2] == 'A' && table[2][2] == 'O')){
            set_0("0-2");
            table[0][2] = 'O';
        }
        else if ((table[2][2] == 'A' && table[2][1] == 'A' && table[2][0] == 'A')||
                 (table[2][2] == 'A' && table[2][1] == 'A' && table[2][0] == 'O')){
            set_0("2-2");
            table[2][2] = 'O';
        }
        else if ((table[2][0] == 'A' && table[1][0] == 'A' && table[0][0] == 'A')||
                 (table[2][0] == 'A' && table[1][0] == 'A' && table[0][0] == 'O')){
            set_0("2-0");
            table[2][0] = 'O';
        }
        else if (table[0][0] == 'X' && table[0][1] == 'A' && table[0][2] == 'A'){
            set_0("0-1");
            table[0][1] = 'O';
        }
        else if (table[0][2] == 'X' && table[1][2] == 'A' && table[2][2] == 'A'){
            set_0("1-2");
            table[1][2] = 'O';
        }
        else if (table[2][2] == 'X' && table[2][1] == 'A' && table[2][0] == 'A'){
            set_0("2-1");
            table[2][1] = 'O';
        }
        else if (table[2][0] == 'X' && table[1][0] == 'A' && table[0][0] == 'A'){
            set_0("1-0");
            table[1][0] = 'O';
        }
        else{
            for (var i=0;i<3;i++){  
                for(var j=0;j<3;j++){
                    if(table[i][j]=='A'){
                        table[i][j]='O';
                        set_0(i+"-"+j);
                        i=3;
                        j=3;
                    }  
                }
            }
        }
    }
}
function table_is_full(){
    for (var i=0;i<3;i++){  
        for(var j=0;j<3;j++){
            if(table[i][j]=='A')
                return false;  
        }
    }
    return true;
}

function table_is_empty(){
    for (var i=0;i<3;i++){  
        for(var j=0;j<3;j++){
            if(table[i][j]!='A')
                return false;  
        }
    }
    return true;
}

function check_result(){

    var str_col;
    var str_row;

    // Verify in diagonal if someone win
    if ( (table[0][0]=='O' && table[1][1]=='O' && table[2][2]=='O') || (table[0][2]=='O' && table[1][1]=='O' && table[2][0]=='O')){
        document.getElementById("result").innerHTML="Bot Ganhou";
        resul_pc++;
        document.getElementById("pc_num").innerHTML=resul_pc;
        return true;

    }
    if ( (table[0][0]=='X' && table[1][1]=='X' && table[2][2]=='X') || (table[0][2]=='X' && table[1][1]=='X' && table[2][0]=='X')){
        document.getElementById("result").innerHTML="Você Ganhou";
        resul_player++;
        document.getElementById("player_num").innerHTML=resul_player;
        return true;
    }

    // verify in columns if someone win
    for (var i=0; i<3; i++){
        str_col = "";
        str_row = "";
        for(var j=0; j<3; j++){
            str_col += table[j][i];
            str_row += table[i][j];
            if(str_col == "XXX" || str_row == "XXX"){
                document.getElementById("result").innerHTML="Você Ganhou";
                result_player++;
                document.getElementById("player_num").innerHTML=result_player;
                return true;
            }
            if(str_col == "OOO" || str_row == "OOO"){
                document.getElementById("result").innerHTML="Bot Ganhou";
                resul_pc++;
                document.getElementById("pc_num").innerHTML=resul_pc;
                return true;
            }
        }
    }
    if(table_is_full()){
        document.getElementById("result").innerHTML="Empate";
        result_tie++;
        document.getElementById("tie_num").innerHTML=result_tie;
        return true;
    }
}
function player_vs_pc(img){
    var array = [];
    var row;
    var col;

    array = img.id.split("-");
    row = Number(array[0]);
    col = Number(array[1]);

    // clean table for new game
    if(game_win/*check_result()*/){
        game_win=false;
        for (var i=0;i<3;i++){  
            for(var j=0;j<3;j++){
                table[i][j]='A';
                document.getElementById(i+"-"+j).src="";
                document.getElementById("result").innerHTML="Resultado";
            }            
        }
        game_number++;
        
        // PC play first
        if(game_number%2==0){
            pc_move();
        }
    }
    // Player first
    else if(table[row][col]=="A"){
        player_move(img.id);
        pc_move();  
        game_win=check_result();
    }
}

// Easy version player vs pc
function player_vs_pc_easy(img){
    var array = [];
    var row;
    var col;

    array = img.id.split("-");
    row = Number(array[0]);
    col = Number(array[1]);
    
    
    // clean table for new game
    if(game_win/*check_result()*/){
        game_win=false;
        for (var i=0;i<3;i++){  
            for(var j=0;j<3;j++){
                table[i][j]='A';
                document.getElementById(i+"-"+j).src="";
                document.getElementById("result").innerHTML="Resultado";
            }            
        }
        game_number++;
        
        // PC play first
        if(game_number%2==0){
            pc_move_random();
        }
    }
    else if(table[row][col]=="A"){
        player_move(img.id);
        pc_move_random();
        game_win=check_result();         
    }
}

// Easy version player vs pc
function player_vs_pc_easy1(img){
    var array = [];
    var row;
    var col;

    array = img.id.split("-");
    row = Number(array[0]);
    col = Number(array[1]);
    
    
    // clean table for new game
    if(game_win/*check_result()*/){
        game_win=false;
        for (var i=0;i<3;i++){  
            for(var j=0;j<3;j++){
                table[i][j]='A';
                document.getElementById(i+"-"+j).src="";
                document.getElementById("result").innerHTML="Resultado";
            }            
        }
        game_number++;
        
        // PC play first
        if(game_number%2==0){
            pc_move_random1();
        }
    }
    else if(table[row][col]=="A"){
        player_move(img.id);
        pc_move_random1();
        game_win=check_result();         
    }
}

function pc_move_random(){
    var row;
    var col;
    
    if (finish_line("O"));
    else if (finish_line("X"));
    else{
        // Find empty space for movement
        do{
            row = (Math.random()*2).toFixed(0);
            col = (Math.random()*2).toFixed(0);
        }
        while(table[row][col]!="A" && !table_is_full());

        table[row][col]="O";
        set_0(row+"-"+col);
    }
}

function pc_move_random1(){
    var row;
    var col;
    
    // Find empty space for movement
    do{
        row = (Math.random()*2).toFixed(0);
        col = (Math.random()*2).toFixed(0);
    }
    while(table[row][col]!="A" && !table_is_full());

    table[row][col]="O";
    set_0(row+"-"+col);
}
   