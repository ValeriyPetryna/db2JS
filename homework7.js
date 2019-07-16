const students = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
}
const library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true,
        libraryID: 1254
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true,
        libraryID: 4254
    },
    {
        author: 'Suzanne Collins',
        title:  'The Hunger Games', 
        readingStatus: false,
        libraryID: 3254
}]

const subset = 'dog'

function task1 (obj) {
    console.log('Task 1: List of Object keys = ' + Object.keys(obj))
}

task1(students)

function task2 (obj) {
    let student = Object.assign({}, obj)
    delete student.rollno
    console.log('Task 2: List of Object keys without deleted property = ' + Object.keys(student))
}

task2(students)

function task3 (obj) {
    console.log('Task 3: Object length = ' + Object.keys(obj).length)
}

task3(students)

function task4 (arr) {
    console.log('Task 4:')
    library.forEach(book => {
        console.log('       Name book: ' + book.title + ', author name: ' + book.author + ', readingStatus: ' + book.readingStatus)
    })
}

task4(library)

function task7 (sub) {
    let subb = [];
    for (let i = 0; i < sub.length; i++){
        for (let j = i + 1; j < sub.length + 1; j++) {
            subb.push(sub.slice(i,j))
        }
    }
    console.log('Task 7: substring = ' + subb)
}

task7(subset)

function task10 (arr) {
    arr.sort((a, b) => (b.libraryID > a.libraryID) ? 1 : -1)
    console.log('Task 10: Sort = ' + JSON.stringify(arr,null,3))
}

task10(library)

function task14 (obj) {
    console.log('Task 14: List of Object values = ' + Object.values(obj))
}

task14(students)

function task16 (obj) {
    let reversedObj ={}
    for (let key in obj) {
        newValue = obj[key]
        reversedObj[newValue] = key
    }
    console.log('Task 16: List of key = value - value = key = '+ JSON.stringify(reversedObj,null,3))
}

task16(students)

function task17 (obj, property){   
    console.log('Task 17: Has own property: '+ obj.hasOwnProperty(property))
    return obj.hasOwnProperty(property)
}

task17(students, '')
