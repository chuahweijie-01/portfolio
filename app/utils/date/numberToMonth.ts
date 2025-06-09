export default function numberToMonth(monthNumber: number): string {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    if (monthNumber < 1 || monthNumber > 12) {
        return "Invalid month";
    }

    return months[monthNumber - 1];
}
