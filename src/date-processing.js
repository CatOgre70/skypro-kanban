import {format} from "date-fns";
import {ru} from "date-fns/locale";

export function dateToString(dateString) {
    const date = new Date(Date.parse(dateString));
    return format(date, "dd MMMM yyyy hh:mm", {locale: ru});
}

export function dateToStringOnlyDate(dateString) {
    const date = new Date(Date.parse(dateString));
    return format(date, "dd MMMM yyyy", {locale: ru});
}
