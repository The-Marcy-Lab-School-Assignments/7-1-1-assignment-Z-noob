// TODO: 
// - Pull the id from the url params list to render the correct bot
// - If there are no robots, navigate the user back to the home page "/"

import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RobotContext from '../context/RobotContext';
import NotFoundPage from '../pages/NotFoundPage';

const BotSpecs = () => {
  const { robots } = useContext(RobotContext);
  const { id } = useParams();  // Extract id from URL params
  const navigate = useNavigate();  // Initialize useNavigate hook

  // TIP: remember that the `id` from the URL is a string
  // here we are hard-coding the id. How can you get it from the URL?

  // Convert id to a number for comparison, if necessary
  const botId = id //parseInt(id, 10);
  const bot = robots.find((robot) => robot.id === botId);

  // If no bot is found, navigate to the home page
  if (!bot) {
    // console.log(botId, bot, robots)
    navigate('/');
    return null;  // Render nothing while navigating
  }

  const botClassIcon = (bot_class) => {
    switch (bot_class) {
      case "Assault":
        return <i className="icon military" />;
      case "Defender":
        return <i className="icon shield" />;
      case "Support":
        return <i className="icon ambulance" />;
      default:
        return <div />;
    }
  }

  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt={bot.name}
              className="ui medium circular image bordered"
              src={bot.avatar_url}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {bot.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {bot.catchphrase}
            </p>
            <strong>
              Class: {bot.bot_class} {botClassIcon(bot.bot_class)}
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{bot.health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{bot.damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{bot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BotSpecs;
