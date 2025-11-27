
import React from 'react';
import { toast } from 'react-toastify';

const getItemFromLS = () => {
    const stringyItemFromLS = localStorage.getItem("bookMarks");

    if (stringyItemFromLS) {
        const parseItemFromLS = JSON.parse(stringyItemFromLS);
        return parseItemFromLS
    }
    else {
        return []
    }
}


const addItemToLS = (id) => {
    const notified = (msg) => toast(msg);
    const LsItems = getItemFromLS();
    if (LsItems.includes(id)) {
        notified("Sorry! You have already booked an appointment with this doctor.")
    }
    else {
        const items = [...LsItems, id];
        const stringyItemToAdd = JSON.stringify(items);
        localStorage.setItem("bookMarks", stringyItemToAdd)
        notified("Appointment Added")
    }
}


const removeItemLS = (id) => {
    const LsItems = getItemFromLS();
    const afterRemove = LsItems.map(i => i !== id);
    const stringifyAfterRemove = JSON.stringify(afterRemove);
    localStorage.setItem("bookMarks", stringifyAfterRemove)
}

export { getItemFromLS, addItemToLS, removeItemLS };