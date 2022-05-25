var player1;
var player2;
var turn = 1;
var main = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [3, 5, 7],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];
// console.log(main);
var p1 = [];
var p2 = [];
var PLAYER_1 = [];
var PLAYER_2 = [];
$(document).ready(function () {
  $("#reset").hide();
  $("#details").hide();
  $("#GamePlateForm").hide();
  $("#start").on("click", function () {
    $("#start").hide();

    $("#details").show();
  });
  $("#startGame").on("click", function () {
    if ($("#player1").val() == "" && $("#player2").val() == "") {
      alert("enter name");
      return false;
    }
    player1 = $("#player1").val();
    player2 = $("#player2").val();
    console.log(player1);
    console.log(player2);
    $("#details").hide();
    $("#GamePlateForm").show();
    $(".step").css({
      width: "90%",
      height: "50px",
      "background-color": "black",
      margin: "2px",
    });
    $(".turn")
      .text("turn  player is  " + player1)
      .css("color", "red");
    $("#reset").show();
  });
  $(".step").one("click", function () {
    // debugger
    // currentPlayer = P ==="x" ? "o": "x"
    if (turn % 2 == 1) {
      var r = Number(this.id);
      p1.push(r);
      $(".turn").text(player1).css("color", "green");
      $(this).html("0").css("background-color", "green");
    } else {
      var r = Number(this.id);

      p2.push(r);
      $(".turn").text(player2).css("color", "red");
      $(this).html("X").css("background-color", "red");
    }
    PLAYER_1 = p1.sort(function (a, b) {
      return a - b;
    });
    PLAYER_2 = p2.sort(function (a, b) {
      return a - b;
    });
    //     console.log("PLAYER_1");
    //  console.log(PLAYER_1);
    //  console.log("PLAYER_2");
    //  console.log(PLAYER_2);
    main.forEach((val, i) => {
      if (
        val.length === PLAYER_1.length &&
        val.every((value, index) => value === PLAYER_1[index])
      ) {
        // v.every((value, index) => value === player1Score[index]))
        alert(`${player1} is the winner`);
        $("#GamePlateForm").hide();
        $("#reset").show();
      }
      console.log(PLAYER_2.length);
      console.log(main.length);
      if (
        val.length === PLAYER_2.length &&
        val.every((value, index) => value === PLAYER_2[index])
      ) {
        // v.every((value, index) => value === player1Score[index]))
        alert(`${player2} is the winner`);
        $("#GamePlateForm").hide();
        $("#reset").show();
      }
    });
    if (p1.length >= 4 && p2.length >= 4) {
      $(".step").html("");
      alert("tie");
      
      main = [];
      p1 = [];
      p2 = [];
      $(".step").css({
        width: "90%",
        height: "50px",
        "background-color": "black",
        margin: "2px",
      });
      
    }

    console.log(main);
    console.log(p1);
    console.log(p2);
    turn++;

    // if (p1.length>=3) {

    //   console.log(p1);
    //   console.log(p2);
    //   result();
    // }
    // if (p2.length>=3) {

    //   // console.log(p1);
    //   // console.log(p2);
    //   result();
    // }
  });
  // result()
  // function result() {

  //   console.log("result")

  //     for (let i = 0; i < main.length; i++) {
  //       for (let j = 0; j < p1.length; j++) {
  //         if (main[i]== p1[j]) {
  //           console.log("f;lsdkf;lakf");
  //         }
  //       }

  //   }
  //     for (let i = 0; i < main.lenth; i++) {
  //       for (let j = 0; j < p2.length; j++) {
  //         if (main[i][j] == p2[j]) {
  //           console.log("player two wines");
  //         }
  //       }

  //   }
  // }
  // reset function
  $("#reset").click(function () {
    window.location.reload(false);
    // $(".step").html("");

    // $("#GamePlateForm").show();
    // PLAYER_1 = [];
    // PLAYER_2 = [];
    // p1 = [];
    // p2 = [];
    // $(".step").css({
    //   width: "90%",
    //   height: "50px",
    //   "background-color": "black",
    //   margin: "2px",
    // });
  });
});
