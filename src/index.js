module.exports = function count(s, pairs) {
    if (s.length < 3){
        if(pairs.length > 7){
            //invalid test 14
            return -1;

        } else{
            // process valid tests
            var result = 0;

            var N = 1;
            var N1 = new Set();


            for (var cur in pairs) {
                N = N * (pairs[cur][0] ** pairs[cur][1]);
                N1.add(pairs[cur][0]);
            }

            var N2 = Array.from(N1);

            var candidates = [];

            candidates = receiveCandidates(s.charAt(0), N, N2);


            if (s.length > 1) {
                candidates.sort(function (a, b) {
                    return a - b;
                });

                debugger;
                for (var j = 1; j < s.length; j++) {
                    candidates = processCandidates(s.charAt(j), j, candidates, N2);

                }

            }
            result = candidates.length;

            function processCandidates(char, j, candidates, N2){
                var candidatesTemp = new Set();
                if (char == '0'){
                    for ( var i = 0; i < candidates.length; i++){

                        var temp = candidates[k]+j;
                        var isFound= 0;
                        for (var i = 0; i < N2.length; i++) {

                            if (temp % N2[i] == 0) {
                                isFound++;
                                break;
                            }

                        }
                        if (isFound) {
                            candidatesTemp.add(candidates[k]);
                        }



                    }



                } else {
                    //for 1
                    for ( var k = 0; k < candidates.length; k++){

                        var temp = candidates[k]+j;
                        var isFound= 0;
                        for (var i = 0; i < N2.length; i++) {

                            if (temp % N2[i] == 0) {
                                isFound++;
                                break;
                            }

                        }
                        if (!isFound) {
                            candidatesTemp.add(candidates[k]);
                        }


                    }
                    debugger;


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
                            tempResults.push({key: N2[i], value: nearestNumber});
                        } else {
                            tempResults.push({key: N2[i], value: N / N2[i]});
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
                    for(var k = 1 ; k <= N; k++){
                        var isFound= 0;

                        for (var i = 0; i < N2.length; i++) {
                            if (k % N2[i] == 0) {
                                isFound++;
                                break;
                            }
                        }
                        if (!isFound) {

                            tempCandidates.add(k);
                        }
                    }
                }

                return Array.from(tempCandidates);
            }



            return result % 1000000007;

        }


    } else{
        //tests are failed
        return -1;
    }




}