displayGrade = () =>{
            const convertedGrade = calculateGrade();
            document.querySelector('.display').innerHTML = `Your converted grade is ${convertedGrade}`
             if(
            document.querySelector('.display').innerHTML == `` ||
            document.querySelector('.quizrawScore').value =='' ||
            document.querySelector('.quizHPscore').value == '' ||
            document.querySelector('.examRawScore').value=='' ||
            document.querySelector('.examHPscore').value==''){
             document.querySelector('.display').innerHTML = `Not valid input`;   
            }
        }
        deleteDisplay = () =>{
           
            if(
            document.querySelector('.display').innerHTML == `` ||
            document.querySelector('.quizrawScore').value =='' ||
            document.querySelector('.quizHPscore').value == '' ||
            document.querySelector('.examRawScore').value=='' ||
            document.querySelector('.examHPscore').value==''){
             document.querySelector('.display').innerHTML = `Not valid input`;   
            }
            document.querySelector('.display').innerHTML = ``;
            document.querySelector('.quizrawScore').value ='';
            document.querySelector('.quizHPscore').value = '';
            document.querySelector('.examRawScore').value='';
            document.querySelector('.examHPscore').value='';
            document.querySelector('.display').innerHTML = '';
        }
