// timestampUtils.js
export function getFormattedTimestamp() {
    const currentTimestamp = new Date();
    const formattedTimestamp = currentTimestamp.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
    });
    return formattedTimestamp;
}
