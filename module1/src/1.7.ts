{
    // spread operator
    // rest operator
    // destructure operator

// array spread operator
const bros1:string[] = ['munna','solaimon','shahadat']
const bros2:string[] = ['rohim','korim','jabbar']
bros1.push(...bros2)

// object spread operator
const mentors1 = {
java : 'munna',
prisma: 'rohim',
redux: 'korim'
}
const mentors2 = {
java : 'rahsed',
prisma: 'torik',
redux: 'korim'
}
const mentorList= {
    ...mentors1,
    ...mentors2
}
// learn rest operator

const greetFriends =(...friends:string[])=>{
  friends.forEach((friend:string)=>console.log(`hi ${friend}`))
}
greetFriends('rohim',"korim",'jabbar',"akahs")
}