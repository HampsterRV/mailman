/* const getGmailAliasList = () => {
    const aliases = GmailApp.getAliases();
    aliases.push(Session.getActiveUser().getEmail());
    return aliases;
}; */

// spread syntax???
const getGmailAliasList = () => {
    return [Session.getActiveUser().getEmail(), ...GmailApp.getAliases()];
};

export default getGmailAliasList;
