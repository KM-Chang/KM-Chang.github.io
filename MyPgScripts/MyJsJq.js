function artMsg(titletxt, Conttext) {//自訂對話框提醒
    var msgAlertHtml = "<div class='modal fade' id='opalrt' tabindex='-1' role='dialog'><div class='modal-dialog modal-sm' role='document'><div class='modal-content'>" +
                        "<div class='modal-body alert-info' style='margin:0;padding-bottom:1px;'>" +
                        "<div class='panel panel-primary'><div class='panel-heading'></div><div class='panel-body'><h3 style='margin-top:0px;'>" +
                        "<i class='glyphicon glyphicon-info-sign MyrotateY' style='color:sandybrown;font-size:1.2em;'></i>&nbsp;&nbsp;<strong>" + titletxt + "</strong></h3><h5>" + Conttext + "</h5><div class='row text-center'><br /><button type='button' class='btn btn-primary' data-dismiss='modal'>知道了</button>" +
                        "</div></div></div></div></div></div></div>";
    if ($("#opalrt").length == 0) { $("body").append(msgAlertHtml);} else {
        $("#opalrt").remove(); $("body").append(msgAlertHtml);
    }
    $("#opalrt").modal('show');
}
function ErrMsg(titletxt, Conttext) {//自訂對話框錯誤禁止
    var msgAlertHtml = "<div class='modal fade' id='opalrt' tabindex='-1' role='dialog' data-backdrop='static'><div class='modal-dialog modal-sm' role='document'><div class='modal-content'>" +
                        "<div class='modal-body alert-danger' style='margin:0;padding-bottom:1px;'>" +
                        "<div class='panel panel-danger'><div class='panel-heading' style='background-color:#f84949;'></div><div class='panel-body'><h3 style='margin-top:0px;'>" +
                        "<i class='glyphicon glyphicon-ban-circle MyrotateX' style='color:#f84949;font-size:1.2em;'></i>&nbsp;" + titletxt + "</h3><h5>" + Conttext + "</h5><div class='row text-center'><br /><button  type='button' class='btn btn-danger' data-dismiss='modal'>確定</button>" +
                        "</div></div></div></div></div></div></div>";
    if ($("#opalrt").length == 0) { $("body").append(msgAlertHtml); } else {
        $("#opalrt").remove(); $("body").append(msgAlertHtml);
    }
    $("#opalrt").modal('show');
}
function OkMsg(titletxt, Conttext) {//自訂對話框正確通過
    var msgAlertHtml = "<div class='modal fade' id='opalrt' tabindex='-1' role='dialog' keyboard='false'><div class='modal-dialog modal-sm' role='document'><div class='modal-content'>" +
                        "<div class='modal-body alert-success' style='margin:0;padding-bottom:1px;'>" +
                        "<div class='panel panel-success'><div class='panel-heading' style='background-color:#5bb75b;'></div><div class='panel-body'><h3 style='margin-top:0px;'>" +
                        "<i class='glyphicon glyphicon glyphicon-ok MyrotateY' style='color:#5bb75b;font-size:1.2em;'></i>&nbsp;" + titletxt + "</h3><h5>" + Conttext + "</h5><div class='row text-center'><br /><button  type='button' class='btn btn-danger' data-dismiss='modal'>確定</button>" +
                        "</div></div></div></div></div></div></div>";
    if ($("#opalrt").length == 0) { $("body").append(msgAlertHtml); } else {
        $("#opalrt").remove(); $("body").append(msgAlertHtml);
    }
    $("#opalrt").modal('show');
}
//使用  cfrmMsg("標題", "內容斷行吃HTML tag").on(function (e) { alert("返回结果：" + e) });
//若要傳後端建議複製這段html到前端自己做一個按鈕
function cfrmMsg( titletxt, Conttext,Okbtns, Nobtns) {
    if (Okbtns ==null || Okbtns == "") { Okbtns = "確定"; }
    if (Nobtns == null || Nobtns == "") { Nobtns = "取消"; }
    var msgAlertHtml = "<div class='modal fade' id='opalrt' tabindex='-1' role='dialog' data-backdrop='static'><div class='modal-dialog' role='document'><div class='modal-content'>" +
                        "<div class='modal-body alert-info' style='margin:0;padding-bottom:1px;'>" +
                        "<div class='panel panel-primary'><div class='panel-heading'></div><div class='panel-body'><h3 style='margin-top:0px;'>" +
                        "<i class='glyphicon glyphicon-question-sign MyrotateX' style='color:#1f80dd;font-size:1.2em;'></i>&nbsp;" + titletxt + "</h3><h5>" + Conttext + "</h5><div class='row text-center'><br />" +
                        "<button id='MsbOkbtn' type='button' class='btn btn-primary' data-dismiss='modal'>" + Okbtns + "</button>&nbsp;&nbsp;&nbsp;" + "<button id='MsbNobtn' type='button' class='btn btn-default' data-dismiss='modal'>" + Nobtns + "</button>" +
                        "</div></div></div></div></div></div></div>";
    if ($("#opalrt").length == 0) { $("body").append(msgAlertHtml); } else {
        $("#opalrt").remove(); $("body").append(msgAlertHtml);
    }
    $("#opalrt").modal('show');

    return {
        on: function (callback) {
            if (callback && callback instanceof Function) {
                $("#MsbOkbtn").on("click", function () {callback(true);})
                $("#MsbNobtn").on("click", function () {callback(false); })
            }
        }
    };
}
function KTsimalret(BGColstyle, Conttext) {//簡易對話框 後自動消失 BGColstyle選顏色
    var msgAlertHtml = "<div class='alert alert-" + BGColstyle + "' id='KTsialrt' role='alert' OnClick=" + '"' + "$('#KTsialrt').fadeOut(); " + '"' +
                        " style='position: fixed; left:43%; top: 150px; cursor: pointer; z-index: 9999;opacity:.97;'  >" +
                        "<span style='font-size:1.15em;'>" + Conttext + "</span></div>";
    if ($("#KTsialrt").length == 0) { $("body").append(msgAlertHtml); } else {
        $("#KTsialrt").remove(); $("body").append(msgAlertHtml);
    }
    $("#KTsialrt").show();
    //setTimeout(function () { $('#KTsialrt').fadeOut(); }, 1300);
    $('#KTsialrt').delay(2000).fadeOut();
}
//簡易互動視窗 JQShowmodal('sm','標題','.內容','按鈕名逗點隔開','primary,info,default','Y').on(function (e) {alert('點了...' + e);});
//若要傳後端處理建議複製這段html到前端自己做一個modal
function JQShowmodal(MdSize, Mdtitle, MdConttext, MdFooter, Mdbtncolor, MdstatYN) {
    if (MdSize != "") MdSize = "modal-" + MdSize;       // modalSize 大lg小sm 
    if (MdstatYN) MdstatYN = " data-backdrop='static'";       // MdstatYN 是否不能任意鍵關閉
    if (MdFooter != "")
    {
        var Mdbtn = MdFooter.split(",");        //按鍵名稱
        var Mdcolor = Mdbtncolor.split(",");    //按鍵顏色
        MdFooter = "";
        for (var r = 0; r < Mdbtn.length; r++)
        {
            MdFooter += "<button id='MyMdbtn" + r + "' type='button' class='btn btn-" + Mdcolor[r] + "'>" + Mdbtn[r] + "</button>";
        }
        MdFooter = "<div class='modal-footer'>" + MdFooter + "</div>";
    }
    var msgAlertHtml = "<div id='MyJQmodal' class='modal fade' tabindex='-1' role='dialog' aria-labelledby='myModalLabel'" + MdstatYN + ">" +
                        "<div class='modal-dialog " + MdSize + "' role='document'>" +
                        "<div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='rue'>&times;</span></button>" +
                        "<h4 class='modal-title'>" + Mdtitle + "</h4></div><div class='modal-body'>" + MdConttext + "</div>" + MdFooter +
                        "</div></div></div>";
    if ($("#MyJQmodal").length == 0) { $("body").append(msgAlertHtml); } else {
        $("#MyJQmodal").remove(); $("body").append(msgAlertHtml);
    }
    $("#MyJQmodal").modal('show');
    
    return {
        on: function (callback) {
            if (callback && callback instanceof Function) {
                $(".btn").each(function (r) {
                    $("#MyMdbtn" + r).on("click", function () { callback(r); }) //按鍵方法由0開始
                });
            }
        }
    };
}
//自製等待畫面 BarYN:是否顯示進度條
function JQWaitBar(WaitTitle, BarConten, BarYN) {
    BarConten = "<span id='BarCtKT'>" + BarConten + "</span>";
    if (BarYN) {
        BarConten += "<br /><div class='progress'><div id='MyBarw' class='progress-bar progress-bar-striped active' role='progressbar' aria-valuemin='0' aria-valuemax='100' style='width:2%'></div></div>";
    } else {
        BarConten += "<div class='BallAim'></div>";
    }
    var WaitBarHtml = "<div class='modal bs-example-modal-lg' id='WbaeMaskKT' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' data-backdrop='static' keyboard='false'>" +
                    "<div class='modal-dialog modal-sm' role='document'>" +
                    "<div class='modal-content'><div class='modal-header'>" +
                    "<h4 class='modal-title'>" + WaitTitle + "</h4></div><div class='modal-body'>" + BarConten + "</div></div></div></div>";
    if ($("#WbaeMaskKT").length == 0) { $("body").append(WaitBarHtml); } else {
        $("#WbaeMaskKT").remove(); $("body").append(WaitBarHtml);
    }
    $("#WbaeMaskKT").modal('show');
}
//自製FileUp檔案上傳物件多選 ajax連結後端ashx處理 參考資料表PMFDLlist
//FListdiv物件名稱,DateJson列表資料,JQFclass檔案分類, JQSClass子分類, JQnoPK外部編號
function JQFileUpLKT(FListdiv, DateJson, JQFclass, JQSClass, JQnoPK) {
    var FileUpHtml = "<div class='btn-group'><label class='btn btn-primary' for='" + FListdiv + "add'><i class='glyphicon glyphicon-plus'></i>&nbsp;新增檔案</label>" +
                 "<a href='javascript:;' OnClick=" + '"' + "JQShowmodal('lg', '說明', '<h5>1.&nbsp;原始檔名即上傳後名稱，請妥善取名。<br /><br />2.&nbsp;新增檔案，可按住<kbd>ctrl</kbd>多選檔案。<br /><br />3.&nbsp;檔案請勿超過100MB<br /><br />4.&nbsp;檔名.附檔名，僅能有一個.符號，不可有多餘的.符號</h5>', '', '', false);" + '"' +
                 " class='btn btn-default'><i class='glyphicon glyphicon-info-sign'></i></a>" +
                 "</div><input id='" + FListdiv + "add' type='fil" + "e' multiple='multiple' /><input id='" + FListdiv + "Up' type='fi" +"le' title='' /><ul class='list-group'>";
    if (DateJson != "")
    {
        var $sFileDate = JSON.parse(DateJson);   //解析JSON
        for (var r = 0; r < $sFileDate.length; r++) {
            FileUpHtml += "<li id='muFli" + $sFileDate[r].sFileCalss + $sFileDate[r].sFileNo + "' class='list-group-item disabled'>" +
            "<label class='badge' onclick=" + '"' + "javascript:MuFileDel(this,'" + $sFileDate[r].sFileCalss + "','" + $sFileDate[r].sFileNo + "','" + $sFileDate[r].sFileName + "');" + '"' + "><i class='glyphicon glyphicon-remove'></i></label>" +
            "<label class='badge' for='" + FListdiv + "Up' onclick="+ '"' +"javascript:$('#" + FListdiv + "Up').attr('title','" + $sFileDate[r].sFileNo + "');return true;" + '"' + "><i class='glyphicon glyphicon-pencil'></i></label>" +
            "<a href=" + '"' + "javascript:JQgetFDL('" + $sFileDate[r].sFileCalss + $sFileDate[r].sFileNo + "','" + $sFileDate[r].sFileName + "');" + '"' + ">" + $sFileDate[r].sFileName + "</a>" + "</li>"
        };
        FileUpHtml += "</ul>";
    }
    if ($("#" + FListdiv).length != 0) {
        $("#" + FListdiv).empty();
        $("#" + FListdiv).append(FileUpHtml);

        document.getElementById(FListdiv + "add").onchange = function () {
            if ($(this).val() != "") {
                var myfileData = new FormData();
                //以.區分對應PMFDLlist表 [0]檔案分類[1]檔案編號[2]子分類[3]外部編號[4]檔名[5]副檔名
                for (let rr = 0; rr < this.files.length; rr++) {
                    if (this.files[rr].size > (1024 * 1025 * 100) || this.files[rr].name.split(".").length>2) {
                        ErrMsg('無法上傳', this.files[rr].name + "檔案超過<strong>100MB</strong><br />或有多餘的.符號");
                        $("#" + FListdiv + "add").val("");
                        return;
                    }
                    
                    myfileData.append(JQFclass +".." +JQSClass +"." + JQnoPK +"." +this.files[rr].name, this.files[rr]);
                }

                JQWaitBar('檔案上傳中', '請稍後...', true);       //初始化進度條 #WbaeMaskKT 進度框 #MyBarw 進度條 #BarCtKT 說明內文
                $.ajax({
                    url: $(".navbar-brand").attr("href") + "../IncAPI/UpFileSave.ashx",
                    type: "POST",
                    data: myfileData,
                    contentType: false,
                    processData: false,
                    async: true,
                    dataType: "json",   // 回傳的資料格式
                    success: function (RetJson) {
                        $("#WbaeMaskKT").modal("hide");
                        if (RetJson.successYN == 1) {
                            //全部上傳成功
                        } else {
                            ErrMsg("請重傳以下檔案", RetJson.Msg);
                        }
                        //新增項目
                        var addHtml = "";
                        var RetFNO="";
                        for (let r = 0; r < RetJson.Jsondt.length; r++) {
                            addHtml += "<li id='muFli" + RetJson.Jsondt[r].RFCalss + RetJson.Jsondt[r].RFClassNo + "' class='list-group-item disabled'>" +
                                "<label class='badge' onclick=" + '"' + "javascript:MuFileDel(this,'" + RetJson.Jsondt[r].RFCalss + "','" + RetJson.Jsondt[r].RFClassNo + "','" + RetJson.Jsondt[r].RFname + "');" + '"' + "><i class='glyphicon glyphicon-remove'></i></label>" +
                                "<label class='badge' for='" + FListdiv + "Up' onclick=" + '"' + "$('#" + FListdiv + "Up').attr('title','" + RetJson.Jsondt[r].RFClassNo + "');return true;" + '"' + "><i class='glyphicon glyphicon-pencil'></i></label>" +
                                "<a href=" + '"' + "javascript:JQgetFDL('" +RetJson.Jsondt[r].RFCalss + RetJson.Jsondt[r].RFClassNo + "','" + RetJson.Jsondt[r].RFname + "');" + '"' + ">" + RetJson.Jsondt[r].RFname + "</a>" + "</li>";
                            RetFNO += "," + RetJson.Jsondt[r].RFCalss +RetJson.Jsondt[r].RFClassNo;    //回傳的檔案編號
                            }
                        $("#" + FListdiv + ">ul").append(addHtml);
                        $("#ContentPlaceHolder1_Hiddid" + FListdiv).val($("#ContentPlaceHolder1_Hiddid" + FListdiv).val() + RetFNO)
                        $("#" + FListdiv + "add").val("");      //清空上傳器
                    },
                    error: function (RetJson) {
                        $("#WbaeMaskKT").modal('hide');
                        ErrMsg("上傳發生錯誤", "系統忙碌，請稍後再試");
                        $("#" + FListdiv + "add").val("");
                    },
                    xhr: function () {
                        var xhr = new window.XMLHttpRequest(); // 建立xhr(XMLHttpRequest)物件
                        xhr.upload.addEventListener("progress", function (progressEvent) { // 監聽ProgressEvent
                            if (progressEvent.lengthComputable) {
                                var percentComplete = progressEvent.loaded / progressEvent.total;
                                var percentVal = Math.round(percentComplete * 100) + "%";
                                $("#MyBarw").width(percentVal);
                                //$("#BarCtKT").text("上傳中");
                            }
                        }, false);
                        return xhr; // 注意必須將xhr(XMLHttpRequest)物件回傳
                    }
                });
            }
        };
        document.getElementById(FListdiv + "Up").onchange = function () {
            if ($(this).val() != "") {
                var myfileData = new FormData();
                //以.區分對應PMFDLlist表 [0]檔案分類[1]檔案編號[2]子分類[3]外部編號[4]檔名[5]副檔名
                    var getobj = $(this).attr("title").split(",");
                    if (this.files[0].size > (1024 * 1025 * 100) || this.files[0].name.split(".").length > 2) {
                        ErrMsg('無法上傳', this.files[0].name + "檔案超過<strong>100MB</strong><br />或有多餘的.符號");
                        $("#" + FListdiv + "Up").val("");
                        return;
                    }
                    myfileData.append(JQFclass + "."+ getobj[0] +"." + JQSClass + "." + JQnoPK + "." + this.files[0].name, this.files[0]);


                JQWaitBar('檔案更新中', '請稍後...', true);       //初始化進度條 #WbaeMaskKT 進度框 #MyBarw 進度條 #BarCtKT 說明內文
                $.ajax({
                    url: $(".navbar-brand").attr("href") + "../IncAPI/UpFileSave.ashx",
                    type: "POST",
                    data: myfileData,
                    contentType: false,
                    processData: false,
                    async: true,
                    dataType: "json",   // 回傳的資料格式
                    success: function (RetJson) {
                        $("#WbaeMaskKT").modal("hide");
                        if (RetJson.successYN == 1) {
                            $("#muFli" + RetJson.Jsondt[0].RFCalss + RetJson.Jsondt[0].RFClassNo + ">a").html(RetJson.Jsondt[0].RFname)
                                .attr("href", "javascript:JQgetFDL('" + RetJson.Jsondt[0].RFCalss + RetJson.Jsondt[0].RFClassNo + "','" + RetJson.Jsondt[0].RFname + "');");        //成功上傳更新檔名
                        } else {
                            ErrMsg("請重傳以下檔案", RetJson.Msg);
                        }
                        $("#" + FListdiv + "Up").val("");
                    },
                    error: function (RetJson) {
                        $("#WbaeMaskKT").modal('hide');
                        ErrMsg("上傳發生錯誤", "系統忙碌，請稍後再試");
                        $("#" + FListdiv + "Up").val("");
                    },
                    xhr: function () {
                        var xhr = new window.XMLHttpRequest(); // 建立xhr(XMLHttpRequest)物件
                        xhr.upload.addEventListener("progress", function (progressEvent) { // 監聽ProgressEvent
                            if (progressEvent.lengthComputable) {
                                var percentComplete = progressEvent.loaded / progressEvent.total;
                                var percentVal = Math.round(percentComplete * 100) + "%";
                                $("#MyBarw").width(percentVal);
                                //$("#BarCtKT").text("上傳中");
                            }
                        }, false);
                        return xhr; // 注意必須將xhr(XMLHttpRequest)物件回傳
                    }
                });
                //document.getElementById("tttext").value = this.files[0].name + this.files[0].size + this.files[0].name.split('.').pop();
            }
        };

    }
}
//自製FileUp檔案上傳物件多選 (刪除檔案)
function MuFileDel(thobj,valFCs,valFID,valFty) {
    valFty=valFty.split(".").pop().toLowerCase();
    $.ajax({
        type: "POST",
        async: false,
        dataType: "json",
        url: $(".navbar-brand").attr("href") + "../IncAPI/DelFileHD.ashx",
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify({ sFileCalss: MyUrlEecode(valFCs), sFileNo: MyUrlEecode(valFID), sFileType: MyUrlEecode(valFty) }),
        success: function (Retdate) {
            if (Retdate.successYN == 1) {
                $(thobj).parent('li').remove();     //動態刪除前端顯示物件
                //OkMsg("刪除完成", Retdate.Msg);
            } else  if (Retdate.successYN == 2){
                artMsg("查無檔案", Retdate.Msg);
            } else {
                ErrMsg("請稍後再試", Retdate.Msg);
            }
            },
            error: function (response) {
                ErrMsg("請稍後再試", response.Msg);
            }
        });
}
//自製FileUp檔案上傳物件多選 的JSON列表檔案產生
function JQFDJosnForm(SQLstr)
{
    var MysQLF = SQLstr.split(",");
    var DataJosnForm = [];
    for (var r = 1; r < MysQLF.length; r++) {
        var MysQLS =MysQLF[r].split("|");
        DataJosnForm.push({ sFileCalss: MysQLS[0], sFileNo: MysQLS[1], sFileName: MysQLS[2] });
    }
    return DataJosnForm;
}
//自製考場選擇物件查詢清單
//FListdiv物件名稱,adesValhidd地址寫入(如果要),TPID考場代碼, TPName考場名稱,TPades考場地址(如果要)
function JQTPIDSelBox(FListdiv, adesValLab)
{
    var TPboXHtml = "<div class='input-group'><span class='input-group-addon'>搜尋考場</span><input id='txtSk" + FListdiv + "' type='text' class='form-control' placeholder='請輸入考場編號或名稱'>" +
    "<span class='input-group-btn'><a id='btnSk" + FListdiv + "' class='btn btn-primary'><i class='glyphicon glyphicon-search'></i><span class='visible-lg-inline'>&nbsp;搜尋</span></a></span></div><br />" +
    "<br /><table id='GVTae" + FListdiv + "' class='table table-MyGv'><tr><th>選擇</th><th>考場代號</th><th>考場名稱</th></tr>" +
    "<tr><td colspan='5'><div class='alert alert-warning MyEmptyDtBox'>請輸入搜尋條件後查詢，謝謝!</div></td></tr></table>";
    JQShowmodal("lg", "選擇考場", TPboXHtml, "", "", false);
    document.getElementById("btnSk" + FListdiv).onclick = function () {
        var $txtthis = htmlEncode($("#txtSk" + FListdiv).val());
        if ($txtthis != "") {
            $.ajax({
                type: "POST",
                async: false,
                dataType: "json",
                url: $(".navbar-brand").attr("href") + "../IncAPI/SelShrList.ashx",
                contentType: 'application/json;charset=UTF-8',
                data: JSON.stringify({ sRuntype: "STestPlace", sPKeyVal: $txtthis}),
                success: function (Retdate) {
                if (Retdate.successYN == 1) {
                    $txtthis = "<tr><th>選擇</th><th>考場代號</th><th>考場名稱</th></tr>";
                    for (let r = 0; r < Retdate.Jsondt.length; r++) {
                        $txtthis += "<tr><td><button type='button' onclick=" + '"' + "javascript:JQTPIDSelBoxOK('" + FListdiv + "','" + adesValLab + "','" + Retdate.Jsondt[r].TestPlaceID + "','" + Retdate.Jsondt[r].TestPlaceName + "','" + Retdate.Jsondt[r].Address + "');" + '"' + " class='btn btn-primary' ><i class='glyphicon glyphicon-transfer'></i><span class='visible-lg-inline'>&nbsp選擇</span></button></td>" +
                        "<td>" + Retdate.Jsondt[r].TestPlaceID + "</td><td>" + Retdate.Jsondt[r].TestPlaceName + "</td></tr>";
                    }
                    if (Retdate.Jsondt.length == 0) $txtthis += "<tr><td colspan='5'><div class='alert alert-warning MyEmptyDtBox'>查無資料，請重新設定搜尋條件，謝謝!</div></td></tr>";
                    $("#GVTae" + FListdiv).empty();
                    $("#GVTae" + FListdiv).append($txtthis);
                } else if(Retdate.successYN == 2){
                    KTsimalret("danger", "筆數過多", "筆數過多，請精確條件重新搜尋");
                }else{
                    KTsimalret("danger", "請稍後重試", "查詢失敗，請重新整理再試一次");
                }
            },
            error: function (response) {
                KTsimalret("danger", "請稍後重試", "查詢失敗，請重新整理再試一次");
            }
        });
    } else {
        KTsimalret("danger", "請先輸入搜尋條件");
    }
    }
}
//自製考場選擇物件 選定後寫入
//FListdiv物件名稱,adesValhidd地址寫入(如果要),TPID考場代碼, TPName考場名稱,TPades考場地址
function JQTPIDSelBoxOK(FListdiv, adesValLab, TPID, TPName, TPades) {
    if (TPName != "") $("#" + FListdiv + "txt").val(TPName);
    if (TPID != "") $("#ContentPlaceHolder1_" + FListdiv + "Hidd").val(TPID);
    if (adesValLab != "") $("#" + adesValLab).text(TPades);
    $("#MyJQmodal").modal('hide');
}
//HTML文字編輯框初始函數
function JQCkeditKT(FListdiv) {
    CKEDITOR.replace(FListdiv, { filebrowserImageBrowseUrl: $(".navbar-brand").attr("href") + "../RPsImgTxtFu/Other",
        extraPlugins: 'uploadimage', imageUploadUrl: $(".navbar-brand").attr("href") + '../IncAPI/UpCkSave.ashx'
    });
}
//下載檔案
function JQgetFDL(valFID, valFname) {
    $("#ifrFDL").attr("src", $(".navbar-brand").attr("href") + "../IncAPI/GetFileDL.ashx?sFID=" + MyUrlEecode(valFID) + "&sFname=" + MyUrlEecode(valFname));
}
//匯出檔案
function JQgetOutFDL(valFID, valFname) {
    $("#ifrFDL").attr("src", $(".navbar-brand").attr("href") + "../IncAPI/GetFileDLOut.ashx?sFID=" + MyUrlEecode(valFID) + "&sFname=" + MyUrlEecode(valFname));
}
function JQisNumber(val) { var reg = /^[0-9]*$/; return reg.test(val); }   //是否數字
function JQisPhNumber(val) { var reg = /^[0-9-]*$/; return reg.test(val); }   //是否為電話
function JQisEmail(val) { var reg = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,6}|[0-9]{1,3})(\]?)$/; return reg.test(val); }   //是否為Mail
function JQpadLeft(str, length) { if (str.length >= length) return str; else return padLeft("0" + str, length); }  //左側補0
function JQcheckID(id) {// 驗證身份證字號是否符合格式
    tab = "ABCDEFGHJKLMNPQRSTUVXYWZIO"
    A1 = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3);
    A2 = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5);
    Mx = new Array(9, 8, 7, 6, 5, 4, 3, 2, 1, 1);

    if (id.length != 10) return false;
    i = tab.indexOf(id.charAt(0));
    if (i == -1) return false;
    sum = A1[i] + A2[i] * 9;

    for (i = 1; i < 10; i++) {
        v = parseInt(id.charAt(i));
        if (isNaN(v)) return false;
        sum = sum + v * Mx[i];
    }
    if (sum % 10 != 0) return false;
    return true;
}
function JQtipPwdBox(PwdBoxName)
{
    $("#" + PwdBoxName).hover(function () { $(this).attr("title", $(this).val()); }, function () { $(this).attr("title", ""); });
}
//切換div
function JQdivCh(FromDiv,Todiv)
{
    $("#" + FromDiv).toggle(); $("#" + Todiv).toggle();
}
/*JQhtml標籤加解密轉換*/
function htmlEncode(value) {
    return $('<div/>').text(value.replace("<script", "").replace("/script", "").replace("iframe","p")).html();
}
function htmlDecode(value) {
    return $('<div/>').html(value).text();
}
function MyUrlEecode(value) {
    return encodeURI(value.replace(/[/*/</$/#/+/(/)/>/'/"]/g, ""));
}
document.onkeydown = function (e) {
    if (e.keyCode == 13 && e.target.type != "textarea") { $(this).focus(); return false; }  //不可按enter KTsimalret("danger", "請使用滑鼠點擊按鈕!!");
    if (e.keyCode == 8 && !(e.target.type == "text" || e.target.type == "textarea" || e.target.type == "number" || e.target.type == "password" || e.target.type == "email")) { return false; }      //不可按backspace回上頁
}
//全域初始化
//$(function () {
//    $('[data-toggle="popover"]').popover(); //彈出框
//    $('[data-toggle="tooltip"]').tooltip();  //工作提示
//});

