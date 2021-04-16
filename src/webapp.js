import getGmailAliasList from './alias';

const doGet = () => {
    const template = HtmlService.createTemplateFromFile('index');
    template.aliases = getGmailAliasList();
    const html = template.evaluate().setTitle('MailMan');
    // doGet is very similar to sidebar with the exception of how you output the html
    // SpreadsheetApp.getUi().showSidebar(html);
    return html;
};

export default doGet;
