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

let summit = makeObj("The Summit", '11-11-11', 'waitress', 'Eating the food')
let sales = makeObj('LogoNation', '01-01-12', '03-20-12', 'Outside Sales Rep', 'Getting a sale')
let pharm = makeObj('Blacksburg Pharmacy', '05-15-15', '05-04-18', 'Technician', 'Coworkers')
let QMC = makeObj("OMC Addiction Clinic", "12-15-14", "12-30-15", "urine collector", "Talking to patients")

//console.log(summit)

//Creating an array of the objects
let _arry = [];
_arry.push(summit, sales, pharm, QMC);

//console.log(_arry);

//Define making Articles
const writeArticles = (_arry) => { 

//Create a loop to iterate over the array
if (_arry.length > 0) {
    for (var property in _arry) {
        let job = _arry[property]; 

        const newArticle = document.createElement('article')
        newArticle.id = job.name;
        document.body.appendChild(newArticle);

    }


}
  //  list = list + _arry[property]
//}
//console.log('making a list', list)

//g = document.createElement('article')
//g.setAttribute('id', )