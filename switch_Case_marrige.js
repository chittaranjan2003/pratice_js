function checkMarriage(age,gender){
  if ((gender=="male" || gender=="MALE") && age>17 && age<=24 ) {
    console.log(`Your Eligible for Marriage ..${gender,age}`);
  }
  else if((gender=="male" || gender=="MALE") && age>=25)
  {
    console.log(`Your Eligible for Marriage and Happy  Marriage Life .. gender is:${gender} age is: ${age}`);
    
  }
  else if((gender=="female" || gender=="FEMALE") && age>16 && age<=27)
  {

    console.log(`Your Eligible for Marriage .. gender is: ${gender} age is :${age}`);
  }
  else if((gender=="female" || gender=="FEMALE") && age>=28)
    {
  
      console.log(`Your Eligible for Marriage and Happy  Marriage Life .. gender is:${gender} age is:${age}`);
    }
    else if((gender=="other" || gender=="OTHER") && age>=35)
      {
    
        console.log(`Your Eligible for Marriage and Happy  Marriage Life .. gender is :${gender} age is :${age}`);
      }
      else{
        console.log(`You cannot marriage Sorry! : gender is :${gender} age is :${age}`);
        
      }
}
checkMarriage(42,"other");
