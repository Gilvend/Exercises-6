// Part 2. JavaScript ES6

// Untuk nomor 1 sampai 4. Potongan kode program berikut masih menggunakan ES5.
// Analisa potongan kode program berikut dan ubahlah menjadi ES6. Gunakan materi2
// yang sudah dipelajari.

// 1

function calculateAge(birthYear) {
    return 2019 - birthYear;
  }
  
  function yearUntilRetirement(object) {
    var age = calculateAge(object.year);
    var retirement = 60 - age;
  
    if (retirement > 0) {
      console.log(object.firstName + " retires in " + retirement + " years");
    } else {
      console.log(object.firstName + " is already retired.");
    }
  }
  
  yearUntilRetirement({ year: 1987, firstName: "John" });
  
  //Answer:
  const calculateAge = (birthYear) => {return 2019 - birthYear};

  const yearUntilRetirement = (object) => {
  let age = calculateAge(object.year);
  let retirement = 60 - age;

  if (retirement > 0) {
    console.log(object.firstName + " retires in " + retirement + " years");
  } else {
    console.log(object.firstName + " is already retired.");
  }
}

yearUntilRetirement(
  {
        year: 1987, 
        firstName: "John" 
  }
);
  
  //---------------------------------------------------------------------------
  
  // 2
  
  // const addNumber = (a, b, c, d, e, f, g) => {
  //     var numbers = [a, b, c, d, e, f, g];
  //     var sum = 0;
  //     for(var i=0;i<numbers.length;i++){
  //             sum += numbers[i];
  //     }
  //     return sum;
  // }
  
  // console.log(addNumber(1,2,3,4,5,6,7));
  // NOTE: please use the map function
  
  // Answer:

  const addNumber = (a, b, c, d, e, f, g) => {
    let numbers = [a, b, c, d, e, f, g];
    let sum = 0;
    for(let i=0; i<numbers.length; i++)
    {
        sum += numbers[i];
    }
    return sum;
}

console.log(addNumber(1,2,3,4,5,6,7));
  
  //---------------------------------------------------------------------------

  
  // 3
  
  // var phi = 3.14;
  // var power = 2;
  // var radius = 0;
  
  // var calculateArea = function (obj) {
  //   return phi * Math.pow(obj.radius, obj.power);
  // };
  
  // radius = 21;
  // var area21 = calculateArea({radius: radius, power: 2 });
  
  // radius = 7;
  // var area7 = calculateArea({radius: radius, power: 2 });
  
  // console.log('area with 21 radius: ' + area21 + ', and area with 7 radius: ' + area7);
  
  // Answer:

  const phi = 3.14;
  const power = 2;
  let radius = 0;
  
  const calculateArea = obj => phi * obj.radius ** obj.power;
  
  radius = 21;
  const area21 = calculateArea({radius, power: 2 });
  
  radius = 7;
  const area7 = calculateArea({radius, power: 2 });
  
  console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);
  
  //---------------------------------------------------------------------------
  
  // 4
  
  // const makeAjaxRequest = (url, method) => {
  //   if (!method) {
  //     method = "GET";
  //   }
  //   console.log(url, method);
  // };
  
  // makeAjaxRequest("www.google.com");
  
  //Answer:

  const makeAjaxRequest = (url, method="NOT ACCEPTED") => {
    if (!method) {
      method = "GET";
    }
    console.log(url, method);
  };

  makeAjaxRequest("www.google.com");
  
  //---------------------------------------------------------------------------
  
  // 5
  
  // Buat sebuah function warnaKesukaan dengan parameter warna,
  // berikan "putih" sebagai default parameter untuk warna dan
  // dari fungsi tersebut kembalikan string sebagai contoh "Warna kesukaan saya adalah putih"
  
  //Answer:
  const warnaKesukaan = (warna = 'putih') =>
{
    return `Warna kesukaan saya adalah ${warna}`;
}

console.log(warnaKesukaan());
  
  //---------------------------------------------------------------------------
  
  // 6
  
  // Buatlah dua buah variabel array dengan nama namaBuah1 dengan isi apel dan mangga, dan namaBuah2 dengan isi sirsak dan semangka
  // dan gabungkan isi kedua variabel array tersebut ke dalam variabel array dengan nama semuaNamaBuah.
  // tampilkan di console isi dari semuaNamaBuah
  // output semuaNamaBuah harus sama dengan ["apel", "mangga", "sirsak", "semangka"]
  
  //Answer:

  let namaBuah1 = ['apel', 'mangga'];
  let namaBuah2 = ['sirsak', 'semangka'];
  
  let semuaNamaBuah = [...namaBuah1, ...namaBuah2];
  console.log(semuaNamaBuah);

  