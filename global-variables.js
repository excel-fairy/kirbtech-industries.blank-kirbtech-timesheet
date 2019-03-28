var WEEKLY_TIME_SHEET = {
    name: 'Weekly time sheet',
    sheet: SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Weekly time sheet'),
    exportRange: {
        r1: 1,
        r2: 23,
        c1: ColumnNames.letterToColumn('A'),
        c2: ColumnNames.letterToColumn('K')
    },
    exportCheckboxCell: 'M1'
};

var DATA_VALID_SHEET = {
    name: 'data valid',
    sheet: SpreadsheetApp.getActiveSpreadsheet().getSheetByName('data valid'),
    email: {
        recipientEmailAddressCell: 'B2',
        subjectCell: 'B3',
        messageCell: 'B4'
    }
};
