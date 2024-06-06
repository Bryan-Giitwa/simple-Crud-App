import { getStudents, addStudent, getStudent, updateStudent, deleteStudent } from "../Controller/studentController.js";

const routes = (app) => {

    app.route('/students')
        .get(getStudents)

    app.route('/student')
        .post(addStudent)

    app.route('/student/:id')
        .get(getStudent)

    app.route('/edit/:id')
        .put(updateStudent)

    app.route('/delete/:id')
        .delete(deleteStudent)
}

export default routes;