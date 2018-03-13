module.exports = function count(s, pairs) {
    var result = 0;

    var N = 1;
    var N1 = new Set();


    for (var cur in pairs) {
        N = N * (pairs[cur][0] ** pairs[cur][1]);
        N1.add(pairs[cur][0]);
    }

    var N2 = Array.from(N1);
    N2.sort(function (a, b) {
        return a - b;
    });

    var candidates = [];



    if (s.length == 1 ){
        result = result + process(s.charAt(j), j, N, N2);
    } else{
        //
        candidates = receiveCandidates(s.charAt(0), N, N2);
        candidates.sort(function (a, b) {
            return a - b;
        });

        debugger;
        for (var j = 1; j < s.length; j++) {
            candidates = processCandidates(s.charAt(j), j, candidates);

        }
        result = candidates.length;


    }


    function processCandidates(char, j, candidates){
        var candidatesTemp = new Set();
        if (char == '0'){
            for ( var i = 0; i < (candidates.length - 1); i++){
                if ((candidates[k]+j) == candidates[k+1]){

                    candidatesTemp.add(candidates[k]);
                }
            }



        } else {
            //for 1
            for ( var k = 0; k < (candidates.length - 1); k++){
                //          debugger;
                if ((candidates[k]+j) != candidates[k+1]){
                    candidatesTemp.add(candidates[k]);
                }


            }

            var temp = candidates[candidates.length - 1] + j;
            var isFound= 0;
            for (var i = 0; i < N2.length; i++) {
                if (temp >= N2[i]) {
                    if (temp % N2[i] == 0) {
                        isFound++;
                        break;
                    }
                }
            }
            if (!isFound) {
                candidatesTemp.add(candidates[candidates.length - 1]);
            }

        }

        return Array.from(candidatesTemp);


    }



    function receiveCandidates(char, N, N2){
        var tempCandidates = new Set();
        var tempResults = [];
        if (char == "0"){
            for (var i = 0; i < N2.length; i++) {
                if ((N % N2[i]) > 0) {
                    var nearestNumber = Math.floor(N/ N2[i]);
                    tempResults.push({key: N2[i], value: nearestNumber, j: j});
                } else {
                    tempResults.push({key: N2[i], value: N / N2[i], j: j});
                }
            }

            for( var i = 0; i < tempResults.length; i++) {
                var cur = tempResults[i];
                var key = cur.key;
                var value = cur.value;

                do {
                    var temp = key * value;
                    tempCandidates.add( temp );
                    value--;
                } while(value > 0)

            }
            debugger;

        } else {
            //char is 1
            for(var k = 0 ; k <= N; k++){
                var isFound= 0;

                for (var i = 0; i < N2.length; i++) {
                    if (k >= N2[i]) {
                        if (k % N2[i] == 0) {
                            isFound++;
                            break;
                        }
                    }
                }
                if (!isFound) {

                    tempCandidates.add(k);
                }
            }
        }

        return Array.from(tempCandidates);
    }


    function processEach(char, j, candidates, N, N2){
        if (char == "0"){



        }
    }



    function process(char, j, N, N2) {
        var result = 0;
        var amountOfK = 0;
        var tempResults = [];
        debugger;

        if (char == "0") {
            for (var i = 0; i < N2.length; i++) {
                if ((N % N2[i]) > 0) {

                    var nearestNumber = Math.floor(N/ N2[i]);
                    tempResults.push({key: N2[i], value: nearestNumber, j: j});

                } else {
                    //  amountOfK = amountOfK + N / N2[i] - j;

                    tempResults.push({key: N2[i], value: N / N2[i], j: j});

                }
            }


            for( var i = 0; i < tempResults.length; i++){
                var cur = tempResults[i];
                for(var j = i+1; j < tempResults.length; j++){
                    if(tempResults[j].value >= cur.key){
                        amountOfK = amountOfK - 1;
                    }

                }
                amountOfK = amountOfK + cur.value;
            }


        } else {
            //char 1
            for(var k = 0 ; k <= N; k++){
                var temp = k+j;
                var isFound= 0;
                if (temp > 0) {
                    for (var i = 0; i < N2.length; i++) {
                        if (temp >= N2[i]) {
                            if (temp % N2[i] == 0) {
                                isFound++;
                                break;
                            }
                        }
                    }
                    if (!isFound) {

                        amountOfK++;
                        candidates.push(k);
                    }
                }
            }


        }
        return amountOfK;
    }

    return (result % 1000000007);



}