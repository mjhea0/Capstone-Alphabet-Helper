angular.module('JapaneseCtrl', []).controller('JapaneseController', ['$scope', function($scope) {

	$scope.tagline = 'Although its scent still lingers on the form of a flower has scattered away. For whom will the glory, of this world remain unchanged? Arriving today at the yonder side, of the deep mountains of evanescent existence. We shall never allow ourselves to drift away intoxicated, in the world of shallow dreams.';

  $scope.letters = [
  {letter: "あ", information: "Romanized as the letter: A. First letter of the Japanese Alphabet. ありがとう (arigatou -> Thank you) あたし (atashi -> me) あし (ashi -> feet; leg) あなた (anata -> you; dear) 兄/あに (ani -> elder brother) 姉/あね (ane -> elder sister) 雨/あめ (ame -> rain)"},
  {letter: "い", information: "Romanized as the letter: I. Second letter of the Japanese Alphabet. 行く/いく (iku -> to go) 石/いし (ishi -> stone) いっしょ (issho -> together) いす (isu -> chair)"},
  {letter: "う", information: "Romanized as the letter: U. Third letter of the Japanese Alphabet. 上/うえ (ue -> on; over; above; top; older) 嘘/うそ (uso -> lie) 美しい/うつくしい (utsukushii -> beautiful) 海/うみ (umi -> sea)"},
  {letter: "え", information: "Romanized as the letter: E. Fourth letter of the Japanese Alphabet. 円/えん (en -> yen (Japanese money)) えいごく (engoku -> United Kingdom) 駅/えき (eki -> station) 演劇/えんげき (engeki -> drama, play)"},
  {letter: "お", information: "Romanized as the letter: O. Fifth letter of the Japanese Alphabet. 女/おんな (onna -> woman) 男/おとこ (otoko -> man) おいしい (oishii -> delicious) おれ (ore -> me (casual)) おまえ (omae -> you (informal))"}
  ];

  $scope.letters2 = [
  {letter: "ば", information: "testB1"},
  {letter: "び", information: "testB2"},
  {letter: "ぶ"},
  {letter: "べ"},
  {letter: "ぼ"}
  ];

  $scope.letters3 = [
  {letter: "だ"},
  {letter: "ぢ"},
  {letter: "づ"},
  {letter: "で"},
  {letter: "ど"}
  ];

  $scope.letters4 = [
  {letter: "ふぁ"},
  {letter: "ふぃ"},
  {letter: "ふ"},
  {letter: "ふぇ"},
  {letter: "ふぉ"}
  ];

  $scope.letters5 = [
  {letter: "が"},
  {letter: "ぎ"},
  {letter: "ぐ"},
  {letter: "げ"},
  {letter: "ご"}
  ];

  $scope.letters6 = [
  {letter: "は"},
  {letter: "ひ"},
  {letter: "ふ"},
  {letter: "へ"},
  {letter: "ほ"}
  ];

  $scope.letters7 = [
  {letter: "ざ"},
  {letter: "じ"},
  {letter: "ず"},
  {letter: "ぜ"},
  {letter: "ぞ"}
  ];

  $scope.letters8 = [
  {letter: "か"},
  {letter: "き"},
  {letter: "く"},
  {letter: "け"},
  {letter: "こ"}
  ];

  $scope.letters9 = [
  {letter: "ま"},
  {letter: "み"},
  {letter: "む"},
  {letter: "め"},
  {letter: "も"}
  ];

  $scope.letters10 = [
  {letter: "な"},
  {letter: "に"},
  {letter: "ぬ"},
  {letter: "ね"},
  {letter: "の"}
  ];

  $scope.letters11 = [
  {letter: "ぱ"},
  {letter: "ぴ"},
  {letter: "ぷ"},
  {letter: "ぺ"},
  {letter: "ぽ"}
  ];

  $scope.letters12 = [
  {letter: "ら"},
  {letter: "り"},
  {letter: "る"},
  {letter: "れ"},
  {letter: "ろ"}
  ];

  $scope.letters13 = [
  {letter: "さ"},
  {letter: "し"},
  {letter: "す"},
  {letter: "せ"},
  {letter: "そ"}
  ];

  $scope.letters14 = [
  {letter: "た"},
  {letter: "ち"},
  {letter: "つ"},
  {letter: "て"},
  {letter: "と"}
  ];

  $scope.letters15 = [
  {letter: "わ"},
  {letter: "ゐ"},
  {letter: "ゑ"},
  {letter: "を"},
  {letter: "ん"}
  ];

  $scope.letters16 = [
  {letter: "や"},
  {letter: "ゆ"},
  {letter: "よ"},
  {letter: "ゔ"},
  {letter: "゙゜"}
  ];

  $scope.selections = [
   {select: "vowels"},
   {select: "B"},
   {select: "D"},
   {select: "F"},
   {select: "G"},
   {select: "H"},
   {select: "JZ"},
   {select: "K"},
   {select: "M"},
   {select: "N"},
   {select: "P"},
   {select: "R"},
   {select: "S"},
   {select: "T"},
   {select: "WUn"},
   {select: "YV"}
  ];

  $scope.selectedvalue = "vowels";

  $scope.vowels = true;

  function hideAll() {
    $scope.vowels = false;
    $scope.B = false;
    $scope.D = false;
    $scope.F = false;
    $scope.G = false;
    $scope.H = false;
    $scope.JZ = false;
    $scope.K = false;
    $scope.M = false;
    $scope.N = false;
    $scope.P = false;
    $scope.R = false;
    $scope.S = false;
    $scope.T = false;
    $scope.WUn = false;
    $scope.YV = false;

    //continue on as you add in more

  }

  $scope.show = function() {
    $scope.infobox = false;
    if (this.select.select === "vowels") {
      hideAll();
      $scope.vowels = true;
    } else if (this.select.select === "B") {
      hideAll();
      $scope.B = true;
    } else if (this.select.select === "D") {
      hideAll();
      $scope.D = true;
    } else if (this.select.select === "F") {
      hideAll();
      $scope.F = true;
    } else if (this.select.select === "G") {
      hideAll();
      $scope.G = true;
    } else if (this.select.select === "H") {
      hideAll();
      $scope.H = true;
    } else if (this.select.select === "JZ") {
      hideAll();
      $scope.JZ = true;
    } else if (this.select.select === "K") {
      hideAll();
      $scope.K = true;
    } else if (this.select.select === "M") {
      hideAll();
      $scope.M = true;
    } else if (this.select.select === "N") {
      hideAll();
      $scope.N = true;
    } else if (this.select.select === "P") {
      hideAll();
      $scope.P = true;
    } else if (this.select.select === "R") {
      hideAll();
      $scope.R = true;
    } else if (this.select.select === "S") {
      hideAll();
      $scope.S = true;
    } else if (this.select.select === "T") {
      hideAll();
      $scope.T = true;
    } else if (this.select.select === "WUn") {
      hideAll();
      $scope.WUn = true;
    } else {
      hideAll();
      $scope.YV = true;
    }
  };

  $scope.infobox = false;

  $scope.showInfoBox = function() {
    $scope.infobox = true;
    $scope.information = this.letter.information;
  };

}]);