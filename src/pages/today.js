import displayTasks from "../functions/displayTasks"
import currentDate from "../functions/dates"
import format from "date-fns/format";
import { findDateArray } from "../functions/arrays";

function todayPage() {
    const menu = document.querySelector(".display-menu")
    const today = new Date();
    const formattedDate = format(today, 'yyyy-MM-dd');
    const todayArray = findDateArray(formattedDate)
    displayTasks(menu, "todayTasks", todayArray)
}

export default todayPage