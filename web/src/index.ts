import { User } from '../models/User';
import Eventing from '../models/Eventing';

const user = new User({ id: 1, age: 5000 });
const user2 = new User({ name: 'jacky', age: 66 });
user.save();
user2.save();
