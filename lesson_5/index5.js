let name = prompt('Привет, как тебя зовут?');

   while (name == '' || name == null) {
      name = prompt('Привет, как тебя зовут?');
   } 
      alert(name + ', я загадал число от 1 до 100. Попробуй отгадать его за наименьшее кол-во попыток. После каждой попытки я скажу "Мало", "Много" или "угадал". ');
 
let number = 42;      
let guess = prompt('Какое число я загадал?');
let numberOfGuesses = 0;
 
while(guess != number) {
   if(guess > number){
      guess = prompt('Много. Попробуй еще раз.');
      numberOfGuesses = numberOfGuesses + 1;
   }

   if(guess < number){
      guess = prompt('Мало. Попробуй еще раз.');
      numberOfGuesses = numberOfGuesses + 1;
   }
}

alert('Ты угадал! Это число ' + number + '. Тебе понадобилось' + numberOfGuesses + ' попыток.');
   
