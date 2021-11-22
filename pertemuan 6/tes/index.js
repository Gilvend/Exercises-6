///Nama: Lumba,Gillvend Floistan
///Exercises 3


function reverseString(word) 
{
    return data.word('').reverse().join('');
}
console.log(reverseword('Lumba, Gillvend Floistan'));
   
let jhon = 
{
    nama :"Jhon", 
    mass: 89 , 
    height: 1.85,
    BMI: function()
    {  
        return (this.mass)/(this.height * this.height); 
    }
};

let bob = 
{
    nama :"Bob",
    mass: 90 ,
    height: 1.80,
    BMI: function()
    {  
        return (this.mass)/(this.height * this.height); 
    }
   
};

compare (jhon.BMI(), bob.BMI())

function compare(jhon, bob)
{
    console.log('Jhon BMI is:',jhon)
    console.log('Bob BMI is:',bob)

    if(bob < jhon)
    { 
        console.log("Jhon has a Mass and Height BMI")
    }else
    {
        console.log("Bob has a Mass and Height BMI")
    }
    if(bob == jhon)
    { 
        console.log("John and bob have a mass and height same")
    }
}