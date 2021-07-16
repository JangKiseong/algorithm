/**
 * Problems
 * 929. Unique Email Addresses
 * https://leetcode.com/problems/unique-email-addresses/
 * @param {string[]} emails
 * @return {number}
 * Runtime: 92 ms (faster than 72.23 %)
 * Memory Usage: 42.6 MB (less than 97.14 %)
 */

const numUniqueEmails = emails => {
    const emailFilter = new RegExp(/\+.*$|\./, 'g');
    const emailBasket = [];
    emails.forEach(email => {
        let [frontEmail, backEmail] = email.split('@');
        emailBasket.push(`${frontEmail.replace(emailFilter, "")}@${backEmail}`)
    })
    return [...new Set(emailBasket)].length;
}