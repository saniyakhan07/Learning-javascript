const coding = ["js", "cpp", "java", "python", "ruby"]

const values = coding.forEach((item)=>{
    // console.log(item);
     return item
})
//console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter(  (num)=> num>4)

// const newNums = myNums.filter(  (num)=> {
//     return num>4
// })
// console.log(newNums);


const newNums = []
myNums.forEach( (num)=> {
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004  },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1993, edition: 2005  },
    { title: 'Book Three', genre: 'History', publish: 1991, edition: 2009  },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1973, edition: 2014  },
    { title: 'Book Five', genre: 'Science', publish: 2005, edition: 2024  },
    { title: 'Book Six', genre: 'Fiction', publish: 1994, edition: 2013  },
    { title: 'Book Seven', genre: 'History', publish: 2007, edition: 2008  },
    { title: 'Book Eight', genre: 'Science', publish: 1989, edition: 20017  },
    { title: 'Book Nine', genre: 'Adventure', publish: 1985, edition: 2023  },
    { title: 'Book Ten', genre: 'Fiction', publish: 1983, edition: 2025  },
    
];
let userBooks = books.filter( (bk)=> bk.genre === 'History')
userBooks = books.filter( (bk) => { 
    return bk.publish >= 2000 && bk.genre === 'History'
})
console.log(userBooks); 