import readlineSync from 'readline-sync';

const user_name = () => {
    let request_name = readlineSync.question('May I have your name? ');
    let request = console.log ('Hello, ' + request_name + '!');
    return request;
}
export default user_name;
1