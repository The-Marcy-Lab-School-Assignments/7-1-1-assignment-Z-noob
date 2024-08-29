import { useContext } from 'react'
import RobotContext from '../context/RobotContext'
import BotCard from './BotCard'

const BotsList = ({ botTypeFilter }) => {
    const { robots } = useContext(RobotContext);

    // a robot passes the filter if:
    // - there is no filter OR
    // - the class matches the filter
    // Filter robots based on the botTypeFilter

    const filteredRobots = robots?.filter(robot => 
        !botTypeFilter || robot.bot_class === botTypeFilter
    );

    return (
        <div className="ui centered cards">
            {filteredRobots?.map(robot => (
                <BotCard key={robot.id} bot={robot} />
            ))}
        </div>
    );
}

export default BotsList;
