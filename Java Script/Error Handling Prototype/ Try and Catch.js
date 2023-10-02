try {
    let x=undefined;
    console.log(x[0]);
} catch(arg){ //isme arg error btata hai jo try me aaya hai
    console.log("error handling in catch",arg);
} finally{
    console.log("Finally always gets executed");
}