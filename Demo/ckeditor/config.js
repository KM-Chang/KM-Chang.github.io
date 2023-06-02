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
    //�r��
    config.font_names = 'MS Mincho;�s�ө���;�ө���;�з���;�L�n������;Arial;Arial Unicode MS;Times New Roman;Courier New;Tahoma;Verdana';
    //�O�_�ϥΧ��㪺html�s��Ҧ� �p�ϥΡA�䷽�X�N�]�t�G<html><body></body></html>������
    config.fullPage = false;
    //�O�_�����q�������Ŧr�� �Y������ �h�r���N�H""���
    config.ignoreEmptyParagraph = true;
    //Ctrl z �٭즸��
    config.undoStackSize = 10;
    //���UTab��ɡA��и����榡�A�w�]�Ȭ��s������
    config.tabSpaces = 4;
    //�O�_�NHTML�s�X��XDefault Value:false
    config.htmlEncodeOutput = true;
    //�R����r�ɬO�_�R���������榡
    config.RemoveFormatTags = 'b,big,code,del,dfn,em,font,i,ins,kbd,q,samp,small,span,strike,strong,sub,sup,tt,u,var,pre';
    //�R����r�ɬO�_�R���������˦�
    config.removeFormatAttributes = 'class,style,lang,width,height,align,hspace,valign';
    //�h���U��<body>���Ҫ��A�C
    config.removePlugins = 'elementspath';
    //�O�_�i������ܤؤo
    config.resize_enabled = false;
    // �����Ϥ����s�W�ǭ���������, �챵����
    config.removeDialogTabs = 'image:advanced;image:Link;Link:advanced;';

    config.enterMode = CKEDITOR.ENTER_BR;       //��enter�ܦ�<br>
    config.shiftEnterMode = CKEDITOR.ENTER_P;   //��shift+Enter�ܦ�<P>
};