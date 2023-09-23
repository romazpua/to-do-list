export const actionsTypes = {
    DELETE_TASK: 'delete_task',

}

// For Card component. Timestamp to normal date format
export const timestampToDate = (timestamp) => {
    const date = new Date(timestamp);
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = String(date.getUTCFullYear()).slice(2);
    return `${hours}:${minutes} ${day}.${month}.${year}`;
}

// For EditCard component. Returns the current size and coordinates of the card
export const callEditCardWithLocation = (element, cardTimestamp) => {
    const rect = element.getBoundingClientRect()
    return {
        show: true,
        sizes: {
            width: rect.width + 'px',
            height: rect.height + 'px',
            left: rect.left + window.scrollX + rect.width / 2 + 'px',
            top: rect.top + window.scrollY + rect.height / 2 + 'px'
        },
        cardTimestamp: cardTimestamp
    }
}