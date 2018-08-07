import React, {
    Component
} from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Tours from './Tours';
import Chat from './Chat';

export default class Nav extends Component {
    render() {
        return (
            <div className="main--nav container">
                <ul>
                    <li><Link to='/chat'>Chat</Link></li>
                    <li><Link to='/tours'>Tours</Link></li>
                </ul>
                <Switch>
                    <Route path='/chat' component={Chat} />
                    <Route path='/tours' component={Tours} />
                </Switch>
            </div>
        )
    }
}