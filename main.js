function exportWeeklyTimeSheet(){
    var exportOptions = {
        exportFolderId: DATA_VALID_SHEET.sheet.getRange(DATA_VALID_SHEET.exportFolderIdCell).getValue(),
        sheetId: WEEKLY_TIME_SHEET.sheet.getSheetId(),
        exportFileName: "Weekly time sheet",
        portrait: false,
        range: WEEKLY_TIME_SHEET.exportRange
    };
    var pdfFile = ExportSpreadsheet.export(exportOptions);
    sendEmail(WEEKLY_TIME_SHEET.sheet, pdfFile);
}

function sendEmail(sheet, attachment) {
    var recipient = DATA_VALID_SHEET.sheet.getRange(DATA_VALID_SHEET.email.recipientEmailAddressCell).getValue();
    var subject = DATA_VALID_SHEET.sheet.getRange(DATA_VALID_SHEET.email.subjectCell).getValue();
    var message = DATA_VALID_SHEET.sheet.getRange(DATA_VALID_SHEET.email.messageCell).getValue();
    var emailOptions = {
        attachments: [attachment.getAs(MimeType.PDF)],
        name: 'Automatic blank Kirbtech timesheet mail sender'
    };
    try {
        MailApp.sendEmail(recipient, subject, message, emailOptions);
    } catch(e) {
        Logger.log("Error with email. Recipient " + recipient + " maybe is not a valid email address", e);
    }
}
