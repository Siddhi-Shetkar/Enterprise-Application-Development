function fetchData() { 
    return new Promise(function(resolve) { 
        setTimeout(function() { 
 
            resolve("Data loaded!"); 
        }, 2000); 
    }); 
} 
 
async function displayData() { 
    console.log("Loading..."); 
    let result = await fetchData(); 
    console.log(result); 
} 
 
displayData();