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

let summit = makeObj("Summit", '11-11-11', 'waitress', 'Eating the food')
let sales = makeObj('LogoNation', '01-01-12', '03-20-12', 'Outside Sales Rep', 'Getting a sale')
let pharm = makeObj('BlacksburgPharmacy', '05-15-15', '05-04-18', 'Technician', 'Coworkers')
let QMC = makeObj("QMC", "12-15-14", "12-30-15", "urine collector", "Talking to patients")

//console.log(summit)

//Creating an array of the objects
let _arry = [];
_arry.push(summit, sales, pharm, QMC);

//console.log(_arry);

//Define making Articles
const writeArticles = (_arry) => {
console.log(_arry);
    //Create a loop to iterate over the array
    if (_arry.length > 0) {
        for (var property in _arry) {
            console.log(property)
            let job = _arry[property];

            //Create an article for each Job
            const newArticle = document.createElement('article')
            newArticle.id = job.business;
            document.body.appendChild(newArticle);
            const article = document.getElementById(newArticle.id)
            

            //Create a header for each Job with name
            const newHead = document.createElement('h1')
            newHead.innerHTML = job.business;
            article.appendChild(newHead)

            //create an unordered list for each job
            const newList = document.createElement('ul')
            newList.id = ("Lists" + job.business)
            article.appendChild(newList)
            const list = document.getElementById(newList.id)

            //Create list items for each job

            //Create list item for start date
            const startDate = document.createElement('li')
            startDate.innerHTML = "Start Date: " + job.employmentStart;
            newList.appendChild(startDate)

            const endDate = document.createElement('li')
            endDate.innerHTML = "End Date: " + job.employmentEnd;
            newList.appendChild(endDate)

            const title = document.createElement('li')
            title.innerHTML = "Job Title: " + job.jobTitle;
            newList.appendChild(title)

            const favorite = document.createElement('li')
            favorite.innerHTML = "Favorite Part: " + job.favoritePart;
            newList.appendChild(favorite)






        }
    }
}
console.log("Hi")

writeArticles(_arry);