import Competitor from "../templates/Competitor";

const render = async()=>{
    const beginner = document.getElementById('beginner');
    const intermediate = document.getElementById('intermediate');

    beginner.innerHTML = await Competitor('beginner');
    intermediate.innerHTML = await Competitor('intermediate');
};

export default render;