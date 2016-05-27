
    var gradesTable=[{grade:9,gradesLevel:'A'},
                     {grade:8,gradesLevel:'B'},
                     {grade:7,gradesLevel:'C'},
                     {grade:6,gradesLevel:'D'}]
    var grades=[];
    var levels=[];
    var text;
    function changeGradesToNum(inputs){
    inputs.forEach(function(item){
        var num=parseInt(item/10);
        grades.push(num);
    })
        return grades;
    }

    function getLevel(n){
        var levelString='F';
        for(var i=0;i<gradesTable.length;i++){
            if(n==gradesTable[i].grade){
                levelString=gradesTable[i].gradesLevel;
            }
        }
        return levelString;

    }

    function getLevels(numbers){
        numbers.forEach(function(item){
            var level=getLevel(item);
            levels.push(level);
        })
        return levels;
    }

    function getText(levels){
        text='outputs:\n';
        levels.forEach(function(item){
            text+=item
                +'\n';
        })
        return text;
    }

    function getGradesLevel(inputs){
        grades=[];
        levels=[];
        var numbers=changeGradesToNum(inputs);
        var level=getLevels(numbers);
        var output=getText(level);
        console.log(output);
        return output;

    }

