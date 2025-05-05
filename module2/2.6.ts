{
    //
    // constrains
    const addCourseToFunction= <T extends {
        id: number;
        name: string; }>
    (student:T)=>{
        const course = "next level web Dev"
        return{
            ...student,
            course
        }
    }

const student1=addCourseToFunction({id:345,name:"munna", tech:"pc"})
const student2=addCourseToFunction<{
    id: number;
    name: string;
    
}>({id:8,name:"jahid"})



    //
}