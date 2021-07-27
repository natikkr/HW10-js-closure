function sum(a) {
    return function (b){
      return a+b;
    };
  };
  const sum1 = sum(1);
  console.log(sum1(2)); 
  console.log(sum(1)(2));
  
  
  for (var i = 0; i < 10; i++) {
      setTimeout(function() {
          console.log(i);// функция выполняется и выводит значение i, которое, после окончания работы цикла, остаётся доступным и равняется 10
      }, 0);
  }
  // нужно передать необходимый  параметр во внутреннюю функцию
  
  for (var i = 0; i < 10; i++) {
    setTimeout(function(i_inner) {    
      return function () {
        console.log(i_inner); 
      } 
    }(i+1), 0);
  }