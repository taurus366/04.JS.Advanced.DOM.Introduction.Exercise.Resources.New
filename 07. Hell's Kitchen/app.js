function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let input = document.querySelector('#inputs>textarea');
    let outputName = document.querySelector('#bestRestaurant>p');
    let outputWorkers = document.querySelector('#workers>p');


   function onClick () {
     let arr = JSON.parse(input.value);

     let restaurants = {};

     arr
         .forEach((line)=>{
             const token = line.split(' - ');
             let name = token[0];
             let workersArr = token[1].split(', ');

             let workers = [];





             workersArr
                 .forEach((worker)=>{
                     let workerToken = worker.split(' ');
                     let salary = Number(workerToken[1]);
                     workers.push({
                         name: workerToken[0], salary
                     })
                 })


           if(restaurants[name]) {
               workers = workers.concat(restaurants[name].workers);

              // restaurants[name].workers = workers;
           }

           workers
                 .sort((work1,work2)=> work2.salary - work1.salary)



          let  bestSalary = workers[0].salary;
          let averageSalary = workers.reduce((sum,worker) => sum+worker.salary,0) / workers.length;



                 restaurants[name] = {
                     workers,
                     averageSalary,
                     bestSalary
                 }




         })




    let bestRestaurantSalary = 0;
    let best = undefined;
       for (const name in restaurants) {
           if (restaurants[name].averageSalary >= bestRestaurantSalary){
               bestRestaurantSalary = restaurants[name].averageSalary;
               best = {
                   name,
                   workers : restaurants[name].workers,
                   bestSalary: restaurants[name].bestSalary,
                   averageSalary: restaurants[name].averageSalary
               }
           }
       }
       outputName.textContent = `Name: ${best.name} Average Salary: ${best.averageSalary.toFixed(2)} Best Salary: ${best.bestSalary.toFixed(2)}`;


      let stringWorkers = [];
      best.workers
          .forEach(worker => stringWorkers.push(`Name: ${worker.name} With Salary: ${worker.salary}`));

      outputWorkers.textContent = stringWorkers.join(" ");


   }
}