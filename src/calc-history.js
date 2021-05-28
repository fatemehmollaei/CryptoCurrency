
  export const Daily =() =>{

    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    const  history = {
                 start:yesterday.getTime(),
                 end:today.getTime()
              }

        
     return history
}




 export const Monthly =() =>{

    const monthNow = new Date();
    const monthAgo = new Date();
    monthAgo.setMonth(monthNow.getMonth() - 1);
    const  history = {
                 start:monthAgo.getTime() ,
                 end:monthNow.getTime()
              }

        
     return history
}

export const Yearly =() =>{

    const YearNow = new Date();
    const YearAgo = new Date();
    YearAgo.setFullYear(YearNow.getFullYear() - 1);
    const  history = {
                 start:YearAgo.getTime() ,
                 end:YearNow.getTime()
              }

        
     return history
}
