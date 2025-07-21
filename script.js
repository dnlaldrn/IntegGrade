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
calculateGrade = ()=>{
        const quizrawScore = document.querySelector('.quizrawScore').value;
        const quizHPscore = document.querySelector('.quizHPscore').value;
        const examRawScore = document.querySelector('.examRawScore').value;
        const examHPscore = document.querySelector('.examHPscore').value;
        const quizPercentage = ((quizrawScore / quizHPscore)* 50+ 50)*.40;
        const examPercentage = ((examRawScore / examHPscore)* 50+ 50)*.60;
         
        const totalGrade = Math.round (quizPercentage + examPercentage);
         
        if (totalGrade >= 98){
            return '1.00';
        }else if(totalGrade >= 94){
            return "1.25";
        }else if(totalGrade >= 90){
            return '1.50';
        }else if(totalGrade >= 88){
            return" 1.75";
        }else if(totalGrade >= 85){
            return '2.00';
        }else if(totalGrade >= 83){
            return "2.25";
        }else if(totalGrade >= 80){
            return "2.50";
        }else if(totalGrade >= 78){
            return "2.75";
        }else if(totalGrade >= 75){
            return '3.00';
        }else if(totalGrade >= 70){
            return "INC";
        }else{
            return "5.00";
        }
        
        
    }
