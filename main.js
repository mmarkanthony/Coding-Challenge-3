function getResult(name) {
  var x = {A:1, I:1, J:1, Q:1, Y:1, B:2, K:2, R:2, C:3, G:3, L:3, S:3, D:4, M:4, T:4, E:5, H:5, N:5, X:5, U:6, V:6, W:6, O:7, Z:7, F:8, P:8};
  var detinyScore = 0;
  var heartDesireScore = 0;
  var personalityScore = 0;

  function destiny(name) {
    for( var i = 0; i < name.length; i++ ) {
      var curChar = name.charAt( i )
      var curValue = x[ curChar ]
      detinyScore = detinyScore + curValue
    } 

    var singleDigitScore = 0
    var total = 0
    var str = detinyScore.toString().split('')
    for( var i = 0; i < str.length; i++ ) {
        total = total + parseInt( str[i] );
    }
    singleDigitScore = total
    return singleDigitScore
  }

  function heartsDesire(name) {
    for( var i = 0; i < name.length; i++ ) {
      var curChar = name.charAt( i )
      if (curChar == "A" || curChar == "E" || curChar == "I" || curChar == "O" || curChar == "U") {
        var curValue = x[ curChar ]
        heartDesireScore = heartDesireScore + curValue
      }
    }

    var singleDigitScore = 0
    var total = 0
    var str = heartDesireScore.toString().split('')
    for( var i = 0; i < str.length; i++ ) {
        total = total + parseInt( str[i] );
    }
    singleDigitScore = total
    return singleDigitScore
  }

  function personality(name) {
    for( var i = 0; i < name.length; i++ ) {
      var curChar = name.charAt( i )
      if (curChar != "A" && curChar != "E" && curChar != "I" && curChar != "O" && curChar != "U") {
        var curValue = x[ curChar ]
        personalityScore = personalityScore + curValue
      }
    }

    var singleDigitScore = 0
    var total = 0
    var str = personalityScore.toString().split('')
    for( var i = 0; i < str.length; i++ ) {
        total = total + parseInt( str[i] );
    }
    singleDigitScore = total
    return singleDigitScore
  }
      

  result = "Your Destiny Number is <strong>" + destiny(name) + "</strong></br> Your Hearts Desire Number is <strong>" + heartsDesire(name) + "</strong></br> Your Personality Number is <strong>" + personality(name) + "</strong></br>"
  return result.trim()
}
