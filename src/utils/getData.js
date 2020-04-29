const getData = async()=>{
    try{
        
        const response = await fetch('/getData');
        const data = await response.json();
        return data;
    }
    catch(err){
        console.error('Error en fetch ' + err);
    }
};

export default getData; 