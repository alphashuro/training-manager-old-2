import { Courses, Classes } from './collections/index.js';
import App from 'meteor/training-manager:lib'

App.Collections.Courses = Courses;
App.Collections.Classes = Classes;

export { Courses, Classes };
