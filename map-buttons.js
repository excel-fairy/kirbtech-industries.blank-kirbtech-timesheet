function onOpen() {
    WEEKLY_TIME_SHEET.sheet.getRange(WEEKLY_TIME_SHEET.exportCheckboxCell).setValue(false);
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('Run scripts')
        .addItem('Export weekly time sheet', 'exportWeeklyTimeSheet')
        .addItem('Authorize script export the sheet from smartphone', 'createInstallableTriggers')
        .addToUi();
}

function createInstallableTriggers(){
    deleteAllTriggers();
    ScriptApp.newTrigger('installableOnEdit')
        .forSpreadsheet(SpreadsheetApp.getActive())
        .onEdit()
        .create();
}

function installableOnEdit(e){
    var range = e.range;
    if(range.getSheet().getName() === WEEKLY_TIME_SHEET.sheet.getRange(WEEKLY_TIME_SHEET.exportCheckboxCell).getSheet().getName()
        && range.getA1Notation() === WEEKLY_TIME_SHEET.sheet.getRange(WEEKLY_TIME_SHEET.exportCheckboxCell).getA1Notation()
        && range.getValue() === true){
        range.setValue(false);
        exportWeeklyTimeSheet();
    }
}

function deleteAllTriggers() {
    var allTriggers = ScriptApp.getProjectTriggers();
    for (var i = 0; i < allTriggers.length; i++) {
        ScriptApp.deleteTrigger(allTriggers[i]);
    }
}
