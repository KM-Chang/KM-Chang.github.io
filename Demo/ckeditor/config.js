/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function (config) {
    config.toolbar = 'New';
    config.toolbar_New = [
     { name: 'yokusuru', items: ['Maximize', 'Preview', 'ShowBlocks'] },
     { name: 'clipboard', items: ['Undo', 'Redo', '-', 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord'] },
     { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat'] },
     { name: 'Justify', items: ['TextColor', 'BGColor', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'Justifyblock'] },
     { name: 'styles', items: ['Font', 'FontSize'] }, 
     { name: 'links', items: ['Link', 'Unlink', '-', 'Table', 'Image', 'HorizontalRule', 'SpecialChar'] }];

    config.height = "270px";
    //字型
    config.font_names = 'MS Mincho;新細明體;細明體;標楷體;微軟正黑體;Arial;Arial Unicode MS;Times New Roman;Courier New;Tahoma;Verdana';
    //是否使用完整的html編輯模式 如使用，其源碼將包含：<html><body></body></html>等標籤
    config.fullPage = false;
    //是否忽略段落中的空字元 若不忽略 則字元將以""表示
    config.ignoreEmptyParagraph = true;
    //Ctrl z 還原次數
    config.undoStackSize = 10;
    //按下Tab鍵時，游標跳的格式，預設值為零不跳格
    config.tabSpaces = 4;
    //是否將HTML編碼輸出Default Value:false
    config.htmlEncodeOutput = true;
    //刪除文字時是否刪除相應的格式
    config.RemoveFormatTags = 'b,big,code,del,dfn,em,font,i,ins,kbd,q,samp,small,span,strike,strong,sub,sup,tt,u,var,pre';
    //刪除文字時是否刪除相應的樣式
    config.removeFormatAttributes = 'class,style,lang,width,height,align,hspace,valign';
    //去除下方<body>標籤狀態列
    config.removePlugins = 'elementspath';
    //是否可拖拽改變尺寸
    config.resize_enabled = false;
    // 移除圖片按鈕上傳頁面的高級, 鏈接頁籤
    config.removeDialogTabs = 'image:advanced;image:Link;Link:advanced;';

    config.enterMode = CKEDITOR.ENTER_BR;       //按enter變成<br>
    config.shiftEnterMode = CKEDITOR.ENTER_P;   //按shift+Enter變成<P>
};