describe('student grades',function(){
    var inputs=[90,80,70,60];
    var text='outputs:\nA\nB\nC\nD\n';


it('print correct grades level',function(){

    var output=getGradesLevel(inputs);
    expect(output).toEqual(text);

})
})