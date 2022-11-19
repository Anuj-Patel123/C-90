function addUser() {
    player_1_name = document.getElementById("player1_name_input").value;
    player_2_name = document.getElementById("player2_name_input").value;

        localStorage.setItem("player_1_name_LS", player_1_name);
        localStorage.setItem("player_2_name_LS", player_2_name);

        window.location = "math_qiuz.html";
}
function load_math_quiz() {
    var player_1_var = localStorage.getItem("player_1_name_LS");
    var player_2_var = localStorage.getItem("player_2_name_LS");
    //alert("LoadPagerun");
    document.getElementById("player_1_ID").innerHTML = player_1_var;
    document.getElementById("player_2_ID").innerHTML = player_2_var;
}