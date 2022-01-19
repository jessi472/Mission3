
// Jessica Kinghorn Mission 3 js file
// Grade Calculator uses inputs from GradeCalculator.cshtml and get/set from the GradeCalculatorModel.cs
$('#btnSend').click(function () {
    
    var iFinal_precent =
        (
            ($('#assignments').val() *.55 )+
            ($('#group_project').val() *.05 ) +
            ($('#quizzes').val() *.10 )+
            ($('#exams').val() *.20 )+
            ($('#intex').val() *.10 )
        ).toFixed(2)
    //console.log(parseInt($('#assignments').val()))
    var sGrade = ''

    if (iFinal_precent >= 94) {
        sGrade = 'A'
    }
    else if (iFinal_precent >= 90) {
        sGrade = 'A-'
    }
    else if (iFinal_precent >= 87) {
        sGrade = 'B+'
    }
    else if (iFinal_precent >= 84) {
        sGrade = 'B'
    }
    else if (iFinal_precent >= 80) {
        sGrade = 'B-'
    }
    else if (iFinal_precent >= 77) {
        sGrade = 'C+'
    }
    else if (iFinal_precent >= 74) {
        sGrade = 'C'
    }
    else if (iFinal_precent >= 70) {
        sGrade = 'C-'
    }
    else if (iFinal_precent >= 67) {
        sGrade = 'D+'
    }
    else if (iFinal_precent >= 64) {
        sGrade = 'D'
    }
    else if (iFinal_precent >= 60) {
        sGrade = 'D-'
    }
    else {
        sGrade = 'E'
    }
    alert('Final Percentage: ' + iFinal_precent + '%, Letter Grade: ' + sGrade)
})
