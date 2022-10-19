const accSearch = document.getElementById('username').value;
let avail = 'Account is NOT available to register';
if (accSearch.length > 2) {
    const _account = await client.database.call('get_accounts', [
        [accSearch],
    ]);
    console.log(`_account:`, _account, accSearch.length);

    if (_account.length == 0) {
        avail = 'Account is available to register';
    }
}
document.getElementById('accInfo').innerHTML = avail;
