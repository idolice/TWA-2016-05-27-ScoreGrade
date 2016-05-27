describe('student grades',function(){

var output;


it('print A grades are 95',function(){
    //given
    var inputs=[95];
    var text='outputs:\nA\n';
    //when
     output=getGradesLevel(inputs);
    //then
    expect(output).toEqual(text);

})

it('print A,B,C,D  grades are 90,80,70,60',function(){
    //given
    var inputs1=[90,80,70,60];
    var text1='outputs:\nA\nB\nC\nD\n';
    //when
     output=getGradesLevel(inputs1);
    //then
    expect(output).toEqual(text1);

})

it('print D,C,B,A  grades are 60,70,80,90',function(){
    //given
    var inputs2=[60,70,80,90];
    var text2='outputs:\nD\nC\nB\nA\n';
    //when
     output=getGradesLevel(inputs2);
    //then
    expect(output).toEqual(text2);

})


})