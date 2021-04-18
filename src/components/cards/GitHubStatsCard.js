import StarBorderIcon from '@material-ui/icons/StarBorder';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import './GitHubStatsCard.css';

const GitHubStatsCard = ({ dataGitHubRepo = {}, ...rest }) => {
  return (
    <div className="gitHubStatsCard">
      <div className="gitHubStatsCard__wrapper">
        <div className="gitHubStatsCard__header">
          <h3>
            Github Stats For: <span>{dataGitHubRepo.fullName}</span>
          </h3>
        </div>
        <div className="gitHubStatsCard__description">
          <DescriptionOutlinedIcon />
          <h4>
            Description:
            <span> {dataGitHubRepo.description}</span>
          </h4>
        </div>
        <div className="gitHubStatsCard__stars">
          <StarBorderIcon />
          <h4>
            Amount of stars: <span>{dataGitHubRepo.amountOfStars}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default GitHubStatsCard;
