import {
    backlog,
    done,
    hp,
    mp,
    lp,
    ip,
    np,
    upc,
    todo,
    cancelled,
    user
} from '../assets';

export const getPriorityIcon = (priority) => {
    switch (priority) {
        case 4:
            return upc;
        case 3:
            return hp;
        case 2:
            return mp;
        case 1:
            return lp;
        case 0:
            return np;
        default:
            return np;
    }
};

export const iconSelector = (key) => {
    switch (key) {
        case "Todo":
            return todo;
        case "In progress":
            return ip;
        case "Done":
            return done;
        case "Cancelled":
            return cancelled;
        case "Backlog":
            return backlog;
        case "No Priority":
            return np;
        case "Urgent":
            return upc;
        case "High":
            return hp;
        case "Medium":
            return mp;
        case "Low":
            return lp;
        default:
            return user;
    }
};