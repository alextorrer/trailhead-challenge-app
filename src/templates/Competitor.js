import getCompetitors from '../utils/getCompetitors';
import getWidth from '../utils/getWidth';

const Competitor = async(level)=>{
    const competitors = await getCompetitors(level);
    var view = "";
    competitors.forEach(competitor => {
        view += `
        <div class="content-competitors--board">
            <div class="competitor-container">
                <p>${competitor.Name}</p>
                <div class="score-container">
                    <div class="score-bar" style="width: 60%;" aria-describedby="tooltip">
                    <!--<div class="score-bar" style="width: ${getWidth(competitor.points)};">-->
                        <p>${competitor.Account.Name}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    return view;
};

export default Competitor;