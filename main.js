function makeObj(businessName, startDate, endDate, job, liked) {
    let obj = Object.create({}, {
        business: {
            enumerable: true,
            writable: true,
            value: businessName
        },
        employmentStart: {
            enumerable: true,
            writable: true,
            value: startDate
        },
        employmentEnd: {
            enumerable: true,
            writable: true,
            value: endDate
        },
        jobTitle: {
            enumerable: true,
            writable: true,
            value: job
        },
        favoritePart: {
            enumerable: true,
            writable: true,
            value: liked
        }
    }) 
    return obj
}  

const summit = makeObj("The Summit", '11-11-11', 'waitress', 'Eating the food')
const sales = makeObj('LogoNation', '01-01-12', '03-20-12', 'Outside Sales Rep', 'Getting a sale')
const pharm = makeObj('Blacksburg Pharmacy', '05-15-15', '05-04-18', 'Technician', 'Coworkers')
const QMC = makeObj("OMC Addiction Clinic", "12-15-14", "12-30-15", "urine collector", "Talking to patients")

//let objectToArray = function(makeObj) {
  //        var _arr = [];
    //      for (var key in makeObj) {
      //        _arr.push([key, makeObj[key]]);
        //  }
          //return _arr;
       // }
//console.log(objectToArray(summit));


//var a = makeObj("Mcdonalds", "Febuary 2012")

//const JobMaker = (business, employmentStart, employmentEnd, jobTitle) {
  //  return "I worked at " + business + ' from ' + employmentStart + ' until ' + employmentEnd +' as a ' + jobTitle + ' .'
//}